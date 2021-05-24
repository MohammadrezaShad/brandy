import {useCallback, useEffect, useState} from 'react';

type BodyRect = {
  top: number;
  left: number;
};

export function useScroll() {
  const [lastScrollTop, setLastScrollTop] = useState<number>(0);
  const [bodyOffset, setBodyOffset] = useState<DOMRect | BodyRect>(
    getBodyOffset(),
  );
  const [scrollY, setScrollY] = useState<number>(bodyOffset.top);
  const [scrollX, setScrollX] = useState<number>(bodyOffset.left);
  const [scrollDirection, setScrollDirection] = useState<undefined | string>();

  const handleScroll = useCallback(() => {
    setBodyOffset(getBodyOffset());
    setScrollY(-bodyOffset.top);
    setScrollX(bodyOffset.left);
    setScrollDirection(lastScrollTop > -bodyOffset.top ? 'down' : 'up');
    setLastScrollTop(-bodyOffset.top);
  }, [lastScrollTop, bodyOffset.top, bodyOffset.left]);

  function getBodyOffset(): DOMRect | BodyRect {
    return typeof window === 'undefined' || !window.document
      ? {top: 0, left: 0}
      : document.body.getBoundingClientRect();
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [handleScroll]);

  return {
    scrollY,
    scrollX,
    scrollDirection,
  };
}
