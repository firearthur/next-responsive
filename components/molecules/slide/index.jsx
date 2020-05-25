import PropTypes from 'prop-types';
import { makeStyles } from '../../../lib';
import getStyles from './styles';

const useStyles = makeStyles(getStyles, { name: 'Slide' });

/**
 * Basic slide component
 */
const Slide = ({
  width, leftRightMargin, children, index, indexToShrink, indexToGrow,
}) => {
  const { root } = useStyles();

  return (
    <div
      style={{
        width: index === indexToShrink ? '0px' : index === indexToGrow ? (width * 2) + 10 : width,
        marginLeft: leftRightMargin,
        marginRight: leftRightMargin,
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
