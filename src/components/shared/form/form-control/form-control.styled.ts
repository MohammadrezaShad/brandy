import styled from 'styled-components';

export const FormControl = styled.div`
  display: flex;
  flex-direction: column;
  &:not(:last-child) {
    margin-bottom: ${({theme}) => theme.dim[3]};
  }
`;
