import React, {FC, ReactNode} from 'react';

import Cancel from '@/assets/vectors/Cancel.svg';
import Card from '@/assets/vectors/Card.svg';
import Delivery from '@/assets/vectors/delivery-box.svg';
import ArrowLeft from '@/assets/vectors/F-Left.svg';
import Comment from '@/assets/vectors/item-comment.svg';
import Location from '@/assets/vectors/item-location.svg';
import Info from '@/assets/vectors/item-profile-info.svg';
import Wallet from '@/assets/vectors/item-wallet.svg';
import Return from '@/assets/vectors/profile-return.svg';
import Received from '@/assets/vectors/Received.svg';
import ScrollCarousel from '@/shared/scroll-carousel';
import Typography from '@/shared/typography';

import * as S from './profile-menu.styled';

interface ProfileMenuProps {
  children?: ReactNode;
}

const ProfileMenu: FC<ProfileMenuProps> = () => (
  <S.Wrap>
    <S.Head>
      <Typography>سفارش های من</Typography>
      <Typography>
        مشاهده همه
        <S.Arrow as={ArrowLeft} />
      </Typography>
    </S.Head>
    <S.Block>
      <ScrollCarousel>
        <S.Part>
          <S.PartIconWrap>
            <S.PartIcon as={Card} />
          </S.PartIconWrap>
          <Typography gutterTop={2} nowWrap>
            در انتظار پرداخت
          </Typography>
        </S.Part>
        <S.Part>
          <S.PartIconWrap>
            <S.PartIcon as={Delivery} />
          </S.PartIconWrap>
          <Typography gutterTop={2} nowWrap>
            درحال پـردازش
          </Typography>
        </S.Part>
        <S.Part>
          <S.PartIconWrap>
            <S.PartIcon as={Received} />
          </S.PartIconWrap>
          <Typography gutterTop={2} nowWrap>
            دریافت شده
          </Typography>
        </S.Part>
        <S.Part>
          <S.PartIconWrap>
            <S.PartIcon as={Cancel} />
          </S.PartIconWrap>
          <Typography gutterTop={2} nowWrap>
            لغو شـده
          </Typography>
        </S.Part>
        <S.Part>
          <S.PartIconWrap>
            <S.PartIcon as={Return} />
          </S.PartIconWrap>
          <Typography gutterTop={2} nowWrap>
            ممرجوع شدهن
          </Typography>
        </S.Part>
      </ScrollCarousel>
    </S.Block>
    <S.List>
      <S.Item>
        <Wallet />
        <Typography gutterRight={2}>کیف پول </Typography>
        <S.ArrowItem as={ArrowLeft} />
      </S.Item>
      <S.Item>
        <Location />
        <Typography gutterRight={2}> آدرس‌هـا</Typography>
        <S.ArrowItem as={ArrowLeft} />
      </S.Item>
      <S.Item>
        <Comment />
        <Typography gutterRight={2}> نقد و نظرات</Typography>
        <S.ArrowItem as={ArrowLeft} />
      </S.Item>
      <S.Item>
        <Info />
        <Typography gutterRight={2}> اطلاعات حساب کاربری</Typography>
        <S.ArrowItem as={ArrowLeft} />
      </S.Item>
    </S.List>
  </S.Wrap>
);

export default ProfileMenu;
