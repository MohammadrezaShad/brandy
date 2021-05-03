import useTranslation from 'next-translate/useTranslation';
import { FC, useState } from 'react';

import { buttonSizes } from '@/constants/button-config';
import Button from '@/shared/button';

import PaymentGateway from './payment-gateway';
import PaymentOverview from './payment-overview';
import * as S from './payment-view.stled';
import PaymentWallet from './payment-wallet';

export enum GatewayValues {
  Mellat,
  Saman,
  IDPay,
  Wallet,
}

const PaymentView: FC = () => {
  const [selectedGatewayId, setSelectedGatewayId] = useState(GatewayValues.Mellat);
  const { t } = useTranslation('common');
  return (
    <>
      <S.Wrap>
        <PaymentGateway selectedGatewayId={selectedGatewayId} setSelectedGatewayId={setSelectedGatewayId} />
      </S.Wrap>
      <S.Wrap>
        <PaymentWallet selectedGatewayId={selectedGatewayId} setSelectedGatewayId={setSelectedGatewayId} />
      </S.Wrap>
      <S.Wrap>
        <PaymentOverview />
      </S.Wrap>
      <S.Button>
        <Button matchParent size={buttonSizes.LARGE}>
          {t('completePayment')}
        </Button>
      </S.Button>
    </>
  );
};

export default PaymentView;
