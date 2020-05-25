export default theme => {
  const sm = theme.breakpoints.up('sm');
  const xs = theme.breakpoints.up('xs');
  return ({
    root: {
      // [sm]: {
      //   width: '440px',
      // },
      // [xs]: {
      //   width: '220px',
      // },
      width: '100%',
      height: '100%',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'column',
    },
    slideText: {
      width: '360px',
      textAlign: 'center',
    },
  });
};
