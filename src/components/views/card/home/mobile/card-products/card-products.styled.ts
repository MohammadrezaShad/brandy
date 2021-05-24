import styled from 'styled-components';

export const Wrapper = styled.div`
  &:not(:last-child) {
    margin-bottom: ${({theme}) => theme.dim[4]};
  }
`;

export const TopContent = styled.div`
  display: flex;
  margin-bottom: ${({theme}) => theme.dim[1]};
`;

export const BottomContent = styled.div`
  display: flex;
`;

export const Content = styled.div`
  margin-right: ${({theme}) => theme.dim[2]};
  border-bottom: 1px solid ${({theme}) => theme.palette.stroke};
  padding-bottom: ${({theme}) => theme.dim[1]};
  display: flex;
  flex-flow: column;
  width: 100%;
`;

export const ImgWrap = styled.div`
  position: relative;
  width: 45%;
  padding-top: 40%;
`;

export const Img = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

export const HeadWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: ${({theme}) => theme.dim[1]};
`;

export const DetailWrap = styled.div`
  margin-bottom: ${({theme}) => theme.dim[2]};
  margin-top: ${({theme}) => theme.dim[1]};
`;

export const CloseIcon = styled.span`
  vertical-align: middle;
`;

export const Color = styled.span`
  display: inline-flex;
  vertical-align: middle;
  margin-left: ${({theme}) => theme.dim[1]};
  width: 13px;
  height: 13px;
  border-radius: 50%;
  background-color: ${({theme}) => theme.palette.error};
`;

export const Separator = styled.span`
  display: inline-block;
  vertical-align: middle;
  width: 1px;
  height: 15px;
  background-color: ${({theme}) => theme.palette.stroke};
`;

export const PriceWrap = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: ${({theme}) => theme.dim[1]};
  &:not(:last-child) {
    margin-top: auto;
  }
`;

export const FinalPrice = styled.div`
  display: flex;
  justify-content: space-between;
  margin-right: ${({theme}) => theme.dim[2]};
  flex: 1;
`;

export const QuantityWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30%;
`;

export const QuantityIcon = styled.span`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  flex: 0 0 25px;
  height: 25px;
  border-radius: 50%;
  border: 1px solid ${({theme}) => theme.palette.stroke};
`;
