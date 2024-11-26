import { React } from 'react';

import { Link, useLocation } from 'react-router-dom';

import { Col, Nav } from 'react-bootstrap';

import { FaInfoCircle } from 'react-icons/fa';
import { FaBookOpen, FaBriefcase, FaHouse, FaUser, FaUserGraduate } from 'react-icons/fa6';
import { MdApps } from 'react-icons/md';

import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';

import '../styles/Sidebar.css';
import '../styles/Text.css';
import '../styles/Utilities.css';

function Sidebar() {
  return (
    <Nav defaultActiveKey="/home" className="flex-column">
      <Col className={`col-md-1 custom-sidebar py-2 reduced`}>
        <NavItems />
      </Col>
    </Nav>
  );
}

export default Sidebar;

export function NavItems({ mobile, handleClose }) {
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
          <FaHouse size={28} />
          <span className={mobile ? 'modal-sidebar-text' : 'sidebar-text'}>Homepage</span>
        </Link>
      </Nav.Item>
      <Nav.Item>
        <Link
          to="/didattica"
          className={`nav-link text-style ${location.pathname.includes('/didattica') ? 'active' : ''}`}
          onClick={handleClose}
        >
          <FaBookOpen size={28} />
          <span className={mobile ? 'modal-sidebar-text' : 'sidebar-text'}>{t('sidebar.didattica')}</span>
        </Link>
      </Nav.Item>
      <Nav.Item>
        <Link
          to="/area_personale"
          className={`nav-link text-style ${location.pathname.includes('/area_personale') ? 'active' : ''}`}
          onClick={handleClose}
        >
          <FaUser size={28} />
          <span className={mobile ? 'modal-sidebar-text' : 'sidebar-text'}>{t('sidebar.area_personale')}</span>
        </Link>
      </Nav.Item>
      <Nav.Item>
        <Link
          to="/carriera"
          className={`nav-link text-style ${location.pathname.includes('/carriera') ? 'active' : ''}`}
          onClick={handleClose}
        >
          <FaUserGraduate size={28} />
          <span className={mobile ? 'modal-sidebar-text' : 'sidebar-text'}>{t('sidebar.carriera')}</span>
        </Link>
      </Nav.Item>
      <Nav.Item>
        <Link
          to="/opportunita"
          className={`nav-link text-style ${location.pathname.includes('/opportunita') ? 'active' : ''}`}
          onClick={handleClose}
        >
          <FaBriefcase size={28} />
          <span className={mobile ? 'modal-sidebar-text' : 'sidebar-text'}>{t('sidebar.opportunità')}</span>
        </Link>
      </Nav.Item>
      <Nav.Item>
        <Link
          to="/servizi"
          className={`nav-link text-style ${location.pathname.includes('/servizi') ? 'active' : ''}`}
          onClick={handleClose}
        >
          <MdApps size={28} />
          <span className={mobile ? 'modal-sidebar-text' : 'sidebar-text'}>{t('sidebar.servizi')}</span>
        </Link>
      </Nav.Item>
      <Nav.Item>
        <Link
          to="/help"
          className={`nav-link text-style ${location.pathname.includes('/help') ? 'active' : ''}`}
          onClick={handleClose}
        >
          <FaInfoCircle size={28} />
          <span className={mobile ? 'modal-sidebar-text' : 'sidebar-text'}>Help</span>
        </Link>
      </Nav.Item>
    </>
  );
}

NavItems.propTypes = {
  mobile: PropTypes.bool,
  handleClose: PropTypes.func,
};
