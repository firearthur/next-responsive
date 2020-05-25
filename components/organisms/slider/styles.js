export default (theme) => ({
  root: {
    width: '100%',
    height: '238px',
    overflow: 'hidden',
    background: theme.palette.customColors.backgroundGrey.light,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  belt: {
    display: 'flex',
  },
  button: {
    position: 'absolute',
    zIndex: 1,
  },
  leftArrow: {
    left: '10px',
  },
  rightArrow: {
    right: '10px',
    transform: 'scaleX(-1)',
  },
});
