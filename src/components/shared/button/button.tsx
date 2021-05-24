import PropTypes from 'prop-types';
import React, {FC, MouseEvent} from 'react';

import {
  buttonColors,
  buttonSizes,
  buttonVariants,
} from '@/constants/button-config';

import * as S from './button.styled';

type ButtonProps = {
  type?: 'button' | 'submit' | 'reset';
  size?: number;
  variant?: number;
  color?: number;
  matchParent?: boolean;
  textWrap?: boolean;
  $disabled?: boolean;
  children?: unknown;
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
};

const Button: FC<ButtonProps> = ({
  type,
  size = buttonSizes.MEDIUM,
  variant = buttonVariants.FILL,
  color = buttonColors.ON_SURFACE,
  matchParent,
  textWrap = false,
  onClick,
  children,
  $disabled = false,
  ...restProps
}) => (
  <S.Button
    type={type}
    size={size}
    variant={variant}
    $color={color}
    matchParent={matchParent}
    textWrap={textWrap}
    onClick={onClick}
    $disabled={$disabled}
    {...restProps}
  >
    {children}
  </S.Button>
);

export default Button;
