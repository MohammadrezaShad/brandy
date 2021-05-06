import { FC, ReactChild, useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

import { canUseDOM } from '@/utils/can-use-dom';
import { disableBodyScroll, enableBodyScroll } from '@/utils/toggle-body-scroll';

import * as S from './dialog.styled';

type DialogProps = {
  open: boolean;
  onClose: () => void;
  children: unknown | string | ReactChild;
};

const Dialog: FC<DialogProps> = ({ open, onClose, children }) => {
  const [isDialogShow, setIsDialogShow] = useState<boolean>(false);

  const handleCloseDialog = (): void => {
    setIsDialogShow(false);
    onClose();
  };

  useEffect(() => {
    setIsDialogShow(open);

    if (open) {
      disableBodyScroll();
    } else {
      enableBodyScroll();
    }

    return () => {
      if (isDialogShow) {
        enableBodyScroll();
      }
    };
  }, [open, isDialogShow]);

  if (!canUseDOM()) {
    return null;
  }

  if (!isDialogShow) {
    return null;
  }
  return createPortal(
    <S.Wrap>
      <S.Layout>
        <S.Backdrop onClick={handleCloseDialog} />
        <S.Container>{children}</S.Container>
      </S.Layout>
    </S.Wrap>,
    typeof document !== 'undefined' ? document.getElementById('portal') : null,
  );
};

export default Dialog;
