import { Drawer, DrawerTrigger } from '@/components/ui/Drawer';
import { BackgroundGenerationPanel } from '@/features/background-generation';

export function App() {
  return (
    <Drawer direction="right">
      <DrawerTrigger>Open</DrawerTrigger>
      <BackgroundGenerationPanel />
    </Drawer>
  );
}
