import styled from 'styled-components';

export const Wrapper = styled.div`
  direction: rtl;
  padding: ${({theme}) => theme.dim[2]};
  background-color: ${({theme}) => theme.palette.back};
  width: 342px;
`;

export const Head = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const HeadIcon = styled.span`
  transform: scale(2);
  PATH {
    stroke: ${({theme}) => theme.palette.onSurface};
  }
`;

export const Content = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${({theme}) => theme.dim[2]};
  padding: ${({theme}) => `${theme.dim[3]} 0`};
`;

export const Product = styled.div`
  display: flex;
  flex-direction: column;
  width: 78px;
  align-items: center;
`;

export const ProductImage = styled.img<{selected?: boolean}>`
  height: 114px;
  width: 76px;
  border-radius: ${({theme}) => theme.defaults.borderRadius};
  transition: all 0.5s;
  border: 1px solid
    ${({theme, selected}) =>
      selected ? theme.palette.error : theme.palette.onBack};
`;

export const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ButtonWrap = styled.div`
  flex: 1;
  &:not(:last-child) {
    margin-left: ${({theme}) => theme.dim[2]};
  }
`;
