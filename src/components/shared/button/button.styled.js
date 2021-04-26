import styled from 'styled-components';

import { buttonColors, buttonSizes, buttonVariants } from '@/constants/button-config';

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: ${({ theme }) => theme.defaults.borderRadiusVariant};
  text-decoration: none;
  white-space: ${({ textWrap }) => (textWrap ? 'normal' : 'nowrap')};
  cursor: pointer;
  width: ${({ matchParent }) => (matchParent ? '100%' : null)};
  opacity: ${({ $disabled }) => ($disabled ? '32%' : 1)};
  background-color: ${({ $color, theme, variant }) => {
    if (variant === buttonVariants.OUTLINE || variant === buttonVariants.LINK) {
      return null;
    }
    switch ($color) {
      case buttonColors.ON_SURFACE:
        return ` ${theme.palette.onSurface}`;
      case buttonColors.ERROR:
        return ` ${theme.palette.error}`;
      default:
        return theme.palette.onSecondary;
    }
  }};
  border: ${({ $color, theme, variant }) => {
    if (variant === buttonVariants.FILL || variant === buttonVariants.LINK) {
      return null;
    }
    switch ($color) {
      case buttonColors.ON_SURFACE:
        return `1px solid ${theme.palette.onSurface}`;
      case buttonColors.ERROR:
        return `1px solid ${theme.palette.error}`;

      default:
        return `1px solid ${theme.palette.stroke}`;
    }
  }};
  color: ${({ $color, theme, variant }) => {
    if (variant === buttonVariants.LINK || variant === buttonVariants.OUTLINE) {
      switch ($color) {
        case buttonColors.PRIMARY:
          return theme.palette.onSurface;

        case buttonColors.SECONDARY:
          return theme.palette.onSurface;

        default:
          return theme.palette.onSurface;
      }
    } else {
      switch ($color) {
        default:
          return theme.palette.onSecondary;
      }
    }
  }};
  min-height: ${({ size }) => {
    switch (size) {
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
  padding-right: ${({ size, theme, variant }) => {
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
  padding-left: ${({ size, theme, variant }) => {
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
  ${({ size, theme }) => {
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
