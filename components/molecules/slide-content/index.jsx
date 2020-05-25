import PropTypes from 'prop-types';
import { makeStyles } from '../../../lib';
import getStyles from './styles';

const useStyles = makeStyles(getStyles, { name: 'SlideContent' });

/**
 * Basic Slide Content component
 */
const SlideContent = ({
  headerIconUrl,
  headerIconAlt,
  text,
}) => {
  const { root, slideText } = useStyles();

  return (
    <div className={root}>
      <h5><img src={headerIconUrl} alt={headerIconAlt} /></h5>
      <p className={slideText}>{text}</p>
    </div>
  );
};

SlideContent.propTypes = {
  headerIconAlt: PropTypes.string,
  headerIconUrl: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};


export default SlideContent;
