export default (theme) => ({
  root: {
    width: '288px',
    height: '300px',
    transition: 'top 0.5s ease',
    '&.raiseUpOnHover': {
      position: 'relative',
      top: 0,
    },
    '&:hover': {
      top: '-5px',
    },
  },
  media: {
    height: '164px',
    display: 'flex',
    justifyContent: 'flex-end',
  },
  statsIcon: {
    height: '12px',
    marginRight: theme.spacing(0.5),
  },
  cardContent: {
    paddingBottom: 0,
  },
  avatar: {
    height: '28px',
  },
  overlay: {
    background: theme.palette.customColors.overlayBlue.main,
    color: theme.palette.customColors.textWhite.main,
    height: '100%',
    width: '112px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  playlistCount: {
    fontSize: '2rem',
  },
  playlistTitle: {
    margin: `${theme.spacing(1)} 0`,
    textTransform: 'uppercase',
  },
  avatarContainer: {
    textAlign: 'right',
  },
  cardDescription: {
    marginTop: 0,
    marginBottom: theme.spacing(0.5),
    fontSize: '1.1rem',
  },
  eventName: {},
  buttonsContainer: {
    paddingLeft: theme.spacing(1),
  },
  eventLocation: {},
  eventStats: {
    display: 'flex',
    fontSize: '0.7rem',
  },
  eventTime: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  eventDistance: {
    marginLeft: theme.spacing(1),
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
