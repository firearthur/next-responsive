import PropTypes from 'prop-types';
import { makeStyles } from '../../../lib';
import getStyles from './styles';

const useStyles = makeStyles(getStyles, { name: 'BasicCard' });

/**
 * Basic BasicCard component
 */
const BasicCard = ({
  imgPath,
  imgDescription,
  title,
}) => {
  const { root, image, titleText } = useStyles();

  return (
    <div className={root}>
      <img className={image} src={imgPath} alt={imgDescription} />
      <h3 className={titleText}>{title}</h3>
    </div>
  );
};

BasicCard.propTypes = {
  title: PropTypes.any,
  imgDescription: PropTypes.any,
  imgPath: PropTypes.any
};


export default BasicCard;
