import styled from 'styled-components';

export const Wrapper = styled.div`
  padding: ${({theme}) => `0 ${theme.dim[2]}`};
  margin-top: ${({theme}) => theme.dim[8]};
`;

export const Product = styled.div`
  position: relative;
  background-color: ${({theme}) => theme.palette.onBack};
  flex: 1 0 0;
  height: 118px;
  border-radius: ${({theme}) => theme.defaults.borderRadiusVariant};
  border: 1px solid ${({theme}) => theme.palette.stroke};
`;

export const Wrap = styled.div`
  display: flex;
  gap: ${({theme}) => theme.dim[1]};
`;

export const Banner = styled.div`
  background-color: ${({theme}) => theme.palette.onBack};
  height: 118px;
  border-radius: ${({theme}) => theme.defaults.borderRadiusVariant};
  border: 1px solid ${({theme}) => theme.palette.stroke};
  margin-top: ${({theme}) => theme.dim[1]};
`;

export const ThumnailWrap = styled.div`
  margin-top: ${({theme}) => theme.dim[2]};
`;

export const Thumnail = styled.div`
  background-color: ${({theme}) => theme.palette.onBack};
  flex: 0 0 102px;
  width: 102px;
  height: 102px;
  border-radius: ${({theme}) => theme.defaults.borderRadiusVariant};
  border: 1px solid ${({theme}) => theme.palette.stroke};
  &:not(:last-child) {
    margin-left: ${({theme}) => theme.dim[1]};
  }
`;
