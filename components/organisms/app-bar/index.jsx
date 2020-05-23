import PropTypes from 'prop-types';
import MuiAppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import MenuIcon from '@material-ui/icons/Menu';
import { makeStyles, IconButton } from '../../../lib';
import getStyles from './styles';
import { useTranslation } from '../../../i18n';

const useStyles = makeStyles(getStyles, { name: 'AppBar' });

/**
 * Main nav bar appearing at the top of the page
 */

const AppBar = ({ onMenuButtonClick, logoPath, color = 'transparent' }) => {
  const { appBar, menuButton, logo } = useStyles();
  const { t: commonT } = useTranslation('common');
  return (
    <MuiAppBar color={color} elevation={0} position="fixed" className={appBar}>
      <Toolbar>
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
      </Toolbar>
    </MuiAppBar>
  );
};

AppBar.getInitialProps = async () => ({
  namespacesRequired: ['common'],
});

AppBar.propTypes = {
  onMenuButtonClick: PropTypes.func,
  logoPath: PropTypes.string.isRequired,
  color: PropTypes.string,
};

export default AppBar;
