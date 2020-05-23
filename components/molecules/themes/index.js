import { createMuiTheme } from '@material-ui/core/styles';
import colors from '../../atoms/colors';
import typography from '../../atoms/typography';
import dimensions from '../../atoms/dimensions';
import shapes from '../../atoms/shapes';
import spacing from '../../atoms/spacing';

/**
 * This is where style-guide and general theme properties live
 * You can add things like colors typography zIndices etc...
 * Also you can add properties to go with the default theme object by MaterialUI
 * Try to log the theme object in one of the style.js files you'll see
 */
const theme = createMuiTheme({
  palette: colors,
  spacing,
  typography,
  // all your global dimension constants go here
  dimensions,
  shapes,
});

export default theme;
