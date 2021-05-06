import ScrollCarousel from '@/shared/scroll-carousel';
import Typography from '@/shared/typography';

import * as S from './brand-category.styled';

const BrandCategory = () => {
  console.log('BrandCategory');
  return (
    <S.Wrapper>
      <ScrollCarousel>
        {Array.from({ length: 13 }, (_, i) => i + 1).map((id) => (
          <S.CategoryWrap key={id}>
            <S.Category />
            <Typography gutterTop={1}>دسته اول</Typography>
          </S.CategoryWrap>
        ))}
      </ScrollCarousel>
    </S.Wrapper>
  );
};

export default BrandCategory;
