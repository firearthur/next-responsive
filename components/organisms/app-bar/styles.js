export default (theme) => ({
  appBar: {
    width: '100%',
    zIndex: theme.zIndex.drawer + 1,
    borderBottom: `${theme.shapes.border.nav}${theme.palette.customColors.borderGrey.main}`,
    background: theme.palette.customColors.backgroundWhite.main,
    color: theme.palette.customColors.navText.main,
  },
  toolBar: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  midNav: {
    display: 'flex',
  },
  signUpButton: {
    '&:hover': {
      color: theme.palette.customColors.navText.main,
    },
    background: theme.palette.primary.main,
    color: theme.palette.customColors.textWhite.main,
  },
  logo: {
    [theme.breakpoints.up('xs')]: {
      height: '12px',
    },
    [theme.breakpoints.up('sm')]: {
      height: '24px',
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
});
