import {useRouter} from 'next/router';
import React, {FC, ReactNode} from 'react';

import Arrow from '@/assets/vectors/F-Right.svg';
import {typographyVariant} from '@/constants/typography-config';
import Typography from '@/shared/typography';

import * as S from './comment-head.styled';

type CommentHeadProps = {
  children?: ReactNode;
};

const CommentHead: FC<CommentHeadProps> = () => {
  const {back} = useRouter();
  return (
    <S.Wrapper>
      <S.Icon as={Arrow} onClick={back} />
      <Typography variant={typographyVariant.BODY_MD_MEDIUM}>
        ثبت نظر
      </Typography>
    </S.Wrapper>
  );
};

export default CommentHead;
