import styled from 'styled-components';

export const Wrapper = styled.section``;

export const Wrap = styled.div``;

export const ButtonWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: sticky;
  bottom: 0;
  background-color: ${({ theme }) => theme.palette.back};
  padding: ${({ theme }) => `${theme.dim[1]} ${theme.dim[2]}`};
  border-top: 1px solid ${({ theme }) => theme.palette.stroke};
  border-bottom: 1px solid ${({ theme }) => theme.palette.stroke};
  z-index: 100;
`;

export const CarouselWrap = styled.div`
  display: flex;
  justify-content: center;
  padding: ${({ theme }) => `0 ${theme.dim[2]}`};
  border-bottom: 1px solid ${({ theme }) => theme.palette.stroke};
  position: relative;
`;

export const Review = styled.div`
  padding: ${({ theme }) => `0 ${theme.dim[2]} ${theme.dim[5]} ${theme.dim[2]}`};
  margin-top: ${({ theme }) => theme.dim[2]};
  position: relative;
`;

export const Separator = styled.div`
  height: 7px;
  width: 100%;
  background-color: ${({ theme }) => theme.palette.onBack};
`;

export const Collection = styled.div`
  margin-top: ${({ theme }) => theme.dim[2]};
  overflow: hidden;
  position: relative;
`;

export const AnchorPlaceholder = styled.div`
  position: absolute;
  top: -150px;
`;
