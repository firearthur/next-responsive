import PropTypes from 'prop-types';
import { useState } from 'react';
import Collapse from '@material-ui/core/Collapse';
import classNames from 'classnames';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import { makeStyles } from '../../../lib';
import getStyles from './styles';

const useStyles = makeStyles(getStyles, { name: 'ChevronCollapse' });

/**
 * Basic ChevronCollapse component
 */
const ChevronCollapse = ({
  title,
  children,
  defaultToClosed = true,
  className,
}) => {
  const {
    root, titleContainer, collapseTitle, flipped,
  } = useStyles();
  const [isOpen, setIsOpen] = useState(!defaultToClosed);
  const clickHandler = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={classNames(className, root)}>
      <div className={titleContainer}>
        <h3 className={collapseTitle} onClick={clickHandler}>{title}</h3>
        <KeyboardArrowDownIcon className={classNames({ [flipped]: isOpen })} onClick={clickHandler} />
      </div>
      <Collapse in={isOpen} timeout="auto">
        {children}
      </Collapse>
    </div>
  );
};

ChevronCollapse.propTypes = {
  children: PropTypes.any,
  defaultToClosed: PropTypes.bool,
  title: PropTypes.any,
};


export default ChevronCollapse;
