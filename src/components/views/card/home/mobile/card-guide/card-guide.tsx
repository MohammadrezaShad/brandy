import Delivery from '@/assets/vectors/Delivery.svg';
import Orginal from '@/assets/vectors/Orginal.svg';
import Return from '@/assets/vectors/Return.svg';
import Typography from '@/components/shared/typography';
import { typographyColor, typographyVariant } from '@/constants/typography-config';
import { FC } from 'react';

import * as S from './card-guide.styled';

const CardGuide: FC = () => {
  console.log('CardGuide');
  return (
    <S.Wrapper>
      <Typography variant={typographyVariant.SUBTITLE_MD_NORMAL} color={typographyColor.PRIMARY} gutterBottom={2}>
        کالاهای موجود در سبد خرید شمـا ثبت و رزرو نشـده‌اند. برای ثبت سفـارش .خود مراحل بعدی را تکمیل کنید
      </Typography>
      <S.Tags>
        <S.TagWrap>
          <S.Tag>
            <Orginal />
          </S.Tag>
          <Typography variant={typographyVariant.SUBTITLE_XS_NORMAL} color={typographyColor.PRIMARY} gutterTop={1}>
            ضمانت اصالت کالا
          </Typography>
        </S.TagWrap>
        <S.TagWrap>
          <S.Tag>
            <Return />
          </S.Tag>
          <Typography variant={typographyVariant.SUBTITLE_XS_NORMAL} color={typographyColor.PRIMARY} gutterTop={1}>
            ضمانت 7 روزه بازگشت کالا
          </Typography>
        </S.TagWrap>
        <S.TagWrap>
          <S.Tag>
            <Delivery />
          </S.Tag>
          <Typography variant={typographyVariant.SUBTITLE_XS_NORMAL} color={typographyColor.PRIMARY} gutterTop={1}>
            تحویل سریع و آسان
          </Typography>
        </S.TagWrap>
      </S.Tags>
    </S.Wrapper>
  );
};

export default CardGuide;
