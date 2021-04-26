import React, { useEffect, useState } from 'react';

import { detectTouchDevice } from '@/utils/detect-touch-device';

import * as S from './scroll-carousel.styled';

const ScrollCarousel = ({ children }) => {
  const [isTouchDevice, setisTouchDevice] = useState(false);
  const carouselSlides = React.Children.toArray(children);
  useEffect(() => {
    setisTouchDevice(detectTouchDevice);
  }, []);
  return <S.Wrap isTouchDevice={isTouchDevice}>{carouselSlides.map((carouselSlide) => carouselSlide)}</S.Wrap>;
};

export default ScrollCarousel;
