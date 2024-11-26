import React from 'react';

import { Modal, Spinner } from 'react-bootstrap';

import PropTypes from 'prop-types';

export default function LoadingModal({ show, onHide }) {
  return (
    <Modal show={show} onHide={onHide} backdrop="static" keyboard={false} animation={true}>
      <Modal.Body>
        <div className="text-center">
          <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
          <div className="text-center mt-2">
            <span>Loading...</span>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
}

LoadingModal.propTypes = {
  show: PropTypes.bool.isRequired,
  onHide: PropTypes.func.isRequired,
};
