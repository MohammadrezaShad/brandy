import useTranslation from 'next-translate/useTranslation';
import React from 'react';
import {DeviceType, ReactComponent} from 'src/types/main';

import {DeviceTypes} from '@/constants/device-types';
import {getLayout} from '@/layouts/main-layout/main-layout';
import {reduxWrap, useTypedSelector} from '@/redux/store';
import {increment} from '@/slices/test-slice';
import Client from '@/views/home/client';
import Mobile from '@/views/home/mobile';

type HomeProps = {
  deviceType: DeviceType;
};

const Home: ReactComponent<HomeProps> = ({deviceType}) => {
  const st = useTypedSelector(state => state.test);
  const {t} = useTranslation('common');
  console.log(st);
  return <> {deviceType === DeviceTypes.MOBILE ? <Mobile /> : <Client />}</>;
};
Home.getLayout = getLayout;

export default Home;

export const getServerSideProps = reduxWrap.getServerSideProps(
  async ({store}) => {
    const {dispatch} = store;
    console.log(dispatch(increment()));
    return {
      props: {},
    };
  },
);
