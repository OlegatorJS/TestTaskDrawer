import { DrawerClose, DrawerHeader, DrawerTitle } from '@/components/ui/Drawer';
import close from '@/assets/images/cross.svg';

export function BackgroundGenerationHeader() {
  return (
    <DrawerHeader className="items-center justify-between mb-6">
      <DrawerTitle>Change background</DrawerTitle>
      <DrawerClose>
        <img src={close} alt="cross" width={24} height={24} />
      </DrawerClose>
    </DrawerHeader>
  );
}
