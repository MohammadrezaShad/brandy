import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  flex: 1;
  padding: ${({theme}) => `${theme.dim[3]} ${theme.dim[2]}`};
`;

export const FormControl = styled.div`
  margin-top: auto;
`;
