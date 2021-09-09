import React, {FC, ReactNode} from 'react';

interface NationalCodeViewProps {
  children?: ReactNode;
}

const NationalCodeView: FC<NationalCodeViewProps> = props => {
  console.log('NationalCodeView');
  return <div>NationalCodeView</div>;
};

export default NationalCodeView;
