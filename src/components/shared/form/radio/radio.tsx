import {FC, FormEvent} from 'react';

import * as S from './radio.styled';

type RadioProps = {
  children?: unknown;
  onChange: (event: FormEvent<HTMLInputElement>) => void;
  checked?: boolean;
  name?: string;
};

const Radio: FC<RadioProps> = ({children, onChange, name, checked}) => {
  console.log('Radio');
  return (
    <S.Wrap>
      <S.Layout checked={checked}>
        <S.Input
          type='radio'
          checked={checked}
          name={name}
          onChange={onChange}
        />
      </S.Layout>
      {children}
    </S.Wrap>
  );
};

export default Radio;
