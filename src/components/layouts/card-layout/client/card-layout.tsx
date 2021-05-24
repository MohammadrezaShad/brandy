import {FC} from 'react';

import * as S from './card-layout.styled';

type CardLayoutProps = {
  children: unknown;
};

const CardLayout: FC<CardLayoutProps> = ({children}) => (
  <S.Wrapper>
    desktop
    <S.Container>{children}</S.Container>
  </S.Wrapper>
);

export default CardLayout;
