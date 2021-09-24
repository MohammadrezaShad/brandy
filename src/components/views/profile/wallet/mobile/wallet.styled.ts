import styled from 'styled-components';

export const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

export const Head = styled.div<{$hasBorder?: boolean}>`
  display: flex;
  align-items: center;
  border-bottom: ${({theme}) => `1px solid ${theme.palette.stroke}`};
  padding: ${({theme}) => `${theme.dim[3]} ${theme.dim[3]} 0 ${theme.dim[3]}`};
`;

export const Tabs = styled.div`
  display: flex;
  justify-content: space-around;
  flex: 1;
  & > div {
    flex: 1;
  }
`;

export const ArrowRight = styled.span`
  align-self: flex-start;
  transform: scale(1.2);
  margin-left: ${({theme}) => theme.dim[3]};
  cursor: pointer;
  PATH {
    stroke: ${({theme}) => theme.palette.onSurface};
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  padding: ${({theme}) =>
    `${theme.dim[4]} ${theme.dim[3]} ${theme.dim[2]} ${theme.dim[3]}`};
  flex: 1;
`;
