import { useState } from 'react';

import ArrowRight from '@/assets/vectors/F-Right.svg';
import Tabs from '@/components/shared/tabs';

import * as S from './card-header.styled';

const CardHeader = () => {
  const [selectedTabIndex, setSelectedTabIndex] = useState(0);
  const handleTabChange = (tabIndex) => {
    setSelectedTabIndex(tabIndex);
  };
  return (
    <S.Head>
      <S.ArrowRight as={ArrowRight} />
      <S.TabWrap>
        <Tabs
          tabItems={[
            { id: 1, text: 'ســبد خـرید' },
            { id: 2, text: 'علاقه‌مندی‌ها' },
          ]}
          selectedTabIndex={selectedTabIndex}
          handleTabChange={handleTabChange}
          border={false}
          spaceAround
        />
      </S.TabWrap>
    </S.Head>
  );
};

export default CardHeader;
