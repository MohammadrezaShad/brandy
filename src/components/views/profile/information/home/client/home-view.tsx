import React, {FC, ReactNode} from 'react';

interface HomeViewProps {
  children?: ReactNode;
}

const HomeView: FC<HomeViewProps> = props => {
  console.log('HomeViewProps');
  return <div>HomeViewProps</div>;
};

export default HomeView;
