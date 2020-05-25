export default theme => {
  const xs = theme.breakpoints.up('xs');
  const sm = theme.breakpoints.up('sm');
  return ({
    root: {
      background: 'transparent',
      color: theme.palette.customColors.textWhite.main,
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
    },
    navLinkRoot: {
      justifyContent: 'center',
      padding: 0,
    },
    collapseContainer: {
      borderBottom: `${theme.shapes.border.nav}${theme.palette.customColors.borderGrey.main}`,
    },
  });
};
