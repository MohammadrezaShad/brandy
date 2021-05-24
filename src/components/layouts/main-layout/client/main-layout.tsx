import React, {FC} from 'react';

type MainLayoutProps = {
  children: unknown;
};
const MainLayout: FC<MainLayoutProps> = ({children}) => (
  <div>
    Desktop
    {children}
  </div>
);

export default MainLayout;
