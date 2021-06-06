import {GetServerSideProps} from 'next';
import {DeviceType, ReactComponent} from 'src/types/main';

import {DeviceTypes} from '@/constants/device-types';
import {getLayout} from '@/layouts/main-layout/main-layout';
import Client from '@/views/product/home/client';
import Mobile from '@/views/product/home/mobile';

type ProductProps = {
  deviceType: DeviceType;
};

const Product: ReactComponent<ProductProps> = ({deviceType}) => (
  <> {deviceType === DeviceTypes.MOBILE ? <Mobile /> : <Client />}</>
);

export default Product;
Product.getLayout = getLayout;

export const getServerSideProps: GetServerSideProps = async () => ({
  props: {},
});
