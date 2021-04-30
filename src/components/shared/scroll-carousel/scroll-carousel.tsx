import { Children, FC, useEffect, useState } from 'react';

import { isTouchDevice as isTouchDeviceMethod } from '@/utils/is-touch-device';

import * as S from './scroll-carousel.styled';

type ScrollCarouselProp = {
  children: unknown;
};

const ScrollCarousel: FC<ScrollCarouselProp> = ({ children }) => {
  const [isTouchDevice, setisTouchDevice] = useState<boolean>(false);
  const carouselSlides = Children.toArray(children);
  useEffect(() => {
    setisTouchDevice(isTouchDeviceMethod);
  }, []);
  return <S.Wrap isTouchDevice={isTouchDevice}>{carouselSlides.map((carouselSlide) => carouselSlide)}</S.Wrap>;
};

export default ScrollCarousel;
