import {FC} from 'react';

import Trash from '@/assets/vectors/Trash.svg';
import {
  typographyColor,
  typographyVariant,
} from '@/constants/typography-config';
import Button from '@/shared/button';
import Typography from '@/shared/typography';

import * as S from './product-filters-bottom.styled';

type ProductFiltersBottom = {
  removeAllfilters: () => void;
  submitFilters: () => void;
};

const ProductFiltersBottom: FC<ProductFiltersBottom> = ({
  removeAllfilters,
  submitFilters,
}) => (
  <>
    <Button onClick={submitFilters}>اعمال فیلتر</Button>
    <S.BottomIcon as={Trash} onClick={removeAllfilters} />
    <S.BottomWrap>
      <Typography variant={typographyVariant.HEADLINE1}>72.810</Typography>
      <Typography
        variant={typographyVariant.SUBTITLE_XS_NORMAL}
        color={typographyColor.ON_PRIMARY}
      >
        محصول
      </Typography>
    </S.BottomWrap>
  </>
);

export default ProductFiltersBottom;
