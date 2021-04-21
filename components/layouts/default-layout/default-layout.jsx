import React from 'react';

const DefaultLayout = ({ children, deviceType }) => <>{children}</>;

export const getDefaultLayout = (page, deviceType) => <DefaultLayout deviceType={deviceType}>{page}</DefaultLayout>;

export default DefaultLayout;
