import React, {FC} from 'react';

import AddBag from '@/assets/vectors/AddBag.svg';
import Toman from '@/assets/vectors/Toman.svg';
import {typographyVariant} from '@/constants/typography-config';
import IconProvider from '@/providers/icon-provider/icon-provider';
import ScrollCarousel from '@/shared/scroll-carousel';
import Typography from '@/shared/typography';

import * as S from './home-special-offer.styled';

type HomeSpecialOfferProps = {
  colors?: number[];
};

const HomeSpecialOffer: FC<HomeSpecialOfferProps> = ({colors = [1, 2, 3]}) => (
  <S.Wrapper>
    <Typography gutterBottom={1}>پیشــنهادات شگفت انگیز</Typography>
    <S.Products>
      <ScrollCarousel>
        {Array.from({length: 15}, (_, i) => i + 1).map(id => (
          <S.Product key={id} />
        ))}
      </ScrollCarousel>
    </S.Products>
    <S.Container>
      <S.ProductItem>
        <S.Icon as={IconProvider} icon='wishlist' size='20px' />
      </S.ProductItem>
      <S.ProductDetail>
        <Typography variant={typographyVariant.BODY_MD_MEDIUM}>
          کفش اسپرت دخترانه از برند نایک
        </Typography>
        {colors.length && (
          <S.Colors>
            {colors.map((id: number) => (
              <S.Color key={id} itemId={id} />
            ))}
          </S.Colors>
        )}
        <S.ProductDetailBottom>
          <S.BagIcon as={AddBag} />
          <Typography variant={typographyVariant.HEADLINE1}>
            {(567000).toLocaleString('de-DE')} <Toman />
          </Typography>
        </S.ProductDetailBottom>
      </S.ProductDetail>
    </S.Container>
    <S.Wrap>
      <S.Block />
      <S.Block />
    </S.Wrap>
    <S.Bottom />
  </S.Wrapper>
);

export default HomeSpecialOffer;
