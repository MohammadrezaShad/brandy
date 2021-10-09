import React, {FC, ReactNode, useState} from 'react';

import Arrow from '@/assets/vectors/F-Up.svg';
import {
  typographyAlign,
  typographyColor,
  typographyDisplay,
  typographyVariant,
} from '@/constants/typography-config';
import Typography from '@/shared/typography';

import * as S from './footer.styled';

interface FooterProps {
  chilldren?: ReactNode;
}

const Footer: FC<FooterProps> = props => {
  const [isShowMore, setIsShowMore] = useState(false);
  return (
    <S.Footer>
      <S.Top>
        <S.Bank src='/images/res/bank-saman.png' alt='test' />
        <S.Enamad src='/images/res/e-namad.png' alt='test' />
        <S.Bank src='/images/res/bank-melat.png' alt='test' />
      </S.Top>
      <S.Content>
        <S.List>
          <S.Item>
            <Typography nowWrap>بازگشت کـالا</Typography>
          </S.Item>
          <S.Item>
            <Typography nowWrap> شرایط استفاده</Typography>
          </S.Item>
          <S.Item>
            <Typography nowWrap>ارتـباط با ما</Typography>
          </S.Item>
          <S.Item>
            <Typography nowWrap> راهنمـای خریـد</Typography>
          </S.Item>
          <S.Item>
            <Typography nowWrap> حریم خصوصی</Typography>
          </S.Item>
          <S.Item>
            <Typography nowWrap> پرسش‌های متداول</Typography>
          </S.Item>
        </S.List>
      </S.Content>
      <S.Description>
        <Typography
          variant={typographyVariant.SUBTITLE_XS_NORMAL}
          display={typographyDisplay.BLOCK}
          gutterBottom={2}
        >
          فروشگاه اینترنتی برندی تو
        </Typography>
        <S.DescriptionText $isShowMore={isShowMore}>
          طراحی معیار و اولین مرحله صحبت پنجره محمد کامل درباره در شکل با میان
          سایز ابزار طراحی رابط کاربری و طراحی معماری برجسته با اولین ستون فقرات
          بانک ملت تنها درصورتی امکان چشم پوشی با کیبورد ماوس برند دربار تسکو و
          گارنتی تعطیل مجازات ایـن کاغذ گلاسه دستمال مرطوب نقطه بزرگ سوراخ اوزون
          رفتن از ترجمه طراحی معیار و اولین مرحله صحبت پنجره محمد کامل درباره در
          شکل با میان سایز ابزار طراحی رابط کاربری و طراحی معماری برجسته با
          اولین ستون فقرات بانک ملت تنها درصورتی امکان چشم پوشی با کیبورد ماوس
          برند دربار تسکو و گارنتی تعطیل مجازات ایـن کاغذ گلاسه دستمال مرطوب
          نقطه بزرگ سوراخ اوزون رفتن از ترجمه طراحی معیار و اولین مرحله صحبت
          پنجره محمد کامل درباره در شکل با میان سایز ابزار طراحی رابط کاربری و
          طراحی معماری برجسته با اولین ستون فقرات بانک ملت تنها درصورتی امکان
          چشم پوشی با کیبورد ماوس برند دربار تسکو و گارنتی تعطیل مجازات ایـن
          کاغذ گلاسه دستمال مرطوب نقطه بزرگ سوراخ اوزون رفتن از ترجمه
        </S.DescriptionText>
        <S.DesctiptionMore $isShowMore={isShowMore}>
          <Typography
            component={S.More}
            color={typographyColor.PRIMARY}
            onClick={() => {
              setIsShowMore(prevState => !prevState);
            }}
          >
            {isShowMore ? 'کمتر' : 'بیشتر'}
            <S.Arrow as={Arrow} $isShowMore={isShowMore} />
          </Typography>
        </S.DesctiptionMore>
      </S.Description>
      <S.Bottom>
        <S.SocialMedia>
          <Typography display={typographyDisplay.BLOCK}>
            برنـدی تو را در شبکه هـای اجتماعی زیر دنبـال کـنید
          </Typography>
          <S.SocialMediaWarp>
            <S.SocialMediaImg src='/images/res/telegram.png' alt='test' />
            <S.SocialMediaImg src='/images/res/instagram.png' alt='test' />
          </S.SocialMediaWarp>
        </S.SocialMedia>
        <S.Copyright>
          <Typography
            variant={typographyVariant.SUBTITLE_XS_NORMAL}
            align={typographyAlign.CENTER}
            color={typographyColor.PRIMARY}
            gutter={3}
          >
            کـلیه حقـوق ایـن سـایـت متعلـق بـه شـرکـت مهـران جنتـی (فروشگاه
            اینترنی برندی تو) میباشد.
          </Typography>
        </S.Copyright>
      </S.Bottom>
    </S.Footer>
  );
};

export default Footer;
