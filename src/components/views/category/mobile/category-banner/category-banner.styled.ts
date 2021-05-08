import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  padding: ${({ theme }) => `${theme.dim[2]} ${theme.dim[3]}`};
`;

export const Arrow = styled.span`
  display: inline-flex;
  margin-left: ${({ theme }) => theme.dim[2]};
  transform: scale(1.2);
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: ${({ theme }) => theme.dim[2]};
  & > PATH {
    stroke: ${({ theme }) => theme.palette.onSurface};
  }
`;

export const Text = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;
