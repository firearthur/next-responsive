import { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '../../../lib';
import getStyles from './styles';

const useStyles = makeStyles(getStyles, { name: 'IntersectionObserverEl' });

/**
 * Basic IntersectionObserver component
 */
const IntersectionObserverEl = ({
  onElementIntersect,
}) => {
  const { root } = useStyles();
  const ref = useRef();

  if (!ref) {
    return <></>;
  }

  useEffect(() => {
    const { current } = ref;

    const observer = new IntersectionObserver((e) => { onElementIntersect(e, observer); });
    observer.observe(current);
    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className={root} ref={ref} />
  );
};

IntersectionObserverEl.propTypes = {
  onElementIntersect: PropTypes.func,
};


export default IntersectionObserverEl;
