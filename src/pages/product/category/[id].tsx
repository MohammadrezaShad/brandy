import {GetServerSideProps} from 'next';
import {DeviceType, ReactComponent} from 'src/types/main';

import {DeviceTypes} from '@/constants/device-types';
import {getLayout} from '@/layouts/main-layout/main-layout';
import Client from '@/views/product/category/client';
import Mobile from '@/views/product/category/mobile';

type CategoryProps = {
  deviceType: DeviceType;
};

const Category: ReactComponent<CategoryProps> = ({deviceType}) => (
  <> {deviceType === DeviceTypes.MOBILE ? <Mobile /> : <Client />}</>
);

export default Category;

Category.getLayout = getLayout;

export const getServerSideProps: GetServerSideProps = async () => ({
  props: {},
});
