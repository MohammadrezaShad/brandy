import React, {FC, ReactNode} from 'react';

interface HomeViewProps {
  children?: ReactNode;
}

const HomeView: FC<HomeViewProps> = props => {
  console.log('HomeView');
  return <div>HomeView</div>;
};

export default HomeView;
