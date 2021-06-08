import React, {FC, ReactNode} from 'react';

import {buttonColors, buttonVariants} from '@/constants/button-config';
import Button from '@/shared/button';

import * as S from './category-list.styled';

type CategoryListProps = {
  children?: ReactNode;
};

const CategoryList: FC<CategoryListProps> = () => (
  <S.Wrapper>
    <Button>جدیـد</Button>
    <Button variant={buttonVariants.FILL} color={buttonColors.BACK}>
      ورزشـی
    </Button>
    <Button variant={buttonVariants.FILL} color={buttonColors.BACK}>
      پیـراهن
    </Button>
  </S.Wrapper>
);

export default CategoryList;
