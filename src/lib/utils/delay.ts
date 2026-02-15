import { SECOND } from '@/lib/constants';

export async function delay(delayAmount = SECOND) {
  return new Promise((resolve) => setTimeout(resolve, delayAmount));
}
