import React, {FC, FormEvent, ReactNode, useState} from 'react';

import {useCountdown} from '@/helpers/use-count-down';
import Verification from '@/shared/verification';

interface MobileNumberVerificationProps {
  children?: ReactNode;
}

const MobileNumberVerification: FC<MobileNumberVerificationProps> = props => {
  const onSumbit = (event: FormEvent<HTMLFormElement>, code: string) => {
    event.preventDefault();
    console.log(code);
  };
  return (
    <Verification
      onSumbit={onSumbit}
      pageTitle='تایید شماره موبایل'
      target='شماره '
      text='0916 851 8065'
    />
  );
};

export default MobileNumberVerification;
