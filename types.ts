
export interface User {
  id: string;
  name: string;
  handle: string;
  avatar: string;
  bio: string;
  email: string;
  isVerified: boolean;
  followers: number;
  following: number;
  impactScore: number;
  balance: number;
}

export interface Post {
  id: string;
  userId: string;
  userName: string;
  userAvatar: string;
  content: string;
  mediaUrl?: string;
  mediaType?: 'image' | 'video' | 'live';
  timestamp: string;
  likes: number;
  comments: number;
  shares: number;
  isGlobal: boolean;
  aiSummarized?: string;
}

// Added missing FeatureModule interface to support FeatureHub.tsx
export interface FeatureModule {
  id: string;
  title: string;
  description: string;
  icon: string;
  category: string;
}

export type AppView = 
  | 'feed' 
  | 'explore' 
  | 'profile' 
  | 'support' 
  | 'ai-lab' 
  | 'hub' 
  | 'auth' 
  | 'clips' 
  | 'radio' 
  | 'games' 
  | 'courses' 
  | 'scholarships' 
  | 'vault' 
  | 'live' 
  | 'visa-gen'
  | 'ai-directory';
