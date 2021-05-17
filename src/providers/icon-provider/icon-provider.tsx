import IcoMoon from 'react-icomoon';

import iconSet from '@/assets/font/icon/iconmoon.json';

const IconProvider = ({...props}) => <IcoMoon iconSet={iconSet} {...props} />;

export default IconProvider;
