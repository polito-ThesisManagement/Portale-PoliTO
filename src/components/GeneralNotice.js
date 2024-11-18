import React, { Container } from 'react-bootstrap';

import PropTypes from 'prop-types';

export default function GeneralNotice(props) {
  return (
    <Container className="notice-container">
      <div className="p-2">
        <div className="mb-1">
          <span className="d-flex">
            <div className="regular-weight" style={{ marginRight: '6px' }}>
              {props.data}
            </div>
            {props.sender ? <div className="regular-weight">({props.sender})</div> : null}
          </span>
        </div>

        <span className="semibold-weight">{props.title}</span>

        <div>{props.body}</div>
      </div>
    </Container>
  );
}

GeneralNotice.propTypes = {
  data: PropTypes.string.isRequired,
  sender: PropTypes.string,
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
};
