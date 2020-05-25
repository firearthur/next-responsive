export default theme => ({
  root: {
    '&.hideBorder': {
      border: 'none',
    },
    '&.hideLeftPadding': {
      paddingLeft: 0,
    },
    borderRight: `${theme.shapes.border.nav}${theme.palette.customColors.borderGrey.main}`,
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    padding: `0 ${theme.spacing(3)}`,
  },
  navText: {
    color: theme.palette.customColors.navText.main,
    ...theme.typography.navLink,
  },
});
