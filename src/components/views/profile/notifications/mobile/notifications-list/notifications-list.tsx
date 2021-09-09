import React, {FC, ReactNode} from 'react';

import {typographyColor} from '@/constants/typography-config';
import Typography from '@/shared/typography';

import * as S from './notifications-list.styled';

interface NotificationsListProps {
  children?: ReactNode;
}

const NotificationsList: FC<NotificationsListProps> = props => {
  console.log('NotificationsList');
  return (
    <>
      <S.Wrap>
        <S.ImageWrap>
          <S.Image src='/images/res/notification.jpg' />
        </S.ImageWrap>
        <S.Bottom>
          <S.Head>
            <Typography>عنوان این خبر</Typography>
            <Typography color={typographyColor.PRIMARY}>1400/03/08</Typography>
          </S.Head>
          <Typography>متن</Typography>
        </S.Bottom>
      </S.Wrap>
      <S.Wrap>
        <S.ImageWrap>
          <S.Image src='/images/res/notification.jpg' />
        </S.ImageWrap>
        <S.Bottom>
          <S.Head>
            <Typography>عنوان این خبر</Typography>
            <Typography color={typographyColor.PRIMARY}>1400/03/08</Typography>
          </S.Head>
          <Typography>متن</Typography>
        </S.Bottom>
      </S.Wrap>
    </>
  );
};

export default NotificationsList;
