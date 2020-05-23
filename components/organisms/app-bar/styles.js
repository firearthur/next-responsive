export default (theme) => ({
  appBar: {
    width: '100%',
    zIndex: theme.zIndex.drawer + 1,
  },
  logo: {
    [theme.breakpoints.up('xs')]: {
      height: '36px',
    },
    [theme.breakpoints.up('sm')]: {
      height: '50px',
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
});
