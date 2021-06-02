import styled from 'styled-components';

export const Wrap = styled.div`
  display: flex;
  gap: ${({theme}) => theme.dim[1]};
  justify-content: space-between;
  flex-wrap: wrap;
  margin-top: ${({theme}) => theme.dim[3]};
`;

export const Block = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  flex: 0 0 65px;
  min-width: 0;
`;
export const Input = styled.input`
  outline: none;
  padding: ${({theme}) => theme.dim[1]};
  height: 27px;
  text-align: center;
  border-radius: 2px;
  border: 1px solid ${({theme}) => theme.palette.stroke};
  ${({theme}) => theme.typography.bodySmMedium};
  ::placeholder {
    color: ${({theme}) => theme.palette.primary};
    opacity: 1;
    ${({theme}) => theme.typography.infoXsMedium};
  }
`;
