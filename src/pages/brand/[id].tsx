import { GetServerSideProps } from 'next';
import { DeviceType, ReactComponent } from 'src/types/main';

import { DeviceTypes } from '@/constants/device-types';
import { getBrandLayout } from '@/layouts/brand-layout/brand-layout';
import Client from '@/views/brand/client';
import Mobile from '@/views/brand/mobile';

type BrandProps = {
  deviceType: DeviceType;
};

const Brand: ReactComponent<BrandProps> = ({ deviceType }) => (
  <> {deviceType === DeviceTypes.MOBILE ? <Mobile /> : <Client />}</>
);

export default Brand;

Brand.getLayout = getBrandLayout;

export const getServerSideProps: GetServerSideProps = async () => ({
  props: {},
});
