import React, {FC, ReactNode} from 'react';

import About from '@/assets/vectors/About us.svg';
import Question from '@/assets/vectors/Call us.svg';
import ArrowLeft from '@/assets/vectors/F-Left.svg';
import Info from '@/assets/vectors/information.svg';
import Logout from '@/assets/vectors/logout.svg';
import Privacy from '@/assets/vectors/Privacy.svg';
import Return from '@/assets/vectors/Return2.svg';
import Terms from '@/assets/vectors/Terms of use.svg';
import Typography from '@/shared/typography';

import * as S from './setting-item.styled';

interface SettingItemProps {
  children?: ReactNode;
  text: string;
  icon: string;
}

const SettingItem: FC<SettingItemProps> = ({text, icon}) => {
  const getIcon = () => {
    switch (icon) {
      case 'question':
        return <S.Icon as={Question} />;
      case 'privacy':
        return <S.Icon as={Privacy} />;
      case 'info':
        return <S.Icon as={Info} />;
      case 'Terms':
        return <S.Icon as={Terms} />;
      case 'about':
        return <S.Icon as={About} />;
      case 'return':
        return <S.Icon as={Return} />;
      case 'logout':
        return <S.Icon as={Logout} />;
      default:
        return <S.Icon />;
    }
  };
  return (
    <S.Item>
      {getIcon()}
      <Typography>{text}</Typography>
      <S.ArrowLeft as={ArrowLeft} />
    </S.Item>
  );
};

export default SettingItem;
