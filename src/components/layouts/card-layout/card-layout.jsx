import { DeviceTypes } from '@/constants/device-types';
import DesktopMainLayout from '@/layouts/card-layout/client';
import MobileMainLayout from '@/layouts/card-layout/mobile';

const CardLayout = ({ children, deviceType }) =>
  deviceType === DeviceTypes.MOBILE ? (
    <MobileMainLayout>{children}</MobileMainLayout>
  ) : (
    <DesktopMainLayout>{children}</DesktopMainLayout>
  );

export const getCardLayout = (page, deviceType) => <CardLayout deviceType={deviceType}>{page}</CardLayout>;

export default CardLayout;
