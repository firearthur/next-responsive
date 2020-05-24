export default theme => {
  const xs = theme.breakpoints.up('xs');
  const sm = theme.breakpoints.up('sm');
  return ({
    root: {
      textAlign: 'center',
      background: 'transparent',
      borderTop: `${theme.shapes.border.nav}${theme.palette.customColors.borderGrey.main}`,
      borderBottom: `${theme.shapes.border.nav}${theme.palette.customColors.borderGrey.main}`,
    },
    mediaList: {
      listStyle: 'none',
      padding: 0,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
    navLinkRoot: {
      [xs]: {
        paddingRight: theme.spacing(1),
      },
      [sm]: {
        paddingRight: theme.spacing(3),
      },
    },
  });
};
