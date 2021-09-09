import React, {FC, ReactNode} from 'react';

import PageHead from '@/shared/page-head';

import NationalCodeForm from './national-code-form';

interface DisplayNameProps {
  children?: ReactNode;
}

const NationalCode: FC<DisplayNameProps> = () => {
  console.log('NationalCodeForm');
  return (
    <>
      <PageHead>ثبت کد ملی</PageHead>
      <NationalCodeForm />
    </>
  );
};

export default NationalCode;
