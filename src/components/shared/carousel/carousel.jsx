/* eslint-disable react/no-array-index-key */
import React from 'react';

import ArrowLeft from '@/assets/vectors/F-Left.svg';
import ArrowRight from '@/assets/vectors/F-Right.svg';
import useCarousel from '@/helpers/use-carousel';

import * as S from './carousel.styled';

const Carousel = ({ children }) => {
  const carouselSlides = React.Children.toArray(children);
  const {
    handleSwip,
    handleSlideRight,
    handleSlideLeft,
    handleSlideJump,
    activeCarouselItemIndex,
    hasCraouselAnimate,
    current,
  } = useCarousel(carouselSlides.length);
  return (
    <S.Wrapper>
      <S.Arrow as={ArrowRight} onClick={handleSlideRight} />
      <S.Content {...handleSwip}>
        <S.Wrap activeCarouselItemIndex={activeCarouselItemIndex} hasCraouselAnimate={hasCraouselAnimate}>
          {carouselSlides.map((carouselSlide, index) => (
            <S.CarouselItem key={index}>{carouselSlide}</S.CarouselItem>
          ))}
          <S.CarouselItem>{carouselSlides[0]}</S.CarouselItem>
        </S.Wrap>
        <S.PaginationWrap>
          {carouselSlides.map((_, index) => (
            <S.PaginationItem key={index} onClick={() => handleSlideJump(index)} selectedSlide={current === index} />
          ))}
        </S.PaginationWrap>
      </S.Content>
      <S.Arrow as={ArrowLeft} onClick={handleSlideLeft} />
    </S.Wrapper>
  );
};

export default Carousel;
