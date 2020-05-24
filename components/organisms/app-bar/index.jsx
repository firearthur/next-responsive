import PropTypes from 'prop-types';
import MuiAppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import MenuIcon from '@material-ui/icons/Menu';
import { makeStyles, IconButton, Button } from '../../../lib';
import getStyles from './styles';
import NavLink from '../../atoms/nav-link';
import NavBar from '../nav-bar';
import { useTranslation } from '../../../i18n';

const useStyles = makeStyles(getStyles, { name: 'AppBar' });

/**
 * Main nav bar appearing at the top of the page
 */

const AppBar = ({
  navBarLinks, toolBarLinks, onMenuButtonClick, logoPath, hideNavBar
}) => {


  const { appBar, menuButton, logo, midNav, signUpButton, toolBar, navBar } = useStyles();
  const { t: commonT } = useTranslation('common');
  return (
    <MuiAppBar elevation={0} position="fixed" className={appBar}>
      <NavBar className={navBar} links={navBarLinks} />
      <Toolbar className={toolBar}>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="start"
          className={menuButton}
          onClick={onMenuButtonClick}
        >
          <MenuIcon />
        </IconButton>
        <img className={logo} src={logoPath} alt={commonT('appBar/logo/alt/navBarLogoDescription')} />
        <div className={midNav}>
          {toolBarLinks.map(({ text, href }) => (
            <NavLink hideLeftPadding hideBorder key={text} text={text} href={href} />
          ))}
        </div>
        <Button className={signUpButton}>{commonT('appBar/button/text/signUp')}</Button>
      </Toolbar>
    </MuiAppBar>
  );
};

AppBar.getInitialProps = async () => ({
  namespacesRequired: ['common'],
});

AppBar.propTypes = {
  navBarLinks: PropTypes.arrayOf(
    PropTypes.shape({
      href: PropTypes.string,
      text: PropTypes.string,
    }),
  ).isRequired,
  toolBarLinks: PropTypes.arrayOf(
    PropTypes.shape({
      href: PropTypes.string,
      text: PropTypes.string,
    }),
  ).isRequired,
  onMenuButtonClick: PropTypes.func,
  logoPath: PropTypes.string.isRequired,
};

export default AppBar;
