import React, {FC, useState} from 'react';

import Input from '@/shared/form/input';

interface HyphenInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  value?: string;
  handleChange: (
    event: React.ChangeEvent<HTMLInputElement>,
    dashedValue: string,
  ) => void;
  dashIndex?: number;
  isNumberInput?: boolean;
}

const HyphenInput: FC<HyphenInputProps> = ({
  value = '',
  handleChange,
  dashIndex = 1,
  isNumberInput,
  ...rest
}) => {
  const [dashedValue, setDashedValue] = useState(value);
  function addHyphen(inputValue: string) {
    if (!inputValue) return inputValue;
    const rightValue = inputValue.split(' ').join('').split('-').join('');
    if (!/^\d+$/.test(rightValue) && isNumberInput) return dashedValue;
    const regex = new RegExp(`.{1,${dashIndex}}`, 'g');
    const finalValue = rightValue.match(regex).join(' - ');
    return finalValue;
  }
  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const {value: inputValue} = event.target;
    const dashedInputValue = addHyphen(inputValue);
    setDashedValue(dashedInputValue);
    handleChange(event, dashedInputValue);
  };
  return <Input value={dashedValue} handleChange={onChange} {...rest} />;
};

export default HyphenInput;
