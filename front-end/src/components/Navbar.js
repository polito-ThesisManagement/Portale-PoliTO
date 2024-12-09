import React, { useContext, useEffect, useRef, useState } from 'react';

import { Bell, BellFill, Envelope, PersonCircle } from 'react-bootstrap-icons';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Dropdown from 'react-bootstrap/Dropdown';
import Image from 'react-bootstrap/Image';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Popover from 'react-bootstrap/Popover';
import { useTranslation } from 'react-i18next';
import { FaSignOutAlt } from 'react-icons/fa';
import { FaKey, FaUser } from 'react-icons/fa6';
import { Link } from 'react-router-dom';

import { AvvisiContext, DesktopToggleContext, UserContext } from '../App';
import Searchbar from './Searchbar';
import SidebarModal from './SidebarModal';
import ThemeToggle from './ThemeToggle';
import users from '../App'
import Logo from '../assets/logo_polito.svg';
import Logo2 from '../assets/logo_polito_reduced.svg';
import Logo2White from '../assets/logo_polito_reduced_white.svg';
import LogoWhite from '../assets/logo_polito_white.svg';
import Services from '../data/Data.json';
import Users from '../data/Users';
import '../styles/Navbar.css';
import '../styles/Theme.css';
import { getLogo } from '../utils/utils';

