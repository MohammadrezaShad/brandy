import styled from 'styled-components';

export const Wrapper = styled.div`
  margin-top: ${({theme}) => theme.dim[3]};
  padding: ${({theme}) => `0 ${theme.dim[2]}`};
  text-align: center;
`;

export const Wrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${({theme}) => theme.dim[1]};
`;

export const Product = styled.div`
  flex: 1 0 48%;
  background-color: ${({theme}) => theme.palette.onBack};
  height: 60px;
  border-radius: ${({theme}) => theme.defaults.borderRadiusVariant};
`;

export const Banner = styled.div`
  margin-top: ${({theme}) => theme.dim[3]};
  background-color: ${({theme}) => theme.palette.onBack};
  border: 1px solid ${({theme}) => theme.palette.stroke};
  border-radius: ${({theme}) => theme.defaults.borderRadiusVariant};
  height: 171px;
`;

export const Content = styled.div`
  margin-top: ${({theme}) => theme.dim[3]};
`;

export const Container = styled.div`
  display: flex;
  gap: ${({theme}) => theme.dim[2]};
`;

export const ThumbnailWrap = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1 0 0;
`;

export const Thumbnail = styled.div`
  background-color: ${({theme}) => theme.palette.onBack};
  border: 1px solid ${({theme}) => theme.palette.stroke};
  border-radius: ${({theme}) => theme.defaults.borderRadiusVariant};
  height: 114px;
`;
