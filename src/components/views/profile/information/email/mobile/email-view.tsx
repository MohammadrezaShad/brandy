import React, {FC, ReactNode, useState} from 'react';

import EmailForm from './email-form';
import EmailVerification from './email-verification';

interface EmailViewProps {
  children?: ReactNode;
}

const EmailView: FC<EmailViewProps> = ({children}) => {
  const [hasCode, setHasCode] = useState(false);

  return (
    <>
      {hasCode ? <EmailVerification /> : <EmailForm setHasCode={setHasCode} />}
    </>
  );
};

export default EmailView;
