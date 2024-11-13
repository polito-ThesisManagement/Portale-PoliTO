import React from 'react';

import { Container } from 'react-bootstrap';

import PropTypes from 'prop-types';

export default function CourseNotice(props) {
  return (
    <Container className="notice-container">
      <div className="p-2">
        <div className="mb-1">
          <span className="d-flex">
            <div className="regular-weight" style={{ marginRight: '6px' }}>
              {props.data} -
            </div>
            <div className="medium-weight" style={{ marginRight: '4px' }}>
              {props.course}
            </div>
            <div className="regular-weight">({props.sender})</div>
          </span>
        </div>

        <span className="semibold-weight">{props.title}</span>

        <div>{props.body}</div>
      </div>
    </Container>
  );
}

CourseNotice.propTypes = {
  data: PropTypes.string.isRequired,
  course: PropTypes.string.isRequired,
  sender: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
};
