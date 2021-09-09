import React, {FC, ReactNode} from 'react';

import PageHead from '@/shared/page-head';
import Tabs from '@/shared/tabs';

import * as S from './review-head.styled';

interface ReviewHeadProps {
  children?: ReactNode;
  selectedTabIndex: number;
  handleTabChange: (tabIndex: number) => void;
}

const ReviewHead: FC<ReviewHeadProps> = ({
  selectedTabIndex,
  handleTabChange,
}) => (
  <S.Wrap>
    <PageHead hasBorder={false}>نقد و نظرات</PageHead>
    <Tabs
      tabItems={[
        {id: 1, text: 'در انتظار نظر'},
        {id: 2, text: 'نظرات ثبت شده'},
      ]}
      selectedTabIndex={selectedTabIndex}
      handleTabChange={handleTabChange}
      spaceAround
      darkSelect
      lightFontSize
    />
  </S.Wrap>
);

export default ReviewHead;
