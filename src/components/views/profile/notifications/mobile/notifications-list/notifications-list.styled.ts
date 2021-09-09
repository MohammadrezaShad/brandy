import styled from 'styled-components';

export const Wrap = styled.div`
  &:not(:last-child) {
    margin-bottom: ${({theme}) => theme.dim[4]};
  }
`;

export const Bottom = styled.div`
  margin-top: ${({theme}) => theme.dim[2]};
`;

export const Head = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ImageWrap = styled.div`
  position: relative;
  padding-top: 34.39%;
`;

export const Image = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;
