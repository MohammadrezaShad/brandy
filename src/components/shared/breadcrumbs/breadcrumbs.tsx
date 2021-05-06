/* eslint-disable react/no-array-index-key */
import { useRouter } from 'next/router';
import React, { FC } from 'react';

import ArrowLeft from '@/assets/vectors/F-Left.svg';
import ArrowRight from '@/assets/vectors/F-Right.svg';
import Typography from '@/components/shared/typography';
import { typographyVariant } from '@/constants/typography-config';

import * as S from './breadcrumbs.styled';

type BreadcrumbsProps = {
  crumbs: string[];
};

const Breadcrumbs: FC<BreadcrumbsProps> = ({ crumbs = ['دسته‌بندی', 'دسته اول', 'دسته دوم', 'محصول ایکس'] }) => {
  const { back } = useRouter();
  return (
    <S.Wrap>
      <S.ArrowRight as={ArrowRight} onClick={() => back()} />
      <S.Content>
        {crumbs.map((crumb, index) => (
          <S.Crumb key={index}>
            {index > 0 && <S.ArrowLeft as={ArrowLeft} />}
            <Typography variant={typographyVariant.BODY_SM_MEDIUM}>{crumb}</Typography>
          </S.Crumb>
        ))}
      </S.Content>
    </S.Wrap>
  );
};

export default Breadcrumbs;
