import styled from 'styled-components';

export const Wrap = styled.label`
  display: flex;
  align-items: center;
`;

export const Layout = styled.span`
  display: inline-flex;
  position: relative;
  flex: 0 0 13px;
  width: 13px;
  height: 13px;
  border-radius: 3px;
  border: 1.5px solid ${({theme}) => theme.palette.onSurface};
  transition: all 0.5s;
`;

export const Input = styled.input`
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  z-index: 10;
`;

export const Icon = styled.span<{checked: boolean}>`
  display: inline-block;
  position: absolute;
  top: 50%;
  right: 50%;
  transform: translate(50%, -50%);
  opacity: ${({checked}) => (checked ? 1 : 0)};
`;
