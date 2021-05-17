import styled from 'styled-components';

export const Wrapper = styled.div`
  padding: ${({theme}) => `${theme.dim[1]} ${theme.dim[3]}`};
  background-color: ${({theme}) => theme.palette.error};
`;

export const Block = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  &:not(:last-child) {
    margin-bottom: ${({theme}) => theme.dim[2]};
  }
`;

export const Wrap = styled.div`
  display: flex;
  align-items: center;
`;

export const Magnify = styled.span`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: ${({theme}) => theme.dim[2]};
`;

export const Arrow = styled.span`
  display: inline-flex;
  margin-left: ${({theme}) => theme.dim[2]};
  transform: scale(1.2);
  & > PATH {
    stroke: ${({theme}) => theme.palette.back};
  }
`;

export const Point = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  margin-left: ${({theme}) => theme.dim[1]};
  ${({theme}) => theme.typography.infoXsMedium};
  color: ${({theme}) => theme.palette.onSecondary};
  background-color: ${({theme}) => theme.palette.secondary};
  border-radius: ${({theme}) => theme.defaults.borderRadius};
  padding-top: 3px;
  height: 13px;
  width: 26px;
`;

export const Brand = styled.span`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  margin-right: ${({theme}) => theme.dim[2]};
  height: 40px;
  width: 40px;
  border-radius: 50%;
  background-color: ${({theme}) => theme.palette.back};
`;
