import React from 'react';
import { v4 } from 'uuid';

import CardIcon from '@/assets/vectors/Bag.svg';
import Logo from '@/assets/vectors/Logo.svg';
import IconProvider from '@/providers/icon-provider/icon-provider';

import * as S from './header.styled';

const Header = () => (
  <S.Wrapper>
    <S.Content>
      <S.MenuIcon>
        {Array(3)
          .fill()
          .map(() => (
            <S.MenuIconLayout key={v4()} />
          ))}
      </S.MenuIcon>
      <S.HeaderIcon as={IconProvider} icon="search" size="20px" />
      <S.LogoWrap>
        <Logo />
      </S.LogoWrap>
      <S.HeaderIcon as={IconProvider} icon="wishlist" size="20px" />
      <S.HeaderIcon as={CardIcon} />
    </S.Content>
  </S.Wrapper>
);

export default Header;
