import React, {FC, ReactNode} from 'react';

import * as S from './recovery-passowrd.styled';

interface RecoveryPassowrdProps {
  children?: ReactNode;
}

const RecoveryPassowrd: FC<RecoveryPassowrdProps> = props => {
  console.log('RecoveryPassowrd');
  return <S.Wrap>RecoveryPassowrdProps</S.Wrap>;
};

export default RecoveryPassowrd;
