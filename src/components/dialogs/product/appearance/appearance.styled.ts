import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 84px;
  width: 220px;
  background-color: ${({theme}) => theme.palette.back};
  border-radius: ${({theme}) => theme.defaults.borderRadius};
`;

export const IconWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  &:not(:first-child) {
    margin-left: ${({theme}) => theme.dim[4]};
  }
`;

export const Icon = styled.span``;

export const Point = styled.span<{selected: boolean}>`
  display: inline-flex;
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background-color: ${({theme}) => theme.palette.error};
  opacity: ${({selected}) => (selected ? 1 : 0)};
  margin-top: ${({theme}) => theme.dim[1]};
  transition: all 0.5s;
`;
