import styled from 'styled-components';

export const Wrapper = styled.div``;

export const Block = styled.div``;

export const Wrap = styled.div`
  padding: ${({ theme }) => `${theme.dim[3]} ${theme.dim[2]}`};
  border-bottom: 5px solid ${({ theme }) => theme.palette.stroke};
`;

export const InfoWrap = styled.div`
  padding: ${({ theme }) => `${theme.dim[3]} ${theme.dim[2]}`};
  background-color: ${({ theme }) => theme.palette.surface};
`;

export const GuideWrap = styled.div`
  padding: ${({ theme }) => `${theme.dim[2]} ${theme.dim[2]} 0 ${theme.dim[2]}`};
`;

export const Button = styled.div`
  position: sticky;
  bottom: 0;
  padding: ${({ theme }) => `${theme.dim[2]}`};
  border-top: 1px solid ${({ theme }) => theme.palette.stroke};
  background-color: ${({ theme }) => theme.palette.back};
  z-index: 100;
`;
