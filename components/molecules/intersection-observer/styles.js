export default theme => {
  const xs = theme.breakpoints.up('xs');
  const sm = theme.breakpoints.up('sm');
  return ({
    root: {
      width: '100%',
      height: 0,
      background: 'transparent',
    },
  });
};
