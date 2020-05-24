import PropTypes from 'prop-types';
import { makeStyles } from '../../../lib';
import getStyles from './styles';

const useStyles = makeStyles(getStyles, { name: 'FooterNav' });

/**
 * Basic FooterNav component
 */
const FooterNav = ({
  width,
  leftRightMargin,
  children,
}) => {
  const { root } = useStyles();

  return (
    <div style={{ width, marginLeft: leftRightMargin, marginRight: leftRightMargin }} className={root}>
      {children}
    </div>
  );
};

FooterNav.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  width: PropTypes.string.isRequired,
  leftRightMargin: PropTypes.string.isRequired,
};


export default FooterNav;
