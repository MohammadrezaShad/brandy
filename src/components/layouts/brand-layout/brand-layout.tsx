import React, { FC } from 'react';
import { GetLayout, LayoutProps } from 'src/types/main';

import { DeviceTypes } from '@/constants/device-types';
import DesktopMainLayout from '@/layouts/brand-layout/client';
import MobileMainLayout from '@/layouts/brand-layout/mobile';

import { getLayout } from '../main-layout/main-layout';

const BrandLayout: FC<LayoutProps> = ({ children, deviceType }) =>
  deviceType === DeviceTypes.MOBILE ? (
    <MobileMainLayout>{children}</MobileMainLayout>
  ) : (
    <DesktopMainLayout>{children}</DesktopMainLayout>
  );

export const getBrandLayout: GetLayout = (page, deviceType) =>
  getLayout(<BrandLayout deviceType={deviceType}>{page}</BrandLayout>, deviceType);

export default BrandLayout;
