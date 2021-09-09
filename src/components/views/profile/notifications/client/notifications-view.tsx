import React, {FC, ReactNode} from 'react';

interface NotificationsViewProps {
  children?: ReactNode;
}

const NotificationsView: FC<NotificationsViewProps> = ({children}) => {
  console.log('NotificationsViewMobile');
  return <div>NotificationsViewClient</div>;
};

export default NotificationsView;
