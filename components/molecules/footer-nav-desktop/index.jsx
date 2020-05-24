import PropTypes from 'prop-types';
import { makeStyles, Grid } from '../../../lib';
import NavLink from '../../atoms/nav-link';
import getStyles from './styles';

const useStyles = makeStyles(getStyles, { name: 'FooterNav' });

/**
 * Basic FooterNav component
 */
const FooterNav = ({ navLinks }) => {
  const { root, linkColumn, navColumnTitle, navText, navLinkItem } = useStyles();

  return (
    <div className={root}>
      <Grid container justify="center" spacing={1}>
        {navLinks.map(({ title, links }) => (
          <Grid item key={title} xs={4}>
            <ul className={linkColumn}>
              <li className={navLinkItem}><h6 className={navColumnTitle}>{title}</h6></li>
              {links.map(({ text, href }) => (
                <li className={navLinkItem} key={text}>
                  <NavLink
                    navTextCustomStyles={navText}
                    hideBorder
                    hideLeftPadding
                    key={text}
                    text={text}
                    href={href}
                  />
                </li>
              ))}
            </ul>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

FooterNav.propTypes = {
  navLinks: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      links: PropTypes.arrayOf(
        PropTypes.shape({ text: PropTypes.string.isRequired, href: PropTypes.string.isRequired }),
      ).isRequired,
    }),
  ),
};

export default FooterNav;
