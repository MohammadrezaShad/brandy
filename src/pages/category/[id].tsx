import React from 'react';
import {DeviceType, ReactComponent} from 'src/types/main';

import {DeviceTypes} from '@/constants/device-types';
import {getLayout} from '@/layouts/main-layout/main-layout';
import {reduxWrap} from '@/redux/store';
import {increment} from '@/slices/test-slice';
import Client from '@/views/category/client';
import Mobile from '@/views/category/mobile';

type CategoryProps = {
  deviceType: DeviceType;
};

const Category: ReactComponent<CategoryProps> = ({deviceType}) => (
  <> {deviceType === DeviceTypes.MOBILE ? <Mobile /> : <Client />}</>
);

Category.getLayout = getLayout;

export default Category;

export const getServerSideProps = reduxWrap.getServerSideProps(
  async ({store}) => {
    const {dispatch} = store;
    console.log(dispatch(increment()));
    return {
      props: {},
    };
  },
);
