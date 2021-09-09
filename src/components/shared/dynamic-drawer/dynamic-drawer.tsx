import React, {
  forwardRef,
  ReactNode,
  Ref,
  useCallback,
  useEffect,
  useState,
} from 'react';
import {CSSTransition} from 'react-transition-group';

import {useLockBody} from '@/helpers/use-lock-body';

import Backdrop from '../backdrop';
import * as S from './dynamic-drawer.styled';

export type Component = React.ElementType | keyof JSX.IntrinsicElements;

export interface DrawerTransition {
  enter: number;
  exit: number;
}

export type DrawerAnchor = 'bottom' | 'left' | 'right' | 'top';
export type DrawerVariant = 'permanent' | 'persistent' | 'temporary';

export type DrawerProps = {
  children?: ReactNode;
  component?: Component;
  isOpen?: boolean;
  onClose?: () => void;
  zIndex?: number;
  transition?: DrawerTransition;
  anchor?: DrawerAnchor;
  variant?: DrawerVariant;
  overlayColor?: string;
  overlayAlpha?: number;
};

const Drawer = forwardRef(
  <T extends HTMLElement = HTMLDivElement>(
    {
      children,
      component,
      isOpen,
      onClose,
      zIndex,
      transition = {enter: 500, exit: 500},
      variant,
      anchor = 'top',
      overlayAlpha,
      overlayColor,
    }: DrawerProps,
    ref: Ref<T>,
  ) => {
    const [isDrawerShow, setIsDrawerShow] = useState(isOpen);

    useLockBody(!!isDrawerShow);

    useEffect(() => {
      setIsDrawerShow(isOpen);
    }, [isOpen]);

    const closeDrawer = useCallback(() => {
      setIsDrawerShow(false);
      onClose && onClose();
    }, [onClose]);

    return (
      <S.Drawer
        as={component}
        ref={(ref as unknown) as Ref<HTMLDivElement>}
        $isOpen={isDrawerShow}
        $zIndex={zIndex}
        $transition={transition}
        $variant={variant}
        $anchor={anchor}
      >
        <Backdrop
          onClose={closeDrawer}
          open={isDrawerShow}
          overlayColor={overlayColor}
          overlayAlpha={overlayAlpha}
          transition={transition}
        />
        <CSSTransition
          unmountOnExit
          mountOnEnter
          in={isDrawerShow}
          timeout={transition}
          classNames='drawer'
          appear
        >
          <S.Layout
            $isOpen={!!isDrawerShow}
            $anchor={anchor}
            $zIndex={zIndex as number}
          >
            {children}
          </S.Layout>
        </CSSTransition>
      </S.Drawer>
    );
  },
);
Drawer.displayName = 'Drawer';

export default Drawer;
