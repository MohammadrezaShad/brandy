// import { useSelector } from 'react-redux';

import {GetServerSideProps} from 'next';
import {DeviceType, ReactComponent} from 'src/types/main';

import {DeviceTypes} from '@/constants/device-types';
import {getLayout} from '@/layouts/main-layout/main-layout';
import Client from '@/views/profile/information/display-name/client';
import Mobile from '@/views/profile/information/display-name/mobile';

type DisplayNameProps = {
  deviceType: DeviceType;
};

const DisplayName: ReactComponent<DisplayNameProps> = ({deviceType}) => (
  // const { name } = useSelector((state) => state.test);
  <> {deviceType === DeviceTypes.MOBILE ? <Mobile /> : <Client />}</>
);
DisplayName.getLayout = getLayout;

export default DisplayName;

export const getServerSideProps: GetServerSideProps = async () => ({
  props: {},
});
