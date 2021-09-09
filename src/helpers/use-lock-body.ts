/* Utils */
import {useEffect} from 'react';

import {disableBodyScroll, enableBodyScroll} from '@/utils/toggle-body-scroll';

import {useScrollbarWidth} from './use-scrollbar-width';

export const useLockBody = (isLocked: boolean) => {
  const sbw = useScrollbarWidth();
  useEffect(() => {
    if (isLocked) {
      disableBodyScroll();
    } else {
      enableBodyScroll();
    }
    return () => {
      if (isLocked) {
        enableBodyScroll();
      }
    };
  }, [isLocked, sbw]);
};
