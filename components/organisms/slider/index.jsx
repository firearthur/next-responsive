import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import classNames from 'classnames';
import Slide from '../../molecules/slide';
import SlideContent from '../../molecules/slide-content';
import { makeStyles, IconButton } from '../../../lib';
import getStyles from './styles';

const useStyles = makeStyles(getStyles, { name: 'Slider' });

/**
 * Returns an array guaranteed to have a least number of elements (duplicates elements to pad)
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
  children,
}) => {

  const { root, belt, button, leftArrow, rightArrow } = useStyles();
  const [factor, setFactor] = useState(0);
  const [viewWidth, setViewWidth] = useState(0);
  const [slides] = useState(() => getPaddedArray(slidesData));

  /**
   * Sets the view port width value
   */
  const setClientWidth = () => {
    const clientWidth = document.documentElement.clientWidth || window.innerWidth;
    setViewWidth(clientWidth);
  };

  // this runs only once kinda like componentDidMount @see https://reactjs.org/docs/hooks-effect.html
  useEffect(() => {
    setClientWidth();
    window.addEventListener('resize', setClientWidth); // for subsequent resizing get the view port

    return () => {
      window.removeEventListener('resize', setClientWidth); // clean up
    };
  }, []);

  const slideWidthWithMargins = slideWidth + (slideLeftRightMargin * 2); // full slide width
  // how many slides can the view port show at a time
  // Note: viewWidth changes on window resize to update this number
  const slidesCountToFitInViewPort = Math.round(viewWidth / slideWidthWithMargins);
  // if we subtract the number of slides showing from the total slides count we get how many slides
  // are on each side (hidden in belt) taken that the number of slides is odd
  const slidesOnEachHiddenSide = slides.length - slidesCountToFitInViewPort;
  // this is the number we compare to so we can decide wether to put the slides in their initial
  // position or not
  const goBackFactor = slidesOnEachHiddenSide / 2;
  // the belt is the wide element that extends beyond the view port to hold all the slides
  const beltWidth = (slides.length + 1) * slideWidthWithMargins; // offset is for zero indexed array
  // the offset to actually make the slides move
  const leftOffset = factor * slideWidthWithMargins;

  const handleLeftClicked = e => {
    const goToBeginning = factor >= goBackFactor;
    goToBeginning ? setFactor(0) : setFactor(factor + 1);

    typeof onLeftClicked === 'function' && onLeftClicked(e);
  };

  const handleRightClicked = e => {
    const goToBeginning = factor <= (-1 * goBackFactor);
    goToBeginning ? setFactor(0) : setFactor(factor - 1);

    typeof onRightClicked === 'function' && onRightClicked(e);
  };

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
        {slides.map(({ headerIconUrl, headerIconAlt, text }, i) => (
          <Slide
            style={{left: `${leftOffset}px`}}
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
  buttonIconPath: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
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
