// import { useSelector } from 'react-redux';

import {GetServerSideProps} from 'next';
import {DeviceType, ReactComponent} from 'src/types/main';

import {DeviceTypes} from '@/constants/device-types';
import {getLayout} from '@/layouts/main-layout/main-layout';
import Client from '@/views/profile/information/recovery-passowrd/verification/client';
import Mobile from '@/views/profile/information/recovery-passowrd/verification/mobile';

type VerificationProps = {
  deviceType: DeviceType;
};

const Verification: ReactComponent<VerificationProps> = ({deviceType}) => (
  // const { name } = useSelector((state) => state.test);
  <> {deviceType === DeviceTypes.MOBILE ? <Mobile /> : <Client />}</>
);
Verification.getLayout = getLayout;

export default Verification;

export const getServerSideProps: GetServerSideProps = async () => ({
  props: {},
});
