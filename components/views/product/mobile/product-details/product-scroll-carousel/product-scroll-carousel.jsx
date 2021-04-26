import React from 'react';

import ScrollCarousel from '@/components/shared/scroll-carousel/scroll-carousel';

import * as S from './product-scroll-carousel.styled';

const ProductScrollCarousel = ({ selectedProduct, setSelectedProduct }) => (
  <S.Wrap>
    <ScrollCarousel>
      {Array.from({ length: 10 }, (_, i) => i + 1).map((id) => (
        <S.Product key={id} selected={selectedProduct === id} onClick={() => setSelectedProduct(id)}>
          <img src="/images/res/Wh.jpg" alt="test" />
        </S.Product>
      ))}
    </ScrollCarousel>
  </S.Wrap>
);

export default ProductScrollCarousel;
