import { cn } from '@/lib/utils/cn';
import user from '@/assets/images/backgrounds/user.png';
import { Typography } from '@/components/ui/Typography';
import type { Background } from '../types';

type BackgroundCardProps = {
  className?: string;
  isDefault?: boolean;
} & Background;

export function BackgroundCard({
  className,
  isDefault,
  background,
}: BackgroundCardProps) {
  return (
    <div className={cn('relative h-full', className)}>
      {isDefault && (
        <Typography
          as="span"
          variant="xsBold"
          className="uppercase z-2 absolute left-2 top-2 py-[6px] px-1 bg-white border-1 rounded-sm color-gray border-[#0000000D]"
        >
          default
        </Typography>
      )}
      <img src={background} alt="user background" className="absolute h-full w-full object-cover" />
      <img src={user} alt="user" className="relative z-1 h-full" />
    </div>
  );
}
