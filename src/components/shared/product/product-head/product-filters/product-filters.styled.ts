import styled from 'styled-components';

export const Head = styled.div`
  background-color: ${({theme}) => theme.palette.onBack};
`;

export const Content = styled.div`
  display: flex;
  position: relative;
  height: 100%;
  -webkit-overflow-scrolling: touch;
`;

export const Wrap = styled.div`
  position: absolute;
  right: 0;
  left: 0;
  top: 0;
  bottom: 0;
  overflow: auto;
  will-change: transform;
`;

export const Bottom = styled.div`
  display: flex;
  align-items: center;
  border-top: 1px solid ${({theme}) => theme.palette.stroke};
  padding: ${({theme}) => theme.dim[2]};
`;

export const Block = styled.label`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: ${({theme}) => `${theme.dim[3]} ${theme.dim[2]}`};
`;

export const BlockContent = styled.div`
  display: flex;
  align-items: center;
`;

export const FiltersWrap = styled.div`
  overflow: hidden;
  &:not(:last-child) {
    border-bottom: 1px solid ${({theme}) => theme.palette.stroke};
  }
`;

export const FiltersContent = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: ${({theme}) => `0 ${theme.dim[2]}`};
  gap: ${({theme}) => `${theme.dim[2]}`};
  max-height: 0;
  transition: max-height 0.5s cubic-bezier(0, 1, 0, 1);
`;

export const RangeWrap = styled.div`
  width: 100%;
  margin-bottom: ${({theme}) => theme.dim[3]};
`;

export const Icon = styled.span`
  display: inline-block;
  transition: 0.5s all;
`;

export const Input = styled.input`
  display: none;
  &:checked {
    & ~ ${FiltersContent} {
      max-height: 9999px;
      transition: max-height 0.5s cubic-bezier(1, 0, 1, 0);
    }
    & ~ ${Block} {
      & ${BlockContent} {
        & ${Icon} {
          transform: rotate(180deg);
        }
      }
    }
  }
`;
