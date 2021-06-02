import styled from 'styled-components';

export const Wrapper = styled.div``;

export const Container = styled.div`
  margin: 0 ${({theme}) => `-${theme.dim[2]}`};
  padding-right: ${({theme}) => `${theme.dim[2]}`};
  padding-left: ${({theme}) => `${theme.dim[2]}`};
  &:not(:first-child) {
    padding-top: ${({theme}) => theme.dim[3]};
  }
  &:not(:last-child) {
    padding-bottom: ${({theme}) => theme.dim[3]};
    border-bottom: 6px solid ${({theme}) => theme.palette.onBack};
  }
`;

export const Block = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  &:not(:first-child) {
    margin-top: ${({theme}) => theme.dim[1]};
  }
`;
