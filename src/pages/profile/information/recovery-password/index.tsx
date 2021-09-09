// import { useSelector } from 'react-redux';

import {GetServerSideProps} from 'next';
import {DeviceType, ReactComponent} from 'src/types/main';

import {DeviceTypes} from '@/constants/device-types';
import {getLayout} from '@/layouts/main-layout/main-layout';
import Client from '@/views/profile/information/recovery-passowrd/home/client';
import Mobile from '@/views/profile/information/recovery-passowrd/home/mobile';

type RecoveryPasswordProps = {
  deviceType: DeviceType;
};

const RecoveryPassword: ReactComponent<RecoveryPasswordProps> = ({
  deviceType,
}) => (
  // const { name } = useSelector((state) => state.test);
  <> {deviceType === DeviceTypes.MOBILE ? <Mobile /> : <Client />}</>
);
RecoveryPassword.getLayout = getLayout;

export default RecoveryPassword;

export const getServerSideProps: GetServerSideProps = async () => ({
  props: {},
});
