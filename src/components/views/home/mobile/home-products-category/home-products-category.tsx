import ScrollCarousel from '@/shared/scroll-carousel';
import React, {FC, ReactNode} from 'react';

import * as S from './home-products-category.styled';

type HomeProductsCategoryProps = {
  children?: ReactNode;
};

const HomeProductsCategory: FC<HomeProductsCategoryProps> = () => (
  <S.Wrapper>
    <S.Wrap>
      <S.Product />
      <S.Product />
      <S.Product />
    </S.Wrap>
    <S.Banner />
    <S.ThumnailWrap>
      <ScrollCarousel>
        {Array.from({length: 15}, (_, i) => i + 1).map(id => (
          <S.Thumnail key={id} />
        ))}
      </ScrollCarousel>
    </S.ThumnailWrap>
    <S.Banner />
  </S.Wrapper>
);

export default HomeProductsCategory;
