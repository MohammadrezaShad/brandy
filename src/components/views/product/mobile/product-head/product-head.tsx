import Link from 'next/link';
import { useRouter } from 'next/router';
import useTranslation from 'next-translate/useTranslation';
import { Dispatch, FC, SetStateAction, useCallback, useEffect, useState } from 'react';

import CardIcon from '@/assets/vectors/Bag.svg';
import ArrowRight from '@/assets/vectors/F-Right.svg';
import { ProductAnchors } from '@/constants/product-anchors';
import { useScroll } from '@/helpers/use-scroll';
import IconProvider from '@/providers/icon-provider/icon-provider';
import Paths from '@/utils/paths';

import * as S from './product-head.styled';

type ProductHeadProps = {
  currentProductAnchor: string;
  setCurrentProductAnchor: Dispatch<SetStateAction<string>>;
};

const ProductHead: FC<ProductHeadProps> = ({ currentProductAnchor, setCurrentProductAnchor }) => {
  const [isProductHeadShow, setIsProductHeadShow] = useState<boolean>(true);
  const { query } = useRouter();
  const { scrollY } = useScroll();
  const { back } = useRouter();
  const { t } = useTranslation('common');

  const handleShowProductHead = useCallback(() => {
    if (scrollY > 150 && !isProductHeadShow) {
      setIsProductHeadShow(true);
    } else if (isProductHeadShow && scrollY <= 150) {
      setIsProductHeadShow(false);
    }
  }, [isProductHeadShow, scrollY]);

  useEffect(() => {
    handleShowProductHead();
  }, [handleShowProductHead]);

  return (
    <S.Wrap isProductHeadShow={isProductHeadShow}>
      <S.TopContent>
        <S.Block>
          <S.ArrowRight as={ArrowRight} onClick={() => back()} />
          <S.Icon as={IconProvider} icon="search" size="20px" />
        </S.Block>
        <S.Block>
          <S.Image src="/images/res/Pic.jpg" alt="pic for test" />
        </S.Block>
        <S.Block>
          <S.Icon as={IconProvider} icon="wishlist" size="20px" />
          <S.Icon as={CardIcon} />
        </S.Block>
      </S.TopContent>
      <S.BottomConent>
        <S.Item selected={currentProductAnchor === ProductAnchors.PRODUCT_CAROUSEL}>
          <Link href={`${Paths.product.detail(Number(query.id)).getPath()}#${ProductAnchors.PRODUCT_CAROUSEL}`}>
            <S.Anchor
              onClick={() => {
                setCurrentProductAnchor(ProductAnchors.PRODUCT_CAROUSEL);
              }}
            >
              {t('product')}
            </S.Anchor>
          </Link>
        </S.Item>
        <S.Item selected={currentProductAnchor === ProductAnchors.REVIEWS}>
          <Link href={`${Paths.product.detail(Number(query.id)).getPath()}#${ProductAnchors.REVIEWS}`}>
            <S.Anchor
              onClick={() => {
                setCurrentProductAnchor(ProductAnchors.REVIEWS);
              }}
            >
              {t('reviews')}
            </S.Anchor>
          </Link>
        </S.Item>
        <S.Item selected={currentProductAnchor === ProductAnchors.COLLECTION}>
          <Link href={`${Paths.product.detail(Number(query.id)).getPath()}#${ProductAnchors.COLLECTION}`}>
            <S.Anchor
              onClick={() => {
                setCurrentProductAnchor(ProductAnchors.COLLECTION);
              }}
            >
              {t('similarProducts')}
            </S.Anchor>
          </Link>
        </S.Item>
        <S.Item selected={currentProductAnchor === ProductAnchors.NEW_COLLECTION}>
          <Link href={`${Paths.product.detail(Number(query.id)).getPath()}#${ProductAnchors.COLLECTION}`}>
            <S.Anchor
              onClick={() => {
                setCurrentProductAnchor(ProductAnchors.NEW_COLLECTION);
              }}
            >
              {t('newProduct')}
            </S.Anchor>
          </Link>
        </S.Item>
      </S.BottomConent>
    </S.Wrap>
  );
};

export default ProductHead;
