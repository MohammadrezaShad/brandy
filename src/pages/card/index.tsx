// import { useTranslation } from 'next-i18next';
// import { useSelector } from 'react-redux';

import {GetServerSideProps} from 'next';
import {DeviceType, ReactComponent} from 'src/types/main';

import {DeviceTypes} from '@/constants/device-types';
import {getCardLayout} from '@/layouts/card-layout/card-layout';
import Client from '@/views/card/home/client';
import Mobile from '@/views/card/home/mobile';

type CardProps = {
  deviceType: DeviceType;
};

const Card: ReactComponent<CardProps> = ({deviceType}) => (
  // const { name } = useSelector((state) => state.test);
  <> {deviceType === DeviceTypes.MOBILE ? <Mobile /> : <Client />}</>
);
Card.getLayout = getCardLayout;

export default Card;

export const getServerSideProps: GetServerSideProps = async () => ({
  props: {},
});
