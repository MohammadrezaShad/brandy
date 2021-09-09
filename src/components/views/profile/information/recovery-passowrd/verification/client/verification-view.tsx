import React, {FC, ReactNode} from 'react';

import * as S from './verification-view.styled';

interface VerificationProps {
  children?: ReactNode;
}

const Verification: FC<VerificationProps> = props => {
  console.log('Verification');
  return <S.Wrap>Verification</S.Wrap>;
};

export default Verification;
