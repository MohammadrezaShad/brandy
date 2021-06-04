import React, {FC, ReactNode} from 'react';

import {typographyVariant} from '@/constants/typography-config';
import Typography from '@/shared/typography';

import * as S from './home-categories.styled';

type HomeCategoriesProps = {
  children?: ReactNode;
};

const HomeCategories: FC<HomeCategoriesProps> = () => (
  <S.Wrapper>
    <Typography variant={typographyVariant.BODY_MD_MEDIUM} gutterBottom={2}>
      خرید بر اساس دسته‌بندی
    </Typography>
    <S.Wrap>
      {Array.from({length: 8}, (_, i) => i + 1).map(id => (
        <S.Product key={id} />
      ))}
    </S.Wrap>
    <S.Banner />
    <S.Content>
      <Typography variant={typographyVariant.BODY_MD_MEDIUM} gutterBottom={2}>
        عنوان این دسته محصولات
      </Typography>
      <S.Container>
        <S.ThumbnailWrap>
          <S.Thumbnail />
          <Typography gutterTop={1}>متن ورودی</Typography>
        </S.ThumbnailWrap>
        <S.ThumbnailWrap>
          <S.Thumbnail />
          <Typography gutterTop={1}>متن ورودی</Typography>
        </S.ThumbnailWrap>
        <S.ThumbnailWrap>
          <S.Thumbnail />
          <Typography gutterTop={1}>متن ورودی</Typography>
        </S.ThumbnailWrap>
      </S.Container>
    </S.Content>
  </S.Wrapper>
);

export default HomeCategories;
