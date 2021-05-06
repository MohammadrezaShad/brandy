import { useRouter } from 'next/router';

import Arrow from '@/assets/vectors/F-Right.svg';
import { typographyColor, typographyVariant } from '@/constants/typography-config';
import Typography from '@/shared/typography';

import * as S from './brand-banner.styled';

const BrandBanner = () => {
  const { back } = useRouter();
  return (
    <S.Wrapper>
      <S.Wrap>
        <S.Arrow as={Arrow} onClick={() => back()} />
        <Typography color={typographyColor.ON_SECONDARY} variant={typographyVariant.BODY_SM_MEDIUM}>
          تیشرت و پولوشرت
        </Typography>
      </S.Wrap>
      <S.Wrap>
        <S.Point>9.3</S.Point>
        <Typography color={typographyColor.ON_SECONDARY} variant={typographyVariant.BODY_MD_MEDIUM}>
          ZARA
        </Typography>
        <S.Brand />
      </S.Wrap>
    </S.Wrapper>
  );
};

export default BrandBanner;
