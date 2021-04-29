import SendMethod from '@/assets/vectors/SendMethod.svg';
import Typography from '@/components/shared/typography';
import {
  typographyColor,
  typographyComponent,
  typographyDisplay,
  typographyVariant,
} from '@/constants/typography-config';

import * as S from './card-send-method.styled';

const CardSendMethod = () => {
  console.log('CardSendMethod');
  return (
    <>
      <Typography gutterBottom={2} display={typographyDisplay.BLOCK} variant={typographyVariant.BODY_MD_MEDIUM}>
        نحوه ارسال
      </Typography>
      <S.Content>
        <S.IconWrap>
          <SendMethod />
        </S.IconWrap>
        <S.Wrap>
          <Typography variant={typographyVariant.SUBTITLE_XS_NORMAL} gutterBottom={1} display={typographyDisplay.BLOCK}>
            پست پیشتاز، زمان تقریبی 4 تا 6 روز کاری
          </Typography>
          <Typography color={typographyColor.SUCCESS} variant={typographyVariant.SUBTITLE_XS_NORMAL}>
            ارسال رایگان&nbsp;
          </Typography>
          <Typography color={typographyColor.PRIMARY} variant={typographyVariant.SUBTITLE_XS_NORMAL}>
            به تمام نقاط کشور
          </Typography>
        </S.Wrap>
      </S.Content>
    </>
  );
};

export default CardSendMethod;
