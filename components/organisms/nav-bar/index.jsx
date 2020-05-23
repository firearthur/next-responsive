import PropTypes from 'prop-types';
import NavLink from '../../atoms/nav-link';
import { makeStyles } from '../../../lib';
import getStyles from './styles';

const useStyles = makeStyles(getStyles, { name: 'NavBar' });

/**
 * Basic NavBar component
 */
const NavBar = ({
  links,
}) => {
  const { root } = useStyles();

  return (
    <nav className={root}>
      {links.map(({ text, href }) => <NavLink key={text} text={text} href={href} />)}
    </nav>
  );
};

NavBar.propTypes = {
  links: PropTypes.arrayOf(
    PropTypes.shape({
      href: PropTypes.string,
      text: PropTypes.string,
    }),
  ).isRequired,
};


export default NavBar;
