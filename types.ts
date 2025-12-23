
export interface TerragramCard {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  shadow: string;
  question: string;
  affirmation: string;
  symbolColor: string;
  image?: string; // Path to PNG/JPG if you have them
}

export type AppMode = 'home' | 'draw' | 'gallery';

export interface AppState {
  currentCard: TerragramCard | null;
  mode: AppMode;
  isFlipping: boolean;
}
