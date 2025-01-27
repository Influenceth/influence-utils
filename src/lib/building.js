import Inventory from './inventory.js';
import Process from './process.js';

const IDS = {
  EMPTY_LOT: 0,
  WAREHOUSE: 1,
  EXTRACTOR: 2,
  REFINERY: 3,
  BIOREACTOR: 4,
  FACTORY: 5,
  SHIPYARD: 6,
  SPACEPORT: 7,
  MARKETPLACE: 8,
  HABITAT: 9,
  TANK_FARM: 10
};

const CATEGORIES = {
  STORAGE: 1,
  EXTRACTION: 2,
  REFINING: 3,
  AGRICULTURE: 4,
  MANUFACTURING: 5,
  SHIPBUILDING: 6,
  TRANSPORT: 7,
  TRADE: 8,
  HOUSING: 9
};

/**
 * Constants
 */
const TYPES = {
  [IDS.EMPTY_LOT]: {
    i: IDS.EMPTY_LOT,
    name: 'Empty Lot',
    category: 0,
    processType: 0,
    siteSlot: 0,
    siteType: 0,
    description: `An empty expanse of regolith in microgravity, blasted by cosmic rays and
    stellar wind and slowly tilled by micrometeorite impacts for billions of years.`
  },
  [IDS.WAREHOUSE]: {
    i: IDS.WAREHOUSE,
    name: 'Warehouse',
    category: CATEGORIES.STORAGE,
    processType: Process.IDS.WAREHOUSE_CONSTRUCTION,
    siteSlot: 1,
    siteType: Inventory.IDS.WAREHOUSE_SITE,
    description: `The Warehouse provides inventory space to store products: raw
      materials, refined materials, crops, manufactured goods, or assemblies.`
  },
  [IDS.EXTRACTOR]: {
    i: IDS.EXTRACTOR,
    name: 'Extractor',
    category: CATEGORIES.EXTRACTION,
    processType: Process.IDS.EXTRACTOR_CONSTRUCTION,
    siteSlot: 1,
    siteType: Inventory.IDS.EXTRACTOR_SITE,
    description: `The Extractor is responsible for extracting raw materials from an
      asteroid. Extractors cannot operate without a core sample pointing to a mineable
      deposit of a raw material. They consist of a large, mobile drilling rig and a fixed
      section that separates the ores and packages them for shipping. Extractors are best
      operated by Miners.`
  },
  [IDS.REFINERY]: {
    i: IDS.REFINERY,
    name: 'Refinery',
    category: CATEGORIES.REFINING,
    processType: Process.IDS.REFINERY_CONSTRUCTION,
    siteSlot: 1,
    siteType: Inventory.IDS.REFINERY_SITE,
    description: `The Refinery allows for the refining of products into refined
      materials. Refineries utilize chemical reactions or state changes to
      accomplish their work. They are built around a very large, thermally controlled
      centrifuge which simulates gravity for the many processes that require it.
      Refineries are best operated by Engineers and Scientists.`
  },
  [IDS.BIOREACTOR]: {
    i: IDS.BIOREACTOR,
    name: 'Bioreactor',
    category: CATEGORIES.AGRICULTURE,
    processType: Process.IDS.BIOREACTOR_CONSTRUCTION,
    siteSlot: 1,
    siteType: Inventory.IDS.BIOREACTOR_SITE,
    description: `The Bioreactor, or as the Adalians lovingly call it, the Farm, is a
      specialized building designed to provide a growing space for a variety of organic
      products. Bioreactors feature transparent growing tunnels containing microgravity soil
      beds for agricultural plants brought from Earth, as well as water tubes built into the
      tunnel walls for bio-engineered algae and bacteria. Production of crops in
      Bioreactors necessarily occurs in batches. They are best operated by Scientists.`
  },
  [IDS.FACTORY]: {
    i: IDS.FACTORY,
    name: 'Factory',
    category: CATEGORIES.MANUFACTURING,
    processType: Process.IDS.FACTORY_CONSTRUCTION,
    siteSlot: 1,
    siteType: Inventory.IDS.FACTORY_SITE,
    description: `The Factory produces manufactured goods. It contains a number of flexible
      assembly stations, through which mobile robotic arms move to perform work.
      Factories are best operated by Engineers.`
  },
  [IDS.SHIPYARD]: {
    i: IDS.SHIPYARD,
    name: 'Shipyard',
    category: CATEGORIES.SHIPBUILDING,
    processType: Process.IDS.SHIPYARD_CONSTRUCTION,
    siteSlot: 1,
    siteType: Inventory.IDS.SHIPYARD_SITE,
    description: `The Shipyard is a specialized type of factory that can manufacture
    assemblies, the most specialized and complex type of products. These are typically used
    in the construction of ships and buildings. Shipyards additionally feature large
    mobile gantries which allow for the construction of ship hulls, and the final integration
    of modules onto those hulls to create ships. Those two types of work can be performed
    in parallel, unlike with other buildings. Shipyards are best operated by Engineers. `
  },
  [IDS.SPACEPORT]: {
    i: IDS.SPACEPORT,
    name: 'Spaceport',
    category: CATEGORIES.TRANSPORT,
    processType: Process.IDS.SPACEPORT_CONSTRUCTION,
    siteSlot: 1,
    siteType: Inventory.IDS.SPACEPORT_SITE,
    description: `The Spaceport allows for the docking of all ship classes on an asteroid's
      surface, not just those capable of performing all-terrain landings like
      the Light Transport. Spaceports are constructed as a large well leading to underground
      ship parking areas, and are therefore limited in space. The more ships they store,
      the slower docking and undocking becomes. Ships docked in a Spaceport can load and unload
      their cargoes and propellant, and can host Crews doing work.`
  },
  [IDS.MARKETPLACE]: {
    i: IDS.MARKETPLACE,
    name: 'Marketplace',
    category: CATEGORIES.TRADE,
    processType: Process.IDS.MARKETPLACE_CONSTRUCTION,
    siteSlot: 1,
    siteType: Inventory.IDS.MARKETPLACE_SITE,
    description: `The Marketplace serves as the central point of the Adalian economy. Once
      they are built on an asteroid they allow for the exchange of all local
      raw materials, refined materials, crops, manufactured goods, and assemblies.
      Marketplaces feature large spinning rings which provide artificial gravity for traders
      who work there on a temporary basis, much like a conference center. They support both
      limit and market orders, for both buying and selling, and allow a limited number of
      products which may be traded, and which their owner can configure, along with fees.
      When trades are matched, those fees accrue to the owner. Marketplaces are best managed
      by Merchants.`
  },
  [IDS.HABITAT]: {
    i: IDS.HABITAT,
    name: 'Habitat',
    category: CATEGORIES.HOUSING,
    processType: Process.IDS.HABITAT_CONSTRUCTION,
    siteSlot: 1,
    siteType: Inventory.IDS.HABITAT_SITE,
    description: `The Habitat is the city of Adalia. Habitats are constructed of large,
      well-appointed spinning rings to provide artificial gravity, and the inner edge of
      those rings is populated by many Habitation Modules, which are used for homes and public
      buildings. In addition to allowing the stationing of Crews, they are the only location
      which allows new Crewmates to be recruited, from the pool of work-ready young adults
      who grew up at that Habitat. Habitats do not have unlimited space, and once they are more
      than half full, the productivity boost which they grant to Crews stationed there begins
      to drop due to overcrowding, until it is completely gone at full capacity.`
  },
  [IDS.TANK_FARM]: {
    i: IDS.TANK_FARM,
    name: 'Tank Farm',
    category: CATEGORIES.STORAGE,
    processType: Process.IDS.TANK_FARM_CONSTRUCTION,
    siteSlot: 1,
    siteType: Inventory.IDS.TANK_FARM_SITE,
    description: `The Tank Farm provides inventory space to store bulky gases and liquids in large
      tanks. It also provides some small storage space for select other solid products.`
  }
};

