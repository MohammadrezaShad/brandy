import Typography from '@/shared/typography';

import * as S from './category-filters.styled';

const CategoryFilters = () => (
  <S.Wrapper>
    {Array.from({ length: 3 }, (_, i) => i + 1).map((id) => (
      <S.Block key={id}>
        <Typography>جدید</Typography>
      </S.Block>
    ))}
  </S.Wrapper>
);

export default CategoryFilters;
