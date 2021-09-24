import React, {FC, ReactNode} from 'react';

import ProfileHead from './profile-head';
import ProfileMenu from './profile-menu';
import ProfileSuggestions from './profile-suggestions';

interface HomeViewProps {
  children?: ReactNode;
}

const HomeView: FC<HomeViewProps> = props => {
  console.log('HomeView');
  return (
    <div>
      <ProfileHead />
      <ProfileMenu />
      <ProfileSuggestions />
    </div>
  );
};

export default HomeView;
