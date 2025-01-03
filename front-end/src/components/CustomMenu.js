import React from 'react';

import PropTypes from 'prop-types';

const CustomMenu = React.forwardRef(({ children, style, className, 'aria-labelledby': labeledBy }, ref) => (
  <div ref={ref} style={style} className={className} aria-labelledby={labeledBy}>
    {children}
  </div>
));

CustomMenu.displayName = 'CustomMenu';

CustomMenu.propTypes = {
  children: PropTypes.node,
  style: PropTypes.object,
  className: PropTypes.string,
  'aria-labelledby': PropTypes.string,
};

export default CustomMenu;
