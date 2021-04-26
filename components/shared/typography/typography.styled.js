import styled from 'styled-components';

export const Text = styled.span`
  display: ${({ display }) => display};
  color: ${({ theme, color }) => theme.palette[color]};
  ${({ variant, theme }) => theme.typography[variant]};
  margin: ${({ theme, gutter }) => (gutter ? theme.dim[gutter] : null)};
  margin-right: ${({ theme, gutterRight }) => (gutterRight ? theme.dim[gutterRight] : null)};
  margin-left: ${({ theme, gutterLeft }) => (gutterLeft ? theme.dim[gutterLeft] : null)};
  margin-top: ${({ theme, gutterTop }) => (gutterTop ? theme.dim[gutterTop] : null)};
  margin-bottom: ${({ theme, gutterBottom }) => (gutterBottom ? theme.dim[gutterBottom] : null)};
  transition: 0.5s all;
`;
