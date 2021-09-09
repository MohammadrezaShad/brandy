import styled from 'styled-components';

export const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  flex: 1;
  padding: ${({theme}) => `${theme.dim[3]} ${theme.dim[2]}`};
`;

export const FormControl = styled.div`
  margin-top: auto;
`;

export const Block = styled.div`
  display: inline-flex;
  align-items: center;
  margin-right: auto;
  margin-top: ${({theme}) => theme.dim[1]};
`;

export const Arrow = styled.span`
  margin-right: ${({theme}) => theme.dim[1]};
  transform: scale(0.8);
`;
