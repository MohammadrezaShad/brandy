import {FC, ReactNode, useEffect} from 'react';

import {UseRangeSlider} from '@/helpers/use-range-slider';

import * as S from './range-slider.styled';

type RangeSliderProps = {
  minValue: number | ReactNode;
  maxValue: number | ReactNode;
  minValueCallback: (coefficient: number) => void;
  maxValueCallback: (coefficient: number) => void;
  resetRange?: boolean;
};

const RangeSlider: FC<RangeSliderProps> = ({
  minValue,
  maxValue,
  minValueCallback,
  maxValueCallback,
  resetRange,
}) => {
  const {
    thumbRightRef,
    thumbLeftRef,
    trackRef,
    thumbsPosition,
    handleThumbRightMouseDown,
    handleThumbRightTouchStart,
    handleThumbLeftMouseDown,
    handleThumbLeftTouchStart,
    resetRangeSlider,
  } = UseRangeSlider(minValueCallback, maxValueCallback);

  useEffect(() => {
    resetRange && resetRangeSlider();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [resetRange]);
  return (
    <S.Wrapper>
      <S.RangeValueWrap>
        <S.RangeValue>{maxValue}</S.RangeValue>
        <S.RangeValue>{minValue}</S.RangeValue>
      </S.RangeValueWrap>
      <S.Wrap>
        <S.ThumbRight
          ref={thumbRightRef}
          onMouseDown={handleThumbRightMouseDown}
          onTouchStart={handleThumbRightTouchStart}
          $right={thumbsPosition.right}
        />
        <S.Track ref={trackRef}>
          <S.Progress
            $right={thumbsPosition.right}
            $left={thumbsPosition.left}
          />
        </S.Track>
        <S.ThumbLeft
          onTouchStart={handleThumbLeftTouchStart}
          ref={thumbLeftRef}
          onMouseDown={handleThumbLeftMouseDown}
          $left={thumbsPosition.left}
        />
      </S.Wrap>
    </S.Wrapper>
  );
};

export default RangeSlider;
