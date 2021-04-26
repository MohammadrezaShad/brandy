import React from 'react';

import {
  typographyColor,
  typographyComponent,
  typographyDisplay,
  typographyVariant,
} from '@/constants/typography-config';

import * as S from './typography.styled';

const Typography = ({
  variant = typographyVariant.BODY_MD_NORMAL,
  component = typographyComponent.SPAN,
  display = typographyDisplay.INLINE_Block,
  color = typographyColor.ON_SURFACE,
  text,
  children,
  gutter,
  gutterLeft,
  gutterRight,
  gutterTop,
  gutterBottom,
  ...restProps
}) => (
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
    {...restProps}
  >
    {text}
    {children}
  </S.Text>
);

export default Typography;
