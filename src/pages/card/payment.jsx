// import { useTranslation } from 'next-i18next';
// import { useSelector } from 'react-redux';

import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import { DeviceTypes } from '@/constants/device-types';
import { getCardLayout } from '@/layouts/card-layout/card-layout';
import Client from '@/views/card/home/client';
import Mobile from '@/views/card/home/mobile';

const Payment = ({ deviceType }) => (
  // const { name } = useSelector((state) => state.test);
  <> {deviceType === DeviceTypes.MOBILE ? <Mobile /> : <Client />}</>
);
Payment.getLayout = getCardLayout;

export default Payment;

export const getServerSideProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['common'])),
  },
});
