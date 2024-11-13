import React, { useState } from 'react';

import { Link } from 'react-router-dom';

import { Accordion, Col, Container, Row } from 'react-bootstrap';

import { Search } from 'react-bootstrap-icons';

import { FaBook, FaInfoCircle } from 'react-icons/fa';
import { FaTicketSimple } from 'react-icons/fa6';
import { HiMiniTicket } from 'react-icons/hi2';
import { TiArrowForward } from 'react-icons/ti';

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import ListGroup from 'react-bootstrap/ListGroup';
import { useTranslation } from 'react-i18next';

import Title from '../components/Title';
import Guide from '../data/Guide.json';
import TicketCategories from '../data/TicketCategories.json';
import '../styles/Utilities.css';

export default function Help() {
  const { t } = useTranslation();

  const [search, setSearch] = useState('');
  const [filteredCategories, setFilteredCategories] = useState(TicketCategories);

  const [showCategory, setShowCategory] = useState(false);
  const [clickedCategory, setClickedCategory] = useState('');

  const handleSearch = event => {
    const eventSearched = event.target.value.toLowerCase();
    setSearch(eventSearched);

    const filtered = TicketCategories.filter(cat => cat.category.toLowerCase().includes(eventSearched));

    setFilteredCategories(filtered);
  };

  const handleCategorieClick = category => {
    const cat = category.category;
    setShowCategory(true);
    setClickedCategory(cat);
  };

  return (
    <>
      <Title icon={<FaInfoCircle size={28} />} sectionName="Help" />
      <Row>
        <Col md={12} lg={5}>
          <Container className="custom-container">
            <div className="subsection">
              <span className="subsection-title">
                <FaTicketSimple size={20} className="subsection-icon" />
                Ticketing
              </span>
            </div>
            <InputGroup className="my-3">
              <Form.Control
                className="truncated"
                type="search"
                placeholder={t('help.cerca')}
                aria-label="FAQ Search"
                aria-describedby="basic-addon2"
                style={{
                  height: '40px',
                  backgroundColor: 'var(--background)',
                  color: 'var(--primary)',
                  borderRadius: '8px',
                }}
                value={search}
                onChange={handleSearch}
              />
              <Search
                style={{
                  marginRight: '-14px',
                  position: 'relative',
                  zIndex: '3',
                  right: '28',
                  top: '12',
                  color: 'var(--primary)',
                }}
              />
            </InputGroup>
            <ListGroup style={{ borderRadius: '16px' }}>
              {filteredCategories.map(cat => {
                return (
                  <ListGroup.Item
                    key={cat.key}
                    className={`ticket-category  ${cat.category === clickedCategory ? 'active' : ''}`}
                    style={{ marginBottom: '5px' }}
                    action
                    onClick={() => handleCategorieClick(cat)}
                  >
                    {t(`help.${cat.key}`)}
                  </ListGroup.Item>
                );
              })}
            </ListGroup>
          </Container>
        </Col>
        <Col lg={4}>
          {showCategory && (
            <Container className="custom-container">
              <Accordion className="py-3">
                <Accordion.Item eventKey="0" className="ticket-accordion">
                  <Accordion.Header>{t('help.domanda')} 1</Accordion.Header>
                  <Accordion.Body>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                    cillum dolore eu
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1" className="ticket-accordion mt-2">
                  <Accordion.Header>{t('help.domanda')} 2</Accordion.Header>
                  <Accordion.Body>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                    cillum dolore eu
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2" className="ticket-accordion mt-2">
                  <Accordion.Header>{t('help.domanda')} 3</Accordion.Header>
                  <Accordion.Body>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                    cillum dolore eu
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>

              <div className="text-center mt-3 mb-2">
                <h5 className="text-style" style={{ color: 'var(--primary)' }}>
                  {t('help.non_trovato')}
                </h5>
                <Button className="custom-button mt-2">{t('help.apri_ticket')}</Button>
              </div>
            </Container>
          )}
        </Col>
        <Col md={12} lg={3}>
          <Container className="custom-container">
            <div className="subsection">
              <span className="subsection-title">
                <FaBook size={20} className="subsection-icon" />
                {t('help.guide')}
              </span>
            </div>
            <ListGroup>
              {Guide.map(guida => {
                return (
                  <ListGroup.Item
                    key={guida.guida}
                    className="px-1"
                    style={{ border: 'hidden', backgroundColor: 'var(--surface)' }}
                  >
                    <Link to={guida.link} target="_blank" className="custom-link mb-auto">
                      <TiArrowForward className="me-1" style={{ marginBottom: '2px' }} />
                      {t(`help.${guida.guida.toLowerCase().replace(/ /g, '_')}`)}
                    </Link>
                  </ListGroup.Item>
                );
              })}
            </ListGroup>
          </Container>

          <Container className="custom-container">
            <div className="subsection">
              <span className="subsection-title">
                <HiMiniTicket size={20} className="subsection-icon" />
                {t('help.ticket')}
              </span>
            </div>
            <ListGroup style={{ borderRadius: '16px' }}>
              <ListGroup.Item className="summary">
                {t('help.oggetto_ticket')} 1 <br></br> - {t('help.chiuso')}
              </ListGroup.Item>
              <ListGroup.Item className="summary">
                {t('help.oggetto_ticket')} 2 <br></br>- {t('help.chiuso')}
              </ListGroup.Item>
              <ListGroup.Item className="summary">
                {t('help.oggetto_ticket')} 3<br></br>- {t('help.aperto')}
              </ListGroup.Item>
            </ListGroup>
            <div className="text-center my-2">
              <Button className="custom-button btn-sm">{t('help.consulta_ticket')}</Button>
            </div>
          </Container>
        </Col>
      </Row>
    </>
  );
}
