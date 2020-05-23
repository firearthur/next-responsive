import PropTypes from 'prop-types';
import Link from 'next/link';
import classNames from 'classnames';
import { makeStyles } from '../../../lib';
import getStyles from './styles';

const useStyles = makeStyles(getStyles, { name: 'NavLink' });

/**
 * Basic NavLink component
 */
const NavLink = ({
  text,
  href = '',
  hideBorder = false,
  hideLeftPadding = false,
}) => {
  const { root, navText } = useStyles();

  return (
    <div className={classNames(root, { hideBorder }, { hideLeftPadding })}>
      <Link href={href}>
        <a className={navText}>{text}</a>
      </Link>
    </div>
  );
};

NavLink.propTypes = {
  text: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
  hideBorder: PropTypes.bool,
  hideLeftPadding: PropTypes.bool,
};


export default NavLink;
