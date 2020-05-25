export default theme => {
  const xs = theme.breakpoints.up('xs');
  const sm = theme.breakpoints.up('sm');

  return ({
    root: {
      width: '100%',
      background: theme.palette.customColors.backgroundGrey.main,
    },
    desktopNav: {
      [xs]: {
        display: 'none',
      },
      [sm]: {
        display: 'block',
      },
      display: 'block',
    },
    mobileNav: {
      [xs]: {
        display: 'block',
      },
      [sm]: {
        display: 'none',
      },
      display: 'none',
    },
  });
};
