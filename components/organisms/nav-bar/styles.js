export default theme => ({
  root: {
    height: theme.dimensions.height.navBar,
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    borderBottom: `${theme.shapes.border.nav}${theme.palette.customColors.borderGrey.main}`,
  },
});
