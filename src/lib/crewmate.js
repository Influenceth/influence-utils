export const ABILITIES = {
  1: {
    name: 'Core Sample Speed',
    class: 3,
    titles: { 13: 0.01, 26: 0.02, 39: 0.03, 52: 0.04, 65: 0.05 },
    traits: { 31: 0.10 }
  },
  2: {
    name: 'Core Sample Quality',
    class: 3,
    titles: { 13: 0.01, 26: 0.02, 39: 0.03, 52: 0.04, 65: 0.05 },
    traits: { 50: 0.10 }
  },
  3: {
    name: 'Surface Transport Speed',
    titles: {
      13: 0.01,
      26: 0.02,
      39: 0.03,
      52: 0.04,
      65: 0.05,
      6: 0.05,
      19: 0.10,
      32: 0.15,
      45: 0.20,
      58: 0.25
    },
    traits: { 47: 0.10 }
  },
  4: {
    name: 'Extraction Rate',
    class: 3,
    titles: { 13: 0.01, 26: 0.02, 39: 0.03, 52: 0.04, 65: 0.05 }
  },
  5: {
    name: 'Construction Efficiency',
    class: 2,
    titles: { 13: 0.01, 26: 0.02, 39: 0.03, 52: 0.04, 65: 0.05 },
    traits: { 49: 0.10 }
  },
  6: {
    name: 'Inventory Capacity',
    titles: { 13: 0.01, 26: 0.02, 39: 0.03, 52: 0.04, 65: 0.05 }
  }
};

export const BONUS_ITEMS = {
  0: { name: 'None' },
  1: { name: 'Glow' },
  2: { name: 'Drone - Gray' },
  3: { name: 'Drone - Orange' },
  4: { name: 'Drone - Green' },
  5: { name: 'Drone - Yellow' },
  6: { name: 'Drone - Medical' },
  7: { name: 'Drone - Technology' },
  8: { name: 'Drone - Commander' }
};

export const CLASSES = {
  1: { name: 'Pilot', description: 'Often restless, always ready for adventure, pilots are happiest when flying. Their expertise gets them and their crew where they want to go quickly, safely, efficiently.' },
  2: { name: 'Engineer', description: 'If there is a problem, an engineer will find an answer. Whether it is buildings, ships, or processes, engineers are thrilled to be the one to solve the puzzle.' },
  3: { name: 'Miner', description: 'On the surface it appears that miners value their strength over their brains, but like their quarry, the reality lies underneath: they are highly skilled and erudite in their area of expertise.' },
  4: { name: 'Merchant', description: 'Predicting the ebb and flow of the market is about more than just the raw data, it is about anticipating the needs and desires of humanity- this is what merchants strive to understand.' },
  5: { name: 'Scientist', description: 'Motivated by a desire to expand human knowledge, scientists learn from the past, while keeping their gaze steadily on the future.' }
};

export const COLLECTIONS = {
  1: { name: 'Arvad Specialist' },
  2: { name: 'Arvad Citizen' },
  3: { name: 'Arvad Leadership' },
  4: { name: 'Adalian' }
};

export const DEPARTMENTS = {
  1: { name: 'Navigation' },
  2: { name: 'Education' },
  3: { name: 'Knowledge' },
  4: { name: 'Medicine' },
  5: { name: 'Security' },
  6: { name: 'Logistics' },
  7: { name: 'Maintenance' },
  8: { name: 'Technology' },
  9: { name: 'Engineering' },
  10: { name: 'Food Production' },
  11: { name: 'Food Preparation' },
  12: { name: 'Arts & Entertainment' },
  13: { name: 'Management' }
};

export const FACIAL_FEATURES = {
  0: { name: 'None' },
  1: { name: 'Scar' },
  2: { name: 'Piercing' },
  3: { name: 'Long Beard' },
  4: { name: 'Full Beard' },
  5: { name: 'Circle Beard' },
  6: { name: 'Handlebar Mustache' },
  7: { name: 'Mustache' }
};

export const GENDERS = {
  1: { name: 'Male' },
  2: { name: 'Female' }
};

export const HAIR_COLORS = {
  1: { name: 'Red' },
  2: { name: 'Gray' },
  3: { name: 'Brown' },
  4: { name: 'Blonde' },
  5: { name: 'Black' }
};

