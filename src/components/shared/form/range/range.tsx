import React, {FC} from 'react';

import * as S from './range.styled';

type RangeProps = {
  value: number;
  min: number;
  max: number;
  step: number;
  name?: string;
};

const Range: FC<RangeProps> = ({
  value = 0,
  min = 0,
  max = 5,
  step = 0.1,
  name,
  ...props
}) => (
  <S.Range
    type='range'
    name={name}
    step={step}
    min={min}
    max={max}
    value={value}
    currentValue={value}
    {...props}
  />
);

export default Range;
