import { cn } from '@/lib/utils/cn';
import type { Background } from '../types';
import { LoadingStatus } from '@/lib/types';
import { BackgroundLoader } from './BackgroundLoader';
import { BackgroundCard } from './BackgroundCard';

type BackgroundListProps = {
  className?: string;
  backgrounds: Background[];
  loadingStatus: LoadingStatus;
};

export function BackgroundList({
  className,
  backgrounds,
  loadingStatus,
}: BackgroundListProps) {
  const isLoading = loadingStatus === LoadingStatus.PENDING;

  if (isLoading) {
    return <BackgroundLoader />;
  }

  return (
    <ul className={cn('grid grid-cols-3 gap-4', className)}>
      {backgrounds.map((item, index) => {
        const isDefault = index === 0;

        return (
          <li
            role="button"
            key={item.id}
            className={cn(
              'rounded-xl overflow-hidden cursor-pointer',
              isDefault && 'border-2 border-[#000]',
            )}
          >
            <BackgroundCard {...item} isDefault={isDefault} />
          </li>
        );
      })}
    </ul>
  );
}
