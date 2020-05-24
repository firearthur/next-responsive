/* eslint-disable react/forbid-prop-types */
/* eslint-disable react/jsx-props-no-spreading */
import Head from 'next/head';
import { useState } from 'react';
import PropTypes from 'prop-types';
import MainTemplate from '../../templates/main';
import Footer from '../../organisms/footer';
import AppBar from '../../organisms/app-bar';
import {useTranslation} from '../../../i18n';

/**
 * Represents the common page layout and structure
 * @param {array} children of nodes to serve as the content
 * @param {node} customFooter to opt-out of using a the default footer
 * @param {bool} showFooter wether or not to show footer on the page
 * @param {string} title to go as the title of the page (browser tab title)
 * @param {object} appBarProps you'd like to send down to appBar
 * @param {object} footerProps you'd like to send down to footerProps
 */
const MainPage = ({
  children,
  customFooter,
  showFooter = false,
  title = 'iFit',
  appBarProps = {},
  footerProps = {},
}) => {
  const { t: commonT } = useTranslation('common');
  const APP_LOGO_PATH = `${process.env.IMAGE_ASSETS_PATH}/logo.png`;
  const NAV_BAR_LINKS = [
    { text: commonT('appBar/navBar/links/blog'), href: '' },
    { text: commonT('appBar/navBar/links/nourish'), href: '' },
    { text: commonT('appBar/navBar/links/shop'), href: '' },
  ];

  const TOOL_BAR_LINKS = [
    { text: commonT('appBar/toolBar/links/exercise'), href: '' },
    { text: commonT('appBar/toolBar/links/nutrition'), href: '' },
    { text: commonT('appBar/toolBar/links/activity'), href: '' },
    { text: commonT('appBar/toolBar/links/sleep'), href: '' },
  ];

  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <MainTemplate
      head={(
        <Head>
          <title>{title}</title>
          <meta charSet="utf-8" />
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        </Head>
      )}

      navBar={(
        <AppBar
          toolBarLinks={TOOL_BAR_LINKS}
          logoPath={APP_LOGO_PATH}
          navBarLinks={NAV_BAR_LINKS}
          onMenuButtonClick={handleDrawerToggle}
          {...appBarProps}
        />
      )}


      footer={
        showFooter
        && (
          customFooter || <Footer {...footerProps} />
        )
      }
    >
      {children}
    </MainTemplate>
  );
};


export default MainPage;

MainPage.getInitialProps = async () => ({
  namespacesRequired: ['common'],
});

MainPage.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
  customFooter: PropTypes.node,
  showFooter: PropTypes.bool,
  title: PropTypes.string,
  appBarProps: PropTypes.object,
  footerProps: PropTypes.object,
};
