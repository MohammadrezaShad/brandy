import styled from 'styled-components';

export const ButtonWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: sticky;
  bottom: 0;
  background-color: ${({theme}) => theme.palette.back};
  padding: ${({theme}) => `${theme.dim[1]} ${theme.dim[2]}`};
  border-top: 1px solid ${({theme}) => theme.palette.stroke};
  border-bottom: 1px solid ${({theme}) => theme.palette.stroke};
  z-index: 100;
`;

export const Wrap = styled.div`
  &:not(:last-child) {
    margin-left: ${({theme}) => theme.dim[1]};
  }
`;
