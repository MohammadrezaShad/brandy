import {useRouter} from 'next/router';
import React, {FC, ReactNode, useState} from 'react';

import ArrowRight from '@/assets/vectors/F-Right.svg';
import Tabs from '@/shared/tabs';
import Typography from '@/shared/typography';

import * as S from './wallet.styled';
import WalletContent from './wallet-content/wallet-content';
import WalletLog from './wallet-log';

interface WalletProps {
  children?: ReactNode;
}

const Wallet: FC<WalletProps> = props => {
  const {back} = useRouter();

  const [selectedTabIndex, setSelectedTabIndex] = useState(0);
  const handleTabChange = (tabIndex: number): void => {
    setSelectedTabIndex(tabIndex);
  };
  console.log('wallet');
  return (
    <S.Wrap>
      <S.Head>
        <S.ArrowRight as={ArrowRight} onClick={() => back()} />
        <S.Tabs>
          <Tabs
            tabItems={[
              {id: 1, text: 'کیف پول'},
              {id: 2, text: 'سوابق تراکنش ها'},
            ]}
            spaceAround
            lightFontSize
            darkSelect
            selectedTabIndex={selectedTabIndex}
            handleTabChange={handleTabChange}
          />
        </S.Tabs>
      </S.Head>
      <S.Content>
        {selectedTabIndex === 0 ? <WalletContent /> : <WalletLog />}
      </S.Content>
    </S.Wrap>
  );
};

export default Wallet;
