import Address from '../utils/address.js';
import Asteroid from './asteroid.js';
import Building from './building.js';
import Entity from './entity.js';
import Lot from './lot.js';
import Inventory from './inventory.js';

const MAX_POLICY_DURATION = 31536000; // in IRL seconds

const IDS = {
  USE_LOT: 1,
  RUN_PROCESS: 2,
  ADD_PRODUCTS: 3,
  REMOVE_PRODUCTS: 4,
  STATION_CREW: 5,
  RECRUIT_CREWMATE: 6,
  DOCK_SHIP: 7,
  BUY: 8,
  SELL: 9,
  LIMIT_BUY: 10,
  LIMIT_SELL: 11,
  EXTRACT_RESOURCES: 12,
  ASSEMBLE_SHIP: 13,
  USE_DEPOSIT: 14
};

const TYPES = {
  [IDS.USE_LOT]: {
    name: 'Use Lot',
    isApplicable: (entity) => entity.label === Entity.IDS.ASTEROID || entity.label === Entity.IDS.LOT,
    isExclusive: true
  },
  [IDS.RUN_PROCESS]: {
    name: 'Run Processes',
    isApplicable: (entity) => !!entity.Processors?.length
  },
  [IDS.ADD_PRODUCTS]: {
    name: 'Add Products',
    isApplicable: (entity) => !!(entity.Inventories || [])?.find((i) => i.status === Inventory.STATUSES.AVAILABLE)
  },
  [IDS.REMOVE_PRODUCTS]: {
    name: 'Remove Products',
    isApplicable: (entity) => !!(entity.Inventories || [])?.find((i) => i.status === Inventory.STATUSES.AVAILABLE)
  },
  [IDS.STATION_CREW]: {
    name: 'Station Crews',
    isApplicable: (entity) => !!entity.Station
  },
  [IDS.RECRUIT_CREWMATE]: {
    name: 'Recruit Crewmates',
    isApplicable: (entity) => entity.Building?.buildingType === Building.IDS.HABITAT
  },
  [IDS.DOCK_SHIP]: {
    name: 'Dock Ships',
    isApplicable: (entity) => !!entity.Dock
  },
  [IDS.BUY]: {
    name: 'Place Market Buys',
    isApplicable: (entity) => !!entity.Exchange
  },
  [IDS.SELL]: {
    name: 'Place Market Sells',
    isApplicable: (entity) => !!entity.Exchange
  },
  [IDS.LIMIT_BUY]: {
    name: 'Place Limit Buys',
    isApplicable: (entity) => !!entity.Exchange
  },
  [IDS.LIMIT_SELL]: {
    name: 'Place Limit Sells',
    isApplicable: (entity) => !!entity.Exchange
  },
  [IDS.EXTRACT_RESOURCES]: {
    name: 'Extract Resources',
    isApplicable: (entity) => !!entity.Extractors?.length
  },
  [IDS.ASSEMBLE_SHIP]: {
    name: 'Assemble Ships',
    isApplicable: (entity) => !!entity.DryDocks?.length
  },
  [IDS.USE_DEPOSIT]: {
    name: 'Use Deposit',
    isApplicable: (entity) => !!entity.Deposit
  }
};

const POLICY_IDS = {
  PRIVATE: 1,
  PUBLIC: 2,
  PREPAID: 3,
  CONTRACT: 4
};

const POLICY_TYPES = {
  [POLICY_IDS.PRIVATE]: {
    name: 'Private',
    description: `The permission is retained by the controlling crew.`,
    policyKey: null,
    agreementKey: null,
    additionSystem: null,
    removalSystem: null,
  },
  [POLICY_IDS.PUBLIC]: {
    name: 'Public',
    description: `The permission is granted to any visiting crew.`,
    policyKey: 'PublicPolicies',
    agreementKey: null,
    additionSystem: 'AssignPublicPolicy',
    removalSystem: 'RemovePublicPolicy'
  },
  [POLICY_IDS.PREPAID]: {
    name: 'Prepaid Lease',
    nameShort: 'Prepaid',
    description: `The permission may be leased for up to 12 months for a pre-paid sum.`,
    policyKey: 'PrepaidPolicies',
    agreementKey: 'PrepaidAgreements',
    additionSystem: 'AssignPrepaidPolicy',
    removalSystem: 'RemovePrepaidPolicy'
  },
  [POLICY_IDS.CONTRACT]: {
    name: 'Custom Contract',
    nameShort: 'Custom',
    description: `The permission is granted through terms specified in the Custom Contract.`,
    policyKey: 'ContractPolicies',
    agreementKey: 'ContractAgreements',
    additionSystem: 'AssignContractPolicy',
    removalSystem: 'RemoveContractPolicy'
  },
};

