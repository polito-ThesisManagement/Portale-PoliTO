import React, { useContext } from 'react';

import { Button } from 'react-bootstrap';

import PropTypes from 'prop-types';

import { ThemeContext } from '../App';
import { getSystemTheme } from '../utils/utils';

const CustomToggle = React.forwardRef(({ active, children, onClick }, ref) => {
  const { theme } = useContext(ThemeContext);
  const appliedTheme = theme === 'auto' ? getSystemTheme() : theme;
  return (
    <Button
      active={active}
      className={`btn-${appliedTheme}`}
      onClick={e => {
        e.preventDefault();
        onClick(e);
      }}
      ref={ref}
      size="sm"
      style={{ display: 'flex', alignItems: 'center' }}
    >
      {children}
    </Button>
  );
});

CustomToggle.displayName = 'CustomToggle';

CustomToggle.propTypes = {
  active: PropTypes.bool,
  children: PropTypes.node,
  onClick: PropTypes.func,
};

export default CustomToggle;
