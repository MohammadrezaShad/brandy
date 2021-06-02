import React, {ChangeEvent, FC} from 'react';

import * as S from './textarea.styled';

type TextareaProps = {
  placeholder?: string;
  value?: string | number;
  name?: string;
  onChange?: (event: ChangeEvent<HTMLTextAreaElement>) => void;
};

const Textarea: FC<TextareaProps> = ({
  placeholder,
  value,
  onChange,
  name,
  ...restProps
}) => (
  <S.Textarea
    placeholder={placeholder}
    name={name}
    value={value}
    onChange={onChange}
    {...restProps}
  />
);

export default Textarea;
