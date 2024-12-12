import React, { useContext } from 'react';

import { Col, Nav } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import { FaInfoCircle } from 'react-icons/fa';
import { FaAngleLeft, FaBookOpen, FaBriefcase, FaHouse, FaUser, FaUserGraduate } from 'react-icons/fa6';
import { MdApps } from 'react-icons/md';
import { Link, useLocation } from 'react-router-dom';

import PropTypes from 'prop-types';

import { DesktopToggleContext } from '../App';
import '../styles/Sidebar.css';
import '../styles/Text.css';
import '../styles/Utilities.css';

const navLinks = [
  { to: '/', icon: FaHouse, textKey: 'Homepage', exact: true },
  { to: '/didattica', icon: FaBookOpen, textKey: 'sidebar.didattica' },
  { to: '/area_personale', icon: FaUser, textKey: 'sidebar.area_personale' },
  { to: '/carriera', icon: FaUserGraduate, textKey: 'sidebar.carriera' },
  { to: '/opportunita', icon: FaBriefcase, textKey: 'sidebar.opportunità' },
  { to: '/servizi', icon: MdApps, textKey: 'sidebar.servizi' },
  { to: '/help', icon: FaInfoCircle, textKey: 'Help' },
];

function Sidebar() {
  const { desktopToggle, setDesktopToggle } = useContext(DesktopToggleContext);

  const handleToggle = () => {
    setDesktopToggle(!desktopToggle);
  };

  return (
    <>
      <div className={`custom-sidebar-wrapper reduced ${desktopToggle ? 'toggle' : ''}`}>
        <button className={`sidebar-toggle ${desktopToggle ? 'rotated' : ''}`} onClick={handleToggle}>
          <FaAngleLeft size={20} />
        </button>
      </div>
      <Nav defaultActiveKey="/home" className="flex-column">
        <Col className={`col-md-1 custom-sidebar py-2 reduced ${desktopToggle ? 'toggle' : ''}`}>
          <NavItems />
        </Col>
      </Nav>
    </>
  );
}
function NavItem({ to, icon: Icon, textKey, mobile, handleClose, isActive }) {
  const { desktopToggle } = useContext(DesktopToggleContext);
  const { t } = useTranslation();

  return (
    <Nav.Item>
      <Link to={to} className={`nav-link text-style ${isActive ? 'active' : ''}`} onClick={handleClose}>
        <Icon size={22} style={mobile ? { marginLeft: '12px' } : { flexShrink: 0 }} />
        <span className={mobile ? 'modal-sidebar-text' : `sidebar-text reduced ${desktopToggle ? 'toggle' : ''}`}>
          {t(textKey)}
        </span>
      </Link>
    </Nav.Item>
  );
}

function NavItems({ mobile, handleClose }) {
  const location = useLocation();

  // Determine the active link by sorting navLinks by the length of the 'to' property in descending order
  const activeLink = navLinks
    .slice()
    .sort((a, b) => b.to.length - a.to.length)
    .find(({ to, exact }) => (exact ? location.pathname === to : location.pathname.startsWith(to)));

  return (
    <>
      {navLinks.map(({ to, icon, textKey }) => (
        <NavItem
          key={to}
          to={to}
          icon={icon}
          textKey={textKey}
          mobile={mobile}
          handleClose={handleClose}
          isActive={activeLink && activeLink.to === to}
        />
      ))}
    </>
  );
}

NavItem.propTypes = {
  to: PropTypes.string.isRequired,
  icon: PropTypes.elementType.isRequired,
  textKey: PropTypes.string.isRequired,
  mobile: PropTypes.bool,
  handleClose: PropTypes.func,
  isActive: PropTypes.bool.isRequired,
};

NavItems.propTypes = {
  mobile: PropTypes.bool,
  handleClose: PropTypes.func,
};

export { Sidebar, NavItems };
