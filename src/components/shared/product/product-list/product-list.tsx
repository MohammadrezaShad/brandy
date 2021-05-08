import ProductItem from '@/shared/product/product-item';

import * as S from './product-list.styled';

const ProductList = () => (
  <S.Wrapper>
    <S.Container>
      <S.Product>
        <ProductItem />
      </S.Product>
      <S.Product>
        <ProductItem />
      </S.Product>
      <S.Product>
        <ProductItem />
      </S.Product>
      <S.Product>
        <ProductItem />
      </S.Product>
    </S.Container>
  </S.Wrapper>
);

export default ProductList;
