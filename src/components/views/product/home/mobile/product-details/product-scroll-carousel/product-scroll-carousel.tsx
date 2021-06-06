import React, {Dispatch, FC, SetStateAction, useContext} from 'react';

import ScrollCarousel from '@/components/shared/scroll-carousel/scroll-carousel';
import DeviceTypeContext from '@/context/device-type-context';

import * as S from './product-scroll-carousel.styled';

type ProductScrollCarouselProps = {
  selectedProductId: number;
  setSelectedProductId: Dispatch<SetStateAction<number>>;
};

const ProductScrollCarousel: FC<ProductScrollCarouselProps> = ({
  selectedProductId,
  setSelectedProductId,
}) => {
  const {deviceType} = useContext(DeviceTypeContext);
  return (
    <S.Wrap>
      <ScrollCarousel deviceType={deviceType}>
        {Array.from({length: 10}, (_, i) => i + 1).map(id => (
          <S.Product
            key={id}
            selected={selectedProductId === id}
            onClick={() => setSelectedProductId(id)}
          >
            <img src='/images/res/Wh.jpg' alt='test' />
          </S.Product>
        ))}
      </ScrollCarousel>
    </S.Wrap>
  );
};

export default ProductScrollCarousel;
