export default (theme) => {
  const xs = theme.breakpoints.up('xs');
  const sm = theme.breakpoints.up('sm');

  return ({
    appBar: {
      width: '100vw',
      zIndex: theme.zIndex.drawer + 1,
      borderBottom: `${theme.shapes.border.nav}${theme.palette.customColors.borderGrey.main}`,
      background: theme.palette.customColors.backgroundWhite.main,
      color: theme.palette.customColors.navText.main,
    },
    toolBar: {
      display: 'flex',
      justifyContent: 'space-between',
      ...theme.customMixins.toolBar,
    },
    midNav: {
      [xs]: {
        display: 'none',
      },
      [sm]: {
        display: 'flex',
      },
      display: 'flex',
    },
    navBar: {
      [xs]: {
        display: 'none',
      },
      [sm]: {
        display: 'flex',
      },
      '&.hideNavBar': {
        display: 'none',
      },
    },
    signUpButton: {
      '&:hover': {
        background: theme.palette.customColors.buttonHoverPrimary.main,
      },
      background: theme.palette.primary.main,
      color: theme.palette.customColors.textWhite.main,
      [xs]: {
        visibility: 'hidden',
      },
      [sm]: {
        visibility: 'visible',
      },
    },
    signUpButtonMobile: {
      '&:hover': {
        background: theme.palette.customColors.buttonHoverPrimary.main,
      },
      background: theme.palette.primary.main,
      color: theme.palette.customColors.textWhite.main,
    },
    mobileSignUpContainer: {
      justifyContent: 'center',
    },
    logo: {
      [xs]: {
        height: '12px',
      },
      [sm]: {
        height: '24px',
      },
    },
    menuButton: {
      marginRight: theme.spacing(2),
      [sm]: {
        display: 'none',
      },
    },
  });
};
