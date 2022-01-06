/* eslint-disable @typescript-eslint/no-shadow */
import React, {useEffect, useState} from 'react';

const events = {
  start: ['mousedown', 'touchstart'],
  move: ['mousemove', 'touchmove'],
  end: ['mouseup', 'touchend'],
};

export const useMoveLogic = (ref: any, carouselRef: any) => {
  const [offset, setOffset] = useState(0);
  const [carouselMoved, setCarouselMoved] = useState(false);

  const getX = (e: MouseEvent | TouchEvent) => {
    let x = 0;
    if ((e as MouseEvent).clientX) {
      x = (e as MouseEvent).clientX;
    } else if ((e as TouchEvent).touches && (e as TouchEvent).touches.length) {
      x = (e as TouchEvent).touches[0].clientX;
    } else if (
      (e as TouchEvent).changedTouches &&
      (e as TouchEvent).changedTouches.length
    ) {
      x = (e as TouchEvent).changedTouches[0].clientX;
    }

    return x;
  };

  useEffect(() => {
    let xStart = 0;
    let offsetStart = 0;
    let offset = 0;
    const diff = carouselRef.current.getBoundingClientRect().left;
    const target = ref.current;

    const boundaryCheck = () => {
      const wrapperBounding = ref.current.getBoundingClientRect();
      const carouselBounding = carouselRef.current.getBoundingClientRect();

      if (offset > 0) {
        setOffset(0);
      } else if (
        offset + wrapperBounding.width <
        carouselBounding.right - carouselBounding.x
      ) {
        const right = offset + wrapperBounding.width;
        setOffset(offset + carouselBounding.right - carouselBounding.x - right);
      }
    };

    const moveStart = (e: MouseEvent | TouchEvent) => {
      //   if (
      //     (e.type === 'mousedown' && e.which !== 1) ||
      //     (e.type === 'touchstart' && e.which !== 0)
      //   ) {
      //     return false;
      //   }

      xStart = getX(e);
      offsetStart = ref.current.getBoundingClientRect().left;

      events.end.forEach((eventEnd: any) =>
        window.addEventListener(eventEnd, moveEnd, {
          once: true,
        }),
      );

      events.move.forEach((eventMove: any) =>
        window.addEventListener(eventMove, moving),
      );

      setCarouselMoved(true);
    };

    const moveEnd = (e: MouseEvent | TouchEvent) => {
      boundaryCheck();

      events.move.forEach((eventMove: any) =>
        window.removeEventListener(eventMove, moving),
      );
    };

    const captureClick = (e: MouseEvent | TouchEvent) => {
      // to capture click on window
      e.stopPropagation();
      // cleanup
      window.removeEventListener('click', captureClick, true);
    };

    const moving = (e: MouseEvent | TouchEvent) => {
      if (e.type === 'mousemove') {
        // capture click only if mouse moved
        window.addEventListener('click', captureClick, true);
      }

      const moved = getX(e) - xStart;
      offset = offsetStart - diff + moved;

      setOffset(offset);
    };

    events.start.forEach(eventStart =>
      target.addEventListener(eventStart, moveStart),
    );

    return () => {
      events.start.forEach(eventStart =>
        target.removeEventListener(eventStart, moveStart),
      );
    };
  }, [ref, carouselRef]);

  return [carouselMoved ? offset : null, setOffset];
};
