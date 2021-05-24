/* eslint-disable no-nested-ternary */
import {FC, MouseEvent, useState} from 'react';

import EmptyStar from '@/assets/vectors/EStar.svg';
import FullStar from '@/assets/vectors/FStar.svg';

import * as S from './star-rating.styled';

type StarRatingProps = {
  rate: number;
  readOnly?: boolean;
  getChangedRate?: (newRate: number) => void;
};
const StarRating: FC<StarRatingProps> = ({
  rate = 0,
  readOnly = true,
  getChangedRate,
}) => {
  const [starRate, setStarRate] = useState(rate);

  const handleMouseClick = (event: MouseEvent<HTMLSpanElement>) => {
    const calculatedRate =
      ((event.clientX - event.currentTarget.getClientRects()[0].left) /
        event.currentTarget.offsetWidth) *
      5;
    const formattedRate =
      Math.ceil(calculatedRate) - calculatedRate < 0.1
        ? Math.ceil(calculatedRate)
        : Math.round(calculatedRate * 10) / 10;
    setStarRate(formattedRate);
    getChangedRate && getChangedRate(formattedRate);
  };

  return (
    <S.Wrap>
      <S.Wrapper onClick={readOnly ? null : handleMouseClick} />
      {Array.from({length: 5}, (_, i) => i + 1).map(id => (
        <S.StarWrap key={id}>
          <EmptyStar key={id} />
        </S.StarWrap>
      ))}
      <S.Container starRate={starRate}>
        {Array.from({length: 5}, (_, i) => i + 1).map(id => (
          <S.StarWrap key={id}>
            <FullStar key={id} />
          </S.StarWrap>
        ))}
      </S.Container>
    </S.Wrap>
  );
};

export default StarRating;
