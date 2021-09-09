import React, {FC, ReactNode} from 'react';

import ArrowLeft from '@/assets/vectors/F-Left.svg';
import {
  typographyColor,
  typographyVariant,
} from '@/constants/typography-config';
import Typography from '@/shared/typography';

import * as S from './review-products.styled';

interface ReviewProductsProps {
  children?: ReactNode;
}

const ReviewProducts: FC<ReviewProductsProps> = ({children}) => {
  console.log('ReviewProducts');
  return (
    <S.Wrap>
      <S.Head>
        <Typography gutterBottom={2}>
          نظرتان درباره کالاهایی که خریده اید چیست ؟
        </Typography>
        <Typography
          color={typographyColor.PRIMARY}
          variant={typographyVariant.SUBTITLE_MD_NORMAL}
        >
          با ثبت نظر درباره کالاهای خریداری شده خود، به دیگر کاربران برندی تو
          برای تجربه .خریدی بهتر کمک کنید
        </Typography>
      </S.Head>
      <S.List>
        <S.Item>
          <S.Block>
            <S.ImageWrap>
              <S.Image src='/images/res/Image.png' alt='test' />
            </S.ImageWrap>
          </S.Block>
          <S.Detail>
            <Typography>کفش دخترانه اسپرت برند نایک</Typography>
            <Typography
              variant={typographyVariant.BODY_SM_MEDIUM}
              color={typographyColor.PRIMARY}
              gutterTop={1}
              gutterBottom={1}
            >
              کد محصول : DD00768
            </Typography>
            <S.Bottom>
              <Typography color={typographyColor.ERROR}> ثبت نظر </Typography>
              <S.ArrowLeft as={ArrowLeft} />
            </S.Bottom>
          </S.Detail>
        </S.Item>
        <S.Item>
          <S.Block>
            <S.ImageWrap>
              <S.Image src='/images/res/Image.png' alt='test' />
            </S.ImageWrap>
          </S.Block>
          <S.Detail>
            <Typography>کفش دخترانه اسپرت برند نایک</Typography>
            <Typography
              variant={typographyVariant.BODY_SM_MEDIUM}
              color={typographyColor.PRIMARY}
              gutterTop={1}
              gutterBottom={1}
            >
              کد محصول : DD00768
            </Typography>
            <S.Bottom>
              <Typography color={typographyColor.ERROR}> ثبت نظر </Typography>
              <S.ArrowLeft as={ArrowLeft} />
            </S.Bottom>
          </S.Detail>
        </S.Item>
      </S.List>
    </S.Wrap>
  );
};

export default ReviewProducts;
