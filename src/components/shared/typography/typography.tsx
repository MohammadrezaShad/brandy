/* eslint-disable import/extensions */
import React, { FC } from 'react';

import {
  typographyColor,
  typographyComponent,
  typographyDisplay,
  typographyVariant,
} from '@/constants/typography-config';

import * as S from './typography.styled';

type TypographyProps = {
  children?: unknown;
  gutter?: number;
  gutterLeft?: number;
  gutterRight?: number;
  gutterTop?: number;
  gutterBottom?: number;
  variant?: string;
  component?: React.ElementType | keyof JSX.IntrinsicElements | string;
  display?: string;
  color?: string;
  align?: string;
  nowWrap?: boolean;
};

const Typography: FC<TypographyProps> = ({
  variant = typographyVariant.BODY_MD_NORMAL,
  component = typographyComponent.SPAN,
  display = typographyDisplay.INLINE_Block,
  color = typographyColor.ON_SURFACE,
  children,
  gutter,
  gutterLeft,
  gutterRight,
  gutterTop,
  gutterBottom,
  align,
  nowWrap,
  ...restProps
}) => (
  <>
    <S.Text
      as={component}
      display={display}
      color={color}
      variant={variant}
      gutter={gutter}
      gutterLeft={gutterLeft}
      gutterRight={gutterRight}
      gutterTop={gutterTop}
      gutterBottom={gutterBottom}
      $align={align}
      $nowWrap={nowWrap}
      {...restProps}
    >
      {children}
    </S.Text>
  </>
);

export default Typography;
