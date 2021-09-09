import {FC} from 'react';

import {Component} from '@/types/main';

import * as S from './input.styled';

export type InputProps = {
  value?: string;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  paddingRight?: number;
  paddingLeft?: number;
  component?: Component;
  hasBorder?: boolean;
} & React.InputHTMLAttributes<HTMLInputElement>;

const Input: FC<InputProps> = ({
  value,
  handleChange,
  placeholder,
  paddingRight = 2,
  paddingLeft = 2,
  component,
  hasBorder,
  ...restProps
}) => (
  <S.Input
    as={component}
    value={value}
    onChange={handleChange}
    placeholder={placeholder}
    $paddingRight={paddingRight}
    $paddingLeft={paddingLeft}
    $hasBorder={hasBorder}
    {...restProps}
  />
);

export default Input;
