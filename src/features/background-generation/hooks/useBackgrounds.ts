import { useCallback, useMemo, useState } from 'react';
import { LoadingStatus } from '@/lib/types';
import type { Background } from '../types';
import { MockBackgroundService } from '../services';

export function useBackgrounds() {
  const [loadingStatus, setLoadingStatus] = useState(LoadingStatus.IDLE);
  const [backgrounds, setBackgrounds] = useState<Background[]>([]);

  const service = useMemo(() => new MockBackgroundService(), []);

  const fetchBackgrounds = useCallback(async () => {
    setLoadingStatus(LoadingStatus.PENDING);

    try {
      const result = await service.getBackgrounds();

      setBackgrounds(result);
      setLoadingStatus(LoadingStatus.FULFILLED);
    } catch {
      setLoadingStatus(LoadingStatus.FAILED);
    }
  }, [service]);

  return {
    backgrounds,
    loadingStatus,
    fetchBackgrounds,
  };
}
