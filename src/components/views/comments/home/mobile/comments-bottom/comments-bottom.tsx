import {FC} from 'react';

import {
  buttonColors,
  buttonSizes,
  buttonVariants,
} from '@/constants/button-config';
import Button from '@/shared/button';

import * as S from './comments-bottom.styled';

type CommentBottomProps = {
  handleOpenCommentDialog: () => void;
};

const CommentsBottom: FC<CommentBottomProps> = ({handleOpenCommentDialog}) => (
  <S.ButtonWrap>
    <S.Wrap>
      <Button size={buttonSizes.LARGE} onClick={handleOpenCommentDialog}>
        ثبت نظر
      </Button>
    </S.Wrap>
    <S.Wrap>
      <Button
        variant={buttonVariants.OUTLINE}
        color={buttonColors.ON_SURFACE}
        size={buttonSizes.LARGE}
      >
        افزودن به سبد خرید
      </Button>
    </S.Wrap>
  </S.ButtonWrap>
);

export default CommentsBottom;
