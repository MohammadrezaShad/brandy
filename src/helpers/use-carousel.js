/* eslint-disable no-param-reassign */
import { useState } from 'react';
import { useSwipeable } from 'react-swipeable';

const useCarousel = (carouselItemLength, intialActiveCarouselItemIndex = 0, carouselLimit = 1) => {
  const [activeCarouselItemIndex, setActiveCarouselItemIndex] = useState(intialActiveCarouselItemIndex);
  const [hasCraouselAnimate, setHasCraouselAnimate] = useState(true);
  const [current, setCurrent] = useState(intialActiveCarouselItemIndex);

  const handleSwip = useSwipeable({
    onSwipedLeft: () => handleSlideRight(),
    onSwipedRight: () => handleSlideLeft(),
    preventDefaultTouchmoveEvent: true,
    trackMouse: true,
  });

  const handleSlideRight = () => {
    handleSlideGoto(current - carouselLimit);
  };
  const handleSlideLeft = () => {
    handleSlideGoto(current + carouselLimit);
  };
  const handleSlideJump = (caruselIndex) => {
    handleSlideGoto(caruselIndex);
  };

  const handleSlideGoto = (index, propared) => {
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
