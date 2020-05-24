export default theme => ({
  paragraph: {
    margin: 0,
  },
  icons: {
    color: theme.palette.customColors.foregroundBlueGrey.main,
    fontSize: '2rem',
  },
  hero: {
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
  },
  gridWrapper: {
    width: '90%',
  },
  equipmentContainer: {
    marginTop: theme.spacing(2),
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
      color: theme.palette.customColors.navText.main,
    },
    width: '392px',
    height: '56px',
    background: theme.palette.primary.main,
    color: theme.palette.customColors.textWhite.main,
  }
});
