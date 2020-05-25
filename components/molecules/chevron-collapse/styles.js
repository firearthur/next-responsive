export default theme => ({
  root: {
    width: '100%',
    background: theme.palette.customColors.backgroundGrey.main,
  },
  collapseTitle: {
    margin: 0,
    paddingRight: theme.spacing(1),
  },
  titleContainer: {
    padding: theme.spacing(1),
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconContainer: {
    height: '24px',
    width: '24px',
    padding: 0,
  },
  flipped: {
    transform: 'scaleY(-1)',
  },
});
