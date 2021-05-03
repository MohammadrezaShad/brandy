import useTranslation from 'next-translate/useTranslation';
import { FC } from 'react';

import Delivery from '@/assets/vectors/Delivery.svg';
import Orginal from '@/assets/vectors/Orginal.svg';
import Return from '@/assets/vectors/Return.svg';
import Typography from '@/components/shared/typography';
import { typographyColor, typographyVariant } from '@/constants/typography-config';

import * as S from './card-guide.styled';

const CardGuide: FC = () => {
  const { t } = useTranslation('common');
  return (
    <S.Wrapper>
      <Typography variant={typographyVariant.SUBTITLE_MD_NORMAL} color={typographyColor.PRIMARY} gutterBottom={2}>
        {t('cardGuide')}
      </Typography>
      <S.Tags>
        <S.TagWrap>
          <S.Tag>
            <Orginal />
          </S.Tag>
          <Typography variant={typographyVariant.SUBTITLE_XS_NORMAL} color={typographyColor.PRIMARY} gutterTop={1}>
            {t('productOriginalProductWarranty')}
          </Typography>
        </S.TagWrap>
        <S.TagWrap>
          <S.Tag>
            <Return />
          </S.Tag>
          <Typography variant={typographyVariant.SUBTITLE_XS_NORMAL} color={typographyColor.PRIMARY} gutterTop={1}>
            {t('productReturnWarranty')}
          </Typography>
        </S.TagWrap>
        <S.TagWrap>
          <S.Tag>
            <Delivery />
          </S.Tag>
          <Typography variant={typographyVariant.SUBTITLE_XS_NORMAL} color={typographyColor.PRIMARY} gutterTop={1}>
            {t('fastAndEasyDelivery')}
          </Typography>
        </S.TagWrap>
      </S.Tags>
    </S.Wrapper>
  );
};

export default CardGuide;
