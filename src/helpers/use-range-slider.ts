/* eslint-disable no-nested-ternary */
import {
  MouseEvent,
  MutableRefObject,
  TouchEvent,
  useEffect,
  useRef,
  useState,
} from 'react';

type CallBackAction = (coefficient: number) => void;

export const UseRangeSlider = (
  minValueCallback: CallBackAction,
  maxValueCallback: CallBackAction,
) => {
  const [thumbsPosition, setThumbPosition] = useState({left: 0, right: 0});
  const thumbRightRef = useRef<HTMLElement>();
  const thumbLeftRef = useRef<HTMLElement>();
  const trackRef = useRef<HTMLDivElement>();
  const thumbStartRef = useRef({startX: 0});
  const thumbPositionRef = useRef({
    right: 0,
    left: 0,
  });

  const handleThumbRightMouseDown = (event: MouseEvent<HTMLSpanElement>) => {
    thumbStartRef.current.startX = getThubmStartPosition(
      event.clientX,
      thumbRightRef,
    );
    document.addEventListener('mousemove', handleThumbRightMouseMove);
    document.addEventListener('mouseup', handleThumbRightMouseUp);
  };

  const handleThumbRightMouseMove = (event: globalThis.MouseEvent) => {
    setThumbRightPosition(event.clientX);
  };

  const handleThumbRightMouseUp = () => {
    document.removeEventListener('mouseup', handleThumbLeftMouseUp);
    document.removeEventListener('mousemove', handleThumbRightMouseMove);
  };

  const handleThumbRightTouchStart = (event: TouchEvent<HTMLSpanElement>) => {
    thumbStartRef.current.startX = getThubmStartPosition(
      event.touches[0].clientX,
      thumbRightRef,
    );
    document.addEventListener('touchmove', handleThumbRightTouchMove);
    document.addEventListener('touchend', handleThumbRightTouchEnd);
  };

  const handleThumbRightTouchMove = (event: globalThis.TouchEvent) => {
    setThumbRightPosition(event.touches[0].clientX);
  };

  const setThumbRightPosition = (clientX: number) => {
    thumbPositionRef.current.right = getPositionOfThumbRight(clientX);
    const thumbRightValidPosition = getValidPositionOfThumbRight();
    maxValueCallback(getDecimalThumbPosition(thumbRightValidPosition));
    setThumbPosition({
      ...thumbsPosition,
      right: thumbRightValidPosition,
    });
  };

  const getPositionOfThumbRight = (clientX: number) =>
    -(
      clientX -
      thumbStartRef.current.startX -
      trackRef.current.getBoundingClientRect().left -
      trackRef.current.getBoundingClientRect().width
    );

  const getValidPositionOfThumbRight = () => {
    const thumbRightLimit = trackRef.current.offsetWidth - thumbsPosition.left;
    return thumbPositionRef.current.right >= thumbRightLimit
      ? thumbRightLimit
      : thumbPositionRef.current.right < 0
      ? 0
      : thumbPositionRef.current.right;
  };

  const handleThumbRightTouchEnd = () => {
    document.removeEventListener('touchmove', handleThumbRightTouchMove);
    document.removeEventListener('touchend', handleThumbRightTouchEnd);
  };

  const handleThumbLeftMouseDown = (event: MouseEvent) => {
    thumbStartRef.current.startX = getThubmStartPosition(
      event.clientX,
      thumbLeftRef,
    );
    document.addEventListener('mousemove', handleThumbLeftMouseMove);
    document.addEventListener('mouseup', handleThumbLeftMouseUp);
  };

  const handleThumbLeftMouseMove = (event: globalThis.MouseEvent) => {
    setThumbLeftPosition(event.clientX);
  };

  const handleThumbLeftMouseUp = () => {
    document.removeEventListener('mouseup', handleThumbLeftMouseUp);
    document.removeEventListener('mousemove', handleThumbLeftMouseMove);
  };

  const handleThumbLeftTouchStart = (event: TouchEvent<HTMLSpanElement>) => {
    thumbStartRef.current.startX = getThubmStartPosition(
      event.touches[0].clientX,
      thumbLeftRef,
    );
    document.addEventListener('touchmove', handleThumbLeftTouchMove);
    document.addEventListener('touchend', handleThumbLeftTouchEnd);
  };

  const handleThumbLeftTouchMove = (event: globalThis.TouchEvent) => {
    setThumbLeftPosition(event.touches[0].clientX);
    // console.log(getDecimalThumbPosition(thumbLeftValidPosition));
  };

  const setThumbLeftPosition = (clientX: number) => {
    thumbPositionRef.current.left = getPositionOfThumbLeft(clientX);
    const thumbLeftValidPosition = getValidPositionOfThumbLeft();
    minValueCallback(getDecimalThumbPosition(thumbLeftValidPosition));
    setThumbPosition({
      ...thumbsPosition,
      left: thumbLeftValidPosition,
    });
  };

  const getThubmStartPosition = (
    clientX: number,
    thumbRef: MutableRefObject<HTMLElement>,
  ) =>
    clientX -
    thumbRef.current.getBoundingClientRect().left -
    thumbRef.current.getBoundingClientRect().width / 2;

  const getPositionOfThumbLeft = (clientX: number) =>
    clientX -
    thumbStartRef.current.startX -
    trackRef.current.getBoundingClientRect().left;

  const getValidPositionOfThumbLeft = () => {
    const thumbLeftLimit = trackRef.current.offsetWidth - thumbsPosition.right;
    return thumbPositionRef.current.left >= thumbLeftLimit
      ? thumbLeftLimit
      : thumbPositionRef.current.left < 0
      ? 0
      : thumbPositionRef.current.left;
  };

  const getDecimalThumbPosition = (thumbPosition: number) =>
    Math.round(
      (+thumbPosition / trackRef.current.offsetWidth + Number.EPSILON) * 100,
    ) / 100;

  const handleThumbLeftTouchEnd = () => {
    document.removeEventListener('touchmove', handleThumbLeftTouchMove);
    document.removeEventListener('touchend', handleThumbLeftTouchEnd);
  };

  const resetRangeSlider = () => {
    thumbPositionRef.current.left = 0;
    thumbPositionRef.current.right = 0;
    setThumbPosition({left: 0, right: 0});
  };

  useEffect(() => {
    thumbPositionRef.current.left =
      parseInt(thumbLeftRef.current.style.left, 10) || 0;
    thumbPositionRef.current.right =
      parseInt(thumbRightRef.current.style.right, 10) || 0;
  }, []);

  return {
    thumbRightRef,
    thumbLeftRef,
    trackRef,
    thumbsPosition,
    handleThumbRightMouseDown,
    handleThumbRightTouchStart,
    handleThumbLeftMouseDown,
    handleThumbLeftTouchStart,
    resetRangeSlider,
  };
};
