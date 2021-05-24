import React, {FC} from 'react';

import CardIcon from '@/assets/vectors/Bag.svg';
import Logo from '@/assets/vectors/Logo.svg';
import IconProvider from '@/providers/icon-provider/icon-provider';

import * as S from './header.styled';

const Header: FC = () => (
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
);

export default Header;
