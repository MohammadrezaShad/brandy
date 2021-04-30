import styled from 'styled-components';

export const Wrap = styled.div`
  display: flex;
  align-items: flex-start;
`;

export const Content = styled.div`
  flex: 2;
  padding-left: ${({ theme }) => theme.dim[1]};
`;

export const TextWrap = styled.div`
  display: flex;
  align-items: center;
  & > :first-child {
    flex: 0 0 40px;
  }
  &:not(:last-child) {
    margin-bottom: ${({ theme }) => theme.dim[1]};
  }
`;

export const Rate = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const RateText = styled.span`
  display: inline-block;
  font-size: 35px;
  font-weight: 700;
  line-height: 1;
  color: ${({ theme }) => theme.palette.onSurface};
`;

export const RateProgress = styled.div<{ progress: string; secondary?: boolean }>`
  height: 5px;
  margin: 0 ${({ theme }) => theme.dim[1]};
  flex: 0 0 ${({ progress }) => progress || 0};
  border-radius: ${({ theme }) => theme.defaults.borderRadiusVariant};
  background-color: ${({ theme, secondary }) => (secondary ? theme.palette.secondary : theme.palette.primary)};
`;

export const Comments = styled.div`
  margin-top: ${({ theme }) => theme.dim[2]};
`;

export const Comment = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid ${({ theme }) => theme.palette.stroke};
  border-radius: ${({ theme }) => theme.defaults.borderRadiusVariant};
  padding: ${({ theme }) => theme.dim[2]};
  flex: 0 0 331px;
  &:not(:last-child) {
    margin-left: ${({ theme }) => theme.dim[2]};
  }
`;

export const CommentHead = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: ${({ theme }) => theme.dim[2]};
`;

export const CommentBody = styled.div`
  margin-bottom: ${({ theme }) => theme.dim[1]};
`;

export const CommentFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: auto;
`;

export const CommentIcon = styled.span`
  vertical-align: middle;
`;

export const RateStar = styled.div`
  margin-bottom: ${({ theme }) => theme.dim[1]};
`;
