import React, {FC, ReactNode} from 'react';

interface MobileNumberViewProps {
  children?: ReactNode;
}

const MobileNumberView: FC<MobileNumberViewProps> = ({children}) => {
  console.log('NotificationsViewMobile');
  return <div>MobileNumberView</div>;
};

export default MobileNumberView;
