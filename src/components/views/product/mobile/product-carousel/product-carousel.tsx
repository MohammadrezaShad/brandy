import { FC } from 'react';

import Compare from '@/assets/vectors/Compare.svg';
import Carousel from '@/components/shared/carousel';
import IconProvider from '@/providers/icon-provider/icon-provider';

import * as S from './product-carousel.styled';
import ProductCarouselItem from './product-carousel-item';

const ProductCarousel: FC = () => (
  <S.Wrapper>
    <S.IconWrap>
      <Compare />
    </S.IconWrap>
    <S.IconWrap top>
      <IconProvider icon="wishlist" size="20px" />
    </S.IconWrap>
    <Carousel>
      {Array.from({ length: 5 }, (_, i) => i + 1).map((id) => (
        <ProductCarouselItem key={id} />
      ))}
    </Carousel>
  </S.Wrapper>
);

export default ProductCarousel;
