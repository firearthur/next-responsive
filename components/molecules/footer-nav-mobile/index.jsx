import PropTypes from 'prop-types';
import classNames from 'classnames';
import { makeStyles, Grid } from '../../../lib';
import ChevronCollapse from '../chevron-collapse';
import NavLink from '../../atoms/nav-link';
import getStyles from './styles';

const useStyles = makeStyles(getStyles, { name: 'FooterNav' });

/**
 * Basic FooterNav component
 */
const FooterNav = ({ navLinks, className }) => {
  const {
    root, linkColumn, navLinkRoot, navText, navLinkItem, collapseContainer,
  } = useStyles();

  return (
    <div className={classNames(className, root)}>
      {navLinks.map(({ title, links }, i) => (
        <ChevronCollapse key={title} className={(i !== navLinks.length - 1) ? collapseContainer : ''} title={title}>
          <ul className={linkColumn}>
            {links.map(({ text, href }) => (
              <li className={navLinkItem} key={text}>
                <NavLink
                  rootCustomStyles={navLinkRoot}
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
        </ChevronCollapse>
      ))}
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
