import {FC} from 'react';

import * as S from './input.styled';

type InputProps = {
  value?: string;
  handleChange: () => void;
  placeholder?: string;
  paddingRight?: number;
  paddingLeft?: number;
};

const Input: FC<InputProps> = ({
  value,
  handleChange,
  placeholder,
  paddingRight = 2,
  paddingLeft = 2,
  ...restProps
}) => (
  <S.Input
    value={value}
    onChange={handleChange}
    placeholder={placeholder}
    $paddingRight={paddingRight}
    $paddingLeft={paddingLeft}
    {...restProps}
  />
);

export default Input;
