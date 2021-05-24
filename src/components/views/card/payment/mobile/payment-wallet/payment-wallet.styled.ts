import styled from 'styled-components';

export const Wrap = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid ${({theme}) => theme.palette.stroke};
  border-radius: ${({theme}) => theme.defaults.borderRadius};
  padding: ${({theme}) => theme.dim[3]};
`;

export const IconWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid ${({theme}) => theme.palette.stroke};
  border-radius: ${({theme}) => theme.defaults.borderRadius};
  margin-right: ${({theme}) => theme.dim[1]};
  width: 50px;
  height: 43px;
`;

export const Content = styled.div`
  margin-right: ${({theme}) => theme.dim[2]};
`;
