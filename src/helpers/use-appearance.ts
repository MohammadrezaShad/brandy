import { useState } from 'react';

import { AppearanceModes } from '@/constants/appearance-modes';

export function useAppearance() {
  const [isAppearanceModalShow, setIsAppearanceModalShow] = useState<boolean>(false);
  const [appearanceMode, setAppearanceMode] = useState(AppearanceModes.VIEW_TWO);

  const handleCloseAppearanceModal = () => {
    setIsAppearanceModalShow(false);
  };
  const handleOpenAppearanceModal = () => {
    setIsAppearanceModalShow(true);
  };
  return {
    isAppearanceModalShow,
    setIsAppearanceModalShow,
    appearanceMode,
    setAppearanceMode,
    handleCloseAppearanceModal,
    handleOpenAppearanceModal,
  };
}