export const HAIR_STYLES = {
  0: { name: 'Bald' },
  1: { name: 'Mohawk' },
  2: { name: 'Slickback' },
  3: { name: 'Curly' },
  4: { name: 'Buzz' },
  5: { name: 'Top Knot' },
  6: { name: 'Bun' },
  7: { name: 'Long' },
  8: { name: 'Ponytail' },
  9: { name: 'Pixie' },
  10: { name: 'Double Bun' },
  11: { name: 'Shoulder' }
};

export const HEAD_PIECES = {
  0: { name: 'None' },
  1: { name: 'Welding Goggles' },
  2: { name: 'AR Glasses' },
  3: { name: 'Eyepatch' },
  4: { name: 'Mask' },
  5: { name: 'Helmet' },
  6: { name: 'Navigation Goggles' },
  7: { name: 'Spectacles' },
  8: { name: 'Archival Glasses' },
  9: { name: 'Medical Glasses' },
  10: { name: 'Headset' },
  11: { name: 'Earmuffs' },
  12: { name: 'Technology Glasses' },
  13: { name: 'Botany Glasses' },
  14: { name: 'Chef Hat' },
  15: { name: 'Eyepatch - Orange' },
  16: { name: 'Eyepatch - Gold' }
};

export const OUTFITS = {
  1: { name: 'Light Spacesuit - Blue' },
  2: { name: 'Light Spacesuit - Purple' },
  3: { name: 'Light Spacesuit - Orange' },
  4: { name: 'Heavy Spacesuit - Red' },
  5: { name: 'Heavy Spacesuit - Black' },
  6: { name: 'Heavy Spacesuit - Blue' },
  7: { name: 'Lab Coat - White' },
  8: { name: 'Lab Coat - Yellow' },
  9: { name: 'Lab Coat - Green' },
  10: { name: 'Tool Vest - Orange' },
  11: { name: 'Tool Vest - Green' },
  12: { name: 'Tool Vest - Yellow' },
  13: { name: 'Jacket - Red' },
  14: { name: 'Jacket - Green' },
  15: { name: 'Jacket - Black' },
  16: { name: 'Stationwear - Red' },
  17: { name: 'Stationwear - Green' },
  18: { name: 'Stationwear - Black' },
  19: { name: 'Light Spacesuit - Navigation' },
  20: { name: 'Stationwear - Education' },
  21: { name: 'Stationwear - Archival' },
  22: { name: 'Lab Coat - Medical' },
  23: { name: 'Heavy Spacesuit - Security' },
  24: { name: 'Light Spacesuit - Logistics' },
  25: { name: 'Tool Vest - Maintenance' },
  26: { name: 'Light Spacesuit - Technology' },
  27: { name: 'Tool Vest - Engineering' },
  28: { name: 'Lab Coat - Botany' },
  29: { name: 'Jacket - Cooking' },
  30: { name: 'Jacket - Entertainment' },
  31: { name: 'Stationwear - Commander' },
  32: { name: 'Pilot Recruit - Primary' },
  33: { name: 'Pilot Recruit - Variant' },
  34: { name: 'Engineer Recruit - Primary' },
  35: { name: 'Engineer Recruit - Variant' },
  36: { name: 'Miner Recruit - Primary' },
  37: { name: 'Miner Recruit - Variant' },
  38: { name: 'Merchant Recruit - Primary' },
  39: { name: 'Merchant Recruit - Variant' },
  40: { name: 'Scientist Recruit - Primary' },
  41: { name: 'Scientist Recruit - Variant' }
};

