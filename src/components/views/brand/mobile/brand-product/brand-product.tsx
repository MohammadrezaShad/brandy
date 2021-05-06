import ProductItem from '@/shared/product-item';

import * as S from './brand-product.styled';

const BrandProduct = () => {
  console.log('brandproduct');
  return (
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
};

export default BrandProduct;
