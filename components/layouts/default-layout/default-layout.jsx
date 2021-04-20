import React from 'react';

const DefaultLayout = ({ children }) => <>{children}</>;

export const getDefaultLayout = (page) => <DefaultLayout>{page}</DefaultLayout>;

export default DefaultLayout;
