import styled from 'styled-components';

export const Wrapper = styled.div``;

export const Detail = styled.div`
  padding: ${({theme}) => `${theme.dim[3]} ${theme.dim[2]}`};
  border-bottom: 6px solid ${({theme}) => theme.palette.onBack};
`;

export const Block = styled.div`
  padding: ${({theme}) => `${theme.dim[3]} ${theme.dim[2]}`};
`;
