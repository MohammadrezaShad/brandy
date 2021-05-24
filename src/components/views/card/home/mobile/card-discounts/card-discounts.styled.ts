import styled from 'styled-components';

export const Wrapper = styled.div``;

export const Discount = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid ${({theme}) => theme.palette.stroke};
  padding: ${({theme}) => theme.dim[2]};
  border-radius: ${({theme}) => theme.defaults.borderRadius};
  margin-bottom: ${({theme}) => theme.dim[2]};
  PATH {
    stroke: ${({theme}) => theme.palette.onError};
  }
  & > :first-child {
    margin-left: auto;
  }
`;

export const Plus = styled.span`
  display: inline-block;
  vertical-align: middle;
  margin-left: ${({theme}) => theme.dim[1]};
  transform: scale(1.2);
  PATH {
    fill: ${({theme}) => theme.palette.onSuccess};
  }
`;
