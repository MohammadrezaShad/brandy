import convert from 'color-convert';
import styled from 'styled-components';

import {
  buttonColors,
  buttonSizes,
  buttonVariants,
} from '@/constants/button-config';

type ButtonProps = {
  type?: 'button' | 'submit' | 'reset';
  size?: number;
  variant?: number;
  $color?: number;
  matchParent?: boolean;
  textWrap?: boolean;
  $disabled?: boolean;
};

export const Button = styled.button<ButtonProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: ${({theme}) => theme.defaults.borderRadiusVariant};
  text-decoration: none;
  white-space: ${({textWrap}) => (textWrap ? 'normal' : 'nowrap')};
  cursor: pointer;
  width: ${({matchParent}) => (matchParent ? '100%' : null)};
  opacity: ${({$disabled}) => ($disabled ? '32%' : 1)};
  background-color: ${({$color, theme, variant}) => {
    if (variant === buttonVariants.LINK) {
      return null;
    }
    if (variant === buttonVariants.OUTLINE) {
      return `rgb(${convert.hex.rgb(theme.palette.onSuccess)},0.05)`;
    }
    switch ($color) {
      case buttonColors.ON_SURFACE:
        return ` ${theme.palette.onSurface}`;
      case buttonColors.ERROR:
        return ` ${theme.palette.error}`;
      case buttonColors.STROKE:
        return ` ${theme.palette.stroke}`;
      default:
        return theme.palette.onSecondary;
    }
  }};
  border: ${({$color, theme, variant}) => {
    if (variant === buttonVariants.FILL || variant === buttonVariants.LINK) {
      return null;
    }
    switch ($color) {
      case buttonColors.ON_SURFACE:
        return `1px solid rgb(${convert.hex.rgb(theme.palette.onSuccess)},0.2)`;
      case buttonColors.ERROR:
        return `1px solid ${theme.palette.error}`;

      default:
        return `1px solid ${theme.palette.onSuccess}`;
    }
  }};
  color: ${({$color, theme, variant}) => {
    if (variant === buttonVariants.LINK || variant === buttonVariants.OUTLINE) {
      switch ($color) {
        case buttonColors.ON_SURFACE:
          return theme.palette.onSurface;

        case buttonColors.ERROR:
          return theme.palette.onSuccess;

        default:
          return theme.palette.onSuccess;
      }
    } else {
      switch ($color) {
        case buttonColors.STROKE:
          return theme.palette.onSurface;
        default:
          return theme.palette.onSecondary;
      }
    }
  }};
  min-height: ${({size}) => {
    switch (size) {
      case buttonSizes.LARGE:
        return '46px';
      case buttonSizes.MEDIUM:
        return '40px';

      case buttonSizes.S_MEDIUM:
        return '30px';

      case buttonSizes.SMALL:
        return '24px';

      default:
        return '45px';
    }
  }};
  padding-right: ${({size, theme, variant}) => {
    if (variant === buttonVariants.LINK) {
      return null;
    }
    switch (size) {
      case buttonSizes.MEDIUM:
        return theme.dim[4];

      case buttonSizes.S_MEDIUM:
        return theme.dim[3];

      case buttonSizes.SMALL:
        return theme.dim[1];

      default:
        return theme.dim[8];
    }
  }};
  padding-left: ${({size, theme, variant}) => {
    if (variant === buttonVariants.LINK) {
      return null;
    }
    switch (size) {
      case buttonSizes.MEDIUM:
        return theme.dim[4];

      case buttonSizes.S_MEDIUM:
        return theme.dim[3];

      case buttonSizes.SMALL:
        return theme.dim[1];

      default:
        return theme.dim[8];
    }
  }};
  ${({size, theme}) => {
    switch (size) {
      case buttonSizes.MEDIUM:
        return theme.typography.bodyMdMedium;

      case buttonSizes.S_MEDIUM:
        return theme.typography.bodyMdNormal;

      case buttonSizes.SMALL:
        return theme.typography.bodySmMedium;

      default:
        return theme.typography.bodyMdMedium;
    }
  }}
`;
