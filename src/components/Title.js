import React from 'react';

import PropTypes from 'prop-types';

export default function Title(props) {
  return (
    <div className="title reduced">
      {props.icon}
      <span className="section-title" style={{ marginLeft: '12px', marginTop: '8px', marginBottom: '8px' }}>
        {props.sectionName}
      </span>
    </div>
  );
}

Title.propTypes = {
  icon: PropTypes.node.isRequired,
  sectionName: PropTypes.string.isRequired,
};