const getPermissionPolicy = (entity, rawPermId, crew, blockTime = null) => {
  const nowTime = blockTime || Math.floor(Date.now() / 1000);
  const permId = Number(rawPermId);

  // default perm policy to private
  const permPolicy = {
    policyType: POLICY_IDS.PRIVATE,
    policyDetails: {},
    agreements: [],
  };

  // if there is one, find and apply an active policy for the perm (and related agreements)
  Object.keys(POLICY_TYPES).forEach((key) => {
    const { policyKey, agreementKey } = POLICY_TYPES[key];
    if (policyKey) {
      const activePolicy = (entity[policyKey] || []).find((p) => p.permission === permId);
      if (activePolicy) {
        const { permission, ...policyDetails } = activePolicy;
        permPolicy.policyType = Number(key);
        permPolicy.policyDetails = policyDetails;
      }

      // agreement could be from previous policy, so need to attach agreements from any policy type (even if not active)
      if (agreementKey) {
        permPolicy.agreements.push(
          ...(entity[agreementKey] || [])
            .filter((a) => a.permission === permId)
            .filter((a) => !a.endTime || a.endTime > nowTime)
        );
      }
    }
  });

  // attach whitelist for the perm
  permPolicy.allowlist = (entity.WhitelistAgreements || []).filter((a) => a.permission === permId).map((a) => a.permitted);
  permPolicy.accountAllowlist = (entity.WhitelistAccountAgreements || []).filter((a) => a.permission === permId).map((a) => a.permitted);

  // attach crew agreement status (if crew provided)
  permPolicy.crewStatus = '';
  if (crew) {
    if (entity.Control?.controller?.id === crew.id) permPolicy.crewStatus = 'controller';
    else if ((crew._siblingCrewIds || []).includes(entity.Control?.controller?.id)) permPolicy.crewStatus = 'controller';

    // if not exclusive, policy is "granted" just by being public or on allowlist
    else if (!TYPES[permId].isExclusive && permPolicy.policyType === POLICY_IDS.PUBLIC) permPolicy.crewStatus = 'granted';
    else if (!TYPES[permId].isExclusive && permPolicy.allowlist.find((c) => c.id === crew.id)) permPolicy.crewStatus = 'granted';
    else if (!TYPES[permId].isExclusive && crew?.Crew?.delegatedTo && permPolicy.accountAllowlist.find((a) => Address.areEqual(a, crew?.Crew?.delegatedTo))) permPolicy.crewStatus = 'granted';

    // else, granted if have explicit agreement
    else if (permPolicy.agreements?.find((a) => a.permitted?.id === crew.id)) permPolicy.crewStatus = 'granted';
    
    // for exclusive perms, also worth noting when being excluded
    else if (TYPES[permId].isExclusive && permPolicy.agreements?.length > 0) permPolicy.crewStatus = 'under contract';
    else if (POLICY_TYPES[permPolicy.policyType]?.agreementKey) permPolicy.crewStatus = 'available';
    
    else permPolicy.crewStatus = 'restricted';
  }

  return permPolicy;
};

// TODO: put this in Crew?
const isPermitted = (crew, permission, hydratedTarget, blockTime = null) => {
  try {
    const policy = getPermissionPolicy(hydratedTarget, permission, crew, blockTime);
    return policy.crewStatus === 'controller' || policy.crewStatus === 'granted';
  } catch {}
  return false;
}

// get the applicable policies, agreements, and allowlists for this entity
const getPolicyDetails = (entity, crew = null, blockTime = null) => {
  return Object.keys(TYPES)
    .filter((id) => TYPES[id].isApplicable(entity))
    .reduce((acc, permId) => ({
      ...acc,
      [permId]: getPermissionPolicy(entity, permId, crew, blockTime)
    }), {});
};
Entity.getPolicyDetails = getPolicyDetails;

