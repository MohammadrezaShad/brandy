import {FC, useState} from 'react';

import ProductComment from '@/dialogs/comments/product-comment';

import CommentsBottom from './comments-bottom';
import CommentsHead from './comments-head';
import CommentsList from './comments-list';
import * as S from './home-view.styled';
import ProductDetail from './product-detail';

const HomeView: FC = () => {
  const [isCommentDialogOpen, setIsCommentDialogOpen] = useState(false);

  const handleCloseCommentDialog = () => {
    setIsCommentDialogOpen(false);
  };

  const handleOpenCommentDialog = () => {
    setIsCommentDialogOpen(true);
  };
  return (
    <S.Wrapper>
      <CommentsHead />
      <S.Detail>
        <ProductDetail />
      </S.Detail>
      <S.Block>
        <CommentsList />
      </S.Block>
      <CommentsBottom handleOpenCommentDialog={handleOpenCommentDialog} />
      <ProductComment
        open={isCommentDialogOpen}
        onClose={handleCloseCommentDialog}
      />
    </S.Wrapper>
  );
};

export default HomeView;
