import type { Prize } from '../types/game';

const PRIZE_CONFIGS = {
  daily: {
    stmBucks: { min: 1, max: 10 },
    points: { min: 10, max: 100 }
  },
  premium: {
    stmBucks: { min: 10, max: 50 },
    points: { min: 100, max: 500 }
  },
  special: {
    stmBucks: { min: 50, max: 200 },
    points: { min: 500, max: 2000 }
  }
};

function getRandomNumber(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function generateRandomPrize(cardType: 'daily' | 'premium' | 'special'): Prize {
  const config = PRIZE_CONFIGS[cardType];
  const prizeType = Math.random() > 0.5 ? 'stmBucks' : 'points';
  
  return {
    id: Date.now().toString(),
    type: prizeType,
    amount: getRandomNumber(config[prizeType].min, config[prizeType].max),
    claimed: false
  };
}