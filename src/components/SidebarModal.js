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
    <Modal show={show} onHide={handleClose} dialogClassName="modal-85vw" fullscreen={true}>
      <Modal.Header closeButton={true}>
        <Modal.Title
          style={{
            width: 'auto',
            minWidth: '166.3px',
            height: '57px',
            marginLeft: '-3px',
            marginRight: '36px',
          }}
        >
          <Image src={getLogo(Logo, LogoWhite)} alt="Logo PoliTo" style={{ width: '100%', height: '100%' }} />
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
