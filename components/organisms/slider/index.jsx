import PropTypes from 'prop-types';
import { useState } from 'react';
import classNames from 'classnames';
import Slide from '../../molecules/slide';
import SlideContent from '../../molecules/slide-content';
import { makeStyles, IconButton } from '../../../lib';
import getStyles from './styles';

const useStyles = makeStyles(getStyles, { name: 'Slider' });

/**
 * Returns an array guaranteed to have a least number of elements
 * @param {array} array to be padded
 * @param {number} minToPad least number of elements to be guaranteed to have
 */
export const getPaddedArray = (array, minToPad = 7) => {
  let paddedSlides = [];
  if (!array || !Array.isArray(array)) {
    console.warn('Bad input passed to getPaddedArray!', array);
    return paddedSlides;
  }

  if (array.length >= minToPad) {
    return array;
  }

  paddedSlides = [...array];

  for (let i = 0; i < minToPad - array.length; i++) {
    paddedSlides.push(array[i % array.length]);
  }

  return paddedSlides;
};

/**
 * Basic Slider component
 */
const Slider = ({
  slideWidth,
  slideLeftRightMargin,
  slidesData,
  onLeftClicked,
  onRightClicked,
  buttonIconPath,
}) => {
  const {
    root, belt, button, leftArrow, rightArrow,
  } = useStyles();
  const [factor, setFactor] = useState(0);

  const handleLeftClicked = e => {
    setFactor(factor + 1);

    typeof onLeftClicked === 'function' && onLeftClicked(e);
  };

  const handleRightClicked = e => {
    setFactor(factor - 1);
    typeof onRightClicked === 'function' && onRightClicked(e);
  };

  const slideWidthWithMargins = (slideWidth + slideLeftRightMargin * 2);

  const beltWidth = (slidesData.length + 1) * slideWidthWithMargins;
  return (
    <div className={root}>
      <IconButton
        className={classNames(leftArrow, button)}
        onClick={handleLeftClicked}
        type="button"
      >
        <img src={buttonIconPath} alt="" />
      </IconButton>
      <div
        style={{
          width: `${beltWidth}px`,
        }}
        className={belt}
      >

        {slidesData.map(({
          headerIconUrl, headerIconAlt, text,
        }, i) => (
          <Slide
            style={{ left: `${factor * slideWidthWithMargins > beltWidth ? 0 : factor * slideWidthWithMargins}px` }}
            leftRightMargin={`${slideLeftRightMargin}px`}
            key={i}
          >
            <SlideContent text={text} headerIconAlt={headerIconAlt} headerIconUrl={headerIconUrl} />
          </Slide>
        ))}
      </div>
      <IconButton
        className={classNames(rightArrow, button)}
        onClick={handleRightClicked}
        type="button"
      >
        <img src={buttonIconPath} alt="" />
      </IconButton>
    </div>
  );
};

Slider.propTypes = {
  slideWidth: PropTypes.number.isRequired,
  slideLeftRightMargin: PropTypes.number.isRequired,
  onLeftClicked: PropTypes.func,
  onRightClicked: PropTypes.func,
  slidesData: PropTypes.arrayOf(
    PropTypes.shape({
      headerIconUrl: PropTypes.string,
      headerIconAlt: PropTypes.string,
      text: PropTypes.string,
    }),
  ).isRequired,
};

export default Slider;
