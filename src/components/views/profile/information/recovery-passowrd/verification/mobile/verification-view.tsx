import React, {FC, FormEvent, ReactNode, useState} from 'react';

import VerificationCmp from '@/shared/verification';

interface VerificationProps {
  children?: ReactNode;
}

const Verification: FC<VerificationProps> = props => {
  const onSumbit = (event: FormEvent<HTMLFormElement>, code: string) => {
    event.preventDefault();
    console.log(code);
  };
  return (
    <VerificationCmp
      onSumbit={onSumbit}
      pageTitle='درخواست بازیابی رمز عبور'
      target='شماره/ایمیل'
      text='RE79.Aliasghar@gmail.com'
    />
  );
};

export default Verification;
