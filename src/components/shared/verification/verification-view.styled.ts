import styled from 'styled-components';

export const Wrap = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  padding: ${({theme}) => `${theme.dim[3]} ${theme.dim[2]}`};
`;

export const Head = styled.div``;

export const Content = styled.form`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

export const FormControl = styled.div`
  margin-top: auto;
`;

export const Text = styled.div`
  direction: ltr;
`;
