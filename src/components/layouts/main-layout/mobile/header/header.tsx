import React, {FC, useState} from 'react';

import CardIcon from '@/assets/vectors/Bag.svg';
import Logo from '@/assets/vectors/Logo.svg';
import IconProvider from '@/providers/icon-provider/icon-provider';
import Tabs from '@/shared/tabs';

import * as S from './header.styled';

const Header: FC = () => {
  const [selectedTabIndex, setSelectedTabIndex] = useState(0);
  const handleTabChange = (tabIndex: number): void => {
    setSelectedTabIndex(tabIndex);
  };
  return (
    <>
      <S.Wrapper>
        <S.Content>
          <S.MenuIcon>
            {Array.from({length: 3}, (_, i) => i + 1).map(id => (
              <S.MenuIconLayout key={id} />
            ))}
          </S.MenuIcon>
          <S.HeaderIcon as={IconProvider} icon='search' size='20px' />
          <S.LogoWrap>
            <Logo />
          </S.LogoWrap>
          <S.HeaderIcon as={IconProvider} icon='wishlist' size='20px' />
          <S.HeaderIcon as={CardIcon} />
        </S.Content>
      </S.Wrapper>
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
