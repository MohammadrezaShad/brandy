/* eslint-disable react/no-array-index-key */
import React, {FC, ReactNode} from 'react';

import {useOtpInput} from '@/helpers/use-otp-input';
import {Component} from '@/types/main';

import * as S from './otp-input.styled';
import SingleInput from './single-input';

interface OtpInputProps {
  children?: ReactNode;
  length: number;
  onChange: (inputs: string) => unknown;
  autoFocus?: boolean;
  isNumberInput?: boolean;
  disabled?: boolean;
  component?: Component;
}

const OtpInput: FC<OtpInputProps> = props => {
  const {
    length,
    isNumberInput = true,
    autoFocus,
    disabled,
    onChange,
    component,
    ...rest
  } = props;
  const {
    activeInput,
    otpValues,
    handleOnBlur,
    handleOnChange,
    handleOnFocus,
    handleOnKeyDown,
    handleOnPaste,
  } = useOtpInput({length, onChange, isNumberInput});

  return (
    <S.Wrap>
      {Array(length)
        .fill('')
        .map((_, index) => (
          <SingleInput
            key={index}
            focus={activeInput === index}
            value={otpValues && otpValues[index]}
            autoFocus={autoFocus}
            onFocus={handleOnFocus(index)}
            onChange={handleOnChange}
            onKeyDown={handleOnKeyDown}
            onBlur={handleOnBlur}
            onPaste={handleOnPaste}
            disabled={disabled}
            component={component}
            {...rest}
          />
        ))}
    </S.Wrap>
  );
};

export default React.memo(OtpInput);
