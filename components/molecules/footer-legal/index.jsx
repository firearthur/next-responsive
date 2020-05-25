import PropTypes from 'prop-types';
import { makeStyles, Grid } from '../../../lib';
import NavLink from '../../atoms/nav-link';
import Dropdown from '../../organisms/dropdown';
import getStyles from './styles';

const useStyles = makeStyles(getStyles, { name: 'FooterLegal' });

/**
 * Basic FooterLegal component
 */
const FooterLegal = ({ links, languageOptions, languageChangeHandler, currentLanguage }) => {
  const {
    root,
    legalLinksContainer,
    languageDropdown,
    legalLinks,
    navRoot,
    navRootFullRow,
    languageDropdownRoot,
  } = useStyles();
  return (
    <Grid container justify="center" alignItems="center" className={root}>
      <Grid className={languageDropdown} item xs={12}>
        <Dropdown
          classesOverride={{
            root: languageDropdownRoot,
            icon: languageDropdownRoot,
          }}
          initialSelection={currentLanguage}
          options={languageOptions}
          onChange={languageChangeHandler}
        />
      </Grid>
      <Grid item xs={12}>
        <div className={legalLinksContainer}>
          {links.map(({ text, href }, i) => (
            <NavLink
              rootCustomStyles={i === 0 ? navRootFullRow : navRoot}
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
