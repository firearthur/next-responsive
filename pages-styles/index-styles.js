export default theme => {
  const xs = theme.breakpoints.up('xs');
  const sm = theme.breakpoints.up('sm');

  return ({
    paragraph: {
      margin: 0,
    },
    icons: {
      color: theme.palette.customColors.foregroundBlueGrey.main,
      fontSize: '2rem',
    },
    hero: {
      [xs]: {
        backgroundSize: '100% 100%',
      },
      backgroundImage: `url("${process.env.IMAGE_ASSETS_PATH}/hero-background.png")`,
      backgroundColor: theme.palette.customColors.backgroundGrey.main,
      height: '800px',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
    gridContainer: {
      width: '100%',
      display: 'flex',
      justifyContent: 'center',
      marginTop: theme.spacing(2),
      marginBottom: theme.spacing(3),
    },
    gridWrapper: {
      width: '90%',
    },
    equipmentContainer: {
      marginTop: theme.spacing(2),
      marginBottom: theme.spacing(3),
      padding: `0 ${theme.spacing(1)}`,
    },
    equipmentsTitle: {
      textAlign: 'center',
      fontSize: '1.5rem',
      color: theme.palette.customColors.titleGrey.main,
    },
    heroParagraph: {
      color: theme.palette.customColors.textWhite.main,
      textAlign: 'center',
      ...theme.typography.hero,
      [xs]: {
        fontSize: '3rem',
        lineHeight: '4rem',
        padding: `0 ${theme.spacing(2)}`,
        marginTop: '-80px',
      },
      [sm]: {
        ...theme.typography.hero,
      },
    },
    heroContent: {
      width: '985px',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
    },
    joinButton: {
      '&:hover': {
        background: theme.palette.customColors.buttonHoverPrimary.main,
      },
      [xs]: {
        width: '192px',
        height: '46px',
      },
      [sm]: {
        width: '392px',
        height: '56px',
      },
      width: '392px',
      height: '56px',
      background: theme.palette.primary.main,
      color: theme.palette.customColors.textWhite.main,
    },
  });
};
