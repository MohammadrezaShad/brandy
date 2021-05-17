import styled from 'styled-components';

export const HeadWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: ${({ theme }) => theme.dim[2]};
  border-bottom: 1px solid ${({ theme }) => theme.palette.stroke};
`;

export const HeadFilterTag = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  padding: ${({ theme }) => theme.dim[1]};
  background-color: ${({ theme }) => theme.palette.error};
  border-radius: ${({ theme }) => theme.defaults.borderRadius};
  height: 30px;
  &:not(:last-child) {
    margin-left: ${({ theme }) => theme.dim[2]};
  }
`;

export const HeadIcon = styled.span`
  display: inline-block;
`;

export const Color = styled.span`
  display: inline-block;
  height: 16px;
  width: 16px;
  border-radius: ${({ theme }) => theme.defaults.borderRadiusVariant};
  border: 1px solid ${({ theme }) => theme.palette.back};
  background-color: ${({ theme }) => theme.palette.onSuccess};
  margin-left: ${({ theme }) => theme.dim[1]};
`;

export const Icon = styled.span`
  top: 4px;
  left: 4px;
  margin-right: ${({ theme }) => theme.dim[1]};
  PATH {
    stroke: ${({ theme }) => theme.palette.back};
  }
`;
