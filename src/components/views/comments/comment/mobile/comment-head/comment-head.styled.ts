import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`;

export const Icon = styled.span`
  display: inline-flex;
  margin-left: ${({theme}) => theme.dim[2]};
  position: absolute;
  top: 50%;
  transform: scale(1.2) translateY(-50%);
  right: 0;
  & > PATH {
    stroke: ${({theme}) => theme.palette.onSurface};
  }
`;
