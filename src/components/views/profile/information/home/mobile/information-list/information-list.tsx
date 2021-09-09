import React, {FC, ReactNode} from 'react';

import ArrowLeft from '@/assets/vectors/F-Left.svg';
import {
  typographyColor,
  typographyVariant,
} from '@/constants/typography-config';
import Typography from '@/shared/typography';

import * as S from './information-list.styled';

interface InformationListProps {
  children?: ReactNode;
}

const InformationList: FC<InformationListProps> = props => (
  <S.List>
    <S.Item>
      <S.Info>
        <Typography>نام و نام خانوادگی</Typography>
        <S.ArrowLeft as={ArrowLeft} />
      </S.Info>
      <Typography
        variant={typographyVariant.SUBTITLE_XS_NORMAL}
        color={typographyColor.PRIMARY}
      >
        علـی اصغـر داوودی
      </Typography>
    </S.Item>
    <S.Item>
      <S.Info>
        <Typography>شماره تلفن همراه</Typography>
        <S.ArrowLeft as={ArrowLeft} />
      </S.Info>
      <Typography
        variant={typographyVariant.SUBTITLE_XS_NORMAL}
        color={typographyColor.PRIMARY}
      >
        0916 851 8065
      </Typography>
    </S.Item>
    <S.Item>
      <S.Info>
        <Typography>کدملی</Typography>
        <S.ArrowLeft as={ArrowLeft} />
      </S.Info>
      <Typography
        variant={typographyVariant.SUBTITLE_XS_NORMAL}
        color={typographyColor.PRIMARY}
      >
        1940723957
      </Typography>
    </S.Item>
    <S.Item>
      <S.Info>
        <Typography>شماره تلفن ثابت</Typography>
        <S.ArrowLeft as={ArrowLeft} />
      </S.Info>
      <Typography
        variant={typographyVariant.SUBTITLE_XS_NORMAL}
        color={typographyColor.PRIMARY}
      >
        06152320218
      </Typography>
    </S.Item>
    <S.Item>
      <S.Info>
        <Typography>ایـمیل</Typography>
        <S.ArrowLeft as={ArrowLeft} />
      </S.Info>
      <Typography
        variant={typographyVariant.SUBTITLE_XS_NORMAL}
        color={typographyColor.PRIMARY}
      >
        RE79.Aliasghar@Gmail.com
      </Typography>
    </S.Item>
    <S.Item>
      <S.Info>
        <Typography>رمز عبـور</Typography>
        <S.ArrowLeft as={ArrowLeft} />
      </S.Info>
      <Typography
        variant={typographyVariant.SUBTITLE_XS_NORMAL}
        color={typographyColor.PRIMARY}
      >
        ********
      </Typography>
    </S.Item>
  </S.List>
);

export default InformationList;
