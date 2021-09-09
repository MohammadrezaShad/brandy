import React, {FC, ReactNode} from 'react';

import SettingItem from './setting-item';
import * as S from './setting-list.styled';

interface SettingListProps {
  children?: ReactNode;
}

const SettingList: FC<SettingListProps> = ({children}) => {
  console.log('SettingListProps');
  return (
    <S.List>
      <SettingItem text='پرسش های متداول' icon='question' />
      <SettingItem text='حریم خصوصی' icon='privacy' />
      <SettingItem text='شرایط استفاده' icon='Terms' />
      <SettingItem text='تماس با ما' icon='info' />
      <SettingItem text='درباره برندی تو' icon='about' />
      <SettingItem text='بازگشت کالا' icon='return' />
      <SettingItem text='خروج از حساب کاربری' icon='logout' />
    </S.List>
  );
};

export default SettingList;
