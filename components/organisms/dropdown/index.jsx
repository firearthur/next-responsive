import PropTypes from 'prop-types';
import { useState } from 'react';
import classNames from 'classnames';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { makeStyles } from '../../../lib';
import getStyles from './styles';

const useStyles = makeStyles(getStyles, { name: 'Dropdown' });


/**
 * Basic Dropdown component
 */
const Dropdown = ({
  classesOverride,
  className,
  options = [],
  initialSelection,
  onChange,
  hideBorder = true,
}) => {
  const { root, select } = useStyles();

  const [selection, setSelection] = useState(initialSelection);

  const handleChange = (e) => {
    const selectedValue = e.target.value;
    setSelection(selectedValue);
    typeof onChange === 'function' && onChange(selectedValue, e);
  };

  return (
    <FormControl className={classNames(className, root)}>
      <Select
        className={classNames({ [select]: hideBorder })}
        classes={classesOverride}
        labelId="select-label"
        id="select"
        value={selection}
        IconComponent={KeyboardArrowDownIcon}
        onChange={handleChange}
      >
        {options.map(({ value, text }) => <MenuItem key={value} value={value}>{text}</MenuItem>)}
      </Select>
    </FormControl>
  );
};

Dropdown.propTypes = {
  initialSelection: PropTypes.string.isRequired,
  onChange: PropTypes.func,
  options: PropTypes.arrayOf(PropTypes.shape({
    value: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
  })),
  className: PropTypes.string,
  hideBorder: PropTypes.bool,
};


export default Dropdown;
