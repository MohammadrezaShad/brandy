import { useRouter } from 'next/router';
import useTranslation from 'next-translate/useTranslation';
import { FC } from 'react';

import Button from '@/components/shared/button';
import { buttonSizes } from '@/constants/button-config';
import Paths from '@/utils/paths';

import CardDiscounts from './card-discounts';
import CardGuide from './card-guide';
import CardPayInfo from './card-pay-info';
import CardProducts from './card-products';
import * as S from './card-view.stled';

const CardView: FC = () => {
  const { t } = useTranslation('common');
  const { push } = useRouter();
  return (
    <S.Wrapper>
      <S.InfoWrap>
        <CardPayInfo />
      </S.InfoWrap>
      <S.Wrap>
        <CardProducts />
      </S.Wrap>
      <S.Wrap>
        <CardDiscounts />
      </S.Wrap>
      <S.GuideWrap>
        <CardGuide />
      </S.GuideWrap>
      <S.Button>
        <Button
          onClick={() => push({ pathname: Paths.card.info.getPath() }, undefined, { scroll: false })}
          matchParent
          size={buttonSizes.LARGE}
        >
          {t('submitCard')}
        </Button>
      </S.Button>
    </S.Wrapper>
  );
};

export default CardView;