export const TITLES = {
  0: { name: 'None' },
  1: { name: 'Communications Officer' },
  2: { name: 'Teaching Assistant' },
  3: { name: 'Librarian' },
  4: { name: 'Nurse' },
  5: { name: 'Public Safety Officer' },
  6: { name: 'Warehouse Worker' },
  7: { name: 'Maintenance Technician' },
  8: { name: 'Systems Administrator' },
  9: { name: 'Structural Engineer' },
  10: { name: 'Farmer' },
  11: { name: 'Line Cook' },
  12: { name: 'Artist' },
  13: { name: 'Block Captain' },
  14: { name: 'Observatory Technician' },
  15: { name: 'Teacher' },
  16: { name: 'Historian' },
  17: { name: 'Physician Assistant' },
  18: { name: 'Security Officer' },
  19: { name: 'Logistics Specialist' },
  20: { name: 'Electrician' },
  21: { name: 'Software Engineer' },
  22: { name: 'Life Support Engineer' },
  23: { name: 'Field Botanist' },
  24: { name: 'Section Cook' },
  25: { name: 'Author' },
  26: { name: 'Delegate' },
  27: { name: 'Cartographer' },
  28: { name: 'Professor' },
  29: { name: 'Archivist' },
  30: { name: 'Resident Physician' },
  31: { name: 'Tactical Officer' },
  32: { name: 'Warehouse Manager' },
  33: { name: 'EVA Technician' },
  34: { name: 'Embedded Engineer' },
  35: { name: 'Propulsion Engineer' },
  36: { name: 'Nutritionist' },
  37: { name: 'Kitchen Manager' },
  38: { name: 'Musician' },
  39: { name: 'Councilor' },
  40: { name: 'Navigator' },
  41: { name: 'Distinguished Professor' },
  42: { name: 'Curator' },
  43: { name: 'Physician' },
  44: { name: 'Intelligence Officer' },
  45: { name: 'Logistics Manager' },
  46: { name: 'Facilities Supervisor' },
  47: { name: 'Systems Architect' },
  48: { name: 'Reactor Engineer' },
  49: { name: 'Plant Geneticist' },
  50: { name: 'Chef' },
  51: { name: 'Actor' },
  52: { name: 'Justice' },
  53: { name: 'Chief Navigator' },
  54: { name: 'Provost' },
  55: { name: 'Chief Archivist' },
  56: { name: 'Chief Medical Officer' },
  57: { name: 'Head of Security' },
  58: { name: 'Chief Logistics Officer' },
  59: { name: 'Chief Steward' },
  60: { name: 'Chief Technology Officer' },
  61: { name: 'Head of Engineering' },
  62: { name: 'Chief Botanist' },
  63: { name: 'Chief Cook' },
  64: { name: 'Entertainment Director' },
  65: { name: 'High Commander' }
};

