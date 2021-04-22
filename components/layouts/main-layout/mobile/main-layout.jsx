import React from 'react';

import Header from '@/layouts/main-layout/mobile/header';

import * as S from './main-layout.styled';

const MainLayout = ({ children }) => (
  <S.Wrapper>
    <Header />
    <S.Container>{children}</S.Container>
  </S.Wrapper>
);

export default MainLayout;
