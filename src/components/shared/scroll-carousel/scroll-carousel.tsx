import {Children, FC, useEffect, useState} from 'react';

import {DeviceTypes} from '@/constants/device-types';
import {ValueOf} from '@/types/main';
import {isTouchDevice as isTouchDeviceMethod} from '@/utils/is-touch-device';

import * as S from './scroll-carousel.styled';

type ScrollCarouselProp = {
  children: unknown;
  deviceType?: ValueOf<typeof DeviceTypes>;
};

const ScrollCarousel: FC<ScrollCarouselProp> = ({children, deviceType}) => {
  const [isTouchDevice, setIsTouchDevice] = useState<boolean>(
    false || deviceType === DeviceTypes.MOBILE,
  );
  const carouselSlides = Children.toArray(children);
  useEffect(() => {
    setIsTouchDevice(isTouchDeviceMethod);
  }, []);
  return (
    <S.Wrap isTouchDevice={isTouchDevice}>
      {carouselSlides.map(carouselSlide => carouselSlide)}
    </S.Wrap>
  );
};

export default ScrollCarousel;
