import useTranslation from 'next-translate/useTranslation';
import React from 'react';

import {typographyVariant} from '@/constants/typography-config';
import Typography from '@/shared/typography';

import * as S from './product-survey.styled';

const ProductSurvey = () => {
  const {t} = useTranslation('common');
  return (
    <S.Content>
      <Typography variant={typographyVariant.BODY_SM_MEDIUM} gutterBottom={3}>
        {t('sizeQuestion')}
      </Typography>

      <S.TextWrap>
        <Typography variant={typographyVariant.SUBTITLE_XS_NORMAL}>
          کوچـک
        </Typography>
        <S.RateProgressTrack>
          <S.RateProgress progress='25%' />
        </S.RateProgressTrack>
        <Typography
          gutterRight={1}
          variant={typographyVariant.SUBTITLE_XS_NORMAL}
        >
          25%
        </Typography>
      </S.TextWrap>
      <S.TextWrap>
        <Typography variant={typographyVariant.SUBTITLE_XS_NORMAL}>
          مناسب
        </Typography>
        <S.RateProgressTrack secondary>
          <S.RateProgress secondary progress='25%' />
        </S.RateProgressTrack>
        <Typography
          gutterRight={1}
          variant={typographyVariant.SUBTITLE_XS_NORMAL}
        >
          25%
        </Typography>
      </S.TextWrap>
      <S.TextWrap>
        <Typography variant={typographyVariant.SUBTITLE_XS_NORMAL}>
          بزرگ
        </Typography>
        <S.RateProgressTrack>
          <S.RateProgress progress='50%' />
        </S.RateProgressTrack>
        <Typography
          gutterRight={1}
          variant={typographyVariant.SUBTITLE_XS_NORMAL}
        >
          50%
        </Typography>
      </S.TextWrap>
    </S.Content>
  );
};

export default ProductSurvey;
