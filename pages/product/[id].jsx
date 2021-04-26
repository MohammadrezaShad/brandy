import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import { DeviceTypes } from '@/constants/device-types';
import { getLayout } from '@/layouts/main-layout/main-layout';
import Client from '@/views/product/client';
import Mobile from '@/views/product/mobile';

const Product = ({ deviceType }) => <> {deviceType === DeviceTypes.MOBILE ? <Mobile /> : <Client />}</>;

export default Product;
Product.getLayout = getLayout;

export const getServerSideProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['common'])),
  },
});
