import {FC} from 'react';

import * as S from './home-layout.styled';

type HomeLayoutProps = {
  children: unknown;
};
const HomeLayout: FC<HomeLayoutProps> = ({children}) => {
  console.log('HomeLayout');
  return (
    <S.Wrapper>
      <S.Container>{children}</S.Container>
    </S.Wrapper>
  );
};

export default HomeLayout;
