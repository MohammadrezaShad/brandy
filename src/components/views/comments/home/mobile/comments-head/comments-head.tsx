import {useRouter} from 'next/router';

import ArrowRight from '@/assets/vectors/F-Right.svg';
import Typography from '@/shared/typography';

import * as S from './comments-head.styled';

const CommentsHead = () => {
  const {back} = useRouter();
  return (
    <S.Wrapper>
      <S.Icon as={ArrowRight} onClick={back} />
      <Typography>لیست نظرات ثبت شده (1400+)</Typography>
    </S.Wrapper>
  );
};

export default CommentsHead;
