export default theme => {
  const xs = theme.breakpoints.up('xs');
  const sm = theme.breakpoints.up('sm');
  return ({
    root: {
      padding: `${theme.spacing(3)} ${theme.spacing(16)}`,
      background: 'transparent',
      color: theme.palette.customColors.textWhite.main,
      // [xs]: {
      //   width: '220px',
      // },
      // [sm]: {
      //   width: '440px',
      // },
    },
    navColumnTitle: {
      fontSize: '1rem',
      margin: 0,
    },
    navText: {
      color: theme.palette.customColors.textWhite.main,
      textTransform: 'none',
    },
    linkColumn: {
      listStyle: 'none',
      padding: 0,
    },
    navLinkItem: {
      paddingBottom: theme.spacing(1),
    }
  });
};
