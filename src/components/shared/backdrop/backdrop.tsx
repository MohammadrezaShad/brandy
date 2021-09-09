import React, {forwardRef, MouseEvent, ReactNode, Ref} from 'react';

import * as S from './backdrop.styled';

export type ReactMouseEvent<T> = (event: MouseEvent<T>) => void;

export type Component = React.ElementType | keyof JSX.IntrinsicElements;

export interface BackdropTransition {
  enter: number;
  exit: number;
}

export type BackdropProps = {
  children?: ReactNode;
  component?: Component;
  open?: boolean;
  onClose?: ReactMouseEvent<Element>;
  zIndex?: number;
  transition?: BackdropTransition;
  overlayColor?: string;
  overlayAlpha?: number;
};

const Backdrop = forwardRef(
  <T extends HTMLElement = HTMLDivElement>(
    {
      children,
      component,
      open,
      onClose,
      zIndex,
      transition,
      overlayColor,
      overlayAlpha,
    }: BackdropProps,
    ref: Ref<T>,
  ) => (
    <S.Backdrop
      as={component}
      ref={(ref as unknown) as Ref<HTMLDivElement>}
      onClick={onClose}
      $open={open}
      $zIndex={zIndex}
      $transition={transition}
      $overlayColor={overlayColor}
      $overlayAlpha={overlayAlpha}
    >
      {children}
    </S.Backdrop>
  ),
);
Backdrop.displayName = 'Backdrop';

export default Backdrop;
