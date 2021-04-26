import PropTypes from 'prop-types';
import React from 'react';

import { buttonColors, buttonSizes, buttonVariants } from '@/constants/button-config';

import * as S from './button.styled';

const Button = ({
  type,
  size = buttonSizes.MEDIUM,
  variant = buttonVariants.FILL,
  color = buttonColors.ON_SURFACE,
  matchParent,
  text,
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
    {text}
    {children}
  </S.Button>
);

Button.propTypes = {
  type: PropTypes.string,
  size: PropTypes.number,
  variant: PropTypes.number,
  color: PropTypes.number,
  text: PropTypes.string,
  children: PropTypes.node,
  matchParent: PropTypes.bool,
  textWrap: PropTypes.bool,
  onClick: PropTypes.func,
  $disabled: PropTypes.bool,
};

export default Button;
