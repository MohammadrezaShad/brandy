import _ from 'lodash';
import useTranslation from 'next-translate/useTranslation';
import { FC, useCallback, useEffect, useRef, useState } from 'react';

import Toman from '@/assets/vectors/Toman.svg';
import Button from '@/components/shared/button';
import Typography from '@/components/shared/typography';
import { buttonSizes } from '@/constants/button-config';
import { ProductAnchors } from '@/constants/product-anchors';
import { typographyVariant } from '@/constants/typography-config';
import Breadcrumbs from '@/shared/breadcrumbs';
import isElementInViewPort from '@/utils/is-element-in-viewport';
import ProductCarousel from '@/views/product/mobile/product-carousel';

import ProductDetails from './product-details/product-details';
import ProductHead from './product-head';
import ProductReviews from './product-reviews/product-reviews';
import * as S from './product-view.styled';
import ProdutSuggested from './produt-suggested/produt-suggested';

const ProductView: FC = () => {
  const [currentProductAnchor, setCurrentProductAnchor] = useState<string>(ProductAnchors.PRODUCT_CAROUSEL);
  const carouselRef = useRef();
  const reviewsRef = useRef();
  const collectionRef = useRef();
  const { t } = useTranslation('common');

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const handleScroll = useCallback(
    _.debounce(() => {
      if (isElementInViewPort(carouselRef.current) && currentProductAnchor !== ProductAnchors.PRODUCT_CAROUSEL) {
        setCurrentProductAnchor(ProductAnchors.PRODUCT_CAROUSEL);
      } else if (
        isElementInViewPort(reviewsRef.current) &&
        !isElementInViewPort(collectionRef.current) &&
        currentProductAnchor !== ProductAnchors.REVIEWS
      ) {
        setCurrentProductAnchor(ProductAnchors.REVIEWS);
      } else if (
        isElementInViewPort(collectionRef.current) &&
        !isElementInViewPort(reviewsRef.current) &&
        currentProductAnchor !== ProductAnchors.COLLECTION
      ) {
        setCurrentProductAnchor(ProductAnchors.COLLECTION);
      }
    }, 100),
    [currentProductAnchor],
  );

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  return (
    <S.Wrapper>
      <Breadcrumbs crumbs={['دسته‌بندی', 'دسته اول', 'دسته دوم', 'محصول ایکس']} />
      <ProductHead currentProductAnchor={currentProductAnchor} setCurrentProductAnchor={setCurrentProductAnchor} />
      <S.CarouselWrap ref={carouselRef}>
        <S.AnchorPlaceholder id={ProductAnchors.PRODUCT_CAROUSEL} />
        <ProductCarousel />
      </S.CarouselWrap>
      <S.Wrap>
        <ProductDetails />
      </S.Wrap>
      <S.Review>
        <S.AnchorPlaceholder id={ProductAnchors.REVIEWS} ref={reviewsRef} />
        <ProductReviews />
      </S.Review>
      <S.Separator />
      <S.Collection ref={collectionRef}>
        <S.AnchorPlaceholder id={ProductAnchors.COLLECTION} ref={reviewsRef} />
        <ProdutSuggested />
      </S.Collection>
      <S.ButtonWrap>
        <Button size={buttonSizes.LARGE}>{t('addToCard')}</Button>
        <Typography variant={typographyVariant.HEADLINE1} gutterRight={2}>
          {(5390000).toLocaleString('de-DE')} <Toman />
        </Typography>
      </S.ButtonWrap>
    </S.Wrapper>
  );
};

export default ProductView;
