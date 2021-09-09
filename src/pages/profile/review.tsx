// import { useSelector } from 'react-redux';

import {GetServerSideProps} from 'next';
import {DeviceType, ReactComponent} from 'src/types/main';

import {DeviceTypes} from '@/constants/device-types';
import {getLayout} from '@/layouts/main-layout/main-layout';
import Client from '@/views/profile/review/client';
import Mobile from '@/views/profile/review/mobile';

type ReviewProps = {
  deviceType: DeviceType;
};

const Review: ReactComponent<ReviewProps> = ({deviceType}) => (
  // const { name } = useSelector((state) => state.test);
  <> {deviceType === DeviceTypes.MOBILE ? <Mobile /> : <Client />}</>
);
Review.getLayout = getLayout;

export default Review;

export const getServerSideProps: GetServerSideProps = async () => ({
  props: {},
});
