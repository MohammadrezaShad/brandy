import styled from 'styled-components';

export const Footer = styled.footer`
  padding: 0 ${({theme}) => theme.dim[2]};
`;

export const Top = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  padding: ${({theme}) => theme.dim[5]} ${({theme}) => theme.dim[2]};
  border-bottom: 1px solid ${({theme}) => theme.palette.stroke};
`;

export const Enamad = styled.img`
  padding: 0 ${({theme}) => theme.dim[2]};
`;

export const Bank = styled.img``;

export const Content = styled.div``;

export const List = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: ${({theme}) => theme.dim[3]};
`;

export const Item = styled.div`
  flex: 0 0 33.33%;
  padding: ${({theme}) => theme.dim[1]};
`;

export const Description = styled.div`
  position: relative;
  border-top: 1px solid ${({theme}) => theme.palette.stroke};
  padding-top: ${({theme}) => theme.dim[2]};
  padding-bottom: ${({theme}) => theme.dim[6]};
`;

export const DesctiptionMore = styled.div<{$isShowMore: boolean}>`
  position: absolute;
  bottom: ${({theme}) => theme.dim[2]};
  width: 100%;
  background: ${({$isShowMore}) =>
    !$isShowMore
      ? `linear-gradient(
    180deg,
    rgba(247, 247, 247, 0) 0%,
    rgba(247, 247, 247, 0.5) 20%,
    rgba(247, 247, 247, 1) 75%,
    rgba(247, 247, 247, 1) 100%
  )`
      : 'transparent'};
  height: 94px;
  transition: all 0.5s;
`;

export const More = styled.span`
  display: flex;
  text-align: center;
  align-items: center;
  justify-content: center;
  position: absolute;
  right: 50%;
  transform: translateX(50%);
`;

export const Arrow = styled.span<{$isShowMore: boolean}>`
  margin-right: ${({theme}) => theme.dim[1]};
  transform: ${({$isShowMore}) =>
    `rotate(${!$isShowMore ? '180deg' : '0deg'})`};
`;

export const DescriptionText = styled.p<{$isShowMore: boolean}>`
  ${({theme}) => theme.typography.subtitleXsNormal};
  line-height: 1.8;
  max-height: ${({$isShowMore}) => ($isShowMore ? '1000px' : '100px')};
  overflow: hidden;
  transition: max-height
    ${({$isShowMore}) =>
      $isShowMore ? '1s ease-in-out' : '0.8s cubic-bezier(0, 1, 0, 1)'};
`;

export const Bottom = styled.div``;

export const SocialMedia = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: ${({theme}) => theme.dim[3]};
  border-top: 1px solid ${({theme}) => theme.palette.stroke};
`;

export const SocialMediaWarp = styled.div`
  display: flex;
  margin-top: ${({theme}) => theme.dim[2]};
`;

export const SocialMediaImg = styled.img`
  display: inline-block;
  &:first-child {
    margin-left: ${({theme}) => theme.dim[2]};
  }
`;

export const Copyright = styled.div`
  border-top: 1px solid ${({theme}) => theme.palette.stroke};
`;
