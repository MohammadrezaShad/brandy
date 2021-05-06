import { FC } from 'react';

import Filter from '@/assets/vectors/Filter.svg';
import New from '@/assets/vectors/New.svg';
import ViewOne from '@/assets/vectors/view_1.svg';
import ViewTwo from '@/assets/vectors/view_2.svg';
import ViewThree from '@/assets/vectors/view_3.svg';
import { AppearanceModes } from '@/constants/appearance-modes';
import { typographyColor, typographyVariant } from '@/constants/typography-config';
import Typography from '@/shared/typography';
import { ValueOf } from '@/types/main';

import * as S from './brand-head.styled';

type BrandHeadProps = {
  appearanceMode: ValueOf<typeof AppearanceModes>;
};

const BrandHead: FC<BrandHeadProps> = ({ appearanceMode }) => {
  const renderAppearanceIcon = () => {
    if (appearanceMode === AppearanceModes.VIEW_ONE) {
      return ViewOne;
    }
    if (appearanceMode === AppearanceModes.VIEW_TWO) {
      return ViewTwo;
    }
    return ViewThree;
  };

  return (
    <S.Wrapper>
      <S.Block>
        <S.Icon as={Filter} />
        <Typography nowWrap variant={typographyVariant.SUBTITLE_XS_NORMAL} color={typographyColor.ON_PRIMARY}>
          فـیلترها
        </Typography>
      </S.Block>
      <S.Block>
        <S.Icon as={New} />
        <Typography nowWrap variant={typographyVariant.SUBTITLE_XS_NORMAL} color={typographyColor.ON_PRIMARY}>
          جدیدترین
        </Typography>
      </S.Block>
      <S.Block>
        <S.Icon as={renderAppearanceIcon()} />
        <Typography nowWrap variant={typographyVariant.SUBTITLE_XS_NORMAL} color={typographyColor.ON_PRIMARY}>
          {appearanceMode}
        </Typography>
      </S.Block>
    </S.Wrapper>
  );
};

export default BrandHead;
