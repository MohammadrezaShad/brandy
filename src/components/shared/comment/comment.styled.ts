import convert from 'color-convert';
import styled from 'styled-components';

export const Layout = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Head = styled.div`
  margin-bottom: ${({theme}) => theme.dim[2]};
`;

export const Content = styled.div``;

export const Footer = styled.div`
  margin-top: ${({theme}) => theme.dim[2]};
`;

export const CommentIcon = styled.span`
  vertical-align: middle;
`;

export const CommentTimeIcon = styled.span`
  vertical-align: middle;
  & > g {
    stroke: ${({theme}) => theme.palette.onPrimary};
  }
`;

export const Table = styled.div`
  border-radius: ${({theme}) => theme.defaults.borderRadius};
  padding: ${({theme}) => theme.dim[2]};
  background-color: ${({theme}) =>
    `rgb(${convert.hex.rgb(theme.palette.onBack)},0.4)`};
  border: 1px solid ${({theme}) => theme.palette.stroke};
`;

export const TableHead = styled.div`
  display: flex;
  justify-content: space-between;
  padding-bottom: ${({theme}) => theme.dim[1]};
`;

export const TableBottom = styled.div`
  border-top: 1px solid ${({theme}) => theme.palette.stroke};
  padding-top: ${({theme}) => theme.dim[2]};
`;
