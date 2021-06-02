import {FC, FormEvent} from 'react';

import Tick from '@/assets/vectors/Checkmark.svg';

import * as S from './checkbox.styled';

type CheckboxProps = {
  children?: unknown;
  onChange: (event: FormEvent<HTMLInputElement>) => void;
  checked?: boolean;
  name?: string;
};

const Checkbox: FC<CheckboxProps> = ({
  children,
  onChange,
  name,
  checked,
  ...restProps
}) => (
  <S.Wrap>
    <S.Layout>
      <S.Input
        type='checkbox'
        checked={checked}
        name={name}
        onChange={onChange}
        {...restProps}
      />
      <S.Icon as={Tick} checked={checked} />
    </S.Layout>
    {children}
  </S.Wrap>
);

export default Checkbox;
