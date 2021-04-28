import CardHeader from './card-header';
import * as S from './card-layout.styled';
import CardProgress from './card-progress';

const CardLayout = ({ children }) => (
  <S.Wrapper>
    <CardHeader />
    <S.CardProgress>
      <CardProgress />
    </S.CardProgress>
    <S.Container>{children}</S.Container>
  </S.Wrapper>
);

export default CardLayout;
