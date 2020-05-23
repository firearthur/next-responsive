export default theme => {
  const sm = theme.breakpoints.up('sm');
  const xs = theme.breakpoints.up('xs');
  return ({
    root: {
      [sm]: {
        width: '440px',
      },
      [xs]: {
        width: '220px',
      },
    },
  });
};
