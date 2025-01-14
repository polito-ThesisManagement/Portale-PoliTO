import React, { useContext, useEffect, useRef, useState } from 'react';

import { PersonCircle } from 'react-bootstrap-icons';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Dropdown from 'react-bootstrap/Dropdown';
import Image from 'react-bootstrap/Image';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useTranslation } from 'react-i18next';
import {
  FaArrowRightFromBracket,
  FaBell,
  FaCircleHalfStroke,
  FaEnvelope,
  FaKey,
  FaMoon,
  FaRegBell,
  FaRegEnvelope,
  FaSun,
  FaUser,
} from 'react-icons/fa6';
import { Link } from 'react-router-dom';

import PropTypes from 'prop-types';

import API from '../API';
import { DesktopToggleContext, LoggedStudentContext, ThemeContext } from '../App';
import Logo from '../assets/logo_polito.svg';
import Logo2 from '../assets/logo_polito_reduced.svg';
import Logo2White from '../assets/logo_polito_reduced_white.svg';
import LogoWhite from '../assets/logo_polito_white.svg';
import Services from '../data/Data.json';
import '../styles/Navbar.css';
import '../styles/Theme.css';
import { useLogo } from '../utils/utils';
import Searchbar from './Searchbar';
import SegmentedControl from './SegmentedControl';
import SidebarModal from './SidebarModal';

