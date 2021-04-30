/* eslint-disable no-nested-ternary */
import { FC } from 'react';

import EmptyStar from '@/assets/vectors/EStar.svg';
import FullStar from '@/assets/vectors/FStar.svg';
import HalfStar from '@/assets/vectors/HStar.svg';

import * as S from './star-rating.styled';

type StarRatingProps = {
  rate: number;
};
const StarRating: FC<StarRatingProps> = ({ rate = 4.5 }) => (
  <S.Wrap>
    {Array.from({ length: 5 }, (_, i) => i + 1).map((id) => (
      <span key={id}>
        {id + 1 <= rate ? <FullStar key={id} /> : id + 0.5 <= rate ? <HalfStar /> : <EmptyStar key={id} />}
      </span>
    ))}
  </S.Wrap>
);

export default StarRating;
