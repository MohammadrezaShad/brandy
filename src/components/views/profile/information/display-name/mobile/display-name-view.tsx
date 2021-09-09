import React, {FC, ReactNode} from 'react';

import PageHead from '@/shared/page-head';

import DisplayNameForm from './display-name-form';

interface DisplayNameProps {
  children?: ReactNode;
}

const DisplayName: FC<DisplayNameProps> = props => {
  console.log('DisplayName');
  return (
    <>
      <PageHead>ثبت نام و نام خانوادگی</PageHead>
      <DisplayNameForm />
    </>
  );
};

export default DisplayName;
