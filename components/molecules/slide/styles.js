export default theme => {
  const sm = theme.breakpoints.up('sm');
  const xs = theme.breakpoints.up('xs');
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
