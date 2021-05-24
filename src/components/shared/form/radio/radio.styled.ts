import styled from 'styled-components';

export const Wrap = styled.label`
  display: flex;
  align-items: center;
`;

export const Layout = styled.span<{checked: boolean}>`
  display: inline-flex;
  position: relative;
  flex: 0 0 16px;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  border: 2px solid ${({theme}) => theme.palette.onSuccess};
  transition: all 0.5s;
  &::after {
    content: '';
    position: absolute;
    top: 50%;
    right: 50%;
    transform: translate(50%, -50%);
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background-color: ${({theme, checked}) =>
      checked ? theme.palette.onSuccess : 'transparent'};
    transition: all 0.3s;
  }
`;

export const Input = styled.input`
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  z-index: 10;
`;
