export default theme => {
  const sm = theme.breakpoints.up('sm');
  const xs = theme.breakpoints.up('xs');
  const xsAndLandscape = `${theme.breakpoints.up('xs')} and (orientation: landscape)`;
  return ({
    root: {
      background: theme.palette.customColors.backgroundWhite.main,
    },
    contentContainer: {
      display: 'flex',
      [xs]: {
        minHeight: `calc(100vh - ${theme.mixins.toolbar.minHeight}px)`,
      },
      [xsAndLandscape]: {
        minHeight: `calc(100vh - ${theme.mixins.toolbar[xsAndLandscape].minHeight}px)`,
      },
      [sm]: {
        minHeight: `calc(100vh - ${theme.mixins.toolbar[sm].minHeight}px)`,
      },
    },
    toolbar: {
      minHeight: `${theme.dimensions.height.navBar + theme.dimensions.height.toolBar}px`
    },
    content: {
      flexGrow: 1,
    },
  });
};
