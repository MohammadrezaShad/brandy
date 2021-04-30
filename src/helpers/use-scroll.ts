import { useEffect, useState } from 'react';

export function useScroll() {
  const [lastScrollTop, setLastScrollTop] = useState(0);
  const [bodyOffset, setBodyOffset] = useState(
    typeof window === 'undefined' || !window.document ? { top: 0, left: 0 } : document.body.getBoundingClientRect(),
  );
  const [scrollY, setScrollY] = useState(bodyOffset.top);
  const [scrollX, setScrollX] = useState(bodyOffset.left);
  const [scrollDirection, setScrollDirection] = useState<undefined | string>();

  const handleScroll = () => {
    setBodyOffset(
      typeof window === 'undefined' || !window.document ? { top: 0, left: 0 } : document.body.getBoundingClientRect(),
    );
    setScrollY(-bodyOffset.top);
    setScrollX(bodyOffset.left);
    setScrollDirection(lastScrollTop > -bodyOffset.top ? 'down' : 'up');
    setLastScrollTop(-bodyOffset.top);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  });

  return {
    scrollY,
    scrollX,
    scrollDirection,
  };
}
