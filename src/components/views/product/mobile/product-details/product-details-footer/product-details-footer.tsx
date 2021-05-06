import useTranslation from 'next-translate/useTranslation';
import React, { FC } from 'react';

import ArrowLeft from '@/assets/vectors/F-Left.svg';
import Select from '@/components/shared/form/select';
import Typography from '@/components/shared/typography';
import { typographyColor, typographyDisplay, typographyVariant } from '@/constants/typography-config';
import IconProvider from '@/providers/icon-provider/icon-provider';

import * as S from './product-details-footer.styled';

const ProductDetailsFooter: FC = () => {
  const { t } = useTranslation('common');

  const sizeOptions = [
    { id: 1, value: 1, label: '41' },
    { id: 2, value: 2, label: '31' },
    { id: 3, value: 3, label: '21' },
  ];

  const handleSizeChange = (): void => {
    'size change';
  };
  return (
    <>
      <S.Content>
        <Typography variant={typographyVariant.BODY_SM_MEDIUM} gutterLeft={2}>
          {t('sizing')}
        </Typography>
        <Typography color={typographyColor.ON_PRIMARY} variant={typographyVariant.SUBTITLE_XS_NORMAL}>
          {t('sizeGuide')}
          <S.Arrow as={ArrowLeft} />
        </Typography>
      </S.Content>
      <Select instanceId={1} options={sizeOptions} placeholder="انتخاب سایز" onChange={handleSizeChange} />
      <S.Container>
        <IconProvider icon="model" size="46px" />
        <S.Wrapper>
          <Typography
            color={typographyColor.ON_PRIMARY}
            variant={typographyVariant.BODY_SM_MEDIUM}
            display={typographyDisplay.BLOCK}
            gutterBottom={1}
          >
            این محصول روی مانک S/36 به مشخصات زیر می باشد :
          </Typography>
          <S.TextWrap>
            <Typography color={typographyColor.ON_PRIMARY} variant={typographyVariant.BODY_SM_MEDIUM}>
              قد : 195
            </Typography>
          </S.TextWrap>
        </S.Wrapper>
      </S.Container>
    </>
  );
};

export default ProductDetailsFooter;
