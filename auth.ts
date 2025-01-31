export interface User {
  id: string;
  email: string;
  username: string;
  avatar?: string;
  balance: UserBalance;
  achievements: Achievement[];
  scratchHistory: ScratchCard[];
}

export interface UserBalance {
  stmBucks: number;
  points: number;
}

export interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  loading: boolean;
  error: string | null;
}