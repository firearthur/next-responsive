import customTheme from '../../molecules/themes';

export default theme => {
  const thm = theme.shapes ? theme : customTheme;

  return ({
    root: {
      '&.hideBorder': {
        border: 'none',
      },
      '&.hideLeftPadding': {
        paddingLeft: 0,
      },
      borderRight: `${thm.shapes.border.nav}${thm.palette.customColors.borderGrey.main}`,
      height: '100%',
      display: 'flex',
      alignItems: 'center',
      padding: `0 ${thm.spacing(3)}`,
    },
    navText: {
      color: thm.palette.customColors.navText.main,
      ...thm.typography.navLink,
    },
  });
};
