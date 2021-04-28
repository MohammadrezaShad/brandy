// import { useTranslation } from 'next-i18next';
// import { useSelector } from 'react-redux';

import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import { DeviceTypes } from '@/constants/device-types';
import { getCardLayout } from '@/layouts/card-layout/card-layout';
import Client from '@/views/card/home/client';
import Mobile from '@/views/card/home/mobile';

const Info = ({ deviceType }) => (
  // const { name } = useSelector((state) => state.test);
  <> {deviceType === DeviceTypes.MOBILE ? <Mobile /> : <Client />}</>
);
Info.getLayout = getCardLayout;

export default Info;

export const getServerSideProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['common'])),
  },
});
