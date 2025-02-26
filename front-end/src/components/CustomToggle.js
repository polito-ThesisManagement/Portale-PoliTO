import React from 'react';

import { Button } from 'react-bootstrap';

import PropTypes from 'prop-types';

const CustomToggle = React.forwardRef(({ className, children, onClick }, ref) => {
  return (
    <Button
      className={className}
      onClick={e => {
        e.preventDefault();
        onClick(e);
      }}
      ref={ref}
    >
      {children}
    </Button>
  );
});

CustomToggle.displayName = 'CustomToggle';

CustomToggle.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  onClick: PropTypes.func,
};

export default CustomToggle;
