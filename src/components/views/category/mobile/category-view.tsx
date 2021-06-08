import React, {FC, ReactNode} from 'react';

import CategoryContent from './category-content';
import CategoryList from './category-list';
import * as S from './category-view.styled';

type CategoryViewProps = {
  children?: ReactNode;
};

const CategoryView: FC<CategoryViewProps> = () => (
  <S.Wrapper>
    <S.Wrap>
      <CategoryList />
    </S.Wrap>
    <S.Wrap>
      <CategoryContent />
    </S.Wrap>
  </S.Wrapper>
);

export default CategoryView;
