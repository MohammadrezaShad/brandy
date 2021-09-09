import React, {FC, ReactNode} from 'react';

interface DisplayNameProps {
  children?: ReactNode;
}

const DisplayName: FC<DisplayNameProps> = props => {
  console.log('HomeViewProps');
  return <div>DisplayName</div>;
};

export default DisplayName;
