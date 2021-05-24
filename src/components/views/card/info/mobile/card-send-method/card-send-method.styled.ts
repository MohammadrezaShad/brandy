import styled from 'styled-components';

export const Content = styled.div`
  display: flex;
  align-items: center;
`;

export const Wrap = styled.div`
  margin-right: ${({theme}) => theme.dim[2]};
`;

export const IconWrap = styled.span`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  border-radius: ${({theme}) => theme.defaults.borderRadius};
  border: 1px solid ${({theme}) => theme.palette.stroke};
  padding: ${({theme}) => theme.dim[1]};
  height: 43px;
  width: 50px;
`;
