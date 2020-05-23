import PropTypes from 'prop-types';
import { useState } from 'react';
import Slide from '../../molecules/slide';
import SlideContent from '../../molecules/slide-content';
import { makeStyles } from '../../../lib';
import getStyles from './styles';

const useStyles = makeStyles(getStyles, { name: 'Slider' });

/**
 * Returns an array guaranteed to have a least number of elements
 * @param {array} array to be padded
 * @param {number} minToPad least number of elements to be guaranteed to have
 */
const getPaddedArray = (array, minToPad = 7) => {
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
  onTransitioned,
}) => {
  const initialPaddedSlidesData = getPaddedArray(slidesData);
  const { root, belt } = useStyles();
  const [paddedSlidesData, setPaddedSlides] = useState(initialPaddedSlidesData);
  const [slideToShrinkIndex, setSlideToShrinkIndex] = useState(-1);

  const handleLeftClicked = (e) => {
    setSlideToShrinkIndex(0);
    setTimeout(() => setSlideToShrinkIndex(-1), 2000);

    setPaddedSlides([
      paddedSlidesData[paddedSlidesData.length - 1],
      ...paddedSlidesData.slice(0, paddedSlidesData.length - 1),
    ]);
    
    typeof onLeftClicked === 'function' && onLeftClicked(e);
  };

  const handleRightClicked = (e) => {
    setPaddedSlides([...paddedSlidesData.slice(1), paddedSlidesData[0]]);
    typeof onRightClicked === 'function' && onRightClicked(e);
  };

  const beltWidth = paddedSlidesData.length * (slideWidth + (slideLeftRightMargin * 2));
  return (
    <div className={root}>
      <button onClick={handleLeftClicked} type="button">{'<'}</button>
      <div
        style={{ width: `${beltWidth}px`, marginLeft: `calc(50vw - ${beltWidth / 2}px)` }}
        className={belt}
      >
        {
          paddedSlidesData.map(
            ({ headerIconUrl, headerIconAlt, text }, i) => (
              <Slide
                onTransitionEnd={() => console.log('hiii')}
                onAnimationEnd={() => console.log('iiih')}
                leftRightMargin={`${slideLeftRightMargin}px`}
                width={i === slideToShrinkIndex ? '0px' : `${slideWidth}px`}
                key={i}
              >
                <SlideContent
                  text={text}
                  headerIconAlt={headerIconAlt}
                  headerIconUrl={headerIconUrl}
                />
              </Slide>
            ),
          )
        }
      </div>
      <button onClick={handleRightClicked} type="button">{'>'}</button>
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
