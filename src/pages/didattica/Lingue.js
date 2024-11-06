import { Link } from 'react-router-dom';

import { Button } from 'react-bootstrap';

import { FileEarmarkRichtextFill, Globe } from 'react-bootstrap-icons';

import { FaExternalLinkAlt } from 'react-icons/fa';

import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Flag from 'react-flagkit';
import { useTranslation } from 'react-i18next';

import '../../styles/Utilities.css';

export default function Lingue() {
  const { t } = useTranslation();
  return (
    <>
      <Accordion className="mt-2">
        <Accordion.Item eventKey="0" className="custom-accordion">
          <Accordion.Header>
            <FileEarmarkRichtextFill size={20} className="subsection-icon" />
            {t('didattica.certificazioni_di_lingua')}
          </Accordion.Header>
          <Accordion.Body className="pb-0 pt-1">
            <div className="mb-3 mx-1" style={{ display: 'inline-block' }}>
              {t('didattica.cdl_descrizione')}
            </div>
            <Row>
              <Col sm={6} className="mb-4">
                <Card>
                  <Card.Body className="text-center">
                    <Card.Title className="mb-3">{t('didattica.caricamento_cdl')}</Card.Title>
                    <Card.Text></Card.Text>
                    <Button className="custom-button btn-sm" style={{ height: 'auto' }}>
                      {t('Accedi')}
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1" className="custom-accordion my-2">
          <Accordion.Header>
            <Flag size={20} country="GB" className="subsection-icon" />
            {t('didattica.lingua_inglese')}
          </Accordion.Header>
          <Accordion.Body className="pb-0 pt-1">
            <Row className="mx-1">
              <div className="px-0 mb-1" style={{ display: 'flex', alignItems: 'center' }}>
                <Link
                  className="custom-link truncated"
                  target="_blank"
                  to="https://didattica.polito.it/clapdf/it-vlaib-sito.pdf"
                >
                  {t('didattica.verifica_lingua_inglese')}&nbsp;
                  <FaExternalLinkAlt style={{ position: 'relative', bottom: '2px' }} />
                </Link>
              </div>
              <div className="px-0 mb-1" style={{ display: 'flex', alignItems: 'center' }}>
                <Link
                  className="custom-link truncated"
                  target="_blank"
                  to="https://didattica.polito.it/cla/it/esame_ielts_poli"
                >
                  {t('didattica.ulteriori_informazioni')}&nbsp;
                  <FaExternalLinkAlt style={{ position: 'relative', bottom: '2px' }} />
                </Link>
              </div>
              <div className="px-0 my-2" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: '600' }}>
                {t('didattica.preparazione_ielts')}
              </div>
            </Row>
            <Row>
              <Col sm={6} md={4} className="mb-4">
                <Card>
                  <Card.Body className="text-center">
                    <Card.Title className="mb-3">IELTS Speaking tutorials</Card.Title>
                    <Card.Text></Card.Text>
                    <Button className="custom-button btn-sm" style={{ height: 'auto' }}>
                      {t('didattica.prenotazione_lezioni')}
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
              <Col sm={6} md={4} className="mb-4">
                <Card>
                  <Card.Body className="text-center">
                    <Card.Title className="mb-3">IELTS Grammar tutorials</Card.Title>
                    <Card.Text></Card.Text>
                    <Button className="custom-button btn-sm" style={{ height: 'auto' }}>
                      {t('didattica.prenotazione_lezioni')}
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
              <Col sm={6} md={4} className="mb-3">
                <Card>
                  <Card.Body className="text-center">
                    <Card.Title className="mb-4">IELTS Listening tutorials</Card.Title>
                    <Card.Text></Card.Text>
                    <Button className="custom-button btn-sm" style={{ height: 'auto' }}>
                      {t('didattica.prenotazione_lezioni')}
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
              <Col sm={6} md={4} className="mb-3">
                <Card>
                  <Card.Body className="text-center">
                    <Card.Title className="mb-4">IELTS Reading tutorials</Card.Title>
                    <Card.Text></Card.Text>
                    <Button className="custom-button btn-sm" style={{ height: 'auto' }}>
                      {t('didattica.prenotazione_lezioni')}
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
              <Col sm={6} md={4} className="mb-3">
                <Card>
                  <Card.Body className="text-center">
                    <Card.Title className="mb-4">IELTS Speaking tutorials</Card.Title>
                    <Card.Text></Card.Text>
                    <Button className="custom-button btn-sm" style={{ height: 'auto' }}>
                      {t('didattica.prenotazione_lezioni')}
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2" className="custom-accordion my-2">
          <Accordion.Header>
            <Flag country="IT" size={20} className="subsection-icon" />
            {t('didattica.lingua_italiana')}
          </Accordion.Header>
          <Accordion.Body className="pb-0 pt-1">
            <Row className="mx-1">
              <div className="px-0 mb-1" style={{ display: 'inline-block' }}>
                {t('didattica.lingua_italiana_descrizione')}&nbsp;
                <Link className="custom-link" target="_blank" to="https://didattica.polito.it/clapdf/it-vlaib-sito.pdf">
                  {t('didattica.lingua_italiana_descrizione_link')}&nbsp;
                  <FaExternalLinkAlt style={{ position: 'relative', bottom: '2px' }} />
                </Link>
              </div>
              <div className="px-0 mb-3" style={{ display: 'flex', alignItems: 'center' }}>
                <Link className="custom-link truncated" target="_blank" to="https://didattica.polito.it/cla/it/plida">
                  {t('didattica.ulteriori_informazioni')}&nbsp;
                  <FaExternalLinkAlt style={{ position: 'relative', bottom: '2px' }} />
                </Link>
              </div>
            </Row>
            <Row>
              <Col sm={6} className="mb-4">
                <Card>
                  <Card.Body className="text-center">
                    <Card.Title className="mb-3">{t('didattica.esame_plida')}</Card.Title>
                    <Card.Text></Card.Text>
                    <Button className="custom-button btn-sm" style={{ height: 'auto' }}>
                      {t('Accedi')}
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="3" className="custom-accordion mt-2 mb-0">
          <Accordion.Header>
            <Globe size={20} className="subsection-icon" />
            Altre lingue
          </Accordion.Header>
          <Accordion.Body className="pb-0 pt-1">
            <div className="mb-3 mx-1" style={{ display: 'inline-block' }}>
              {t('didattica.altre_lingue_descrizione')}&nbsp;
              <Link
                className="custom-link"
                target="_blank"
                to="https://didattica.polito.it/cla/it/corsi_studenti_mobilita_verso_estero"
              >
                {t('didattica.questa_pagina')}&nbsp;
                <FaExternalLinkAlt style={{ position: 'relative', bottom: '2px' }} />
              </Link>
              &nbsp;{t('didattica.sezione_tdl')}
            </div>
            <Row>
              <Col sm={6} lg={3} className="mb-4 text-center">
                <Card>
                  <Card.Body>
                    <Card.Title className="mx-auto mb-3">
                      {t('didattica.tdl')} - {t('didattica.francese')}
                    </Card.Title>
                    <Button className="custom-button btn-sm" style={{ height: 'auto' }}>
                      {t('didattica.inizia_la_prova')}
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
              <Col md={6} lg={3} className="mb-4 text-center">
                <Card>
                  <Card.Body>
                    <Card.Title className="mx-auto mb-3">
                      {t('didattica.tdl')} - {t('didattica.spagnolo')}
                    </Card.Title>
                    <Button className="custom-button btn-sm" style={{ height: 'auto' }}>
                      {t('didattica.inizia_la_prova')}
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
              <Col md={6} lg={3} className="mb-4 text-center">
                <Card>
                  <Card.Body>
                    <Card.Title className="mx-auto mb-3">
                      {t('didattica.tdl')} - {t('didattica.tedesco')}
                    </Card.Title>
                    <Button className="custom-button btn-sm" style={{ height: 'auto' }}>
                      {t('didattica.inizia_la_prova')}
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
              <Col md={6} lg={3} className="mb-4 text-center">
                <Card>
                  <Card.Body>
                    <Card.Title className="mx-auto mb-3">
                      {t('didattica.tdl')} - {t('didattica.portoghese')}
                    </Card.Title>
                    <Button className="custom-button btn-sm" style={{ height: 'auto' }}>
                      {t('didattica.inizia_la_prova')}
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </>
  );
}
