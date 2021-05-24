import styled from 'styled-components';

export const Wrapper = styled.header`
  padding: ${({theme}) => theme.dim[2]};
  background-color: ${({theme}) => theme.palette.onBack};
`;

export const Content = styled.section`
  display: flex;
  align-items: center;
`;

export const LogoWrap = styled.div`
  text-align: center;
  flex: 1;
  padding: ${({theme}) => `0 ${theme.dim[2]}`};
`;

export const MenuIcon = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 20px;
  width: 20px;
  margin-left: ${({theme}) => theme.dim[3]};
  cursor: pointer;
`;

export const MenuIconLayout = styled.span`
  display: flex;
  flex: 0 0 2px;
  width: 100%;
  background-color: ${({theme}) => theme.palette.onSurface};
`;

export const HeaderIcon = styled.span`
  color: ${({theme}) => theme.palette.onSurface};
  &:last-child {
    margin-right: ${({theme}) => theme.dim[3]};
  }
`;
