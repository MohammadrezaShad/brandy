import styled from 'styled-components';

export const Wrap = styled.div`
  display: flex;
  align-items: center;
  padding: ${({ theme }) => `${theme.dim[2]}`};
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => `${theme.dim[1]}`};
`;

export const Crumb = styled.span`
  display: inline-flex;
  align-items: center;
`;

export const ArrowRight = styled.span`
  transform: scale(1.2);
  margin-left: ${({ theme }) => theme.dim[4]};
  PATH {
    stroke: ${({ theme }) => theme.palette.onSurface};
  }
`;

export const ArrowLeft = styled.span`
  margin-left: ${({ theme }) => theme.dim[1]};
  width: 6px;
  PATH {
    stroke: ${({ theme }) => theme.palette.primary};
  }
`;
