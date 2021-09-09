import React, {FC} from 'react';
import {GetLayout, LayoutProps} from 'src/types/main';

import {DeviceTypes} from '@/constants/device-types';
import DesktopMainLayout from '@/layouts/home-layout/client';
import MobileMainLayout from '@/layouts/home-layout/mobile';

import {getLayout} from '../main-layout/main-layout';

const HomeLayout: FC<LayoutProps> = ({children, deviceType}) =>
  deviceType === DeviceTypes.MOBILE ? (
    <MobileMainLayout>{children}</MobileMainLayout>
  ) : (
    <DesktopMainLayout>{children}</DesktopMainLayout>
  );

export const getHomeLayout: GetLayout = (page, deviceType) =>
  getLayout(
    <HomeLayout deviceType={deviceType}>{page}</HomeLayout>,
    deviceType,
  );

export default HomeLayout;
