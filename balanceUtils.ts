import type { BalanceUpdate } from '../types/balance';

export function calculateTotalBalance(history: BalanceUpdate[]): { stmBucks: number; points: number } {
  return history.reduce(
    (totals, update) => ({
      ...totals,
      [update.type]: totals[update.type] + update.amount,
    }),
    { stmBucks: 0, points: 0 }
  );
}

export function formatBalance(amount: number, type: 'stmBucks' | 'points'): string {
  return type === 'stmBucks'
    ? `${amount.toLocaleString()} STM`
    : amount.toLocaleString();
}