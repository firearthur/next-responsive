import PropTypes from 'prop-types';
import { useState } from 'react';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import classNames from 'classnames';
import ListItem from '@material-ui/core/ListItem';
import MuiAppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Drawer from '@material-ui/core/Drawer';
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
  navBarLinks, toolBarLinks, onMenuButtonClick, logoPath, hideNavBar,
}) => {
  const {
    appBar, menuButton, logo, midNav, signUpButtonMobile, signUpButton, mobileSignUpContainer, toolBar, navBar,
  } = useStyles();
  const { t: commonT } = useTranslation('common');
  const [drawerOpen, setDrawerOpen] = useState(false);

  const menuButtonHandler = (e) => {
    if (e.type === 'keydown' && (e.key === 'Tab' || e.key === 'Shift')) {
      return;
    }

    setDrawerOpen(true);
    typeof onMenuButtonClick === 'function' && onMenuButtonClick(e);
  };

  const closeDrawer = (e) => {
    if (e.type === 'keydown' && (e.key === 'Tab' || e.key === 'Shift')) {
      return;
    }

    setDrawerOpen(false);
  };

  return (
    <MuiAppBar elevation={0} position="fixed" className={appBar}>
      <Drawer anchor="left" open={drawerOpen} onClose={closeDrawer}>
        <List>
          <ListItem className={mobileSignUpContainer}>
            <Button className={signUpButtonMobile}>{commonT('appBar/button/text/signUp')}</Button>
          </ListItem>
          <Divider />
          {navBarLinks.map(({text, href}) => (
            <ListItem button key={text}>
              <NavLink hideLeftPadding hideBorder key={text} text={text} href={href} />
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          {toolBarLinks.map(({ text, href }) => (
            <ListItem button key={text}>
              <NavLink hideLeftPadding hideBorder key={text} text={text} href={href} />
            </ListItem>
          ))}
        </List>
      </Drawer>
      <NavBar className={classNames({hideNavBar}, navBar)} links={navBarLinks} />
      <Toolbar className={toolBar}>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="start"
          className={menuButton}
          onClick={menuButtonHandler}
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
