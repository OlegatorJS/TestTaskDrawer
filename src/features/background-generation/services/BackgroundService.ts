import type { Background } from '../types';

export interface BackgroundService {
  getBackgrounds(): Promise<Background[]>;
}
