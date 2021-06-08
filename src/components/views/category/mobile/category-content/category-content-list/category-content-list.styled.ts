import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${({theme}) => theme.dim[1]};
  margin-top: ${({theme}) => theme.dim[2]};
`;

export const Category = styled.div`
  flex: 1 0 30%;
  max-width: 33.33%;
  text-align: center;
`;

export const ImageWrap = styled.div`
  position: relative;
  padding-top: 100%;
`;

export const Image = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;
