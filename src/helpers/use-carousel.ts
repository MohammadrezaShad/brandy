/* eslint-disable no-param-reassign */
import { useState } from 'react';
import { SwipeableHandlers, useSwipeable } from 'react-swipeable';

const useCarousel = (carouselItemLength: number, intialActiveCarouselItemIndex = 0, carouselLimit = 1) => {
  const [activeCarouselItemIndex, setActiveCarouselItemIndex] = useState<number>(intialActiveCarouselItemIndex);
  const [hasCraouselAnimate, setHasCraouselAnimate] = useState<boolean>(true);
  const [current, setCurrent] = useState<number>(intialActiveCarouselItemIndex);

  const handleSwip: SwipeableHandlers = useSwipeable({
    onSwipedLeft: () => handleSlideRight(),
    onSwipedRight: () => handleSlideLeft(),
    preventDefaultTouchmoveEvent: true,
    trackMouse: true,
  });

  const handleSlideRight = (): void => {
    handleSlideGoto(current - carouselLimit);
  };
  const handleSlideLeft = (): void => {
    handleSlideGoto(current + carouselLimit);
  };
  const handleSlideJump = (caruselIndex: number): void => {
    handleSlideGoto(caruselIndex);
  };

  const handleSlideGoto = (index: number, propared?: boolean): void => {
    if (carouselItemLength <= 1) return;
    if (!propared) {
      if (index === 1 && current === 0 && activeCarouselItemIndex === carouselItemLength) {
        setHasCraouselAnimate(false);
        setActiveCarouselItemIndex(0);
        setTimeout(() => {
          setHasCraouselAnimate(true);
          handleSlideGoto(index, true);
        }, 60);
        return;
      }
      if (index < 0 && current === 0 && activeCarouselItemIndex !== carouselItemLength) {
        setHasCraouselAnimate(false);
        setActiveCarouselItemIndex(carouselItemLength);
        setTimeout(() => {
          setHasCraouselAnimate(true);
          handleSlideGoto(index, true);
        }, 50);
        return;
      }
    }

    if (index > carouselItemLength - carouselLimit) {
      index = 0;
      setActiveCarouselItemIndex(carouselItemLength);
    } else if (index < 0) {
      index = carouselItemLength - carouselLimit;
      setActiveCarouselItemIndex(index);
    } else {
      setActiveCarouselItemIndex(index);
    }
    setCurrent(index);
  };

  return {
    handleSwip,
    handleSlideRight,
    handleSlideLeft,
    handleSlideJump,
    activeCarouselItemIndex,
    hasCraouselAnimate,
    current,
  };
};

export default useCarousel;
