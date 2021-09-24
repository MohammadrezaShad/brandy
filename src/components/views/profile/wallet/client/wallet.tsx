import React, {FC, ReactNode} from 'react';

import * as S from './wallet.styled';

interface WalletProps {
  children?: ReactNode;
}

const Wallet: FC<WalletProps> = props => {
  console.log('wallet');
  return <S.Wrap>wallet</S.Wrap>;
};

export default Wallet;
