import { FC, useState } from 'react';

import ArrowRight from '@/assets/vectors/F-Right.svg';
import Tabs from '@/components/shared/tabs';

import * as S from './card-header.styled';

const CardHeader: FC = () => {
  const [selectedTabIndex, setSelectedTabIndex] = useState<number>(0);
  const handleTabChange = (tabIndex: number): void => {
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
