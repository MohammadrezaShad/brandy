import {Field} from 'formik';
import React, {FC, ReactNode} from 'react';

import {typographyVariant} from '@/constants/typography-config';
import Range from '@/shared/form/range';
import StarRating from '@/shared/star-rating';
import Typography from '@/shared/typography';

import * as S from './comment-score.styled';

type CommentScoreProps = {
  children?: ReactNode;
  rate: number;
};

const CommentScore: FC<CommentScoreProps> = ({rate}) => (
  <S.Wrapper>
    <S.Wrap>
      <Typography variant={typographyVariant.BODY_MD_MEDIUM}>
        امتیاز محصول
      </Typography>

      <S.RateWrap>
        <StarRating rate={rate} />
        <S.TextWrap>
          <Typography variant={typographyVariant.HEADLINE1} gutterRight={1}>
            {rate.toFixed(1)}
          </Typography>
        </S.TextWrap>
      </S.RateWrap>
    </S.Wrap>
    <S.Wrap>
      <S.RangeWrap>
        <Field
          as={Range}
          name='rate'
          step={0.1}
          min={0}
          max={5}
          value={rate}
          rcurrentValueate={rate}
        />
        <S.PointsWrap>
          {Array.from({length: 6}, (_, i) => i + 1).map(id => (
            <S.Point index={id} key={id} />
          ))}
        </S.PointsWrap>
      </S.RangeWrap>
    </S.Wrap>
  </S.Wrapper>
);

export default CommentScore;
