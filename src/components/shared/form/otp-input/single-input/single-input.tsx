import React, {FC, useRef} from 'react';

import useIsomorphicLayoutEffect from '@/helpers/use-isomorphic-layout-effect';
import {usePrevious} from '@/helpers/use-previous';
import {Component} from '@/types/main';

import * as S from './single-input.styled';

export interface SingleOTPInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  focus?: boolean;
  component?: Component;
}

const SingleInput: FC<SingleOTPInputProps> = props => {
  const {focus, autoFocus, component, value, ...rest} = props;
  const inputRef = useRef<HTMLInputElement>(null);
  const prevFocus = usePrevious(!!focus);

  useIsomorphicLayoutEffect(() => {
    if (inputRef.current) {
      if (focus || autoFocus) {
        inputRef.current.focus();
      }
      if ((focus || autoFocus) && focus !== prevFocus) {
        inputRef.current.focus();
        inputRef.current.select();
      }
    }
  }, [autoFocus, focus, prevFocus]);
  return <S.Input as={component} value={value} ref={inputRef} {...rest} />;
};

export default React.memo(SingleInput);
