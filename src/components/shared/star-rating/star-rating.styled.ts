import styled from 'styled-components';

export const Wrap = styled.div`
  direction: ltr;
  position: relative;
`;

export const Container = styled.div<{starRate: number}>`
  position: absolute;
  overflow: hidden;
  top: 0;
  width: ${({starRate}) => `${(starRate / 5) * 100}%`};
  display: flex;
`;

export const StarWrap = styled.span``;

export const Wrapper = styled.div`
  position: absolute;
  overflow: hidden;
  top: 0;
  width: 100%;
  bottom: 0;
  z-index: 10;
  background-color: transparent;
`;
