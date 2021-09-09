// import { useSelector } from 'react-redux';

import {GetServerSideProps} from 'next';
import {DeviceType, ReactComponent} from 'src/types/main';

import {DeviceTypes} from '@/constants/device-types';
import {getLayout} from '@/layouts/main-layout/main-layout';
import Client from '@/views/profile/information/national-code/client';
import Mobile from '@/views/profile/information/national-code/mobile';

type NationalCodeProps = {
  deviceType: DeviceType;
};

const NationalCode: ReactComponent<NationalCodeProps> = ({deviceType}) => (
  // const { name } = useSelector((state) => state.test);
  <> {deviceType === DeviceTypes.MOBILE ? <Mobile /> : <Client />}</>
);
NationalCode.getLayout = getLayout;

export default NationalCode;

export const getServerSideProps: GetServerSideProps = async () => ({
  props: {},
});
