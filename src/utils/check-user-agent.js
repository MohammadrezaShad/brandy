import { DeviceTypes } from '@/constants/device-types';

const CheckUserAgent = (userAgent) => {
  const regex = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i;

  if (regex.test(userAgent)) {
    return DeviceTypes.MOBILE;
  }

  return DeviceTypes.DESKTOP;
};

export default CheckUserAgent;