export const TRAITS = {
  1: { name: 'Drive: Survival', type: 'cosmetic', description: 'You need to live. Your primary drive is the survival of yourself, the people you know, and the species.' },
  2: { name: 'Drive: Service', type: 'cosmetic', description: 'You need to fulfill your role. Your primary drive is to serve humanity for the greater good.' },
  3: { name: 'Drive: Glory', type: 'cosmetic', description: 'You need to excel. Your primary drive is to be the best at whatever you do.' },
  4: { name: 'Drive: Command', type: 'cosmetic', description: 'You need to be in control. Your primary drive is to lead others in what you know to be the right direction.' },
  5: { name: 'Adventurous', type: 'cosmetic', description: 'You are bold, brave, and intrepid. You recognize that in order to move humanity forward, it is sometimes necessary to take that giant leap for mankind.' },
  6: { name: 'Ambitious', type: 'cosmetic', description: 'You know what needs to be done, and you know that you are the one who can do it. You are driven to succeed, no matter the obstacles.' },
  7: { name: 'Arrogant', type: 'cosmetic', description: 'Hubris may have been the downfall of lesser people, but you are steadfastly confident in your own abilities. Let other people be led around by those stronger than themselves, you know what you are capable of.' },
  8: { name: 'Cautious', type: 'cosmetic', description: 'Let others leap before they look. You will stay with what you know works, until there is some proof that another course is safer.' },
  9: { name: 'Creative', type: 'cosmetic', description: 'You seek to bring new ideas to light. Your mind is constantly wandering to the question "what if..." You want to see if you can explain the "unexplainable".' },
  10: { name: 'Curious', type: 'cosmetic', description: 'You are excited to open your mind and learn something new. The universe is full of the undiscovered just waiting to be discovered.' },
  11: { name: 'Fierce', type: 'cosmetic', description: 'You are a forceful person who is drawn to intensity. You have strong convictions and seek out others who do as well.' },
  12: { name: 'Flexible', type: 'cosmetic', description: 'You are open-minded and able to quickly analyze new ideas. You are not stuck in the past and are always ready to respond to new challenges.' },
  13: { name: 'Frantic', type: 'cosmetic', description: 'You are prone to anxiety and always forget your towel.' },
  14: { name: 'Hopeful', type: 'cosmetic', description: 'You know the risks, you understand the downsides, but you just can\'t help your optimism. Besides, when has humanity ever truly expanded its abilities except when it held onto hope in the face of adversity?' },
  15: { name: 'Independent', type: 'cosmetic', description: 'You are free-thinking and not prone to blindly following orders, unless there is a very good explanation behind those orders.' },
  16: { name: 'Irrational', type: 'cosmetic', description: 'You don\'t waste your time with logic, at least not the type that makes sense to anyone else. You have never had the dubious honor of being called "reasonable."' },
  17: { name: 'Loyal', type: 'cosmetic', description: 'You understand the importance of staying the course and trusting those around you to make rational decisions.' },
  18: { name: 'Pragmatic', type: 'cosmetic', description: 'Instead of wasting time wishing for a better reality, you are firmly rooted in your present situation. You prefer to find the most practical solution to a problem, even if it isn\'t always the most desirable.' },
  19: { name: 'Rational', type: 'cosmetic', description: 'You try not to let messy emotions cloud your thinking. Logic is the only reliable constant in the universe.' },
  20: { name: 'Reckless', type: 'cosmetic', description: 'You believe that anyone who takes life too seriously will never know its true enjoyment. Meticulous plans and detailed outcome calculations are for others to worry about.' },
  21: { name: 'Regressive', type: 'cosmetic', description: 'You look to the past and rely on what others have built or imagined. You prefer to rely upon what is tried and true, rather than innovate yourself into a disaster.' },
  22: { name: 'Serious', type: 'cosmetic', description: 'You have no time for self-indulgent nonsense. You understand your role and responsibilities in the universe and you wish that others understood theirs.' },
  23: { name: 'Steadfast', type: 'cosmetic', description: 'You are firm in your beliefs and prefer to rely on what is known, rather than dream about what could be. You believe that experience is the best teacher.' },
  24: { name: 'Council Loyalist', type: 'cosmetic', description: 'You are loyal to the Prime Council and the last High Commander of the Arvad. ' },
  25: { name: 'Council Moderate', type: 'cosmetic', description: 'You believe that there is no better alternative to the Prime Council and the last High Commander of the Arvad. ' },
  26: { name: 'Independent Moderate', type: 'cosmetic', description: 'You are critical of the leadership of the Prime Council and the last High Commander of the Arvad.' },
  27: { name: 'Independent Radical', type: 'cosmetic', description: 'You openly oppose the leadership of the Prime Council or the last High Commander of the Arvad. ' },
  28: { name: 'Navigator', type: 'impactful', description: 'You have increased ship fuel efficency while travelling.' },
  29: { name: 'Dietitian', type: 'impactful', description: 'You have decreased food consumption needs among your crew.' },
  30: { name: 'Refiner', type: 'impactful', description: 'You have increased refining yield while refining raw mined materials.' },
  31: { name: 'Surveyor', type: 'impactful', description: 'You have increased core sampling speed while surveying an asteroid.' },
  32: { name: 'Hauler', type: 'impactful', description: 'You have increased ship cargo capacity while travelling.' },
  33: { name: 'Optimistic', type: 'cosmetic', description: 'You know that no matter how dark it may seem now, dawn is just over the horizon.' },
  34: { name: 'Thoughtful', type: 'cosmetic', description: 'You are not quick to choose. You often prefer to wait for more information before committing yourself.' },
  35: { name: 'Pessimistic', type: 'cosmetic', description: 'You see no point in trying to fool yourself or anyone else. You often expect the worst and are rarely surprised by reality.' },
  36: { name: 'Righteous', type: 'cosmetic', description: 'You believe that you are virtuous and hold others to a high moral standard.' },
  37: { name: 'Communal', type: 'cosmetic', description: 'You believe in community and cooperation. We can all succeed, if we work together.' },
  38: { name: 'Impartial', type: 'cosmetic', description: 'You are capable of viewing many issues without bias or prejudice.' },
  39: { name: 'Enterprising', type: 'cosmetic', description: 'You are resourceful and able to build on the ideas of others.' },
  40: { name: 'Opportunistic', type: 'cosmetic', description: 'You believe in taking advantage of being in the right place at the right time.' },
  41: { name: 'Buster', type: 'impactful', description: 'You have increased top ship acceleration.' },
  42: { name: 'Mogul', type: 'impactful', description: 'You have increased market volume capacity.' },
  43: { name: 'Scholar', type: 'impactful', description: 'You have decreased time to next technology.' },
  44: { name: 'Recycler', type: 'impactful', description: 'You have decreased loss when reprocessing materials.' },
  45: { name: 'Mechanic', type: 'impactful', description: 'You have decreased cost for ship repair.' },
  46: { name: 'Operator', type: 'impactful', description: 'You have reduced rate of wear during ship operation.' },
  47: { name: 'Logistician', type: 'impactful', description: 'You have reduced surface transport fuel costs.' },
  48: { name: 'Experimenter', type: 'impactful', description: 'You have decreased time to next invention.' },
  49: { name: 'Builder', type: 'impactful', description: 'You have decreased assembly waste.' },
  50: { name: 'Prospector', type: 'impactful', description: 'You have increased viability gain per core sample.' }
};

