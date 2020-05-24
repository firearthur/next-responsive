export default theme => {
  const xs = theme.breakpoints.up('xs');
  const sm = theme.breakpoints.up('sm');
  return ({
    root: {
      transition: 'width .5s linear',
      background: 'red',
      // [xs]: {
      //   width: '220px',
      // },
      // [sm]: {
      //   width: '440px',
      // },
    },
  });
};
