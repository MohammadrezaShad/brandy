import React, {FC, ReactNode, useState} from 'react';

import MobileNumberForm from './mobile-number-form';
import MobileNumberVerification from './mobile-number-verification';

interface MobileNumberViewProps {
  children?: ReactNode;
}

const MobileNumberView: FC<MobileNumberViewProps> = ({children}) => {
  const [hasCode, setHasCode] = useState(false);

  return (
    <>
      {hasCode ? (
        <MobileNumberVerification />
      ) : (
        <MobileNumberForm setHasCode={setHasCode} />
      )}
    </>
  );
};

export default MobileNumberView;
