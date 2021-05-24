import styled from 'styled-components';

export const Wrapper = styled.div`
  position: relative;
  text-align: center;
  padding: ${({theme}) => theme.dim[2]} ${({theme}) => theme.dim[3]};
  border-bottom: 1px solid ${({theme}) => theme.palette.stroke};
`;

export const Icon = styled.span`
  position: absolute;
  right: ${({theme}) => theme.dim[3]};
  top: 50%;
  transform: translateY(-50%);
  PATH {
    stroke: ${({theme}) => theme.palette.onSurface};
  }
`;
