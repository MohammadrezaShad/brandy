import styled from 'styled-components';

export const Wrapper = styled.div`
  text-align: center;
`;

export const ButtonWrap = styled.div`
  margin-bottom: ${({theme}) => `-${theme.dim[2]}`};
`;
