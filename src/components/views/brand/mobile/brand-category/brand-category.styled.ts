import styled from 'styled-components';

export const Wrapper = styled.div``;

export const CategoryWrap = styled.div`
  &:not(:last-child) {
    margin-left: ${({theme}) => theme.dim[2]};
  }
`;

export const Category = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid ${({theme}) => theme.palette.stroke};
  border-radius: 50%;
  width: 60px;
  height: 60px;
  background-color: ${({theme}) => theme.palette.onBack};
`;
