import React, {FC, ReactNode} from 'react';

import {
  typographyDisplay,
  typographyVariant,
} from '@/constants/typography-config';
import Typography from '@/shared/typography';

import * as S from './category-content-list.styled';

type CategoryContentListProps = {
  children?: ReactNode;
};

const CategoryContentList: FC<CategoryContentListProps> = () => (
  <div>
    <Typography
      display={typographyDisplay.BLOCK}
      variant={typographyVariant.BODY_SM_MEDIUM}
    >
      دخــترانه
    </Typography>
    <Typography
      variant={typographyVariant.SUBTITLE_XS_NORMAL}
      display={typographyDisplay.BLOCK}
    >
      برندهای زیر جزء بهترین برندهای پوشاک ترک می باشند.
    </Typography>
    <S.Wrapper>
      {Array.from({length: 6}, (_, i) => i + 1).map(id => (
        <S.Category key={id}>
          <S.ImageWrap>
            <S.Image src='/images/res/TestPic.jpg' alt='test' />
          </S.ImageWrap>
          <Typography
            variant={typographyVariant.SUBTITLE_XS_NORMAL}
            gutterTop={1}
          >
            نام کتگوری
          </Typography>
        </S.Category>
      ))}
    </S.Wrapper>
  </div>
);

export default CategoryContentList;
