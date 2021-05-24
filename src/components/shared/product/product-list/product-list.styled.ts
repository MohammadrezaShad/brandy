import styled from 'styled-components';

export const Wrapper = styled.div`
  overflow: hidden;
`;

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: ${({theme}) =>
    `-${(parseInt(theme.dim[2], 10) * 3) / 4}px -${theme.dim[1]}`};
`;

export const Product = styled.div`
  flex: 0 0 50%;
  padding: ${({theme}) =>
    `${(parseInt(theme.dim[2], 10) * 3) / 4}px ${theme.dim[1]}`};
`;
