import { Button } from '@/components/ui/Button';
import twoSparkles from '@/assets/images/two-sparkles.svg';
import { InputGroupAddon } from '@/components/ui/InputGroup';
import arrow from '@/assets/images/arrow.svg';

type BackgroundGenerationActionsProps = {
  onRegenerate: () => void;
  onPrevPrompt: () => void;
  onNextPrompt: () => void;
};

export function BackgroundGenerationActions({
  onRegenerate,
  onNextPrompt,
  onPrevPrompt,
}: BackgroundGenerationActionsProps) {
  return (
    <InputGroupAddon>
      <Button
        prevIcon={<img src={twoSparkles} alt="sparkles" />}
        variant="transparent"
        onClick={onRegenerate}
      >
        Regenerate
      </Button>
      <div>
        <Button variant="transparent" className="p-[10px]" onClick={onPrevPrompt}>
          <img src={arrow} alt="arrow back" />
        </Button>
        <Button variant="transparent" className="p-[10px]" onClick={onNextPrompt}>
          <img src={arrow} alt="arrow next" className="scale-x-[-1]" />
        </Button>
      </div>
    </InputGroupAddon>
  );
}
