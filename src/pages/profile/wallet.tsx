// import { useSelector } from 'react-redux';

import {GetServerSideProps} from 'next';
import {DeviceType, ReactComponent} from 'src/types/main';

import {DeviceTypes} from '@/constants/device-types';
import {getLayout} from '@/layouts/main-layout/main-layout';
import Client from '@/views/profile/wallet/client';
import Mobile from '@/views/profile/wallet/mobile';

type WalletProps = {
  deviceType: DeviceType;
};

const Wallet: ReactComponent<WalletProps> = ({deviceType}) => (
  // const { name } = useSelector((state) => state.test);
  <> {deviceType === DeviceTypes.MOBILE ? <Mobile /> : <Client />}</>
);
Wallet.getLayout = getLayout;

export default Wallet;

export const getServerSideProps: GetServerSideProps = async () => ({
  props: {},
});
