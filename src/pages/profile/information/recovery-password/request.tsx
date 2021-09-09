// import { useSelector } from 'react-redux';

import {GetServerSideProps} from 'next';
import {DeviceType, ReactComponent} from 'src/types/main';

import {DeviceTypes} from '@/constants/device-types';
import {getLayout} from '@/layouts/main-layout/main-layout';
import Client from '@/views/profile/information/recovery-passowrd/request/client';
import Mobile from '@/views/profile/information/recovery-passowrd/request/mobile';

type RequestProps = {
  deviceType: DeviceType;
};

const Request: ReactComponent<RequestProps> = ({deviceType}) => (
  // const { name } = useSelector((state) => state.test);
  <> {deviceType === DeviceTypes.MOBILE ? <Mobile /> : <Client />}</>
);
Request.getLayout = getLayout;

export default Request;

export const getServerSideProps: GetServerSideProps = async () => ({
  props: {},
});
