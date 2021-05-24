import React, {FC} from 'react';
import {GetLayout, LayoutProps} from 'src/types/main';

import {DeviceTypes} from '@/constants/device-types';
import DesktopMainLayout from '@/layouts/main-layout/client';
import MobileMainLayout from '@/layouts/main-layout/mobile';

const MainLayout: FC<LayoutProps> = ({children, deviceType}) =>
  deviceType === DeviceTypes.MOBILE ? (
    <MobileMainLayout>{children}</MobileMainLayout>
  ) : (
    <DesktopMainLayout>{children}</DesktopMainLayout>
  );

export const getLayout: GetLayout = (page, deviceType) => (
  <MainLayout deviceType={deviceType}>{page}</MainLayout>
);

export default MainLayout;
