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
  const { root } = useStyles();

  return (
    <>
      <h5><img src={headerIconUrl} alt={headerIconAlt} /></h5>
      <p>{text}</p>
    </>
  );
};

SlideContent.propTypes = {
  headerIconAlt: PropTypes.string,
  headerIconUrl: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};


export default SlideContent;
