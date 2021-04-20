import React from 'react';

const MainLayout = ({ children }) => <div>{children}</div>;

export const getLayout = (page) => <MainLayout>{page}</MainLayout>;

export default MainLayout;
