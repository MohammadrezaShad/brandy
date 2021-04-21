// import { useTranslation } from 'next-i18next';
// import { useSelector } from 'react-redux';

import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import { DeviceTypes } from '@/constants/device-types';
import { getLayout } from '@/layouts/main-layout/main-layout';
import Client from '@/views/home/client';
import Mobile from '@/views/home/mobile';

const Home = ({ deviceType }) => (
  // const { t } = useTranslation('common');
  // const { name } = useSelector((state) => state.test);
  <> {deviceType === DeviceTypes.MOBILE ? <Mobile /> : <Client />}</>
);
Home.getLayout = getLayout;

export default Home;

export const getServerSideProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['common'])),
  },
});
