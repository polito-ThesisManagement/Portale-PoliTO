import React from 'react';

import { Image, Modal } from 'react-bootstrap';

import PropTypes from 'prop-types';

import Logo from '../assets/logo_polito.svg';
import LogoWhite from '../assets/logo_polito_white.svg';
import Services from '../data/Data.json';
import '../styles/Sidebar.css';
import '../styles/Text.css';
import '../styles/Utilities.css';
import { getLogo } from '../utils/utils';
import Searchbar from './Searchbar';
import { NavItems } from './Sidebar';

export default function SidebarModal({ show, handleClose }) {
  return (
    <Modal dialogClassName="modal-size" show={show} onHide={handleClose} fullscreen={true}>
      <Modal.Header closeButton={true} style={{ height: '87px' }}>
        <Modal.Title>
          <Image
            src={getLogo(Logo, LogoWhite)}
            alt="Logo PoliTo"
            style={{ height: '55px', width: 'auto', objectFit: 'contain' }}
          />
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Searchbar services={Services} mobile={true} handleClose={handleClose} />
        <div className="modal-menu">
          <NavItems mobile={true} handleClose={handleClose} />
        </div>
      </Modal.Body>
    </Modal>
  );
}

SidebarModal.propTypes = {
  show: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
};
