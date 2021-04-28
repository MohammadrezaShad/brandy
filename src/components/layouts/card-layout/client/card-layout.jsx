import * as S from './card-layout.styled';

const CardLayout = ({ children }) => (
  <S.Wrapper>
    desktop
    <S.Container>{children}</S.Container>
  </S.Wrapper>
);

export default CardLayout;
