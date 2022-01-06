/* eslint-disable no-param-reassign */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import {TweenLite} from 'gsap';
import React, {
  ReactElement,
  ReactNode,
  Ref,
  useCallback,
  useEffect,
  useState,
} from 'react';

import {useMoveLogic} from './useMoveLogic';

type WrapperProps = {
  carouselRef: React.MutableRefObject<HTMLDivElement>;
  slidesList: JSX.Element[];
  slideWidth: number;
  children?: (offset: number) => ReactElement;

  slideHeight: number;
  initialSlide: number;
  activeSlide: number;
};

const Wrapper = (
  {
    children,
    carouselRef,
    initialSlide,
    activeSlide,
    slidesList,
    slideWidth,
    slideHeight,
  }: WrapperProps,
  ref: React.ForwardedRef<HTMLDivElement>,
) => {
  const [offset, forceOffset] = useMoveLogic(ref, carouselRef);
  const [initialOffset, setInitialOffset] = useState(0);
  const [initialOffsetDone, setInitialOffsetDone] = useState(false);

  useEffect(() => {
    setInitialOffsetDone(true);
  }, [initialSlide, activeSlide]);

  const moveWrapper = useCallback(
    (newOffset, duration = 0.5) => {
      TweenLite.to((ref as any).current, duration, {
        x: `${newOffset}px`,
      });
    },
    [ref],
  );

  useEffect(() => {
    // useffect to move wrapper when offset change
    offset !== null && moveWrapper(offset);
  }, [offset, ref, moveWrapper]);

  useEffect(() => {
    /* initial slide */
    if (!initialOffsetDone) {
      const wrapperBounding = (ref as any).current.getBoundingClientRect();
      const carouselBounding = carouselRef.current.getBoundingClientRect();

      let initialOffsetCalculated = initialSlide * slideWidth * -1;

      if (initialOffsetCalculated > 0) {
        initialOffsetCalculated = 0;
      } else if (
        initialOffsetCalculated + wrapperBounding.width <
        carouselBounding.right - carouselBounding.x
      ) {
        const right = initialOffsetCalculated + wrapperBounding.width;
        initialOffsetCalculated =
          initialOffsetCalculated +
          carouselBounding.right -
          carouselBounding.x -
          right;
      }

      setInitialOffset(initialOffsetCalculated);
      moveWrapper(initialOffsetCalculated, 0);
      (forceOffset as any)(initialOffsetCalculated);
    }
  }, [
    ref,
    initialOffsetDone,
    carouselRef,
    slideWidth,
    initialSlide,
    setInitialOffset,
    moveWrapper,
    forceOffset,
  ]);

  const clickHandler = (e: React.MouseEvent<HTMLDivElement>) => {
    // since device with touch can't handle
    // updaing dom while touch move
    // every slide has pointerEnvents none
    // then when clicked -> target is wrapper
    // we simulate a click after removing pointerevent
    (e.target as HTMLElement).querySelectorAll('div').forEach(item => {
      item.style.pointerEvents = 'initial';
    });
    (document.elementFromPoint(e.clientX, e.clientY) as HTMLElement).click();
    (e.target as HTMLElement).querySelectorAll('div').forEach(item => {
      item.style.pointerEvents = 'none';
    });
  };

  return (
    <div
      ref={ref}
      style={{
        position: 'relative',
        width: slidesList.length * slideWidth,
        height: slideHeight,
      }}
      className='cursor-pointer'
      onClick={clickHandler}
    >
      {children(offset !== null ? (offset as number) : initialOffset)}
    </div>
  );
};

export default React.forwardRef(Wrapper);
