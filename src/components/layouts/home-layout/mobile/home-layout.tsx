import {FC} from 'react';

import Footer from './footer';
import Header from './header';
import * as S from './home-layout.styled';

type HomeLayoutProps = {
  children: unknown;
};
const HomeLayout: FC<HomeLayoutProps> = ({children}) => (
  <S.Wrapper>
    <Header />
    <S.Container>{children}</S.Container>
    <Footer />
  </S.Wrapper>
);

export default HomeLayout;
