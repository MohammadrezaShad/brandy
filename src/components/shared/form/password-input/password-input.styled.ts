import styled from 'styled-components';

export const Wrap = styled.div`
  position: relative;
`;

export const Icon = styled.span`
  position: absolute;
  top: 50%;
  left: ${({theme}) => theme.dim[1]};
  transform: translate(50%, -50%);
`;
