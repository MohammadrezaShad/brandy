// import { useSelector } from 'react-redux';

import {GetServerSideProps} from 'next';
import {DeviceType, ReactComponent} from 'src/types/main';

import {DeviceTypes} from '@/constants/device-types';
import {getLayout} from '@/layouts/main-layout/main-layout';
import Client from '@/views/profile/information/mobile-number/client';
import Mobile from '@/views/profile/information/mobile-number/mobile';

type NotificationsProps = {
  deviceType: DeviceType;
};

const Notifications: ReactComponent<NotificationsProps> = ({deviceType}) => (
  // const { name } = useSelector((state) => state.test);
  <> {deviceType === DeviceTypes.MOBILE ? <Mobile /> : <Client />}</>
);
Notifications.getLayout = getLayout;

export default Notifications;

export const getServerSideProps: GetServerSideProps = async () => ({
  props: {},
});