// Return Adalia Prime's unique prepaid policy rate
const getAdaliaPrimeLotRate = (policy, lotIndex) => {
  const centers = [
    { lot: 457078, modifier: 2 }, // Secondary colony (Ya'axche)
    { lot: 1096252, modifier: 5 }, // Mining colony (Saline)
    { lot: 1602262, modifier: 1 } // Primary colony (Arkos)
  ];

  let minDistance = Infinity;
  let modifier = 0;

  centers.forEach((center) => {
    const distance = Asteroid.getLotDistance(1, lotIndex, center.lot);

    if (distance < minDistance) {
      minDistance = distance;
      modifier = center.modifier;
    }
  });

  if (minDistance < 20) return Math.ceil(policy.rate / modifier);
  if (minDistance < 50) return Math.ceil(policy.rate / (2 * modifier));
  if (minDistance < 75) return Math.ceil(policy.rate / (4 * modifier));
  if (minDistance < 100) return Math.ceil(policy.rate / (10 * modifier));
  return Math.ceil(policy.rate / 100);
};

// Retrieves the prepaid policy rate for the entity in SWAY / IRL hour
const getPrepaidPolicyRate = (entity) => {
  const policy = entity.PrepaidPolicies ? entity.PrepaidPolicies[0] : null;
  if (!policy) return 0;

  const lotPos = Lot.toPosition(entity);
  if (entity.label === Entity.IDS.LOT && lotPos.asteroidId === 1) {
    return getAdaliaPrimeLotRate(policy, lotPos.lotIndex);
  }

  return policy.rate;
};
Entity.getPrepaidPolicyRate = getPrepaidPolicyRate;

const lotAuctionPrices = [
  1000000000000,
  848342898244,
  719685673001,
  610540229659,
  517947467923,
  439397056076,
  372759372031,
  316227766017,
  268269579528,
  227584592607,
  193069772888,
  163789370695,
  138949549437,
  117876863479,
  100000000000,
  84834289824,
  71968567300,
  61054022966,
  51794746792,
  43939705608,
  37275937203,
  31622776602,
  26826957953,
  22758459261,
  19306977289,
  16378937070,
  13894954944,
  11787686348,
  10000000000,
  8483428982,
  7196856730,
  6105402297,
  5179474679,
  4393970561,
  3727593720,
  3162277660,
  2682695795,
  2275845926,
  1930697729,
  1637893707,
  1389495494,
  1178768635,
  1000000000,
  848342898,
  719685673,
  610540230,
  517947468,
  439397056,
  372759372,
  316227766,
  268269580,
  227584593,
  193069773,
  163789371,
  138949549,
  117876863,
  100000000,
  84834290,
  71968567,
  61054023,
  51794747,
  43939706,
  37275937,
  31622777,
  26826958,
  22758459,
  19306977,
  16378937,
  13894955,
  11787686,
  10000000,
  8483429,
  7196857,
  6105402,
  5179475,
  4393971,
  3727594,
  3162278,
  2682696,
  2275846,
  1930698,
  1637894,
  1389495,
  1178769,
  1000000,
  848343,
  719686,
  610540,
  517947,
  439397,
  372759,
  316228,
  268270,
  227585,
  193070,
  163789,
  138950,
  117877,
  100000,
  84834,
  71969,
  61054,
  51795,
  43940,
  37276,
  31623,
  26827,
  22758,
  19307,
  16379,
  13895,
  11788,
  10000,
  8483,
  7197,
  6105,
  5179,
  4394,
  3728,
  3162,
  2683,
  2276,
  1931,
  1638,
  1389,
  1179,
  1000,
  848,
  720,
  611,
  518,
  439,
  373,
  316,
  268,
  228,
  193,
  164,
  139,
  118,
  100,
  85,
  72,
  61,
  52,
  44,
  37,
  32,
  27,
  23,
  19,
  16,
  14,
  12,
  10,
  8,
  7,
  6,
  5,
  4,
  4,
  3,
  3,
  2,
  2,
  2,
  1,
  1,
  1
];
const REPOSSESSION_AUCTION_DURATION = lotAuctionPrices.length * 3600;

const getLotAuctionPrice = (leaseEndTime = 0, blockTime = 0) => {
  if (blockTime < leaseEndTime) return null;

  const timeDiffHours = Math.floor((blockTime - leaseEndTime) / 3600);
  return lotAuctionPrices[timeDiffHours] || 0;
};
Entity.getLotAuctionPrice = getLotAuctionPrice;

export default {
  IDS,
  TYPES,
  POLICY_IDS,
  POLICY_TYPES,
  MAX_POLICY_DURATION,
  REPOSSESSION_AUCTION_DURATION,

  getAdaliaPrimeLotRate,
  getLotAuctionPrice,
  getPolicyDetails,
  getPrepaidPolicyRate,
  isPermitted,

  Entity
};
