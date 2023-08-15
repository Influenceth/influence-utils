const IDS = {
  CREW: 1,
  CREWMATE: 2,
  ASTEROID: 3,
  LOT: 4,
  BUILDING: 5,
  SHIP: 6,
  DEPOSIT: 7,
  ORDER: 8,
  DELIVERY: 9
};

const LABELS = {
  [IDS.CREW]: 'CREW',
  [IDS.CREWMATE]: 'CREWMATE',
  [IDS.ASTEROID]: 'ASTEROID',
  [IDS.LOT]: 'LOT',
  [IDS.BUILDING]: 'BUILDING',
  [IDS.SHIP]: 'SHIP',
  [IDS.DEPOSIT]: 'DEPOSIT',
  [IDS.ORDER]: 'ORDER',
  [IDS.DELIVERY]: 'DELIVERY'
};

const unpackEntity = function (value) {
  const _value = Number(value);
  const label = _value % 65536;
  const id = Math.floor((_value - label) / 65536);
  return { id, label };
};

export default {
  IDS,
  LABELS,
  unpackEntity
};
