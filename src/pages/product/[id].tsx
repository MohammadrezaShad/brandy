import { GetServerSideProps } from 'next';
import { DeviceType, GetLayout } from 'src/types/main';

import { DeviceTypes } from '@/constants/device-types';
import { getLayout } from '@/layouts/main-layout/main-layout';
import Client from '@/views/product/client';
import Mobile from '@/views/product/mobile';

type ProductProps = {
  deviceType: DeviceType;
};
type ProductComponent = React.FC<ProductProps> & { getLayout: GetLayout };

const Product: ProductComponent = ({ deviceType }) => (
  <> {deviceType === DeviceTypes.MOBILE ? <Mobile /> : <Client />}</>
);

export default Product;
Product.getLayout = getLayout;

export const getServerSideProps: GetServerSideProps = async () => ({
  props: {},
});
