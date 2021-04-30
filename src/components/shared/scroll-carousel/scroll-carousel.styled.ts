import styled, { css } from 'styled-components';

export const Wrap = styled.div<{ isTouchDevice: boolean }>`
  display: flex;
  overflow: auto;
  scroll-behavior: smooth;
  ${({ isTouchDevice }) =>
    !isTouchDevice
      ? css`
          scrollbar-color: #d6dee1 transparent;
          scrollbar-width: thin;

          /* Works on Chrome, Edge, and Safari */
          &::-webkit-scrollbar {
            width: 12px;
          }

          &::-webkit-scrollbar-track {
            background-color: transparent;
          }

          &::-webkit-scrollbar-thumb {
            background-color: #d6dee1;
            border-radius: 20px;
          }
        `
      : css`
          scrollbar-width: none;
        `}
`;
