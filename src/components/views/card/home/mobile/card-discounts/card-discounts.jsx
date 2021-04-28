import Delete from '@/assets/vectors/Delete.svg';
import Plus from '@/assets/vectors/Plus.svg';
import Button from '@/components/shared/button';
import Typography from '@/components/shared/typography';
import { buttonSizes, buttonVariants } from '@/constants/button-config';
import { typographyColor, typographyVariant } from '@/constants/typography-config';

import * as S from './card-discounts.styled';

const CardDiscounts = () => {
  console.log('CardDiscounts');
  return (
    <S.Wrapper>
      <S.Discount>
        <Typography variant={typographyVariant.SUBTITLE_XS_NORMAL} color={typographyColor.SUCCESS}>
          بیست درصد کمپین معادل 70.000 تومان اعمال شد
        </Typography>
        <Typography variant={typographyVariant.BODY_MD_MEDIUM} gutterRight={1} gutterLeft={1}>
          AZAR1400
        </Typography>
        <Delete />
      </S.Discount>

      <Button size={buttonSizes.LARGE} variant={buttonVariants.OUTLINE} matchParent>
        <S.Plus as={Plus} />
        ثبت کد تخفیف
      </Button>
    </S.Wrapper>
  );
};

export default CardDiscounts;
