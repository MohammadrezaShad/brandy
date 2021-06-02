import {
  Comment,
  CommentBuyerTag,
  CommentContent,
  CommentDate,
  CommentFooter,
  CommentHead,
  CommentMail,
  CommentRate,
} from '@/shared/comment';
import {CommentDetails} from '@/shared/comment/comment';

import * as S from './comments-list.styled';

const CommentsList = () => (
  <S.Wrapper>
    {Array.from({length: 2}, (_, i) => i + 1).map(item => (
      <S.Container key={item}>
        <Comment>
          <CommentHead>
            <S.Block>
              <CommentBuyerTag />
              <CommentMail />
            </S.Block>
            <S.Block>
              <CommentDate />
              <CommentRate />
            </S.Block>
          </CommentHead>
          <CommentContent />
          <CommentFooter>
            <CommentDetails />
          </CommentFooter>
        </Comment>
      </S.Container>
    ))}
  </S.Wrapper>
);

export default CommentsList;
