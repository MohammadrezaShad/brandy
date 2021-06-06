import {useRouter} from 'next/router';

import Arrow from '@/assets/vectors/F-Right.svg';
import {
  typographyColor,
  typographyVariant,
} from '@/constants/typography-config';
import Typography from '@/shared/typography';

import * as S from './category-banner.styled';

const CategoryBanner = () => {
  const {back} = useRouter();
  return (
    <S.Wrapper>
      <S.Arrow as={Arrow} onClick={() => back()} />
      <S.Text>
        <Typography variant={typographyVariant.BODY_SM_MEDIUM}>
          کفش کوهنوردی
        </Typography>
        <Typography
          variant={typographyVariant.INFO_XS_MEDIUM}
          color={typographyColor.ON_PRIMARY}
        >
          (0121)
        </Typography>
      </S.Text>
    </S.Wrapper>
  );
};

export default CategoryBanner;
