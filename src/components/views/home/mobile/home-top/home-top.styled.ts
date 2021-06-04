import styled from 'styled-components';

export const Wrapper = styled.div``;

export const TabsWrap = styled.div`
  background-color: ${({theme}) => theme.palette.onBack};
`;

export const ImageWrap = styled.div`
  background-color: ${({theme}) => theme.palette.onBack};
  height: 171px;
  margin: ${({theme}) => `${theme.dim[3]} ${theme.dim[2]} 0 ${theme.dim[2]}`};
  border: 1px solid ${({theme}) => theme.palette.stroke};
  border-radius: ${({theme}) => theme.defaults.borderRadiusVariant};
`;

export const BannerWrap = styled.div`
  background-color: ${({theme}) => theme.palette.onBack};
  height: 171px;
  width: 100%;
  margin-top: ${({theme}) => theme.dim[3]};
  border: 1px solid ${({theme}) => theme.palette.stroke};
`;

export const Tags = styled.div`
  display: flex;
  justify-content: center;
  margin-top: ${({theme}) => theme.dim[3]};
  margin-bottom: ${({theme}) => theme.dim[3]};
  gap: ${({theme}) => theme.dim[4]};
`;

export const TagsWrap = styled.div``;

export const Tag = styled.div`
  height: 58px;
  width: 58px;
  border-radius: 50%;
  background-color: ${({theme}) => theme.palette.stroke};
`;

export const Image = styled.img``;

export const Titles = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 171px;
  background-color: ${({theme}) => theme.palette.onBack};
`;

export const TitleWrap = styled.div`
  display: flex;
  justify-content: center;
  gap: ${({theme}) => theme.dim[4]};
`;
