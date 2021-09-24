// import { useSelector } from 'react-redux';

import {GetServerSideProps} from 'next';
import {DeviceType, ReactComponent} from 'src/types/main';

import {DeviceTypes} from '@/constants/device-types';
import {getLayout} from '@/layouts/main-layout/main-layout';
import Client from '@/views/profile/home/client';
import Mobile from '@/views/profile/home/mobile';

type HomeProps = {
  deviceType: DeviceType;
};

const Home: ReactComponent<HomeProps> = ({deviceType}) => (
  // const { name } = useSelector((state) => state.test);
  <> {deviceType === DeviceTypes.MOBILE ? <Mobile /> : <Client />}</>
);
Home.getLayout = getLayout;

export default Home;

export const getServerSideProps: GetServerSideProps = async () => ({
  props: {},
});
