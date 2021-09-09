import {useRouter} from 'next/router';
import React, {FC, ReactNode} from 'react';

import ArrowRight from '@/assets/vectors/F-Right.svg';
import Typography from '@/shared/typography';

import NotificationsList from './notifications-list';
import * as S from './notifications-view.styled';

interface NotificationsViewProps {
  children?: ReactNode;
}

const NotificationsView: FC<NotificationsViewProps> = ({children}) => {
  const {back} = useRouter();
  return (
    <S.Wrap>
      <S.Head>
        <S.ArrowRight as={ArrowRight} onClick={() => back()} />
        <Typography>اخبار و اعلانات</Typography>
      </S.Head>
      <S.List>
        <NotificationsList />
      </S.List>
    </S.Wrap>
  );
};

export default NotificationsView;
