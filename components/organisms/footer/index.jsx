import PropTypes from 'prop-types';
import { makeStyles } from '../../../lib';
import FooterNavDesktop from '../../molecules/footer-nav-desktop';
import FooterNavMobile from '../../molecules/footer-nav-mobile';
import FooterSocial from '../../molecules/footer-social';
import FooterLegal from '../../molecules/footer-legal';
import getStyles from './styles';

const useStyles = makeStyles(getStyles, { name: 'Footer' });

/**
 * Basic Footer component
 */
const Footer = ({
  navLinks,
  socialLinks,
  legalLinks,
}) => {
  const { root, desktopNav, mobileNav } = useStyles();

  return (
    <footer className={root}>
      <FooterNavDesktop className={desktopNav} navLinks={navLinks} />
      {/* <FooterNavMobile className={mobileNav} navLinks={navLinks} /> */}
      <FooterSocial links={socialLinks} />
      <FooterLegal links={legalLinks} />
    </footer>
  );
};

Footer.propTypes = {
  navLinks: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    links: PropTypes.arrayOf(PropTypes.shape(
      {text: PropTypes.string.isRequired, href: PropTypes.string.isRequired}
    )).isRequired,
  })),
  socialLinks: PropTypes.arrayOf(PropTypes.shape({
    iconPath: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    href: PropTypes.string.isRequired,
  })),
  legalLinks: PropTypes.arrayOf(PropTypes.shape({
    text: PropTypes.string.isRequired,
    href: PropTypes.string.isRequired,
  })),
};


export default Footer;
