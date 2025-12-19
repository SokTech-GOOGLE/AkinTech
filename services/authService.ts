
import { User } from '../types';

const STORAGE_KEY = 'vibe_user_session';

export const authService = {
  signup: (name: string, email: string, handle: string): User => {
    const newUser: User = {
      id: Math.random().toString(36).substr(2, 9),
      name,
      email,
      handle: handle.startsWith('@') ? handle : `@${handle}`,
      avatar: `https://api.dicebear.com/7.x/avataaars/svg?seed=${handle}`,
      bio: 'New Vibe Creator',
      isVerified: false,
      followers: 0,
      following: 0,
      impactScore: 10,
      balance: 0,
    };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(newUser));
    return newUser;
  },

  signin: (email: string): User | null => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      const user = JSON.parse(stored);
      if (user.email === email) return user;
    }
    return null;
  },

  getCurrentUser: (): User | null => {
    const stored = localStorage.getItem(STORAGE_KEY);
    return stored ? JSON.parse(stored) : null;
  },

  logout: () => {
    localStorage.removeItem(STORAGE_KEY);
  }
};
