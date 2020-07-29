import React from 'react';
import NavLink from '.';

const styles = {
  link: {
    color: '#eee',
    textTransform: 'none',
    fontSize: '1rem',
  },
};

export const NavLinkStory = () => (
  <NavLink
    navTextCustomStyles={styles.link}
    hideBorder
    hideLeftPadding
    text="Home"
    href=""
  />
);

export default { title: 'NavLink' };
