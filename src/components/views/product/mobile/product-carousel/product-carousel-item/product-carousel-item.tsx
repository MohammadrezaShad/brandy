import {FC} from 'react';

import * as S from './product-carousel-item.styled';

const ProductCarouselItem: FC = () => (
  <S.CarouselItem>
    <S.Image src='/images/res/Picture.jpg' alt='pic for test' />
  </S.CarouselItem>
);

export default ProductCarouselItem;
