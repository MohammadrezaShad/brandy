import React, {FC} from 'react';

import Footer from './footer';
import Header from './header';
import * as S from './main-layout.styled';

type MainLayoutProps = {
  children: unknown;
};

const MainLayout: FC<MainLayoutProps> = ({children}) => (
  <S.Wrapper>
    <Header />
    <S.Container>{children}</S.Container>
    <Footer />
  </S.Wrapper>
);

export default MainLayout;
