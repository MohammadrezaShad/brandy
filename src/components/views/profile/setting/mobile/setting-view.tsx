import Logo from '@/assets/vectors/Logo.svg';
import PageHead from '@/shared/page-head';

import SettingList from './setting-list';
import * as S from './setting-view.styled';

const SettingView = () => (
  <S.Wrap>
    <PageHead>تنظیمات</PageHead>

    <S.List>
      <SettingList />
    </S.List>
    <S.LogoWrap>
      <Logo />
    </S.LogoWrap>
  </S.Wrap>
);

export default SettingView;
