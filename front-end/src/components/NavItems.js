import React, { useContext } from 'react';
import { Nav } from 'react-bootstrap';
import { FaInfoCircle } from 'react-icons/fa';
import { FaHouse, FaBookOpen, FaUser, FaUserGraduate, FaBriefcase } from 'react-icons/fa6';
import { MdApps } from 'react-icons/md';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import { DesktopToggleContext } from '../App';
import PropTypes from 'prop-types';
import '../styles/Sidebar.css';
import '../styles/Text.css';
import '../styles/Utilities.css';

function NavItems({ mobile, handleClose }) {
    const { desktopToggle } = useContext(DesktopToggleContext);
    const location = useLocation();
    const { t } = useTranslation();

    const navItems = [
        { to: '/', icon: <FaHouse />, label: 'Homepage' },
        { to: '/didattica', icon: <FaBookOpen />, label: t('sidebar.didattica') },
        { to: '/area_personale', icon: <FaUser />, label: t('sidebar.area_personale') },
        { to: '/carriera', icon: <FaUserGraduate />, label: t('sidebar.carriera') },
        { to: '/opportunita', icon: <FaBriefcase />, label: t('sidebar.opportunità') },
        { to: '/servizi', icon: <MdApps />, label: t('sidebar.servizi') },
        { to: '/help', icon: <FaInfoCircle />, label: 'Help' },
    ];

    return (
        <>
            {navItems.map(({ to, icon, label }) => (
                <Nav.Item key={to}>
                    <Link
                        to={to}
                        className={`nav-link text-style ${location.pathname === to ? 'active' : ''}`}
                        onClick={handleClose}
                    >
                        {React.cloneElement(icon, { size:"22", style: mobile ? { marginLeft: '12px' } : { flexShrink: 0 } })}
                        <span className={mobile ? 'modal-sidebar-text' : `sidebar-text reduced ${desktopToggle ? 'toggle' : ''}`}>
                            {label}
                        </span>
                    </Link>
                </Nav.Item>
            ))}
        </>
    );
}

NavItems.propTypes = {
    desktopToggle: PropTypes.bool,
};

export default NavItems;