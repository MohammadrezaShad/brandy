import useTranslation from 'next-translate/useTranslation';

import Typography from '@/components/shared/typography';
import { typographyColor } from '@/constants/typography-config';

import * as S from './card-pay-info.styled';

const CardPayInfo = () => {
  const { t } = useTranslation('common');
  return (
    <S.Wrapper>
      <S.Wrap>
        <Typography gutterLeft={1}> {t('finalPrice')} </Typography>
        <Typography>
          {(5390000).toLocaleString('de-DE')} {t('currency')}
        </Typography>
      </S.Wrap>
      <S.Wrap>
        <Typography gutterLeft={1}>{t('productDiscount')}</Typography>
        <Typography>
          {(5390000).toLocaleString('de-DE')} {t('currency')}
        </Typography>
      </S.Wrap>
      <S.Wrap>
        <Typography color={typographyColor.SUCCESS} gutterLeft={1}>
          {t('sendCost')}
        </Typography>
        <Typography color={typographyColor.SUCCESS}>
          {(5390000).toLocaleString('de-DE')} {t('currency')}
        </Typography>
      </S.Wrap>
    </S.Wrapper>
  );
};

export default CardPayInfo;
