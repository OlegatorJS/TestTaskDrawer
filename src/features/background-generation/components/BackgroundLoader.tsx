import { Spinner } from '@/components/ui/Spinner';
import { Typography } from '@/components/ui/Typography';
import { useEffect, useState } from 'react';

const PROGRESS_INTERVAL_MS = 100;
const MAX_PROGRESS = 100;

export function BackgroundLoader() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= MAX_PROGRESS) {
          clearInterval(timer);
          return MAX_PROGRESS;
        }

        return prev + 1;
      });
    }, PROGRESS_INTERVAL_MS);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="rounded-xl overflow-hidden bg-black flex flex-col grow h-[198px] w-[112px]">
      <div className="h-full w-full justify-center items-center grow-1 flex">
        <Spinner value={progress} size={65} strokeWidth={3} />
      </div>
      <Typography variant="xsSemibold" className="mt-auto pb-3 text-center text-white">
        1 minute left
      </Typography>
    </div>
  );
}
