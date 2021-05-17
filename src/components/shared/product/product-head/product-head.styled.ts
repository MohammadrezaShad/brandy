import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  background-color: ${({theme}) => theme.palette.onBack};
  border-bottom: 1px solid ${({theme}) => theme.palette.stroke};
`;

export const Block = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1 0 33.33%;
  padding: ${({theme}) => `${theme.dim[1]} ${theme.dim[2]}`};
  &:not(:last-child) {
    border-left: 1px solid ${({theme}) => theme.palette.stroke};
  }
`;

export const Icon = styled.span`
  display: inline-block;
  margin-left: ${({theme}) => theme.dim[1]};
`;
