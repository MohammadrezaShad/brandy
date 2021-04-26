import React, { useEffect, useState } from 'react';

import { isTouchDevice as isTouchDeviceMethod } from '@/utils/is-touch-device';

import * as S from './scroll-carousel.styled';

const ScrollCarousel = ({ children }) => {
  const [isTouchDevice, setisTouchDevice] = useState(false);
  const carouselSlides = React.Children.toArray(children);
  useEffect(() => {
    setisTouchDevice(isTouchDeviceMethod);
  }, []);
  return <S.Wrap isTouchDevice={isTouchDevice}>{carouselSlides.map((carouselSlide) => carouselSlide)}</S.Wrap>;
};

export default ScrollCarousel;
