import {Field} from 'formik';
import React, {FC, ReactNode, useState} from 'react';

import {typographyVariant} from '@/constants/typography-config';
import Checkbox from '@/shared/form/checkbox';
import Typography from '@/shared/typography';

import * as S from './comment-size-detail.styled';

type CommentSizeDetailProps = {
  children?: ReactNode;
};

const CommentSizeDetail: FC<CommentSizeDetailProps> = () => {
  const [hasSizesDetail, setHasSizesDetail] = useState(false);
  const onChange = () => {
    setHasSizesDetail(!hasSizesDetail);
  };
  return (
    <div>
      <Checkbox checked={hasSizesDetail} onChange={onChange}>
        <Typography gutterRight={1} variant={typographyVariant.BODY_MD_MEDIUM}>
          مایل به ثبت اندازه های خود هستم
        </Typography>
      </Checkbox>
      {hasSizesDetail ? (
        <S.Wrap>
          <S.Block>
            <Field
              as={S.Input}
              type='number'
              name='height'
              autocomplete='off'
              placeholder='سانتی متر'
            />
            <Typography gutterTop={1}>قـد</Typography>
          </S.Block>
          <S.Block>
            <Field
              as={S.Input}
              type='number'
              name='weight'
              autocomplete='off'
              placeholder='سانتی متر'
            />
            <Typography gutterTop={1}>نیم تنه</Typography>
          </S.Block>
          <S.Block>
            <Field
              as={S.Input}
              type='number'
              name='bust'
              autocomplete='off'
              placeholder='سانتی متر'
            />
            <Typography gutterTop={1}>وزن</Typography>
          </S.Block>
          <S.Block>
            <Field
              as={S.Input}
              type='number'
              name='basin'
              autocomplete='off'
              placeholder='سانتی متر'
            />
            <Typography gutterTop={1}>لگن</Typography>
          </S.Block>
        </S.Wrap>
      ) : null}
    </div>
  );
};

export default CommentSizeDetail;