/**
 * @param {integer} abilityId
 * @returns Details for a given ability
 */
export const getAbility = (abilityId) => ABILITIES[abilityId];

/**
 * @param bonusItemId The crewmate's bonus item identifier
 * @returns Details object for bonus item including a 'name' attribute
 */
export const getBonusItem = (bonusItemId) => BONUS_ITEMS[bonusItemId];

/**
 * @param collectionId The crewmate's collection identifier
 * @returns Details object for collection including a 'name' attribute
 */
export const getCollection = (collectionId) => COLLECTIONS[collectionId];

/**
 * @param classId The crewmate's class identifier
 * @returns Details object for class including a 'name' attribute
 */
export const getClass = (classId) => CLASSES[classId];

/**
 * @param facialFeatureId The crewmate's facialFeature identifier
 * @returns Details object for facialFeature including a 'name' attribute
 */
export const getFacialFeature = (facialFeatureId) => FACIAL_FEATURES[facialFeatureId];

/**
 * @param genderId The crewmate's gender identifier
 * @returns Details object for gender including a 'name' attribute
 */
export const getGender = (genderId) => GENDERS[genderId];

/**
 * @param hairColorId The crewmate's hairColor identifier
 * @returns Details object for hairColor including a 'name' attribute
 */
export const getHairColor = (hairColorId) => HAIR_COLORS[hairColorId];

/**
 * @param hairId The crewmate's hair identifier
 * @returns Details object for hair including a 'name' attribute
 */
export const getHairStyle = (hairId) => HAIR_STYLES[hairId];

/**
 * @param headPieceId The crewmate's headPiece identifier
 * @returns Details object for headPiece including a 'name' attribute
 */
export const getHeadPiece = (headPieceId) => HEAD_PIECES[headPieceId];

/**
 * @param outfitId The crewmate's outfit identifier
 * @returns Details object for outfit including a 'name' attribute
 */
export const getOutfit = (outfitId) => OUTFITS[outfitId];

/**
 * @param titleId The crewmate's title identifier
 * @returns Details object for title including a 'name' attribute
 */
export const getTitle = (titleId) => TITLES[titleId];

/**
 * @param traitId The crewmate's trait identifier
 * @returns Details object for trait including a 'name' attribute
 */
export const getTrait = (traitId) => TRAITS[traitId];

export default {
  BONUS_ITEMS,
  COLLECTIONS,
  CLASSES,
  FACIAL_FEATURES,
  GENDERS,
  HAIR_COLORS,
  HAIR_STYLES,
  HEAD_PIECES,
  OUTFITS,
  TITLES,
  TRAITS,
  getAbility,
  getBonusItem,
  getCollection,
  getClass,
  getFacialFeature,
  getGender,
  getHairColor,
  getHairStyle,
  getHeadPiece,
  getOutfit,
  getTitle,
  getTrait
};
