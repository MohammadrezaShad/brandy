// import { useTranslation } from 'next-i18next';
// import { useSelector } from 'react-redux';
import { GetServerSideProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import React from 'react';
import { DeviceType, GetLayout } from 'src/types/main';

import { DeviceTypes } from '@/constants/device-types';
import { getLayout } from '@/layouts/main-layout/main-layout';
import Client from '@/views/home/client';
import Mobile from '@/views/home/mobile';

type HomeProps = {
  deviceType: DeviceType;
};
type HomeComponent = React.FC<HomeProps> & { getLayout: GetLayout };

const Home: HomeComponent = ({ deviceType }) => (
  // const { name } = useSelector((state) => state.test);
  <> {deviceType === DeviceTypes.MOBILE ? <Mobile /> : <Client />}</>
);
Home.getLayout = getLayout;

export default Home;

export const getServerSideProps: GetServerSideProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['common'])),
  },
});