export default function PoliNavbar(props) {
  const { desktopToggle } = useContext(DesktopToggleContext);
  const { loggedStudent } = useContext(LoggedStudentContext);
  const { theme, setTheme } = useContext(ThemeContext);

  const { t, i18n } = useTranslation();

  const [hoveredIcon, setHoveredIcon] = useState(null);
  const [showSubmenu, setShowSubmenu] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState(i18n.language);

  const languageOptions = {
    it: { flag: 'flag-it', label: 'Italiano' },
    en: { flag: 'flag-gb', label: 'English' },
  };

  const updateLanguage = lng => {
    i18n.changeLanguage(lng);
    setSelectedLanguage(lng);
    document.documentElement.setAttribute('lang', lng);
    document.querySelector('meta[name="description"]').setAttribute('content', t('descrizione'));
    localStorage.setItem('language', lng);
  };

  const handleLoggedStudentChange = async newStudent => {
    try {
      props.setNavbarDataLoading(true);
      await API.updateLoggedStudent(newStudent);
    } catch (error) {
      console.error('Error updating logged student:', error);
    } finally {
      props.setRefresh(!props.refresh);
    }
  };

  let themeDefaultIndex;
  if (theme === 'auto') {
    themeDefaultIndex = 0;
  } else if (theme === 'light') {
    themeDefaultIndex = 1;
  } else {
    themeDefaultIndex = 2;
  }

  // Set the preferred language if it is saved in localStorage
  useEffect(() => {
    const savedLanguage = localStorage.getItem('language');
    if (savedLanguage && savedLanguage !== i18n.language) {
      updateLanguage(savedLanguage);
    }
  }, []);

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
          <Image src={useLogo(Logo, LogoWhite)} alt="Logo PoliTo" style={{ width: '100%', height: '100%' }} />
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
          <Image src={useLogo(Logo2, Logo2White)} alt="Logo PoliTo" style={{ width: '51.44px', height: '100%' }} />
        </Navbar.Brand>
        <Navbar.Brand className="d-none d-lg-block">
          <span
            style={{
              color: 'var(--primary)',
              display: 'inline-block',
              fontFamily: 'var(--font-primary)',
              fontWeight: 'var(--font-weight-extrabold)',
              fontSize: 'var(--font-size-2xl)',
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
            <div className="d-flex align-items-center" style={{ marginRight: '10px' }}>
              <SegmentedControl
                name="theme-segmented-control"
                callback={val => setTheme(val)}
                controlRef={useRef()}
                defaultIndex={themeDefaultIndex}
                segments={[
                  {
                    label: <FaCircleHalfStroke size={24} color={'var(--primary)'} />,
                    value: 'auto',
                    ref: useRef(),
                  },
                  {
                    label: <FaSun size={24} color={'var(--primary)'} />,
                    value: 'light',
                    ref: useRef(),
                  },
                  {
                    label: <FaMoon size={24} color={'var(--primary)'} />,
                    value: 'dark',
                    ref: useRef(),
                  },
                ]}
              />
            </div>
            <Nav.Link
              as={Link}
              to="https://mail.studenti.polito.it/?_task=mail&_mbox=INBOX"
              target="_blank"
              style={{ display: 'flex', alignItems: 'center' }}
              onMouseEnter={() => setHoveredIcon('envelope')}
              onMouseLeave={() => setHoveredIcon(null)}
            >
              {hoveredIcon === 'envelope' ? (
                <FaEnvelope size={26} color="var(--primary)" />
              ) : (
                <FaRegEnvelope size={26} color="var(--primary)" />
              )}
            </Nav.Link>
            <Nav.Link
              style={{ display: 'flex', alignItems: 'center' }}
              onMouseEnter={() => setHoveredIcon('bell')}
              onMouseLeave={() => setHoveredIcon(null)}
            >
              {hoveredIcon === 'bell' ? (
                <FaBell size={26} color="var(--primary)" />
              ) : (
                <FaRegBell size={26} color="var(--primary)" />
              )}
            </Nav.Link>
            <Navbar.Brand style={{ display: 'flex', alignItems: 'center', marginRight: '0' }}>
              <Dropdown>
                <Dropdown.Toggle
                  id="dropdown-icon"
                  bsPrefix="e-caret-hide"
                  style={{
                    background: 'transparent',
                    border: 'none',
                    boxShadow: 'none',
                    paddingRight: '0',
                    paddingLeft: '0.5rem',
                  }}
                >
                  {loggedStudent ? (
                    <Image
                      roundedCircle
                      src={loggedStudent.profilePictureUrl}
                      height={48}
                      width={46}
                      color="var(--primary)"
                    />
                  ) : (
                    <PersonCircle height={48} width={46} color="var(--primary)" />
                  )}
                </Dropdown.Toggle>
                <Dropdown.Menu
                  style={{
                    right: 'auto',
                    left: props.allStudents && props.allStudents.length > 0 ? '-150px' : '-100px',
                    fontFamily: 'var(--font-primary)',
                    fontSize: 'var(--font-size-md)',
                    fontWeight: 'var(--font-weight-medium)',
                  }}
                >
                  {loggedStudent && (
                    <>
                      <Dropdown.Item
                        className="medium-weight"
                        style={{ display: 'flex', alignItems: 'center', gap: '10px', color: 'var(--primary)' }}
                      >
                        <FaUser size={16} /> {t('navbar.profilo_utente')}
                      </Dropdown.Item>
                      <Dropdown.Item
                        className="medium-weight"
                        style={{ display: 'flex', alignItems: 'center', gap: '10px', color: 'var(--primary)' }}
                      >
                        <FaKey size={16} /> {t('navbar.cambio_password')}
                      </Dropdown.Item>
                      {props.allStudents
                        ?.filter(student => student.id !== loggedStudent.id)
                        .map(student => (
                          <Dropdown.Item
                            key={student.id}
                            className="medium-weight"
                            onClick={() => handleLoggedStudentChange(student)}
                            style={{ display: 'flex', alignItems: 'center', gap: '9px', color: 'var(--primary)' }}
                          >
                            <Image
                              src={student.profilePictureUrl}
                              alt="Profile picture"
                              roundedCircle
                              style={{ width: '20px', height: '20px', marginLeft: '-2px' }}
                            />
                            {student.firstName} {student.lastName}
                          </Dropdown.Item>
                        ))}
                      <Dropdown.Item
                        className="medium-weight"
                        style={{ display: 'flex', alignItems: 'center', gap: '9px', color: 'var(--primary)' }}
                      >
                        <FaArrowRightFromBracket size={17} style={{ marginLeft: '1px' }} /> Logout
                      </Dropdown.Item>
                    </>
                  )}
                  <Dropdown.Item
                    className="dropdown-submenu medium-weight"
                    style={{ display: 'flex', alignItems: 'center', gap: '10px', color: 'var(--primary)' }}
                    onMouseEnter={() => setShowSubmenu(true)}
                    onMouseLeave={() => setShowSubmenu(false)}
                  >
                    <Dropdown drop="bottom" show={showSubmenu}>
                      <Dropdown.Toggle
                        className="medium-weight"
                        as="div"
                        style={{ display: 'flex', alignItems: 'center' }}
                      >
                        <span
                          className={`flag ${languageOptions[selectedLanguage].flag}`}
                          style={{ marginRight: '10px' }}
                        />{' '}
                        {languageOptions[selectedLanguage].label}
                      </Dropdown.Toggle>
                      <Dropdown.Menu
                        style={{
                          right: 'auto',
                          left: '0',
                          marginTop: '30px',
                          fontFamily: 'var(--font-primary)',
                          fontSize: 'var(--font-size-md)',
                          fontWeight: 'var(--font-weight-medium)',
                        }}
                        className="submenu"
                      >
                        <Dropdown.Item
                          className="medium-weight"
                          as="div"
                          style={{ display: 'flex', alignItems: 'center', gap: '10px', color: 'var(--primary)' }}
                          onClick={() => updateLanguage('it')}
                        >
                          <span className="flag flag-it" /> Italiano
                        </Dropdown.Item>
                        <Dropdown.Item
                          className="medium-weight"
                          as="div"
                          style={{ display: 'flex', alignItems: 'center', gap: '10px', color: 'var(--primary)' }}
                          onClick={() => updateLanguage('en')}
                        >
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

PoliNavbar.propTypes = {
  allStudents: PropTypes.array,
  setNavbarDataLoading: PropTypes.func,
  refresh: PropTypes.bool,
  setRefresh: PropTypes.func,
};
