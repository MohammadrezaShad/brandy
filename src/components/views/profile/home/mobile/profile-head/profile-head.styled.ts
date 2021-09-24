import styled from 'styled-components';

export const Wrap = styled.div`
  margin: ${({theme}) => theme.dim[2]} 0;
  padding: ${({theme}) =>
    `${theme.dim[2]} ${theme.dim[2]} ${theme.dim[4]} ${theme.dim[2]}`};
  border-bottom: 7px solid ${({theme}) => theme.palette.onBack};
`;

export const Block = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Profile = styled.div`
  position: relative;
`;

export const Camera = styled.span`
  position: absolute;
  bottom: 3px;
  left: 0;
`;
