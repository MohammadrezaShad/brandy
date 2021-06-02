import {Field} from 'formik';
import React, {FC, ReactNode} from 'react';

import Textarea from '@/shared/form/textarea';
import Typography from '@/shared/typography';

import * as S from './comment-detail.styled';

type CommentDetailProps = {
  children?: ReactNode;
};

const CommentDetail: FC<CommentDetailProps> = () => (
  <S.Wrapper>
    <Typography gutterBottom={3}>دیدگاه خود را شرح دهید</Typography>
    <Field as={Textarea} name='detail' />
  </S.Wrapper>
);

export default CommentDetail;
