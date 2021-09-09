import {useRouter} from 'next/router';
import React, {FC, ReactNode} from 'react';

import ArrowRight from '@/assets/vectors/F-Right.svg';
import Typography from '@/shared/typography';

import * as S from './page-head.styled';

interface PageHeadProps {
  children?: ReactNode;
  title?: string;
  hasBorder?: boolean;
}

const PageHead: FC<PageHeadProps> = ({title, children, hasBorder = true}) => {
  const {back} = useRouter();
  return (
    <S.Head $hasBorder={hasBorder}>
      <S.ArrowRight as={ArrowRight} onClick={() => back()} />
      <Typography>
        {title}
        {children}
      </Typography>
    </S.Head>
  );
};

export default PageHead;
