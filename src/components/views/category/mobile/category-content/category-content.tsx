import React, {FC, ReactNode} from 'react';

import * as S from './category-content.styled';
import CategoryContentList from './category-content-list';

type CategoryContentProps = {
  children?: ReactNode;
};

const CategoryContent: FC<CategoryContentProps> = () => (
  <S.Wrapper>
    <S.Banner>
      <S.BannerImage src='/images/res/Banner.png' alt='test' />
    </S.Banner>
    <S.Block>
      <CategoryContentList />
    </S.Block>
  </S.Wrapper>
);

export default CategoryContent;
