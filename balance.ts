export interface BalanceUpdate {
  type: 'stmBucks' | 'points';
  amount: number;
  source: 'prize' | 'achievement' | 'daily';
  timestamp: Date;
}

export interface BalanceState {
  stmBucks: number;
  points: number;
  history: BalanceUpdate[];
  loading: boolean;
  error: string | null;
}