import React from 'react';

import { DeviceTypes } from '@/constants/device-types';
import DesktopMainLayout from '@/layouts/main-layout/client';
import MobileMainLayout from '@/layouts/main-layout/mobile';

const MainLayout = ({ children, deviceType }) =>
  deviceType === DeviceTypes.MOBILE ? (
    <MobileMainLayout>{children}</MobileMainLayout>
  ) : (
    <DesktopMainLayout>{children}</DesktopMainLayout>
  );

export const getLayout = (page, deviceType) => <MainLayout deviceType={deviceType}>{page}</MainLayout>;

export default MainLayout;
