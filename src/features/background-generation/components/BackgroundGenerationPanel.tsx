import { Button } from '@/components/ui/Button';
import { DrawerContent, DrawerBody } from '@/components/ui/Drawer';
import { Typography } from '@/components/ui/Typography';
import { type ChangeEvent, type FormEvent, useCallback, useState } from 'react';
import sparkles from '@/assets/images/three-sparkles.svg';
import { BackgroundList } from './BackgroundList';
import { useBackgrounds } from '../hooks/useBackgrounds';
import { InputGroup, InputGroupTextarea } from '@/components/ui/InputGroup';
import { BackgroundGenerationHeader } from './BackgroundGenerationHeader';
import { BackgroundGenerationActions } from './BackgroundGenerationActions';

export function BackgroundGenerationPanel() {
  const { fetchBackgrounds, loadingStatus, backgrounds } = useBackgrounds();

  const [prompt, setPrompt] = useState('');

  const handlePromptChange = useCallback((e: ChangeEvent<HTMLTextAreaElement>) => {
    setPrompt(e.target.value);
  }, []);

  const handleRegenerate = useCallback(() => {
    setPrompt(
      'Animate glowing rays pulsating from behind the bottle, leaves gently swaying, and golden sparkles floating upward for a natural, radiant effect.',
    );
  }, []);

  const handlePrevPrompt = useCallback(() => {
    setPrompt('lorem ipsum dolor sit amet');
  }, []);

  const handleNextPrompt = useCallback(() => {
    setPrompt('Lorem ipsum dolor sit amet, consectetur adipisicing elit');
  }, []);

  const handleSubmit = useCallback(
    (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      fetchBackgrounds();
    },
    [fetchBackgrounds],
  );

  return (
    <DrawerContent className="max-w-[400px]">
      <BackgroundGenerationHeader />
      <DrawerBody>
        <div className="mb-10">
          <Typography variant="smallSemibold" className="mb-3">
            Background idea
          </Typography>
          <form onSubmit={handleSubmit}>
            <InputGroup className="mb-6">
              <InputGroupTextarea
                value={prompt}
                onChange={handlePromptChange}
                placeholder="Enter your message"
              />
              <BackgroundGenerationActions
                onNextPrompt={handleNextPrompt}
                onPrevPrompt={handlePrevPrompt}
                onRegenerate={handleRegenerate}
              />
            </InputGroup>
            <Button
              type="submit"
              prevIcon={<img src={sparkles} alt="sparkles" />}
              className="w-full rounded-4xl pt-3.5 pb-3.5"
            >
              Generate BG for 1 credit
            </Button>
          </form>
        </div>
        <div>
          <Typography variant="smallSemibold" className="mb-2.5">
            Your backgrounds
          </Typography>
          <BackgroundList backgrounds={backgrounds} loadingStatus={loadingStatus} />
        </div>
      </DrawerBody>
    </DrawerContent>
  );
}
