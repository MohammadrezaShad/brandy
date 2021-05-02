import { FC } from 'react';
import { useTranslation } from 'react-i18next';

import SendMethod from '@/assets/vectors/SendMethod.svg';
import Typography from '@/components/shared/typography';
import { typographyColor, typographyDisplay, typographyVariant } from '@/constants/typography-config';

import * as S from './card-send-method.styled';

const CardSendMethod: FC = () => {
  const { t } = useTranslation();
  return (
    <>
      <Typography gutterBottom={2} display={typographyDisplay.BLOCK} variant={typographyVariant.BODY_MD_MEDIUM}>
        {t('sendMethod')}
      </Typography>
      <S.Content>
        <S.IconWrap>
          <SendMethod />
        </S.IconWrap>
        <S.Wrap>
          <Typography variant={typographyVariant.SUBTITLE_XS_NORMAL} gutterBottom={1} display={typographyDisplay.BLOCK}>
            {t('expressMail')}
          </Typography>
          <Typography color={typographyColor.SUCCESS} variant={typographyVariant.SUBTITLE_XS_NORMAL}>
            {t('freeDelivery')}&nbsp;
          </Typography>
          <Typography color={typographyColor.PRIMARY} variant={typographyVariant.SUBTITLE_XS_NORMAL}>
            {t('allOfCountry')}
          </Typography>
        </S.Wrap>
      </S.Content>
    </>
  );
};

export default CardSendMethod;
