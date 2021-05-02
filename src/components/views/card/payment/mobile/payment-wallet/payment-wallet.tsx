import React, { Dispatch, FC, SetStateAction } from 'react';
import { useTranslation } from 'react-i18next';

import Wallet from '@/assets/vectors/Wallet.svg';
import { typographyColor, typographyDisplay, typographyVariant } from '@/constants/typography-config';
import Radio from '@/shared/form/radio';
import Typography from '@/shared/typography';

import { GatewayValues } from '../payment-view';
import * as S from './payment-wallet.styled';

type PaymentWalletProps = {
  selectedGatewayId: GatewayValues;
  setSelectedGatewayId: Dispatch<SetStateAction<GatewayValues>>;
};

const PaymentWallet: FC<PaymentWalletProps> = ({ selectedGatewayId, setSelectedGatewayId }) => {
  const { t } = useTranslation();
  return (
    <S.Wrap>
      <Radio
        checked={selectedGatewayId === GatewayValues.Wallet}
        onChange={() => setSelectedGatewayId(GatewayValues.Wallet)}
      />
      <S.IconWrap>
        <Wallet />
      </S.IconWrap>
      <S.Content>
        <Typography gutterBottom={1} variant={typographyVariant.BODY_MD_MEDIUM} display={typographyDisplay.BLOCK}>
          {t('walletWithdraw')}
        </Typography>
        <Typography
          color={typographyColor.PRIMARY}
          variant={typographyVariant.BODY_SM_MEDIUM}
          display={typographyDisplay.BLOCK}
        >
          {t('inventory')} : {(5390000).toLocaleString('de-DE')} {t('currency')}
        </Typography>
      </S.Content>
    </S.Wrap>
  );
};

export default PaymentWallet;
