import {FC, ReactChild, ReactNode, useEffect} from 'react';

import {disableBodyScroll, enableBodyScroll} from '@/utils/toggle-body-scroll';

import * as S from './drawer.styled';

type DrawerProps = {
  children?: ReactNode | ReactChild;
  handleCloseDrawer: () => void;
  openDrawer: boolean;
};

const Drawer: FC<DrawerProps> = ({children, handleCloseDrawer, openDrawer}) => {
  useEffect(() => {
    if (openDrawer) {
      disableBodyScroll();
    } else {
      enableBodyScroll();
    }

    return () => {
      if (openDrawer) {
        enableBodyScroll();
      }
    };
  }, [openDrawer]);
  return (
    <S.Wrapper openDrawer={openDrawer}>
      <S.Backdrop openDrawer={openDrawer} onClick={handleCloseDrawer} />
      <S.Layout openDrawer={openDrawer}>{children}</S.Layout>
    </S.Wrapper>
  );
};

export default Drawer;
