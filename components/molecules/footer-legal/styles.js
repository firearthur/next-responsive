export default theme => {
  const xs = theme.breakpoints.up('xs');
  const sm = theme.breakpoints.up('sm');
  return ({
    root: {
      background: 'transparent',
      color: theme.palette.customColors.textWhite.main,
      [xs]: {
        height: 'auto',
      },
      [sm]: {
        height: '64px',
      },
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
      [xs]: {
        flexWrap: 'wrap',
      },
      [sm]: {
        flexWrap: 'nowrap',
      },
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
    languageDropdown: {
      [xs]: {
        position: 'static',
        borderBottom: `${theme.shapes.border.nav}${theme.palette.customColors.borderGrey.main}`,
        textAlign: 'center',
      },
      [sm]: {
        position: 'absolute',
        left: theme.spacing(2),
        borderBottom: 'none',
      },
      position: 'absolute',
      left: theme.spacing(2),
      borderBottom: 'none',
    },
    languageDropdownRoot: {
      color: theme.palette.customColors.textWhite.main,
    },
    navRoot: {
      [xs]: {
        flexBasis: '50%',
        paddingRight: 0,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: theme.spacing(1),
        paddingBottom: theme.spacing(1),
      },
      [sm]: {
        flexBasis: 'auto',
        paddingRight: theme.spacing(3),
        paddingTop: 0,
        paddingBottom: 0,
      },
    },
    navRootFullRow: {
      [xs]: {
        flexBasis: '100%',
        paddingRight: 0,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: theme.spacing(1),
        paddingBottom: theme.spacing(1),
      },
      [sm]: {
        flexBasis: 'auto',
        paddingRight: theme.spacing(3),
        paddingTop: 0,
        paddingBottom: 0,
      },
    },
    legalLinks: {
      color: theme.palette.customColors.textWhite.main,
      textTransform: 'none',
      fontSize: '1rem',
    },
  });
};
