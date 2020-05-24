export default theme => {
  const xs = theme.breakpoints.up('xs');
  const sm = theme.breakpoints.up('sm');
  return ({
    root: {
      boxShadow: theme.shapes.boxShadow.card,
      borderRadius: theme.shapes.radius.card,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    image: {
      width: '180px',
      height: '228px',
    },
    titleText: {
      fontSize: '1.5rem',
      color: theme.palette.customColors.titleGrey.main,
    }
  });
};
