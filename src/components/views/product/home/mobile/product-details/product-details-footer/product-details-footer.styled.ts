import styled from 'styled-components';

export const Content = styled.div`
  display: flex;
  justify-content: space-between;
  padding-bottom: ${({theme}) => `${theme.dim[2]}`};
`;

export const Arrow = styled.span`
  width: 5px;
  vertical-align: middle;
  margin-right: ${({theme}) => theme.dim[1]};
`;

export const Block = styled.div``;

export const Container = styled.div`
  display: flex;
  align-items: center;
  padding: ${({theme}) => theme.dim[2]};
  border: 1px solid ${({theme}) => theme.palette.stroke};
  border-radius: ${({theme}) => theme.defaults.borderRadiusVariant};
  margin-top: ${({theme}) => theme.dim[2]};
`;

export const Wrapper = styled.div`
  padding-right: ${({theme}) => theme.dim[2]};
  border-right: 1px solid ${({theme}) => theme.palette.stroke};
`;

export const Wrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${({theme}) => `${theme.dim[1]} ${theme.dim[2]}`};
  border-top: 1px solid ${({theme}) => theme.palette.stroke};
  border-bottom: 1px solid ${({theme}) => theme.palette.stroke};
  margin: ${({theme}) => `${theme.dim[1]} -${theme.dim[2]}`};
`;

export const TextWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${({theme}) => theme.dim[3]};
`;
