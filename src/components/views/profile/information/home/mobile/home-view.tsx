import React, {FC, ReactNode} from 'react';

import PageHead from '@/shared/page-head';

import * as S from './home-view.styled';
import InformationList from './information-list';

interface HomeViewProps {
  children?: ReactNode;
}

const HomeView: FC<HomeViewProps> = props => {
  console.log('HomeViewProps');
  return (
    <S.Wrap>
      <PageHead>اطلاعات حساب کاربری</PageHead>
      <S.Block>
        <InformationList />
      </S.Block>
    </S.Wrap>
  );
};

export default HomeView;
