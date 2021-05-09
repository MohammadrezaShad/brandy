import Close from '@/assets/vectors/Close.svg';
import { typographyColor } from '@/constants/typography-config';
import ScrollCarousel from '@/shared/scroll-carousel';
import Typography from '@/shared/typography';

import * as S from './category-filters.styled';

const CategoryFilters = () => (
  <S.Wrapper>
    <ScrollCarousel>
      {Array.from({ length: 3 }, (_, i) => i + 1).map((id) => (
        <S.SpecialBlock key={id}>
          <Typography color={typographyColor.ON_SECONDARY}>جدید</Typography>
          <S.Icon as={Close} />
        </S.SpecialBlock>
      ))}
      {Array.from({ length: 3 }, (_, i) => i + 1).map((id) => (
        <S.Block key={id}>
          <Typography>جدید</Typography>
        </S.Block>
      ))}
    </ScrollCarousel>
  </S.Wrapper>
);

export default CategoryFilters;
