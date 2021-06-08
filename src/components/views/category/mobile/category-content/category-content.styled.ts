import styled from 'styled-components';

export const Wrapper = styled.div``;

export const Banner = styled.div`
  position: relative;
  width: 100%;
  padding-top: 47%;
`;

export const BannerImage = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

export const Block = styled.div`
  margin-top: ${({theme}) => theme.dim[4]};
`;
