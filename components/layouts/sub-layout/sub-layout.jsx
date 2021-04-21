import React from 'react';

import { getLayout } from '../main-layout/main-layout';

const SubLayout = ({ children, deviceType }) => <div>{children}</div>;

export const getSubLayout = (page, deviceType) =>
  getLayout(<SubLayout deviceType={deviceType}>{page}</SubLayout>, deviceType);

export default SubLayout;
