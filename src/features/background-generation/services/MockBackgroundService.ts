import type { BackgroundService } from './BackgroundService';
import cort from '@/assets/images/backgrounds/cort.png';
import home from '@/assets/images/backgrounds/home.png';
import garden from '@/assets/images/backgrounds/garden.png';
import room from '@/assets/images/backgrounds/room.png';
import { delay } from '@/lib/utils/delay';
import { SECOND } from '@/lib/constants';

const MOCK_GENERATION_DELAY = 10 * SECOND;

export class MockBackgroundService implements BackgroundService {
  async getBackgrounds() {
    await delay(MOCK_GENERATION_DELAY);

    return [
      { background: cort, id: crypto.randomUUID() },
      { background: home, id: crypto.randomUUID() },
      { background: garden, id: crypto.randomUUID() },
      { background: room, id: crypto.randomUUID() },
    ];
  }
}
