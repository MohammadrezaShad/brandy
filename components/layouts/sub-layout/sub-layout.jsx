import React from 'react';

import { getLayout } from '../main-layout/main-layout';

const SubLayout = ({ children }) => <div>{children}</div>;

export const getSubLayout = (page) => getLayout(<SubLayout>{page}</SubLayout>);

export default SubLayout;
