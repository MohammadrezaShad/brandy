import styled from 'styled-components';

export const Wrap = styled.div``;

export const Head = styled.div`
  padding-bottom: ${({theme}) => theme.dim[3]};
  border-bottom: 1px solid ${({theme}) => theme.palette.stroke};
`;

export const List = styled.ul``;

export const Item = styled.li`
  display: flex;
  margin-top: ${({theme}) => theme.dim[3]};
`;

export const Block = styled.div`
  flex: 0 0 18.35%;
`;

export const Detail = styled.div`
  display: flex;
  flex-direction: column;
  padding-right: ${({theme}) => theme.dim[2]};
  flex: 1;
`;

export const Bottom = styled.div`
  display: inline-flex;
  align-items: center;
  margin-top: auto;
  align-self: flex-end;
`;

export const ImageWrap = styled.div`
  position: relative;
  width: 100%;
  padding-top: 148%;
`;

export const Image = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

export const ArrowLeft = styled.span`
  margin-right: ${({theme}) => theme.dim[1]};
  transform: scale(0.8);
  & > PATH {
    stroke: ${({theme}) => theme.palette.error};
  }
`;
