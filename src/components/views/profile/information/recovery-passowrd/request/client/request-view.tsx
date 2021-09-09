import React, {FC, ReactNode} from 'react';

import * as S from './request-view.styled';

interface RequestProps {
  children?: ReactNode;
}

const Request: FC<RequestProps> = props => {
  console.log('Request');
  return <S.Wrap>Request</S.Wrap>;
};

export default Request;
