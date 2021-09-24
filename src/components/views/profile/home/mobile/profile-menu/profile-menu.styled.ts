import styled from 'styled-components';

export const Wrap = styled.div`
  padding: 0 ${({theme}) => theme.dim[2]};
  padding-bottom: ${({theme}) => theme.dim[4]};
`;

export const Head = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: ${({theme}) => theme.dim[4]};
`;

export const Arrow = styled.span`
  width: 5px;
  vertical-align: middle;
  margin-right: ${({theme}) => theme.dim[1]};
`;

export const Part = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  &:not(:last-child) {
    margin-left: ${({theme}) => theme.dim[5]};
  }
`;

export const PartIconWrap = styled.div`
  display: flex;
  height: 42px;
  align-items: center;
  margin-bottom: auto;
`;

export const PartIcon = styled.span``;

export const Block = styled.div``;

export const List = styled.div`
  margin-top: ${({theme}) => theme.dim[5]};
`;

export const Item = styled.div`
  display: flex;
  align-items: center;
  padding: ${({theme}) => theme.dim[3]};
  &:first-child {
    border-top: 1px solid ${({theme}) => theme.palette.stroke};
  }
  &:not(:last-child) {
    border-bottom: 1px solid ${({theme}) => theme.palette.stroke};
  }
`;

export const ArrowItem = styled.span`
  margin-right: auto;
`;
