import {Field} from 'formik';
import React, {FC, ReactNode} from 'react';

import {typographyDisplay} from '@/constants/typography-config';
import Radio from '@/shared/form/radio';
import Typography from '@/shared/typography';

import * as S from './comment-size.styled';

type CommentSizeProps = {
  size: string;
};

const CommentSize: FC<CommentSizeProps> = ({size}) => (
  <div>
    <Typography display={typographyDisplay.BLOCK}>
      آیا سایز این کالا مناسب شما بود؟
    </Typography>
    <S.Wrap>
      <Field as={Radio} name='size' checked={size === '1'} value='1'>
        <Typography gutterRight={1}>کوچک</Typography>
      </Field>
      <Field as={Radio} name='size' checked={size === '2'} value='2'>
        <Typography gutterRight={1}>مناسب</Typography>
      </Field>
      <Field as={Radio} name='size' checked={size === '3'} value='3'>
        <Typography gutterRight={1}>بـــزرگ</Typography>
      </Field>
    </S.Wrap>
  </div>
);

export default CommentSize;
