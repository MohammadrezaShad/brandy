import {FC} from 'react';

import * as S from './brand-layout.styled';

type BrandLayoutProps = {
  children: unknown;
};
const BrandLayout: FC<BrandLayoutProps> = ({children}) => {
  console.log('BrandLayout');
  return (
    <S.Wrapper>
      <S.Container>{children}</S.Container>
    </S.Wrapper>
  );
};

export default BrandLayout;
