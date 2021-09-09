import React, {FC, FormEvent, ReactNode, useState} from 'react';

import Verification from '@/shared/verification';

interface EmailVerificationProps {
  children?: ReactNode;
}

const EmailVerification: FC<EmailVerificationProps> = props => {
  const onSumbit = (event: FormEvent<HTMLFormElement>, code: string) => {
    event.preventDefault();
    console.log(code);
  };
  return (
    <Verification
      onSumbit={onSumbit}
      pageTitle='احراز هویت پست الکترونیک'
      target='ایمیل'
      text='RE79.Aliasghar@gmail.com'
    />
  );
};

export default EmailVerification;
