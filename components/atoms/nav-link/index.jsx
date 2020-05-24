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
  navTextCustomStyles,
  iconPath,
  iconTitle,
}) => {
  const { root, navText } = useStyles();

  return (
    <div className={classNames(root, { hideBorder }, { hideLeftPadding })}>
      <Link href={href}>
        <a className={classNames(navTextCustomStyles, navText)}>
          {text}
          { iconPath && <img src={iconPath} alt={iconTitle} />}
        </a>
      </Link>
    </div>
  );
};

NavLink.propTypes = {
  text: PropTypes.string,
  href: PropTypes.string.isRequired,
  navTextCustomStyles: PropTypes.string,
  hideBorder: PropTypes.bool,
  iconPath: PropTypes.string,
  iconTitle: PropTypes.string,
  hideLeftPadding: PropTypes.bool,
};


export default NavLink;
