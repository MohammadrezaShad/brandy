import PropTypes from 'prop-types';
import IcoMoon from 'react-icomoon';

import iconSet from '@/assets/font/icon/iconmoon';

const IconProvider = ({ ...props }) => <IcoMoon iconSet={iconSet} {...props} />;

IconProvider.propTypes = {
  icon: PropTypes.string.isRequired,
  size: PropTypes.string,
};

export default IconProvider;
