import React, { FC } from 'react';
import { GetLayout, LayoutProps } from 'src/types/main';

const DefaultLayout: FC<LayoutProps> = ({ children, deviceType }) => <>{children}</>;

export const getDefaultLayout: GetLayout = (page, deviceType) => (
  <DefaultLayout deviceType={deviceType}>{page}</DefaultLayout>
);

export default DefaultLayout;
