import useTranslation from 'next-translate/useTranslation';
import {FC, useState} from 'react';

import Tabs from '@/components/shared/tabs';
import Typography from '@/components/shared/typography';
import {
  typographyDisplay,
  typographyVariant,
} from '@/constants/typography-config';
import IconProvider from '@/providers/icon-provider/icon-provider';

import * as S from './product-details.styled';
import ProductDetailsFooter from './product-details-footer';
import ProductScrollCarousel from './product-scroll-carousel';

const ProductDetails: FC = () => {
  const [selectedTabIndex, setSelectedTabIndex] = useState<number>(0);
  const [selectedProductId, setSelectedProductId] = useState<number>(0);
  const {t} = useTranslation('common');

  const handleTabChange = (tabIndex: number) => {
    setSelectedTabIndex(tabIndex);
  };

  return (
    <>
      <S.Head>
        <S.Wrap>
          <Typography variant={typographyVariant.HEADLINE1} gutterLeft={1}>
            کفش پیاده‌روی برند زارا
          </Typography>

          <S.HeadIcon as={IconProvider} icon='alarm' size='20px' />
          <S.HeadIcon as={IconProvider} icon='share' size='20px' />
        </S.Wrap>
        <S.Wrap>
          <Typography
            display={typographyDisplay.BLOCK}
            variant={typographyVariant.BODY_MD_MEDIUM}
          >
            {t('code')} : G0086A097
          </Typography>
        </S.Wrap>
      </S.Head>
      <Tabs
        tabItems={[
          {id: 1, text: t('specifications')},
          {id: 2, text: t('features')},
          {id: 3, text: t('description')},
        ]}
        selectedTabIndex={selectedTabIndex}
        handleTabChange={handleTabChange}
      />
      <S.ProductsWrap>
        <S.ProudctsHead>
          <Typography variant={typographyVariant.BODY_SM_MEDIUM} gutterLeft={2}>
            {t('color')}: آبی
          </Typography>
          <Typography variant={typographyVariant.SUBTITLE_XS_NORMAL}>
            +2 {t('otherColors')}
          </Typography>
        </S.ProudctsHead>
        <ProductScrollCarousel
          selectedProductId={selectedProductId}
          setSelectedProductId={setSelectedProductId}
        />
      </S.ProductsWrap>
      <S.Footer>
        <ProductDetailsFooter />
      </S.Footer>
    </>
  );
};

export default ProductDetails;
