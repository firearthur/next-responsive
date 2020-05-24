import PropTypes from 'prop-types';
import { makeStyles, Grid } from '../../../lib';
import NavLink from '../../atoms/nav-link';
import getStyles from './styles';

const useStyles = makeStyles(getStyles, { name: 'FooterLegal' });

/**
 * Basic FooterLegal component
 */
const FooterLegal = ({
  links,
}) => {
  const {
    root, legalLinksContainer, languageDropdown, legalLinks,
  } = useStyles();
  return (
    <Grid container justify="center" alignItems="center" className={root}>
      <div className={languageDropdown}>English</div>
      <Grid item xs={12}>
        <div className={legalLinksContainer}>
          {links.map(({ text, href }) => (
            <NavLink
              navTextCustomStyles={legalLinks}
              hideBorder
              hideLeftPadding
              key={text}
              text={text}
              href={href}
            />
          ))}
        </div>
      </Grid>
    </Grid>
  );
};

FooterLegal.propTypes = {
  links: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string.isRequired,
      href: PropTypes.string.isRequired,
    }),
  ),
};


export default FooterLegal;
