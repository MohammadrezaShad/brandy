import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  width: 100%;
  position: relative;
`;

export const Wrap = styled.div`
  display: flex;
  justify-content: center;
`;

export const Content = styled.div`
  width: 100%;
`;

export const IconWrap = styled.span<{top?: boolean}>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  width: 36px;
  height: 36px;
  z-index: 10;
  background-color: ${({theme}) => theme.palette.back};
  position: absolute;
  top: ${({theme, top}) => (top ? theme.dim[2] : 'auto')};
  bottom: ${({theme, top}) => (!top ? theme.dim[2] : 'auto')};
  right: ${({theme}) => theme.dim[5]};
`;
