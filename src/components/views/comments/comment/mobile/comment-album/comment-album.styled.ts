import styled from 'styled-components';

export const Container = styled.div``;

export const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${({theme}) => theme.dim[2]};
  align-items: flex-start;
`;

export const ImageWrap = styled.div`
  height: 119px;
  width: 76px;
  flex: 0 0 76px;
`;

export const Image = styled.img`
  display: block;
  width: 100%;
  height: 100%;
`;

export const Input = styled.input`
  display: none;
`;

export const UploadButton = styled.label`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 119px;
  width: 76px;
  flex: 0 0 76px;
  border: 2px dashed ${({theme}) => theme.palette.stroke};
  border-radius: ${({theme}) => theme.defaults.borderRadius};
`;

export const Icon = styled.span`
  transform: scale(1.5);
  PATH {
    fill: ${({theme}) => theme.palette.primary};
  }
`;
