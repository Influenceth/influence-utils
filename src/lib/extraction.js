export const MAX_EXTRACTION_TIME = 365 * 3600; // 365 Adalian days in IRL seconds
export const MAX_YIELD = 10000 * 1000;
export const STATUS_IDLE = 0;
export const STATUS_EXTRACTING = 1;
export const STATUSES = ['Idle', 'Extracting'];

/**
 * Returns the plain text description of the construction status
 * @param status
 */
export const getStatus = (status) => {
  return STATUSES[status];
};

/**
 * Returns the base extraction time based on a core sample's yield
 * @param {integer} targetYield
 * @param {integer} remainingYield
 * @param {integer} totalYield
 * @return The extraction time in seconds
 */
export const getExtractionTime = (targetYield, remainingYield, totalBonus = 1) => {
  const startTimeRatio = Math.sqrt(remainingYield / MAX_YIELD);
  const endTimeRatio = Math.sqrt((remainingYield - targetYield) / MAX_YIELD);
  const time = (startTimeRatio - endTimeRatio) * MAX_EXTRACTION_TIME / totalBonus;
  return Math.ceil(time);
};

export default {
  STATUS_IDLE,
  STATUS_EXTRACTING,
  STATUSES,
  getExtractionTime,
  getStatus
};
