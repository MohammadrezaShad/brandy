import React, {FC, ReactNode} from 'react';

import {buttonSizes} from '@/constants/button-config';
import {typographyColor} from '@/constants/typography-config';
import Button from '@/shared/button';
import Typography from '@/shared/typography';

import * as S from './comment-bottom.styled';

type CommentBottomProps = {
  children?: ReactNode;
};

const CommentBottom: FC<CommentBottomProps> = () => (
  <S.Wrapper>
    <Typography gutterBottom={3} color={typographyColor.PRIMARY}>
      ثبت نظر به معنی موافقت با
      <Typography color={typographyColor.ON_SUCCESS}>
        &nbsp; قوانین انتشار &nbsp;
      </Typography>
      برندی تو است
    </Typography>
    <S.ButtonWrap>
      <Button type='submit' matchParent size={buttonSizes.LARGE}>
        ثبت نظر
      </Button>
    </S.ButtonWrap>
  </S.Wrapper>
);

export default CommentBottom;
