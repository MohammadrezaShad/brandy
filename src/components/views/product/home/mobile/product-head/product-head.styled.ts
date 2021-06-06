import styled from 'styled-components';

export const Wrap = styled.div<{isProductHeadShow: boolean}>`
  position: fixed;
  top: ${({isProductHeadShow}) => (isProductHeadShow ? 0 : '-500px')};
  right: 0;
  left: 0;
  z-index: 100;
  transition: ${({isProductHeadShow}) =>
    isProductHeadShow ? '.8s all' : 'all 1.5s'};
  padding: ${({theme}) => `${theme.dim[2]} ${theme.dim[2]} 0 ${theme.dim[2]}`};
  background-color: ${({theme}) => theme.palette.onBack};
`;

export const TopContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const BottomConent = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: ${({theme}) => ` ${theme.dim[3]}`};
`;

export const Image = styled.img`
  border-bottom-left-radius: 25px;
  border-bottom-right-radius: 25px;
  margin-top: ${({theme}) => ` -${theme.dim[2]}`};
`;

export const Icon = styled.span`
  color: ${({theme}) => theme.palette.onSurface};
`;

export const ArrowRight = styled.span`
  transform: scale(1.2);
  PATH {
    stroke: ${({theme}) => theme.palette.onSurface};
  }
`;

export const Block = styled.div`
  display: flex;
  align-items: center;
  ${Icon} {
    &:first-child {
      margin-left: ${({theme}) => theme.dim[3]};
    }
  }
  ${ArrowRight} {
    &:first-child {
      margin-left: ${({theme}) => theme.dim[3]};
    }
  }
`;

export const Item = styled.div<{selected: boolean}>`
  padding: 0 ${({theme}) => theme.dim[2]} ${({theme}) => theme.dim[1]}
    ${({theme}) => theme.dim[2]};
  position: relative;
  transition: all 0.5s;
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 2px;
    background-color: ${({theme}) => theme.palette.onSuccess};
    transition: 0.5s transform;
    transform: ${({selected}) => (selected ? `scaleX(1)` : `scaleX(0)`)};
  }
  & a {
    color: ${({theme, selected}) =>
      selected ? theme.palette.onSuccess : theme.palette.primary};
  }
`;

export const Anchor = styled.a`
  text-decoration: none;
  ${({theme}) => theme.typography.bodySmMedium};
  color: ${({theme}) => theme.palette.primary};
  transition: 0.5s transform;
`;
