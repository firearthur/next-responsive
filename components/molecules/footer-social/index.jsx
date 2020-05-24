import PropTypes from 'prop-types';
import { makeStyles } from '../../../lib';
import NavLink from '../../atoms/nav-link';
import getStyles from './styles';

const useStyles = makeStyles(getStyles, { name: 'FooterSocial' });

/**
 * Basic FooterSocial component
 */
const FooterSocial = ({ links }) => {
  const { root, mediaList, listItem, navLinkRoot } = useStyles();

  return (
    <div className={root}>
      <ul className={mediaList}>
        {links.map(({ iconPath, title, href }) => (
          <li key={title} className={listItem}>
            <NavLink
              rootCustomStyles={navLinkRoot}
              iconTitle={title}
              iconPath={iconPath}
              href={href}
              hideLeftPadding
              hideBorder
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

FooterSocial.propTypes = {
  links: PropTypes.arrayOf(
    PropTypes.shape({
      iconPath: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      href: PropTypes.string.isRequired,
    }),
  ),
};

export default FooterSocial;
