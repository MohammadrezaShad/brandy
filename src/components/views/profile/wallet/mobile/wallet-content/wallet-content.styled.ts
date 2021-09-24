import styled from 'styled-components';

export const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

export const Head = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`;

export const Price = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Input = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${({theme}) => `${theme.dim[1]} ${theme.dim[2]}`};
  min-height: 48px;
  background-color: ${({theme}) => theme.palette.onBack};
  border: 1px solid ${({theme}) => theme.palette.stroke};
  border-radius: ${({theme}) => theme.defaults.borderRadiusVariant};
`;

export const Icon = styled.span`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  height: 25px;
  width: 25px;
  border-radius: 50%;
  border: 1px solid ${({theme}) => theme.palette.stroke};
`;

export const ButtonWrap = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: auto;
`;
