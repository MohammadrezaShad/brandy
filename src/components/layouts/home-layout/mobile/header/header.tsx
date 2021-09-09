import React, {FC, useState} from 'react';

import Tabs from '@/shared/tabs';

import * as S from './header.styled';

const Header: FC = () => {
  const [selectedTabIndex, setSelectedTabIndex] = useState(0);
  const handleTabChange = (tabIndex: number): void => {
    setSelectedTabIndex(tabIndex);
  };
  return (
    <>
      <S.TabsWrap>
        <Tabs
          tabItems={[
            {id: 1, text: 'مردانه'},
            {id: 2, text: 'زنـانه'},
            {id: 3, text: 'کودکانه'},
            {id: 4, text: 'کفش'},
            {id: 5, text: 'جدید'},
          ]}
          lightFontSize
          darkSelect
          selectedTabIndex={selectedTabIndex}
          handleTabChange={handleTabChange}
        />
      </S.TabsWrap>
    </>
  );
};

export default Header;
