import { useState } from 'react';

import { Link, Outlet, useLocation } from 'react-router-dom';

import { Row } from 'react-bootstrap';

import { ArrowRightShort } from 'react-bootstrap-icons';

import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Dropdown from 'react-bootstrap/Dropdown';
import { useTranslation } from 'react-i18next';

import '../../styles/Text.css';
import '../../styles/Utilities.css';

export default function CoursePage() {
  const { t } = useTranslation();

  const location = useLocation();
  const { codice, nome, periodo, crediti, linkGuida } = location.state;
  const section = location.pathname.replace(/.*\//, '');
  const sectionName = section.charAt(0).toUpperCase() + section.slice(1);

  const [activeButton, setActiveButton] = useState(sectionName);

  const handleButtonClick = buttonName => {
    setActiveButton(buttonName);
  };

  return (
    <>
      <div className="d-flex mt-4 mx-3">
        <Link to="/" className="breadcrumb-link">
          Homepage
        </Link>
        <span className="mx-2">
          <ArrowRightShort color="var(--placeholder)" />
        </span>
        <Link to="/didattica" className="breadcrumb-link">
          {t('sidebar.didattica')}
        </Link>
        <span className="mx-2" style={{ marginTop: '-2px' }}>
          <ArrowRightShort color="var(--placeholder)" />
        </span>
        <span className="breadcrumb">{nome}</span>
      </div>

      <Row className="mb-3">
        <div className="d-flex align-items-center mx-3">
          <span className="section-title">{nome}</span>
          <Dropdown style={{ fontSize: 'var(--font-size-md)', fontFamily: 'var(--font-primary)' }}>
            <Dropdown.Toggle
              className="ms-4 py-1"
              style={{ backgroundColor: 'var(--primary)', borderColor: 'var(--primary)', color: 'var(--surface)' }}
              id="dropdown-year"
            >
              <span className="p-4">2023/2024</span>
            </Dropdown.Toggle>
            <Dropdown.Menu
              className="px-4"
              style={{ backgroundColor: 'var(--primary)', borderColor: 'var(--primary)' }}
            >
              <Dropdown.Item style={{ color: 'var(--surface)' }}>2023/2024</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          <Dropdown
            className="course-menu-reduced"
            style={{
              fontSize: 'var(--font-size-md)',
              fontFamily: 'var(--font-primary)',
              fontWeight: 'var(--font-weight-medium)',
            }}
          >
            <Dropdown.Toggle
              className="dropdown-toggle-custom ms-3 py-1"
              style={{ width: '200px', backgroundColor: 'var(--medium-orange)', borderColor: 'var(--medium-orange)' }}
              id="dropdown-section"
            >
              <span style={{ display: 'inline-block' }}>{activeButton}</span>
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item
                as={Link}
                to={`/didattica/${nome}/materiale`}
                state={{ codice, nome, periodo, crediti, linkGuida }}
                onClick={() => handleButtonClick('Materiale')}
              >
                {t('didattica.corso.materiale')}
              </Dropdown.Item>
              <Dropdown.Item
                as={Link}
                to={`/didattica/${nome}/avvisi`}
                state={{ codice, nome, periodo, crediti, linkGuida }}
                onClick={() => handleButtonClick('Avvisi')}
              >
                {t('didattica.corso.avvisi')}
              </Dropdown.Item>
              <Dropdown.Item
                as={Link}
                to={`/didattica/${nome}/orario`}
                state={{ codice, nome, periodo, crediti, linkGuida }}
                onClick={() => handleButtonClick('Orario')}
              >
                {t('didattica.corso.orario')}
              </Dropdown.Item>
              <Dropdown.Item
                as={Link}
                to={`/didattica/${nome}/guida`}
                state={{ codice, nome, periodo, crediti, linkGuida }}
                onClick={() => handleButtonClick('Guida')}
              >
                {t('didattica.corso.guida')}
              </Dropdown.Item>
              <Dropdown.Item
                as={Link}
                to={`/didattica/${nome}/moodle`}
                state={{ codice, nome, periodo, crediti, linkGuida }}
                onClick={() => handleButtonClick('Moodle')}
              >
                Moodle
              </Dropdown.Item>
              <Dropdown.Item
                as={Link}
                to={`/didattica/${nome}/elaborati`}
                state={{ codice, nome, periodo, crediti, linkGuida }}
                onClick={() => handleButtonClick('Elaborati')}
              >
                {t('didattica.corso.elaborati')}
              </Dropdown.Item>
              <Dropdown.Item
                as={Link}
                to={`/didattica/${nome}/appelli`}
                state={{ codice, nome, periodo, crediti, linkGuida }}
                onClick={() => handleButtonClick('Appelli')}
              >
                {t('didattica.corso.appelli')}
              </Dropdown.Item>
              <Dropdown.Item
                as={Link}
                to={`/didattica/${nome}/vc`}
                state={{ codice, nome, periodo, crediti, linkGuida }}
                onClick={() => handleButtonClick('VC')}
              >
                VC
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
      </Row>

      <ButtonGroup className="d-flex my-3 mx-2 course-menu" aria-label="course section">
        <Button
          className={`custom-pill-button course-menu-button ${activeButton === 'Materiale' ? 'active' : ''}`}
          as={Link}
          to={`/didattica/${nome}/materiale`}
          state={{ codice, nome, periodo, crediti, linkGuida }}
          onClick={() => handleButtonClick('Materiale')}
        >
          {t('didattica.corso.materiale')}
        </Button>
        <Button
          className={`custom-pill-button course-menu-button ${activeButton === 'Avvisi' ? 'active' : ''}`}
          as={Link}
          to={`/didattica/${nome}/avvisi`}
          state={{ codice, nome, periodo, crediti, linkGuida }}
          onClick={() => handleButtonClick('Avvisi')}
        >
          {t('didattica.corso.avvisi')}
        </Button>
        <Button
          className={`custom-pill-button course-menu-button ${activeButton === 'Orario' ? 'active' : ''}`}
          as={Link}
          to={`/didattica/${nome}/orario`}
          state={{ codice, nome, periodo, crediti, linkGuida }}
          onClick={() => handleButtonClick('Orario')}
        >
          {t('didattica.corso.orario')}
        </Button>
        <Button
          className={`custom-pill-button course-menu-button ${activeButton === 'Guida' ? 'active' : ''}`}
          as={Link}
          to={`/didattica/${nome}/guida`}
          state={{ codice, nome, periodo, crediti, linkGuida }}
          onClick={() => handleButtonClick('Guida')}
        >
          {t('didattica.corso.guida')}
        </Button>
        <Button
          className={`custom-pill-button course-menu-button ${activeButton === 'Moodle' ? 'active' : ''}`}
          as={Link}
          to={`/didattica/${nome}/moodle`}
          state={{ codice, nome, periodo, crediti, linkGuida }}
          onClick={() => handleButtonClick('Moodle')}
        >
          Moodle
        </Button>
        <Button
          className={`custom-pill-button course-menu-button ${activeButton === 'Elaborati' ? 'active' : ''}`}
          as={Link}
          to={`/didattica/${nome}/elaborati`}
          state={{ codice, nome, periodo, crediti, linkGuida }}
          onClick={() => handleButtonClick('Elaborati')}
        >
          {t('didattica.corso.elaborati')}
        </Button>
        <Button
          className={`custom-pill-button course-menu-button ${activeButton === 'Appelli' ? 'active' : ''}`}
          as={Link}
          to={`/didattica/${nome}/appelli`}
          state={{ codice, nome, periodo, crediti, linkGuida }}
          onClick={() => handleButtonClick('Appelli')}
        >
          {t('didattica.corso.appelli')}
        </Button>
        <Button
          className={`custom-pill-button course-menu-button ${activeButton === 'VC' ? 'active' : ''}`}
          as={Link}
          to={`/didattica/${nome}/vc`}
          state={{ codice, nome, periodo, crediti, linkGuida }}
          onClick={() => handleButtonClick('VC')}
        >
          VC
        </Button>
      </ButtonGroup>

      <Outlet />
    </>
  );
}
