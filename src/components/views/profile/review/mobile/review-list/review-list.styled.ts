import styled from 'styled-components';

export const Wrap = styled.div``;

export const List = styled.ul``;

export const Item = styled.li`
  display: flex;
  &:not(:first-child) {
    margin-top: ${({theme}) => theme.dim[3]};
  }
`;

export const Block = styled.div`
  flex: 0 0 18.35%;
`;

export const Detail = styled.div`
  display: flex;
  flex-direction: column;
  padding-right: ${({theme}) => theme.dim[2]};
  flex: 1;
`;

export const DetailHead = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ImageWrap = styled.div`
  position: relative;
  width: 100%;
  padding-top: 148%;
`;

export const Image = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

export const Stars = styled.div`
  display: inline-flex;
  align-items: center;
  margin-top: ${({theme}) => theme.dim[2]};
`;

export const Top = styled.div`
  padding-bottom: ${({theme}) => theme.dim[2]};
  border-bottom: 1px solid ${({theme}) => theme.palette.stroke};
`;

export const Bottom = styled.div`
  padding-top: ${({theme}) => theme.dim[2]};
`;

export const More = styled.div`
  cursor: pointer;
  padding: 0 ${({theme}) => theme.dim[1]};
`;

export const DrawerDetail = styled.div`
  padding: 0 ${({theme}) => theme.dim[2]};
`;

export const DrawerItem = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  padding: ${({theme}) => `${theme.dim[3]} ${theme.dim[1]}`};
  &:not(:last-child) {
    border-bottom: 1px solid ${({theme}) => theme.palette.stroke};
  }
`;
