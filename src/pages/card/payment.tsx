// import { useTranslation } from 'next-i18next';
// import { useSelector } from 'react-redux';

import { GetServerSideProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { DeviceType, ReactComponent } from 'src/types/main';

import { DeviceTypes } from '@/constants/device-types';
import { getCardLayout } from '@/layouts/card-layout/card-layout';
import Client from '@/views/card/payment/client';
import Mobile from '@/views/card/payment/mobile';

type PaymentProps = {
  deviceType: DeviceType;
};

const Payment: ReactComponent<PaymentProps> = ({ deviceType }) => (
  // const { name } = useSelector((state) => state.test);
  <> {deviceType === DeviceTypes.MOBILE ? <Mobile /> : <Client />}</>
);
Payment.getLayout = getCardLayout;

export default Payment;

export const getServerSideProps: GetServerSideProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['common'])),
  },
});
