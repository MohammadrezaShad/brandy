import Button from '@/components/shared/button';
import { buttonSizes } from '@/constants/button-config';

import CardDiscounts from './card-discounts';
import CardGuide from './card-guide';
import CardPayInfo from './card-pay-info';
import CardProducts from './card-products';
import * as S from './card-view.stled';

const CardView = () => {
  console.log('CardView');
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
        <Button matchParent size={buttonSizes.LARGE}>
          ثبت سبد و مرحله بعد
        </Button>
      </S.Button>
    </S.Wrapper>
  );
};

export default CardView;
