export interface Achievement {
  id: string;
  title: string;
  description: string;
  progress: number;
  target: number;
  completed: boolean;
  completedAt?: Date;
  reward: Reward;
}

export interface Reward {
  type: 'stmBucks' | 'points' | 'special';
  amount: number;
}

export interface RewardsState {
  achievements: Achievement[];
  loading: boolean;
  error: string | null;
}