export default theme => {
  const xs = theme.breakpoints.up('xs');
  const sm = theme.breakpoints.up('sm');
  return ({
    root: {
      transition: 'width .5s linear',
      width: '440px',
      height: '184px',
      background: theme.palette.customColors.backgroundWhite.main,
      boxShadow: theme.shapes.boxShadow.card,
      // [xs]: {
      //   width: '220px',
      // },
      // [sm]: {
      //   width: '440px',
      // },
    },
  });
};
