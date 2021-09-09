import styled from 'styled-components';

export const Item = styled.div`
  display: flex;
  align-items: center;
  padding: ${({theme}) => theme.dim[2]} 0;
  border-bottom: 1px solid ${({theme}) => theme.palette.stroke};
`;

export const Icon = styled.div`
  margin-left: ${({theme}) => theme.dim[1]};
`;

export const ArrowLeft = styled.div`
  margin-right: auto;
`;
