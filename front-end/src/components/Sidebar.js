import React, { useContext } from 'react';

import { Col, Nav } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import { FaBookOpen, FaBriefcase, FaCircleInfo, FaHouse, FaUser, FaUserGraduate } from 'react-icons/fa6';
import { IoApps } from 'react-icons/io5';
import { LuArrowLeftToLine, LuArrowRightToLine } from 'react-icons/lu';
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
  { to: '/servizi', icon: IoApps, textKey: 'sidebar.servizi' },
  { to: '/help', icon: FaCircleInfo, textKey: 'Help' },
];

function Sidebar() {
  const { desktopToggle } = useContext(DesktopToggleContext);
  return (
    <Col md={1} lg={1} className={`custom-sidebar py-2 d-none d-sm-block reduced ${desktopToggle ? 'minimized' : ''}`}>
      <Nav defaultActiveKey="/home" className="flex-column">
        <NavItems />
      </Nav>
    </Col>
  );
}
function NavItem({ to, icon: Icon, textKey, mobile, handleClose, isActive }) {
  const { desktopToggle, setDesktopToggle } = useContext(DesktopToggleContext);
  const baseClassName = mobile ? 'modal-sidebar-text' : 'sidebar-text reduced';
  const spanClassName = desktopToggle && !mobile ? `${baseClassName} toggle` : baseClassName;
  const { t } = useTranslation();

  const handleToggle = () => {
    setDesktopToggle(!desktopToggle);
  };

  if (to == '#') {
    return (
      <Nav.Item className="d-none d-lg-block">
        <hr />
        <Link to="#" className="nav-link" onClick={handleToggle}>
          {desktopToggle ? <LuArrowRightToLine size={22} /> : <LuArrowLeftToLine size={22} />}
          <span className={spanClassName}>{t('sidebar.riduci_menu')}</span>
        </Link>
      </Nav.Item>
    );
  }
  return (
    <Nav.Item>
      <Link to={to} className={`nav-link ${isActive ? 'active' : ''}`} onClick={handleClose}>
        <Icon size={22} style={mobile ? { marginLeft: '12px' } : { flexShrink: 0 }} />
        <span className={spanClassName}>{t(textKey)}</span>
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
      <NavItem to="#" />
    </>
  );
}

NavItem.propTypes = {
  to: PropTypes.string.isRequired,
  icon: PropTypes.elementType,
  textKey: PropTypes.string,
  mobile: PropTypes.bool,
  handleClose: PropTypes.func,
  isActive: PropTypes.bool,
};

NavItems.propTypes = {
  mobile: PropTypes.bool,
  handleClose: PropTypes.func,
};

export { Sidebar, NavItems };
