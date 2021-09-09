import React, {FC, ReactNode, useState} from 'react';

import Hide from '@/assets/vectors/hide.svg';
import Show from '@/assets/vectors/Show.svg';

import Input, {InputProps} from '../input/input';
import * as S from './password-input.styled';

const PasswordInput: FC<InputProps> = props => {
  const textType = 'text';
  const passwordType = 'password';
  const [type, setType] = useState(passwordType);
  const onIconClick = () => {
    setType(type === passwordType ? textType : passwordType);
  };

  return (
    <S.Wrap>
      <Input {...props} type={type} />
      {type === 'password' ? (
        <S.Icon as={Show} onClick={onIconClick} />
      ) : (
        <S.Icon as={Hide} onClick={onIconClick} />
      )}
    </S.Wrap>
  );
};

export default PasswordInput;
