import React, { useContext, useEffect, useRef, useState } from 'react';

import { Link } from 'react-router-dom';

import { Bell, BellFill, Envelope, PersonCircle } from 'react-bootstrap-icons';

import { FaSignOutAlt } from 'react-icons/fa';
import { FaCircleHalfStroke, FaKey, FaMoon, FaSun, FaUser } from 'react-icons/fa6';

import Container from 'react-bootstrap/Container';
import Dropdown from 'react-bootstrap/Dropdown';
import Image from 'react-bootstrap/Image';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Popover from 'react-bootstrap/Popover';
import { useTranslation } from 'react-i18next';

import { AvvisiContext } from '../App';
import Logo from '../assets/logo_polito.svg';
import Logo2 from '../assets/logo_polito_reduced.svg';
import Logo2White from '../assets/logo_polito_reduced_white.svg';
import LogoWhite from '../assets/logo_polito_white.svg';
import Services from '../data/Data.json';
import '../styles/Navbar.css';
import '../styles/Theme.css';
import '../styles/Utilities.css';
import { getSystemTheme } from '../utils/utils';
import Searchbar from './Searchbar';

export default function PoliNavbar() {
  const [showPopover, setShowPopover] = useState(false);
  const [showSubmenu, setShowSubmenu] = useState(false);
  const [theme, setTheme] = useState('auto');
  const targetRef = useRef(null);

  const { avvisi, setAvvisi } = useContext(AvvisiContext);

  const { t, i18n } = useTranslation();
  const [selectedLanguage, setSelectedLanguage] = useState(i18n.language);

  const languageOptions = {
    it: { flag: 'flag-it', label: 'Italiano' },
    en: { flag: 'flag-gb', label: 'English' },
  };

  const changeLanguage = lng => {
    i18n.changeLanguage(lng);
    setSelectedLanguage(lng);
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

  useEffect(() => {
    const initialTheme = 'auto';
    setTheme(initialTheme);
    document.documentElement.setAttribute('data-theme', initialTheme);
  }, []);

  useEffect(() => {
    if (theme === 'auto') {
      const systemTheme = getSystemTheme();
      document.documentElement.setAttribute('data-theme', systemTheme);
    } else {
      document.documentElement.setAttribute('data-theme', theme);
    }
  }, [theme]);

  const handleBellClick = () => {
    setShowPopover(!showPopover);
  };

  const handleNotificationClick = (e, notifica) => {
    e.stopPropagation();

    const updatedAvvisi = avvisi[0].filter(n => n !== notifica);
    setAvvisi([updatedAvvisi]);
  };

  const toggleTheme = newTheme => {
    setTheme(newTheme);
  };

  const getLogo = (logoLight, logoDark) => {
    if (theme === 'auto') {
      return getSystemTheme() === 'dark' ? logoDark : logoLight;
    }
    return theme === 'light' ? logoLight : logoDark;
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
          <div
            key={notifica.id}
            onClick={e => handleNotificationClick(e, notifica)}
            style={{ borderRadius: '5px' }}
            className="click-notifica mb-2 py-1 px-2"
          >
            <span className="d-flex" style={{ fontSize: 'var(--font-size-md)' }}>
              <div style={{ marginRight: '6px', fontWeight: 'var(--font-weight-medium)' }}>{notifica.data} -</div>
              <div style={{ marginRight: '4px', fontWeight: 'var(--font-weight-semibold)' }}>{notifica.course}</div>
            </span>
            <div style={{ fontWeight: 'var(--font-weight-medium)', fontSize: 'var(--font-size-sm)' }}>
              ({notifica.sender})
            </div>
            <span style={{ fontSize: 'var(--font-size-md)' }}>{notifica.body}</span>
          </div>
        ))}
      </Popover.Body>
    </Popover>
  );

  return (
    <Navbar className="custom-navbar">
      <Container fluid>
        <Navbar.Brand
          className="d-none d-lg-block"
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
          className="d-block d-lg-none"
          as={Link}
          target="_blank"
          to="https://www.polito.it/"
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
              fontFamily: 'var(--font-primary)',
              fontWeight: 'var(--font-weight-semibold)',
              display: 'inline-block',
              fontSize: 'var(--font-size-xxl)',
            }}
          >
            {t('navbar.portale_della_didattica')}
          </span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll" className="justify-content-end">
          <Searchbar services={Services} />
          <Nav className="my-0 my-lg-0" style={{ maxHeight: '100px' }} navbarScroll>
            <Nav.Link
              as={Link}
              to="https://mail.studenti.polito.it/?_task=mail&_mbox=INBOX"
              target="_blank"
              style={{ marginRight: '5px', marginTop: '9px' }}
            >
              <Envelope size={28} color="var(--primary)" />
            </Nav.Link>
            <Nav.Link style={{ marginRight: '0px', marginTop: '9px' }}>
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
            <Navbar.Text
              className="text-style"
              style={{
                fontWeight: 'var(--font-weight-medium)',
                fontSize: 'var(--font-size-base)',
                color: 'var(--primary)',
              }}
            >
              <div className="d-none d-md-block" style={{ marginLeft: '12px', marginRight: '12px' }}>
                s123456
                <br />
                <span className="truncated">Mario Rossi</span>
              </div>
            </Navbar.Text>
            <Navbar.Brand>
              <Dropdown>
                <Dropdown.Toggle
                  id="dropdown-icon"
                  bsPrefix="e-caret-hide"
                  style={{
                    background: 'transparent',
                    border: 'none',
                    boxShadow: 'none',
                  }}
                >
                  <PersonCircle height={48} width={46} color="var(--primary)" />
                </Dropdown.Toggle>
                <Dropdown.Menu
                  style={{
                    right: 'auto',
                    left: '-130px',
                    fontFamily: 'var(--font-primary)',
                  }}
                >
                  <Dropdown.Item style={{ fontWeight: 'var(--font-weight-medium)' }}>
                    <FaUser /> {t('navbar.profilo_utente')}
                  </Dropdown.Item>
                  <Dropdown.Item style={{ fontWeight: 'var(--font-weight-medium)' }}>
                    <FaKey /> {t('navbar.cambio_password')}
                  </Dropdown.Item>
                  <Dropdown.Item style={{ fontWeight: 'var(--font-weight-medium)' }}>
                    <FaSignOutAlt /> Logout
                  </Dropdown.Item>
                  <Dropdown.Item
                    style={{ fontWeight: 'var(--font-weight-medium)' }}
                    className="dropdown-submenu"
                    onMouseEnter={() => setShowSubmenu(true)}
                    onMouseLeave={() => setShowSubmenu(false)}
                  >
                    <Dropdown drop="bottom" show={showSubmenu}>
                      <Dropdown.Toggle as="div" style={{ fontWeight: 'var(--font-weight-medium)' }}>
                        <span className={`flag ${languageOptions[selectedLanguage].flag}`} />{' '}
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
                        <Dropdown.Item
                          as="div"
                          style={{ fontWeight: 'var(--font-weight-medium)' }}
                          onClick={() => changeLanguage('it')}
                        >
                          <span className="flag flag-it" /> Italiano
                        </Dropdown.Item>
                        <Dropdown.Item
                          as="div"
                          style={{ fontWeight: 'var(--font-weight-medium)' }}
                          onClick={() => changeLanguage('en')}
                        >
                          <span className="flag flag-gb" /> English
                        </Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  </Dropdown.Item>
                  <Dropdown.Item
                    style={{ fontWeight: 'var(--font-weight-medium)' }}
                    className="dropdown-submenu"
                    onMouseEnter={() => setShowSubmenu(true)}
                    onMouseLeave={() => setShowSubmenu(false)}
                  >
                    <Dropdown drop="bottom" show={showSubmenu}>
                      <Dropdown.Toggle as="div" style={{ fontWeight: 'var(--font-weight-medium)' }}>
                        {theme === 'light' ? <FaSun /> : theme === 'dark' ? <FaMoon /> : <FaCircleHalfStroke />}{' '}
                        {theme === 'light'
                          ? t('navbar.tema_chiaro')
                          : theme === 'dark'
                            ? t('navbar.tema_scuro')
                            : t('navbar.tema_automatico')}
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
                        <Dropdown.Item as="div" style={{ fontWeight: '500' }} onClick={() => toggleTheme('light')}>
                          <FaSun /> {t('navbar.tema_chiaro')}
                        </Dropdown.Item>
                        <Dropdown.Item as="div" style={{ fontWeight: '500' }} onClick={() => toggleTheme('dark')}>
                          <FaMoon /> {t('navbar.tema_scuro')}
                        </Dropdown.Item>
                        <Dropdown.Item as="div" style={{ fontWeight: '500' }} onClick={() => toggleTheme('auto')}>
                          <FaCircleHalfStroke /> {t('navbar.tema_automatico')}
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
