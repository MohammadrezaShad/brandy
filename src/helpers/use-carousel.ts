/* eslint-disable no-param-reassign */
import {useState} from 'react';
import {SwipeableHandlers, useSwipeable} from 'react-swipeable';

const useCarousel = (
  carouselItemLength: number,
  intialActiveCarouselItemIndex = 0,
) => {
  const MOVE_PER_SLIDE = 1;
  const [
    activeCarouselItemIndex,
    setActiveCarouselItemIndex,
  ] = useState<number>(intialActiveCarouselItemIndex);
  const [hasCraouselAnimate, setHasCraouselAnimate] = useState<boolean>(true);
  const [
    finalActiveCarouselItemIndex,
    setFinalActiveCarouselItemIndex,
  ] = useState<number>(intialActiveCarouselItemIndex);

  const handleSwipe: SwipeableHandlers = useSwipeable({
    onSwipedLeft: () => handleSlideRight(),
    onSwipedRight: () => handleSlideLeft(),
    preventDefaultTouchmoveEvent: true,
    trackMouse: true,
  });

  const handleSlideRight = (): void => {
    handleSlideGoto(finalActiveCarouselItemIndex - MOVE_PER_SLIDE);
  };
  const handleSlideLeft = (): void => {
    handleSlideGoto(finalActiveCarouselItemIndex + MOVE_PER_SLIDE);
  };
  const handleSlideJump = (caruselIndex: number): void => {
    handleSlideGoto(caruselIndex);
  };

  const handleSlideGoto = (targetIndex: number): void => {
    if (!isSlideAllowed()) return;

    if (isExceptionSlide(targetIndex)) {
      handleExceptionSlide(targetIndex);
      return;
    }

    handleCarouselSlide(targetIndex);
  };

  const isSlideAllowed = () => carouselItemLength > 1;

  const isExceptionSlide = (targetIndex: number) =>
    (targetIndex === 1 &&
      finalActiveCarouselItemIndex === 0 &&
      activeCarouselItemIndex === carouselItemLength) ||
    (targetIndex < 0 &&
      finalActiveCarouselItemIndex === 0 &&
      activeCarouselItemIndex !== carouselItemLength);

  const handleExceptionSlide = (targetIndex: number) => {
    setHasCraouselAnimate(false);
    setActiveCarouselItemIndex(targetIndex < 0 ? carouselItemLength : 0);
    setTimeout(() => {
      setHasCraouselAnimate(true);
      handleCarouselSlide(targetIndex);
    }, 60);
  };

  const handleCarouselSlide = (targetIndex: number) => {
    if (targetIndex > carouselItemLength - 1) {
      targetIndex = 0;
      setActiveCarouselItemIndex(carouselItemLength);
    } else if (targetIndex < 0) {
      targetIndex = carouselItemLength - 1;
      setActiveCarouselItemIndex(targetIndex);
    } else {
      setActiveCarouselItemIndex(targetIndex);
    }
    setFinalActiveCarouselItemIndex(targetIndex);
  };

  return {
    handleSwipe,
    handleSlideRight,
    handleSlideLeft,
    handleSlideJump,
    activeCarouselItemIndex,
    hasCraouselAnimate,
    current: finalActiveCarouselItemIndex,
  };
};

export default useCarousel;
