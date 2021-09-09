import React, {FC, ReactNode} from 'react';

interface EmailViewProps {
  children?: ReactNode;
}

const EmailView: FC<EmailViewProps> = ({children}) => {
  console.log('emailView');
  return <div>EmailView</div>;
};

export default EmailView;
