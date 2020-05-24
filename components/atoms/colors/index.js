import {
  red, lightBlue, blueGrey,
} from '@material-ui/core/colors';

/**
 * Here is where style guide colors would go
 * Prefer to go with default MUI colors @see https://material-ui.com/customization/color/
 * primary - primary interface elements for a user.
 * secondary - secondary interface elements for a user.
 * error - interface elements that the user should be made aware of.
 * warning - potentially dangerous actions or important messages.
 * info - information to the user that is neutral and not necessarily important.
 * success - indicate the successful completion of an action that user triggered.
 */

export const COLORS_CONSTANTS = {
  white: '#fff',
};

export default {
  primary: {
    // these are here as an example in case we want to use dark or light themes
    // light: '#757ce8',
    // dark: '#002884',
    // contrastText: '#fff',
    main: '#0069d2',
  },
  secondary: {
    main: lightBlue[900],
  },
  error: {
    main: red.A400,
  },
  customColors: {
    borderGrey: {
      main: '#d5d6d6',
    },
    navText: {
      main: 'rgba(46,49,52,0.8)',
    },
    backgroundGrey: {
      main: '#2e3134',
    },
    overlayBlue: {
      main: 'rgba(0,12,40,0.54)',
    },
    backgroundWhite: {
      main: COLORS_CONSTANTS.white,
    },
    textWhite: {
      main: COLORS_CONSTANTS.white,
    },
    titleGrey: {
      main: '#2e3134',
    },
    foregroundBlueGrey: {
      main: blueGrey[200],
    },
  },
};
