import { useContext } from 'react';

import DeviceTypeContext from '@/context/device-type-context';
import ScrollCarousel from '@/shared/scroll-carousel';
import Typography from '@/shared/typography';

import * as S from './brand-category.styled';

const BrandCategory = () => {
  const { deviceType } = useContext(DeviceTypeContext);

  return (
    <S.Wrapper>
      <ScrollCarousel deviceType={deviceType}>
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
