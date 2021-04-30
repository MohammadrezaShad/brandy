import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
`;

export const Content = styled.div`
  display: flex;
  flex: 1;
  overflow: hidden;
  position: relative;
`;

export const Wrap = styled.div<{ activeCarouselItemIndex: number; hasCraouselAnimate: boolean }>`
  display: flex;
  flex: 1;
  transform: ${({ activeCarouselItemIndex }) => `translateX(${100 * activeCarouselItemIndex}%)`};
  transition: ${({ hasCraouselAnimate }) => (hasCraouselAnimate ? '1s all' : '0 all')};
`;

export const CarouselItem = styled.div`
  flex: 0 0 100%;
  position: relative;
`;

export const Arrow = styled.span`
  &:first-child {
    margin-left: ${({ theme }) => theme.dim[2]};
  }
  &:last-child {
    margin-right: ${({ theme }) => theme.dim[2]};
  }
`;

export const PaginationWrap = styled.div`
  display: flex;
  align-items: center;
  position: absolute;
  bottom: ${({ theme }) => theme.dim[4]};
  right: 50%;
  transform: translateX(50%);
`;

export const PaginationItem = styled.span<{ selectedSlide: boolean }>`
  display: inline-block;
  width: 9px;
  height: 9px;
  border: 1px solid ${({ theme }) => theme.palette.onSurface};
  border-radius: 50%;
  transition: 0.5s all;
  background-color: ${({ theme, selectedSlide }) => (selectedSlide ? theme.palette.onSurface : 'transparent')};
  &:not(:last-child) {
    margin-left: ${({ theme }) => theme.dim[1]};
  }
`;
