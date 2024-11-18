import React from 'react';

import PropTypes from 'prop-types';

export default function Title(props) {
  return (
    <div className={`title mb-3 ${props.thesis ? 'mt-2' : 'mt-3'}`}>
      <div className="icon">{props.icon}</div>
      <span className="section-title" style={{ marginLeft: '8px' }}>
        {props.sectionName}
      </span>
    </div>
  );
}

Title.propTypes = {
  icon: PropTypes.node.isRequired,
  sectionName: PropTypes.string.isRequired,
  thesis: PropTypes.bool,
};
