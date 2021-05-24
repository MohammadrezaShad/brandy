import {FC} from 'react';

import CommentsBottom from './comments-bottom';
import CommentsHead from './comments-head';
import CommentsList from './comments-list';
import * as S from './home-view.styled';
import ProductDetail from './product-detail';

const HomeView: FC = () => (
  <S.Wrapper>
    <CommentsHead />
    <S.Detail>
      <ProductDetail />
    </S.Detail>
    <S.Block>
      <CommentsList />
    </S.Block>
    <CommentsBottom />
  </S.Wrapper>
);

export default HomeView;
