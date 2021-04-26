import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  justify-content: ${({ $spaceAround }) => ($spaceAround ? 'space-around' : 'space-between')};
  padding: ${({ theme, $spaceAround }) => ($spaceAround ? 0 : `0 ${theme.dim[2]}`)};
  border-bottom: 1px solid ${({ theme }) => theme.palette.stroke};
`;

export const Item = styled.div`
  padding: 0 ${({ theme }) => theme.dim[2]} ${({ theme }) => theme.dim[1]} ${({ theme }) => theme.dim[2]};
  position: relative;
  transition: all 0.5s;
  &::after {
    content: '';
    position: absolute;
    bottom: -1px;
    left: 0;
    right: 0;
    height: 2px;
    background-color: ${({ theme }) => theme.palette.onSuccess};
    transition: 0.5s transform;
    transform: ${({ selected }) => (selected ? `scaleX(1)` : `scaleX(0)`)};
  }
`;
