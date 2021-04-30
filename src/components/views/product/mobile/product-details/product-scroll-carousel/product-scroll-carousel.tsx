import React, { Dispatch, FC, SetStateAction } from 'react';

import ScrollCarousel from '@/components/shared/scroll-carousel/scroll-carousel';

import * as S from './product-scroll-carousel.styled';

type ProductScrollCarouselProps = {
  selectedProductId: number;
  setSelectedProductId: Dispatch<SetStateAction<number>>;
};

const ProductScrollCarousel: FC<ProductScrollCarouselProps> = ({ selectedProductId, setSelectedProductId }) => (
  <S.Wrap>
    <ScrollCarousel>
      {Array.from({ length: 10 }, (_, i) => i + 1).map((id) => (
        <S.Product key={id} selected={selectedProductId === id} onClick={() => setSelectedProductId(id)}>
          <img src="/images/res/Wh.jpg" alt="test" />
        </S.Product>
      ))}
    </ScrollCarousel>
  </S.Wrap>
);

export default ProductScrollCarousel;
