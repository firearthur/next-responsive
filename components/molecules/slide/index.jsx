import PropTypes from 'prop-types';
import { makeStyles } from '../../../lib';
import getStyles from './styles';

const useStyles = makeStyles(getStyles, { name: 'Slide' });

/**
 * Basic slide component
 */
const Slide = ({
  width, leftRightMargin, children, index, indexToShrink, indexToGrow, style
}) => {
  const { root } = useStyles();

  return (
    <div
      style={{
        width,
        marginLeft: leftRightMargin,
        marginRight: leftRightMargin,
        ...style,
      }}
      className={root}
    >
      {children}
    </div>
  );
};

Slide.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
  width: PropTypes.number,
  leftRightMargin: PropTypes.string.isRequired,
};

export default Slide;
