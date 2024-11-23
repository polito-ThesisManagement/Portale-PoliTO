import React, { useContext } from 'react';

import { Link } from 'react-router-dom';

import { Col, Container, ListGroup, Row } from 'react-bootstrap';

import { StarFill } from 'react-bootstrap-icons';

import { BsFillCalendarFill } from 'react-icons/bs';
import { FaList } from 'react-icons/fa';
import { FaClipboard } from 'react-icons/fa';
import { FaHouse } from 'react-icons/fa6';

import Button from 'react-bootstrap/Button';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Tooltip from 'react-bootstrap/Tooltip';
import { useTranslation } from 'react-i18next';

import { FavoritesContext } from '../App';
import CourseNotice from '../components/CourseNotice';
import CourseSummary from '../components/CourseSummary';
import GeneralNotice from '../components/GeneralNotice';
import InfoTooltip from '../components/InfoTooltip';
import Title from '../components/Title';
import WidgetCalendar from '../components/WidgetCalendar';
import CourseNotices from '../data/CourseNotices.json';
import Courses from '../data/Courses.json';
import GeneralNotices from '../data/GeneralNotices.json';
import '../styles/Text.css';
import '../styles/Utilities.css';

export default function Homepage() {
  const { favorites } = useContext(FavoritesContext);

  const { t } = useTranslation();

  const renderTooltip = service => <Tooltip id="button-tooltip">{service}</Tooltip>;

  return (
    <>
      <Title icon={<FaHouse size={32} />} sectionName="Homepage" />

      <Row>
        <Col md={12} lg={5}>
          <Container className="custom-container">
            <div className="subsection d-flex justify-content-between">
              <span className="subsection-title">
                <FaList size={20} className="subsection-icon" />
                {t('homepage.carico_didattico')}
              </span>
              <InfoTooltip text={t('homepage.cd_tooltip')} />
            </div>
            <ListGroup style={{ borderRadius: '12px' }}>
              {Courses.map(corso => {
                return (
                  <CourseSummary
                    key={corso.codice}
                    codice={corso.codice}
                    nome={corso.nome}
                    periodo={corso.periodo}
                    crediti={corso.crediti}
                  />
                );
              })}
            </ListGroup>
          </Container>
          <Container className="custom-container">
            <div className="subsection d-flex justify-content-between">
              <span className="subsection-title">
                <StarFill size={20} className="subsection-icon" />
                {t('homepage.preferiti')}
              </span>
              <InfoTooltip text={t('homepage.preferiti_tooltip')} />
            </div>
            <Row>
              {favorites.length > 0 ? (
                favorites.map((fav, index) => {
                  return (
                    <Col xs={6} key={index} className="mb-2">
                      <OverlayTrigger delay={{ show: 250, hide: 0 }} overlay={renderTooltip(JSON.parse(fav).service)}>
                        <Button className="custom-pill-button truncated w-100" as={Link} to={JSON.parse(fav).path}>
                          {JSON.parse(fav).service}
                        </Button>
                      </OverlayTrigger>
                    </Col>
                  );
                })
              ) : (
                <p className="mb-2 px-3" style={{ fontFamily: 'var(--font-primary)', color: 'var(--secondary-text)' }}>
                  {t('homepage.nessun_servizio')}
                </p>
              )}
            </Row>
          </Container>
        </Col>

        <Col md={12} lg={7}>
          <Container className="custom-container">
            <div className="subsection d-flex justify-content-between">
              <span className="subsection-title">
                <BsFillCalendarFill size={20} className="subsection-icon" />
                Agenda
              </span>
              <InfoTooltip text={t('homepage.agenda_tooltip')} />
            </div>
            <WidgetCalendar />
          </Container>
          <Container className="custom-container">
            <div className="subsection d-flex justify-content-between">
              <span className="subsection-title">
                <FaClipboard size={20} className="subsection-icon" />
                {t('homepage.avvisi_recenti')}
              </span>
              <InfoTooltip text={t('homepage.avvisi_tooltip')} />
            </div>
            <Tabs defaultActiveKey="generali" transition={false} id="tab-avvisi" className="mb-2 custom-tab">
              <Tab eventKey="generali" title={t('homepage.avvisi_generali')}>
                {GeneralNotices.map(notice => {
                  return (
                    <GeneralNotice
                      key={notice.data + ' ' + notice.title}
                      data={notice.data}
                      sender={notice.sender}
                      title={notice.title}
                      body={notice.body}
                    />
                  );
                })}
              </Tab>
              <Tab eventKey="corsi" title={t('homepage.avvisi_corsi')}>
                {CourseNotices.map(notice => {
                  return (
                    <CourseNotice
                      key={notice.data + ' ' + notice.title}
                      data={notice.data}
                      course={notice.course}
                      sender={notice.sender}
                      title={notice.title}
                      body={notice.body}
                    />
                  );
                })}
              </Tab>
            </Tabs>
          </Container>
        </Col>
      </Row>
    </>
  );
}