export default function PoliNavbar() {
  const { avvisi, setAvvisi } = useContext(AvvisiContext);
  const { desktopToggle } = useContext(DesktopToggleContext);
  const { user, setUser } = useContext(UserContext);

  const { t, i18n } = useTranslation();

  const [showPopover, setShowPopover] = useState(false);
  const [showSubmenu, setShowSubmenu] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState(i18n.language);
  const targetRef = useRef(null);

  const languageOptions = {
    it: { flag: 'flag-it', label: 'Italiano' },
    en: { flag: 'flag-gb', label: 'English' },
  };

  const updateLanguage = lng => {
    i18n.changeLanguage(lng);
    setSelectedLanguage(lng);
    document.documentElement.setAttribute('lang', lng);
    {
      document.querySelector('meta[name="description"]').setAttribute('content', t('descrizione'));
    }
  };

  const handleClickOutside = event => {
    if (targetRef.current && !targetRef.current.contains(event.target)) {
      setShowPopover(false);
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  const handleBellClick = () => {
    setShowPopover(!showPopover);
  };

  const handleNotificationClick = (e, notifica) => {
    e.stopPropagation();

    const updatedAvvisi = avvisi[0].filter(n => n !== notifica);
    setAvvisi([updatedAvvisi]);
  };

  const popover = (
    <Popover id="popover-basic" className="custom-popover">
      <Popover.Header
        style={{
          fontSize: 'var(--font-size-base)',
          fontWeight: 'var(--font-weight-semibold)',
          backgroundColor: 'var(--background)',
          color: 'var(--text)',
        }}
      >
        {t('navbar.ultime_notifiche')}
      </Popover.Header>
      <Popover.Body className="pb-0 px-2" style={{ color: 'var(--text)' }}>
        {avvisi[0].map(notifica => (
          <button
            key={notifica.id}
            onClick={e => handleNotificationClick(e, notifica)}
            style={{ borderRadius: '6px' }}
            className="click-notifica mb-2 py-1 px-2"
          >
            <span className="d-flex" style={{ fontSize: 'var(--font-size-md)' }}>
              <div className="medium-weight" style={{ marginRight: '6px' }}>
                {notifica.data} -
              </div>
              <div className="semibold-weight" style={{ marginRight: '4px' }}>
                {notifica.course}
              </div>
            </span>
            <div className="medium-weight" style={{ fontSize: 'var(--font-size-sm)' }}>
              ({notifica.sender})
            </div>
            <span style={{ fontSize: 'var(--font-size-md)' }}>{t('navbar.' + notifica.body)}</span>
          </button>
        ))}
      </Popover.Body>
    </Popover>
  );

  return (
    <Navbar className="custom-navbar">
      <Container fluid>
        <Navbar.Brand
          className={`nav-logo ${desktopToggle ? 'toggle' : ''}`}
          as={Link}
          target="_blank"
          to="https://www.polito.it/"
          style={{
            width: 'auto',
            minWidth: '166.3px',
            height: '57px',
            marginLeft: '-3px',
            marginRight: '36px',
          }}
        >
          <Image src={getLogo(Logo, LogoWhite)} alt="Logo PoliTo" style={{ width: '100%', height: '100%' }} />
        </Navbar.Brand>
        <Navbar.Brand
          className={`nav-logo-reduced ${desktopToggle ? 'toggle' : ''}`}
          as={Link}
          target="_blank"
          to="https://didattica.polito.it/"
          style={{
            width: 'auto',
            height: '57px',
            marginLeft: '-3px',
            marginRight: '12px',
          }}
        >
          <Image src={getLogo(Logo2, Logo2White)} alt="Logo PoliTo" style={{ width: '51.44px', height: '100%' }} />
        </Navbar.Brand>
        <Navbar.Brand className="d-none d-lg-block">
          <span
            style={{
              color: 'var(--primary)',
              display: 'inline-block',
              fontFamily: 'var(--font-primary)',
              fontWeight: 'var(--font-weight-extrabold)',
              fontSize: 'var(--font-size-xxl)',
            }}
          >
            {t('navbar.portale_della_didattica')}
          </span>
        </Navbar.Brand>
        <Button
          onClick={() => setShowModal(true)}
          className="sidebar-modal-toggler"
          style={{ backgroundColor: 'var(--primary)', color: 'var(--background)' }}
        >
          ☰
        </Button>
        <SidebarModal show={showModal} handleClose={() => setShowModal(false)} />
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll" className="justify-content-end">
          <Searchbar services={Services} mobile={false} />
          <Nav className="my-0 my-lg-0" style={{ maxHeight: '100px' }} navbarScroll>
            <ThemeToggle />
            <Nav.Link
              as={Link}
              to="https://mail.studenti.polito.it/?_task=mail&_mbox=INBOX"
              target="_blank"
              style={{ display: "flex", alignItems: "center" }}
            >
              <Envelope size={28} color="var(--primary)" />
            </Nav.Link>
            <Nav.Link style={{ display: "flex", alignItems: "center" }}>
              {avvisi[0].length === 0 ? (
                <Bell size={28} color="var(--primary)" />
              ) : (
                <OverlayTrigger
                  show={showPopover}
                  target={targetRef.current}
                  trigger="click"
                  placement="bottom"
                  overlay={popover}
                >
                  <span ref={targetRef}>
                    <BellFill size={28} color="var(--primary)" onClick={handleBellClick} />
                  </span>
                </OverlayTrigger>
              )}
            </Nav.Link>
            <Navbar.Brand style={{ marginRight: '0' }}>
              <Dropdown>
                <Dropdown.Toggle
                  id="dropdown-icon"
                  bsPrefix="e-caret-hide"
                  style={{
                    background: 'transparent',
                    border: 'none',
                    boxShadow: 'none',
                    paddingRight: '0',
                  }}
                >
                  <Image roundedCircle src={user.profile_picture_url} height={48} width={48} color="var(--primary)" />
                </Dropdown.Toggle>
                <Dropdown.Menu
                  style={{
                    right: 'auto',
                    left: '-150px',
                    fontFamily: 'var(--font-primary)',
                  }}
                >
                  <Dropdown.Item className="medium-weight" style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                    <FaUser size={16} /> {t('navbar.profilo_utente')}
                  </Dropdown.Item>
                  <Dropdown.Item className="medium-weight" style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                    <FaKey size={16} /> {t('navbar.cambio_password')}
                  </Dropdown.Item>
                  {Users.filter(u => u.id !== user.id).map((u) => (
                    <Dropdown.Item
                      key={u.id}
                      className="medium-weight"
                      onClick={() => setUser(u)}
                      style={{ display: "flex", alignItems: "center", gap: "9px" }}
                    >
                      <Image
                        src={u.profile_picture_url}
                        alt="Profile picture url"
                        roundedCircle
                        style={{ width: '20px', height: '20px', marginLeft: '-2px' }}
                      />
                      {u.first_name} {u.last_name}
                    </Dropdown.Item>
                  ))}
                  <Dropdown.Item className="medium-weight" style={{ display: "flex", alignItems: "center", gap: "9px" }}>
                    <FaSignOutAlt size={17} style={{ marginLeft: "1px" }} /> Logout
                  </Dropdown.Item>
                  <Dropdown.Item
                    className="dropdown-submenu medium-weight"
                    style={{ display: "flex", alignItems: "center", gap: "10px" }}
                    onMouseEnter={() => setShowSubmenu(true)}
                    onMouseLeave={() => setShowSubmenu(false)}
                  >
                    <Dropdown drop="bottom" show={showSubmenu}>
                      <Dropdown.Toggle className="medium-weight" as="div" style={{ display: "flex", alignItems: "center" }}>
                        <span className={`flag ${languageOptions[selectedLanguage].flag}`} style={{ marginRight: "10px" }} />{' '}
                        {languageOptions[selectedLanguage].label}
                      </Dropdown.Toggle>
                      <Dropdown.Menu
                        style={{
                          right: 'auto',
                          left: '0',
                          marginTop: '30px',
                          fontFamily: 'var(--font-primary)',
                        }}
                        className="submenu"
                      >
                        <Dropdown.Item className="medium-weight" as="div" style={{ display: "flex", alignItems: "center", gap: "10px" }} onClick={() => updateLanguage('it')}>
                          <span className="flag flag-it" /> Italiano
                        </Dropdown.Item>
                        <Dropdown.Item className="medium-weight" as="div" style={{ display: "flex", alignItems: "center", gap: "10px" }} onClick={() => updateLanguage('en')}>
                          <span className="flag flag-gb" /> English
                        </Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Navbar.Brand>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
