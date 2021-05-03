import useTranslation from 'next-translate/useTranslation';
import React, { Dispatch, FC, SetStateAction } from 'react';

import { typographyAlign, typographyColor, typographyDisplay, typographyVariant } from '@/constants/typography-config';
import Typography from '@/shared/typography';

import { GatewayValues } from '../payment-view';
import * as S from './payment-gateway.styled';

type PaymentGatewayProps = {
  selectedGatewayId: GatewayValues;
  setSelectedGatewayId: Dispatch<SetStateAction<GatewayValues>>;
};

const PaymentGateway: FC<PaymentGatewayProps> = ({ selectedGatewayId, setSelectedGatewayId }) => {
  const { t } = useTranslation('common');
  return (
    <>
      <Typography gutterBottom={2} display={typographyDisplay.BLOCK} variant={typographyVariant.BODY_MD_MEDIUM}>
        {t('gateway')}
      </Typography>
      <S.Wrapper>
        <S.Container>
          <S.Wrap>
            <S.Block
              onClick={() => setSelectedGatewayId(GatewayValues.Mellat)}
              selected={selectedGatewayId === GatewayValues.Mellat}
            >
              <S.Image src="/images/res/Bank.jpg" alt="Bank Mellat" />
            </S.Block>
            <Typography
              color={selectedGatewayId === GatewayValues.Mellat ? typographyColor.ON_SUCCESS : typographyColor.PRIMARY}
              gutterTop={2}
              display={typographyDisplay.BLOCK}
              align={typographyAlign.CENTER}
            >
              {t('mellatBank')}
            </Typography>
          </S.Wrap>
          <S.Wrap>
            <S.Block
              onClick={() => setSelectedGatewayId(GatewayValues.Saman)}
              selected={selectedGatewayId === GatewayValues.Saman}
            >
              <S.Image src="/images/res/Bank.jpg" alt="Bank Saman" />
            </S.Block>
            <Typography
              color={selectedGatewayId === GatewayValues.Saman ? typographyColor.ON_SUCCESS : typographyColor.PRIMARY}
              gutterTop={2}
              display={typographyDisplay.BLOCK}
              align={typographyAlign.CENTER}
            >
              {t('samanBank')}
            </Typography>
          </S.Wrap>
          <S.Wrap>
            <S.Block
              onClick={() => setSelectedGatewayId(GatewayValues.IDPay)}
              selected={selectedGatewayId === GatewayValues.IDPay}
            >
              <S.Image src="/images/res/Bank.jpg" alt="IDPay" />
            </S.Block>
            <Typography
              color={selectedGatewayId === GatewayValues.IDPay ? typographyColor.ON_SUCCESS : typographyColor.PRIMARY}
              gutterTop={2}
              display={typographyDisplay.BLOCK}
              align={typographyAlign.CENTER}
            >
              {t('idPay')}
            </Typography>
          </S.Wrap>
        </S.Container>
      </S.Wrapper>
    </>
  );
};

export default PaymentGateway;
