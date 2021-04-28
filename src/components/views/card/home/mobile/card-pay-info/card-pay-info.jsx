import Typography from '@/components/shared/typography';
import { typographyColor } from '@/constants/typography-config';

import * as S from './card-pay-info.styled';

const CardPayInfo = () => (
  <S.Wrapper>
    <S.Wrap>
      <Typography gutterLeft={1}>قیمت کل سفارشات</Typography>
      <Typography> {(5390000).toLocaleString('de-DE')} تومان </Typography>
    </S.Wrap>
    <S.Wrap>
      <Typography gutterLeft={1}> تخفیف کالاها</Typography>
      <Typography> {(5390000).toLocaleString('de-DE')} تومان </Typography>
    </S.Wrap>
    <S.Wrap>
      <Typography color={typographyColor.SUCCESS} gutterLeft={1}>
        هزینه ارسال
      </Typography>
      <Typography color={typographyColor.SUCCESS}> {(5390000).toLocaleString('de-DE')} تومان </Typography>
    </S.Wrap>
  </S.Wrapper>
);

export default CardPayInfo;