const CATEGORY_TYPES = {
  [CATEGORIES.STORAGE]: {
    name: 'Storage',
  },
  [CATEGORIES.EXTRACTION]: {
    name: 'Extraction',
  },
  [CATEGORIES.REFINING]: {
    name: 'Refining',
  },
  [CATEGORIES.AGRICULTURE]: {
    name: 'Agriculture',
  },
  [CATEGORIES.MANUFACTURING]: {
    name: 'Manufacturing',
  },
  [CATEGORIES.SHIPBUILDING]: {
    name: 'Shipbuilding',
  },
  [CATEGORIES.TRANSPORT]: {
    name: 'Transport',
  },
  [CATEGORIES.TRADE]: {
    name: 'Trade',
  },
  [CATEGORIES.HOUSING]: {
    name: 'Housing',
  },
}

// NOTE: constructionTime is in-game seconds
const CONSTRUCTION_TYPES = {
  [IDS.WAREHOUSE]: {
    constructionTime: Process.TYPES[Process.IDS.WAREHOUSE_CONSTRUCTION].setupTime,
    requirements: Process.TYPES[Process.IDS.WAREHOUSE_CONSTRUCTION].inputs
  },
  [IDS.EXTRACTOR]: {
    constructionTime: Process.TYPES[Process.IDS.EXTRACTOR_CONSTRUCTION].setupTime,
    requirements: Process.TYPES[Process.IDS.EXTRACTOR_CONSTRUCTION].inputs
  },
  [IDS.REFINERY]: {
    constructionTime: Process.TYPES[Process.IDS.REFINERY_CONSTRUCTION].setupTime,
    requirements: Process.TYPES[Process.IDS.REFINERY_CONSTRUCTION].inputs
  },
  [IDS.BIOREACTOR]: {
    constructionTime: Process.TYPES[Process.IDS.BIOREACTOR_CONSTRUCTION].setupTime,
    requirements: Process.TYPES[Process.IDS.BIOREACTOR_CONSTRUCTION].inputs
  },
  [IDS.FACTORY]: {
    constructionTime: Process.TYPES[Process.IDS.FACTORY_CONSTRUCTION].setupTime,
    requirements: Process.TYPES[Process.IDS.FACTORY_CONSTRUCTION].inputs
  },
  [IDS.SHIPYARD]: {
    constructionTime: Process.TYPES[Process.IDS.SHIPYARD_CONSTRUCTION].setupTime,
    requirements: Process.TYPES[Process.IDS.SHIPYARD_CONSTRUCTION].inputs
  },
  [IDS.SPACEPORT]: {
    constructionTime: Process.TYPES[Process.IDS.SPACEPORT_CONSTRUCTION].setupTime,
    requirements: Process.TYPES[Process.IDS.SPACEPORT_CONSTRUCTION].inputs
  },
  [IDS.MARKETPLACE]: {
    constructionTime: Process.TYPES[Process.IDS.MARKETPLACE_CONSTRUCTION].setupTime,
    requirements: Process.TYPES[Process.IDS.MARKETPLACE_CONSTRUCTION].inputs
  },
  [IDS.HABITAT]: {
    constructionTime: Process.TYPES[Process.IDS.HABITAT_CONSTRUCTION].setupTime,
    requirements: Process.TYPES[Process.IDS.HABITAT_CONSTRUCTION].inputs
  },
  [IDS.TANK_FARM]: {
    constructionTime: Process.TYPES[Process.IDS.TANK_FARM_CONSTRUCTION].setupTime,
    requirements: Process.TYPES[Process.IDS.TANK_FARM_CONSTRUCTION].inputs
  }
};

