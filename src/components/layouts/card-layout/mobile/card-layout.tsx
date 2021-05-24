import {FC} from 'react';

import CardHeader from './card-header';
import * as S from './card-layout.styled';
import CardProgress from './card-progress';

type CardLayoutProps = {
  children: unknown;
};

const CardLayout: FC<CardLayoutProps> = ({children}) => (
  <S.Wrapper>
    <CardHeader />
    <S.CardProgress>
      <CardProgress />
    </S.CardProgress>
    <S.Container>{children}</S.Container>
  </S.Wrapper>
);

export default CardLayout;
