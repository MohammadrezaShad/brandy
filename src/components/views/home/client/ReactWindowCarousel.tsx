import React, {ReactNode, useRef, useState} from 'react';

import Portion from './Portion';
import Wrapper from './Wrapper';

interface Props {
  children?: ReactNode;
  initialSlide: number;
  slidesList: JSX.Element[];
  slideWidth: number;
  slideHeight: number;
  slideBy?: number;
}

const ReactWindowCarousel = (props: Props) => {
  const {
    children,
    initialSlide,
    slideHeight,
    slideWidth,
    slidesList,
    slideBy = 1,
  } = props;
  const carouselRef = useRef<HTMLDivElement>();
  const wrapperRef = useRef();

  const [activeSlide, setActiveSlide] = useState(initialSlide || 0);

  const nextSlideHandler = () => {
    setActiveSlide(activeSlide + slideBy);
  };
  const previousSlideHandler = () => {
    setActiveSlide(activeSlide - slideBy);
  };
  return (
    <div
      ref={carouselRef}
      style={{
        position: 'relative',
        maxWidth: '100%',
        overflow: 'hidden',
        direction: 'ltr',
      }}
    >
      <Wrapper
        ref={wrapperRef}
        {...{
          carouselRef,
          initialSlide,
          activeSlide,
          slidesList,
          slideWidth,
          slideHeight,
        }}
      >
        {offset => (
          <>
            <Portion
              {...{offset, carouselRef, wrapperRef, slidesList, slideWidth}}
            />
          </>
        )}
      </Wrapper>
    </div>
  );
};

export default ReactWindowCarousel;
