export default theme => {
  const xs = theme.breakpoints.up('xs');
  const sm = theme.breakpoints.up('sm');
  return ({
    root: {
      background: 'transparent',
      color: theme.palette.customColors.textWhite.main,
      height: '64px',
      width: '100%',
      // [xs]: {
      //   width: '220px',
      // },
      // [sm]: {
      //   width: '440px',
      // },
    },
    legalLinksContainer: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
    languageDropdown: {
      position: 'absolute',
      left: theme.spacing(2),
    },
    legalLinks: {
      color: theme.palette.customColors.textWhite.main,
      textTransform: 'none',
      fontSize: '1rem',
    },
  });
};
