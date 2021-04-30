import React, { FC } from 'react';

import AddBag from '@/assets/vectors/AddBag.svg';
import Toman from '@/assets/vectors/Toman.svg';
import Typography from '@/components/shared/typography';
import { typographyDisplay, typographyVariant } from '@/constants/typography-config';
import IconProvider from '@/providers/icon-provider/icon-provider';

import * as S from './product-item.styled';

type ProductItemProps = {
  colors?: number[];
};

const ProductItem: FC<ProductItemProps> = ({ colors = [1, 2, 3] }) => (
  <S.Wrap>
    <S.Icon as={IconProvider} icon="wishlist" size="20px" />
    <S.ImageWrap>
      <S.Image src="/images/res/TestPic.jpg" alt="test" />
    </S.ImageWrap>
    <S.Bottom>
      <S.BagIcon as={AddBag} />
      <Typography display={typographyDisplay.BLOCK} variant={typographyVariant.HEADLINE1} gutterRight={2}>
        {(5390000).toLocaleString('de-DE')} <Toman />
      </Typography>
    </S.Bottom>
    {colors.length && (
      <S.Colors>
        {colors.map((id: number) => (
          <S.Color key={id} itemId={id} />
        ))}
      </S.Colors>
    )}
  </S.Wrap>
);

export default ProductItem;
