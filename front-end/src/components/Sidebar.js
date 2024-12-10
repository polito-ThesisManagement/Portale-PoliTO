import { React, useContext, useEffect, useState } from 'react';
import { Col, Nav } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import { FaInfoCircle } from 'react-icons/fa';
import { FaAngleLeft, FaBookOpen, FaBriefcase, FaHouse, FaUser, FaUserGraduate } from 'react-icons/fa6';
import { MdApps } from 'react-icons/md';
import { Link, useLocation } from 'react-router-dom';

import { DesktopToggleContext } from '../App';

import PropTypes from 'prop-types';

import '../styles/Sidebar.css';
import '../styles/Text.css';
import '../styles/Utilities.css';

function Sidebar() {
  const { desktopToggle, setDesktopToggle } = useContext(DesktopToggleContext);

  const handleToggle = () => {
    setDesktopToggle(!desktopToggle);
  };

  return (
    <>
      <div className={`custom-sidebar-wrapper reduced ${desktopToggle ? 'toggle' : ''}`}>
        <div className={`sidebar-toggle ${desktopToggle ? 'rotated' : ''}`} onClick={handleToggle}>
          <FaAngleLeft size={20} />
        </div>
      </div>
      <Nav defaultActiveKey="/home" className="flex-column">
        <Col className={`col-md-1 custom-sidebar py-2 reduced ${desktopToggle ? 'toggle' : ''}`}>
          <NavItems />
        </Col>
      </Nav>
    </>
  );
}

function NavItems({ mobile, handleClose }) {
  const { desktopToggle } = useContext(DesktopToggleContext);
  const location = useLocation();
  const { t } = useTranslation();

  return (
    <>
      <Nav.Item>
        <Link
          to="/"
          className={`nav-link text-style ${location.pathname === '/' ? 'active' : ''}`}
          onClick={handleClose}
        >
          <FaHouse size={22} style={mobile ? { marginLeft: "12px" } : {flexShrink: 0}}/>
          <span className={mobile ? 'modal-sidebar-text' : `sidebar-text reduced ${desktopToggle ? 'toggle' : ''}`}>Homepage</span>
        </Link>
      </Nav.Item>
      <Nav.Item>
        <Link
          to="/didattica"
          className={`nav-link text-style ${location.pathname.includes('/didattica') ? 'active' : ''}`}
          onClick={handleClose}
        >
          <FaBookOpen size={22} style={mobile ? { marginLeft: "12px" } : {flexShrink: 0}}/>
          <span className={mobile ? 'modal-sidebar-text' : `sidebar-text reduced ${desktopToggle ? 'toggle' : ''}`}>{t('sidebar.didattica')}</span>
        </Link>
      </Nav.Item>
      <Nav.Item>
        <Link
          to="/area_personale"
          className={`nav-link text-style ${location.pathname.includes('/area_personale') ? 'active' : ''}`}
          onClick={handleClose}
        >
          <FaUser size={22} style={mobile ? { marginLeft: "12px" } : {flexShrink: 0}}/>
          <span className={mobile ? 'modal-sidebar-text' : `sidebar-text reduced ${desktopToggle ? 'toggle' : ''}`}>{t('sidebar.area_personale')}</span>
        </Link>
      </Nav.Item>
      <Nav.Item>
        <Link
          to="/carriera"
          className={`nav-link text-style ${location.pathname.includes('/carriera') ? 'active' : ''}`}
          onClick={handleClose}
        >
          <FaUserGraduate size={22} style={mobile ? { marginLeft: "12px" } : {flexShrink: 0}}/>
          <span className={mobile ? 'modal-sidebar-text' : `sidebar-text reduced ${desktopToggle ? 'toggle' : ''}`}>{t('sidebar.carriera')}</span>
        </Link>
      </Nav.Item>
      <Nav.Item>
        <Link
          to="/opportunita"
          className={`nav-link text-style ${location.pathname.includes('/opportunita') ? 'active' : ''}`}
          onClick={handleClose}
        >
          <FaBriefcase size={22} style={mobile ? { marginLeft: "12px" } : {flexShrink: 0}}/>
          <span className={mobile ? 'modal-sidebar-text' : `sidebar-text reduced ${desktopToggle ? 'toggle' : ''}`}>{t('sidebar.opportunità')}</span>
        </Link>
      </Nav.Item>
      <Nav.Item>
        <Link
          to="/servizi"
          className={`nav-link text-style ${location.pathname.includes('/servizi') ? 'active' : ''}`}
          onClick={handleClose}
        >
          <MdApps size={22} style={mobile ? { marginLeft: "12px" } : {flexShrink: 0}}/>
          <span className={mobile ? 'modal-sidebar-text' : `sidebar-text reduced ${desktopToggle ? 'toggle' : ''}`}>{t('sidebar.servizi')}</span>
        </Link>
      </Nav.Item>
      <Nav.Item>
        <Link
          to="/help"
          className={`nav-link text-style ${location.pathname.includes('/help') ? 'active' : ''}`}
          onClick={handleClose}
        >
          <FaInfoCircle size={22} style={mobile ? { marginLeft: "12px" } : {flexShrink: 0}}/>
          <span className={mobile ? 'modal-sidebar-text' : `sidebar-text reduced ${desktopToggle ? 'toggle' : ''}`}>Help</span>
        </Link>
      </Nav.Item>
    </>
  );
}

NavItems.propTypes = {
  mobile: PropTypes.bool,
  handleClose: PropTypes.func,
};

export { Sidebar, NavItems };