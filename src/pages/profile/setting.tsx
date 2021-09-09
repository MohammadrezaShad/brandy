// import { useSelector } from 'react-redux';

import {GetServerSideProps} from 'next';
import {DeviceType, ReactComponent} from 'src/types/main';

import {DeviceTypes} from '@/constants/device-types';
import {getLayout} from '@/layouts/main-layout/main-layout';
import Client from '@/views/profile/setting/client';
import Mobile from '@/views/profile/setting/mobile';

type SettingProps = {
  deviceType: DeviceType;
};

const Setting: ReactComponent<SettingProps> = ({deviceType}) => (
  // const { name } = useSelector((state) => state.test);
  <> {deviceType === DeviceTypes.MOBILE ? <Mobile /> : <Client />}</>
);
Setting.getLayout = getLayout;

export default Setting;

export const getServerSideProps: GetServerSideProps = async () => ({
  props: {},
});
