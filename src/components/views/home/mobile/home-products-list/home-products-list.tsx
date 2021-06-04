import React, {FC, ReactNode} from 'react';

import Toman from '@/assets/vectors/Toman.svg';
import {buttonVariants} from '@/constants/button-config';
import {typographyVariant} from '@/constants/typography-config';
import IconProvider from '@/providers/icon-provider/icon-provider';
import Button from '@/shared/button';
import Typography from '@/shared/typography';

import * as S from './home-products-list.styled';

type HomeProductsListProps = {
  children?: ReactNode;
};

const HomeProductsList: FC<HomeProductsListProps> = () => (
  <S.Wrapper>
    <Typography variant={typographyVariant.BODY_MD_MEDIUM} gutterBottom={2}>
      عنوان این دسته محصولات
    </Typography>
    <S.Wrap>
      {Array.from({length: 8}, (_, i) => i + 1).map(id => (
        <S.ProductWrap key={id}>
          <S.Product>
            <S.Icon as={IconProvider} icon='wishlist' size='20px' />
          </S.Product>
          <Typography gutterTop={1} variant={typographyVariant.HEADLINE1}>
            {(567000).toLocaleString('de-DE')} <Toman />
          </Typography>
        </S.ProductWrap>
      ))}
    </S.Wrap>
    <S.ShowMore>
      <Button variant={buttonVariants.OUTLINE_DARK}>نمایش بیشتر</Button>
    </S.ShowMore>
  </S.Wrapper>
);

export default HomeProductsList;
