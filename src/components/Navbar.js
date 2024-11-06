import React, { useContext, useEffect, useRef, useState } from 'react';

import { Link } from 'react-router-dom';

import { Bell, BellFill, Envelope, PersonCircle } from 'react-bootstrap-icons';

import { FaSignOutAlt } from 'react-icons/fa';
import { FaKey, FaUser } from 'react-icons/fa6';

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
import Services from '../data/Data.json';
import '../styles/Navbar.css';
import '../styles/Utilities.css';
import Searchbar from './Searchbar';

export default function PoliNavbar() {
  const [showPopover, setShowPopover] = useState(false);
  const [showSubmenu, setShowSubmenu] = useState(false);
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
      <Popover.Header style={{ fontSize: '16px', fontWeight: '600' }}>{t('navbar.ultime_notifiche')}</Popover.Header>
      <Popover.Body className="pb-0 px-2">
        {avvisi[0].map(notifica => (
          <div
            key={notifica.id}
            onClick={e => handleNotificationClick(e, notifica)}
            style={{ borderRadius: '5px' }}
            className="click-notifica mb-2 py-1 px-2"
          >
            <span className="d-flex" style={{ fontSize: '15px' }}>
              <div style={{ marginRight: '6px', fontWeight: '500' }}>{notifica.data} -</div>
              <div style={{ marginRight: '4px', fontWeight: '600' }}>{notifica.course}</div>
            </span>
            <div style={{ fontWeight: '500', fontSize: '14px' }}>({notifica.sender})</div>
            <span style={{ fontSize: '15px' }}>{notifica.body}</span>
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
          <Image src={Logo} alt="Logo PoliTo" style={{ width: '100%', height: '100%' }} />
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
          <Image src={Logo2} alt="Logo PoliTo" style={{ width: '51.44px', height: '100%' }} />
        </Navbar.Brand>
        <Navbar.Brand className="d-none d-lg-block">
          <span
            style={{
              color: '#002B49',
              fontFamily: 'Montserrat, sans-serif',
              fontWeight: '600',
              display: 'inline-block',
              fontSize: '22px',
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
              <Envelope size={28} color="#002B49" />
            </Nav.Link>
            <Nav.Link style={{ marginRight: '0px', marginTop: '9px' }}>
              {avvisi[0].length === 0 ? (
                <Bell size={28} color="#002B49" />
              ) : (
                <OverlayTrigger
                  show={showPopover}
                  target={targetRef.current}
                  trigger="click"
                  placement="bottom"
                  overlay={popover}
                >
                  <span ref={targetRef}>
                    <BellFill size={28} color="#002B49" onClick={handleBellClick} />
                  </span>
                </OverlayTrigger>
              )}
            </Nav.Link>
            <Navbar.Text className="text-style" style={{ fontWeight: '500', fontSize: '16px', color: '#002B49' }}>
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
                  <PersonCircle height={48} width={46} color="#002B49" />
                </Dropdown.Toggle>
                <Dropdown.Menu
                  style={{
                    right: 'auto',
                    left: '-130px',
                    fontFamily: 'Montserrat, sans-serif',
                  }}
                >
                  <Dropdown.Item style={{ fontWeight: '500' }}>
                    <FaUser /> {t('navbar.profilo_utente')}
                  </Dropdown.Item>
                  <Dropdown.Item style={{ fontWeight: '500' }}>
                    <FaKey /> {t('navbar.cambio_password')}
                  </Dropdown.Item>
                  <Dropdown.Item style={{ fontWeight: '500' }}>
                    <FaSignOutAlt /> Logout
                  </Dropdown.Item>
                  <Dropdown.Item
                    style={{ fontWeight: '500' }}
                    className="dropdown-submenu"
                    onMouseEnter={() => setShowSubmenu(true)}
                    onMouseLeave={() => setShowSubmenu(false)}
                  >
                    <Dropdown drop="bottom" show={showSubmenu}>
                      <Dropdown.Toggle as="div" style={{ fontWeight: '500' }}>
                        <span className={`flag ${languageOptions[selectedLanguage].flag}`} />{' '}
                        {languageOptions[selectedLanguage].label}
                      </Dropdown.Toggle>
                      <Dropdown.Menu
                        style={{
                          right: 'auto',
                          left: '0',
                          marginTop: '30px',
                          fontFamily: 'Montserrat, sans-serif',
                        }}
                        className="submenu"
                      >
                        <Dropdown.Item as="div" style={{ fontWeight: '500' }} onClick={() => changeLanguage('it')}>
                          <span className="flag flag-it" /> Italiano
                        </Dropdown.Item>
                        <Dropdown.Item as="div" style={{ fontWeight: '500' }} onClick={() => changeLanguage('en')}>
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
