import React, { useContext } from 'react';

import { Col, Nav, OverlayTrigger, Tooltip } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import { Link, useLocation } from 'react-router-dom';

import PropTypes from 'prop-types';

import { DesktopToggleContext, ThemeContext } from '../App';
import '../styles/sidebar.css';
import '../styles/text.css';
import '../styles/utilities.css';
import { getSystemTheme } from '../utils/utils';

const navLinks = [
  { to: '/', icon: 'fa-house', textKey: 'Homepage', exact: true },
  { to: '/didattica', icon: 'fa-book-open', textKey: 'sidebar.didattica' },
  { to: '/area_personale', icon: 'fa-user', textKey: 'sidebar.area_personale' },
  { to: '/carriera', icon: 'fa-user-graduate', textKey: 'sidebar.carriera' },
  { to: '/opportunita', icon: 'fa-briefcase', textKey: 'sidebar.opportunità' },
  { to: '/servizi', icon: 'fa-grid', textKey: 'sidebar.servizi' },
  { to: '/help', icon: 'fa-circle-info', textKey: 'Help' },
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
function NavItem({ to, icon, textKey, mobile, handleClose, isActive }) {
  const { desktopToggle, setDesktopToggle } = useContext(DesktopToggleContext);
  const { t } = useTranslation();
  const { theme } = useContext(ThemeContext);
  const appliedTheme = theme === 'auto' ? getSystemTheme() : theme;

  const baseClassName = mobile ? 'modal-sidebar-text' : 'sidebar-text';
  const spanClassName = desktopToggle && !mobile ? `${baseClassName} minimized` : baseClassName;

  const iconClass = isActive ? 'fa-solid' : 'fa-regular';

  const handleToggle = () => {
    setDesktopToggle(!desktopToggle);
  };

  if (to == '#') {
    return (
      <Nav.Item className="d-none d-lg-block">
        <hr className={`hr-${appliedTheme}`} />
        <Link
          to="#"
          className="nav-link"
          onClick={e => {
            e.preventDefault();
            handleToggle();
          }}
        >
          {desktopToggle ? (
            <i className={`${iconClass} fa-right-from-line fa-xl`}></i>
          ) : (
            <i className={`${iconClass} fa-left-to-line fa-xl`}></i>
          )}
          <span className={spanClassName}>{t('sidebar.riduci_menu')}</span>
        </Link>
      </Nav.Item>
    );
  }
  return (
    <Nav.Item>
      {desktopToggle ? (
        <OverlayTrigger placement="right" overlay={<Tooltip>{t(textKey)}</Tooltip>}>
          <Link to={to} className={`nav-link ${isActive ? 'active' : ''}`} onClick={handleClose}>
            <i className={`${iconClass} ${icon} fa-xl`} style={mobile ? { marginLeft: '12px' } : { flexShrink: 0 }}></i>
            <span className={spanClassName}>{t(textKey)}</span>
          </Link>
        </OverlayTrigger>
      ) : (
        <Link to={to} className={`nav-link ${isActive ? 'active' : ''}`} onClick={handleClose}>
          <i className={`${iconClass} ${icon} fa-xl`} style={mobile ? { marginLeft: '12px' } : { flexShrink: 0 }}></i>
          <span className={spanClassName}>{t(textKey)}</span>
        </Link>
      )}
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
  icon: PropTypes.string,
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
