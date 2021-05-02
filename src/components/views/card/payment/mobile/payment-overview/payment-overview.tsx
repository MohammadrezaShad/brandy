import { Trans, useTranslation } from 'react-i18next';

import { typographyColor, typographyDisplay } from '@/constants/typography-config';
import Typography from '@/shared/typography';

import * as S from './payment-overview.styled';

const PaymentOverview = () => {
  const { t } = useTranslation();
  return (
    <>
      <S.Content>
        <S.Wrap>
          <Typography>{t('finalPrice')}</Typography>
          <Typography>
            {(5390000).toLocaleString('de-DE')} {t('currency')}
          </Typography>
        </S.Wrap>
        <S.Wrap>
          <Typography color={typographyColor.ON_ERROR}>{t('currency')}</Typography>
          <Typography color={typographyColor.ON_ERROR}>
            {(5390000).toLocaleString('de-DE')} -{t('currency')}
          </Typography>
        </S.Wrap>
        <S.Wrap>
          <Typography color={typographyColor.ON_SUCCESS}> {t('wallet')} </Typography>
          <Typography color={typographyColor.ON_SUCCESS}>
            {(5390000).toLocaleString('de-DE')} -{t('currency')}
          </Typography>
        </S.Wrap>
        <S.Separator />
        <S.Wrap>
          <Typography> {t('payableAmount')} </Typography>
          <Typography>
            {(5390000).toLocaleString('de-DE')} {t('currency')}
          </Typography>
        </S.Wrap>
      </S.Content>
      <S.Terms>
        <Typography color={typographyColor.PRIMARY}>
          <Trans
            i18nKey="cardPaymentTerms"
            components={{
              p: <Typography color={typographyColor.ON_SURFACE} display={typographyDisplay.INLINE} />,
              t: <Typography color={typographyColor.ON_SUCCESS} display={typographyDisplay.INLINE} />,
              b: <Typography color={typographyColor.ON_SURFACE} display={typographyDisplay.INLINE} />,
            }}
          />
        </Typography>
      </S.Terms>
    </>
  );
};

export default PaymentOverview;