const CONSTRUCTION_STATUSES = {
  UNPLANNED: 0,
  PLANNED: 1,
  UNDER_CONSTRUCTION: 2,
  OPERATIONAL: 3
};

const CONSTRUCTION_STATUS_LABELS = {
  [CONSTRUCTION_STATUSES.UNPLANNED]: 'Unplanned',
  [CONSTRUCTION_STATUSES.PLANNED]: 'Planned',
  [CONSTRUCTION_STATUSES.UNDER_CONSTRUCTION]: 'Under Construction',
  [CONSTRUCTION_STATUSES.OPERATIONAL]: 'Operational'
};

const DECONSTRUCTION_PENALTY = 0.10;

const getType = (type) => TYPES[type] ? { ...TYPES[type] } : null;
const getConstructionType = (type) => CONSTRUCTION_TYPES[type] ? { ...CONSTRUCTION_TYPES[type] } : null;

/**
 * @param {integer} buildingType A constructable capable type
 * @param {float} totalBonus The crew bonus to apply to the construction time
 * @returns The construction time required in seconds
 */
const getConstructionTime = (buildingType, totalBonus = 1) => {
  if (CONSTRUCTION_TYPES[buildingType]) {
    return Math.ceil(CONSTRUCTION_TYPES[buildingType].constructionTime / totalBonus);
  } else {
    throw new Error('Building type is invalid or not constructable');
  }
};

export default {
  TYPES,
  CATEGORIES,
  CATEGORY_TYPES,
  CONSTRUCTION_TYPES,
  CONSTRUCTION_STATUSES,
  CONSTRUCTION_STATUS_LABELS,
  DECONSTRUCTION_PENALTY,
  IDS,

  getConstructionTime,
  getConstructionType,
  getType
};
