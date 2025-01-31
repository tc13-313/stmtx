export interface ScratchCard {
  id: string;
  type: 'daily' | 'premium' | 'special';
  cost: number;
  scratchedAt?: Date;
  prize?: Prize;
  status: 'available' | 'scratched' | 'claimed';
}

export interface Prize {
  id: string;
  type: 'stmBucks' | 'points' | 'special';
  amount: number;
  claimed: boolean;
  claimedAt?: Date;
}

export interface GameState {
  currentCard?: ScratchCard;
  dailyCardAvailable: boolean;
  lastDailyCard?: Date;
  loading: boolean;
  error: string | null;
}