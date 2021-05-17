import useTranslation from 'next-translate/useTranslation';
import { FC, useContext } from 'react';

import Tick from '@/assets/vectors/Tick.svg';
import Time from '@/assets/vectors/Time.svg';
import Button from '@/components/shared/button/button';
import ScrollCarousel from '@/components/shared/scroll-carousel/scroll-carousel';
import StarRating from '@/components/shared/star-rating/star-rating';
import Typography from '@/components/shared/typography';
import { buttonColors, buttonSizes } from '@/constants/button-config';
import { typographyColor, typographyVariant } from '@/constants/typography-config';
import DeviceTypeContext from '@/context/device-type-context';

import * as S from './product-reviews.styled';

const ProductReviews: FC = () => {
  const { t } = useTranslation('common');
  const { deviceType } = useContext(DeviceTypeContext);

  return (
    <>
      <S.Wrap>
        <S.Content>
          <Typography variant={typographyVariant.BODY_SM_MEDIUM} gutterBottom={3}>
            {t('sizeQuestion')}
          </Typography>

          <S.TextWrap>
            <Typography variant={typographyVariant.SUBTITLE_XS_NORMAL}>کوچـک</Typography>
            <S.RateProgress progress="25%" />
            <Typography variant={typographyVariant.SUBTITLE_XS_NORMAL}>25%</Typography>
          </S.TextWrap>
          <S.TextWrap>
            <Typography variant={typographyVariant.SUBTITLE_XS_NORMAL}>مناسب</Typography>
            <S.RateProgress secondary progress="25%" />
            <Typography variant={typographyVariant.SUBTITLE_XS_NORMAL}>25%</Typography>
          </S.TextWrap>
          <S.TextWrap>
            <Typography variant={typographyVariant.SUBTITLE_XS_NORMAL}>بزرگ</Typography>
            <S.RateProgress progress="50%" />
            <Typography variant={typographyVariant.SUBTITLE_XS_NORMAL}>50%</Typography>
          </S.TextWrap>
        </S.Content>
        <S.Rate>
          <S.RateText>4.7</S.RateText>
          <S.RateStar>
            <StarRating rate={4.7} />
          </S.RateStar>
          <Button size={buttonSizes.S_MEDIUM} color={buttonColors.ERROR}>
            {t('submitReview')}
          </Button>
        </S.Rate>
      </S.Wrap>
      <S.Comments>
        <ScrollCarousel deviceType={deviceType}>
          {Array.from({ length: 5 }, (_, i) => i + 1).map((id) => (
            <S.Comment key={id}>
              <S.CommentHead>
                <Typography variant={typographyVariant.BODY_MD_MEDIUM}>RE***@Gmail.com</Typography>
                <StarRating rate={4.7} />
              </S.CommentHead>
              <S.CommentBody>
                <Typography color={typographyColor.ON_PRIMARY} variant={typographyVariant.SUBTITLE_MD_NORMAL}>
                  نظر ثبت شده صرفا جنبه نمایشی دارد. این نظر، صرفا جنبه
                </Typography>
              </S.CommentBody>
              <S.CommentFooter>
                <Typography color={typographyColor.ON_SUCCESS}>
                  <S.CommentIcon as={Time} /> 1400/09/26
                </Typography>
                <Typography color={typographyColor.SUCCESS}>
                  خریدار محصول <S.CommentIcon as={Tick} />
                </Typography>
              </S.CommentFooter>
            </S.Comment>
          ))}
        </ScrollCarousel>
      </S.Comments>
    </>
  );
};

export default ProductReviews;
