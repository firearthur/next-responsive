import PropTypes from 'prop-types';
import { useState, Children, cloneElement } from 'react';
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
  onTransitioned,
  children,
}) => {
  const {
    root, belt, button, leftArrow, rightArrow,
  } = useStyles();
  const [paddedSlidesData, setPaddedSlides] = useState(children);
  const [slideToShrinkIndex, setSlideToShrinkIndex] = useState(-1);
  const [slideToGrowIndex, setSlideToGrow] = useState(-1);

  const handleLeftClicked = e => {
    // setSlideToGrow(0);
    // const firstChild = paddedSlidesData[0];

    // setTimeout(() => {
    setPaddedSlides([
      paddedSlidesData[paddedSlidesData.length - 1],
      ...paddedSlidesData.slice(0, paddedSlidesData.length - 1),
    ]);
    // setSlideToGrow(-1);
    // },1000);
    typeof onLeftClicked === 'function' && onLeftClicked(e);
  };

  const handleRightClicked = e => {
    setPaddedSlides([...paddedSlidesData.slice(1), paddedSlidesData[0]]);
    typeof onRightClicked === 'function' && onRightClicked(e);
  };

  const beltWidth = (paddedSlidesData.length + 1) * (slideWidth + slideLeftRightMargin * 2);
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
          // marginLeft: `calc(50% - ${
          //   (paddedSlidesData.length * (slideWidth + slideLeftRightMargin * 2)) / 2
          // }px)`,
        }}
        className={belt}
      >
        {Children.map(paddedSlidesData, (child, i) => cloneElement(child, {
          index: i,
          indexToShrink: slideToShrinkIndex,
          indexToGrow: slideToGrowIndex,
        }))}
        {/* {paddedSlidesData} */}
        {/* {paddedSlidesData.map(({
          headerIconUrl, headerIconAlt, text, id,
        }, i) => (
          <Slide
            onTransitionEnd={() => console.log('hiii')}
            onAnimationEnd={() => console.log('iiih')}
            leftRightMargin={`${slideLeftRightMargin}px`}
            width={i === slideToShrinkIndex ? '1px' : `${slideWidth}px`}
            key={headerIconUrl}
          >
            <SlideContent text={text} headerIconAlt={headerIconAlt} headerIconUrl={headerIconUrl} />
          </Slide>
        ))} */}
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
  onTransitioned: PropTypes.func,
  slidesData: PropTypes.arrayOf(
    PropTypes.shape({
      headerIconUrl: PropTypes.string,
      headerIconAlt: PropTypes.string,
      text: PropTypes.string,
    }),
  ).isRequired,
};

export default Slider;
