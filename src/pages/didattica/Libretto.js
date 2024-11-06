import { Container } from 'react-bootstrap';
import { Col, Row, Table } from 'react-bootstrap';

import { BsGraphUp } from 'react-icons/bs';
import { FaList } from 'react-icons/fa';
import { PiListChecksBold } from 'react-icons/pi';
import { VscGraph } from 'react-icons/vsc';

import { useTranslation } from 'react-i18next';

import DoughnutChart from '../../components/DoughnutChart';
import valutazioni from '../../data/Valutazioni.json';
import valutazioniProvvisorie from '../../data/ValutazioniProvvisorie.json';

export default function Libretto() {
  const { t } = useTranslation();
  return (
    <>
      <Row>
        <Col md={12} lg={8}>
          <Container className="custom-container" style={{ overflowX: 'auto' }}>
            <div className="subsection">
              <span className="subsection-title">
                <FaList size={20} className="subsection-icon" />
                {t('didattica.valutazioni_provvisorie')}
              </span>
              <Table striped className="custom-table" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                <thead style={{ fontFamily: 'Montserrat, sans-serif' }}>
                  <tr>
                    <th>{t('didattica.codice')}</th>
                    <th>{t('didattica.nome')}</th>
                    <th style={{ position: 'relative', left: -18 }}>{t('didattica.anno')}</th>
                    <th style={{ position: 'relative', left: -24 }}>{t('didattica.crediti')}</th>
                    <th style={{ position: 'relative', left: -10 }}>{t('didattica.esito')}</th>
                    <th>{t('didattica.data')}</th>
                  </tr>
                </thead>
                <tbody>
                  {valutazioniProvvisorie.map(course => (
                    <tr key={course.codice}>
                      <td style={{ fontWeight: 500 }}>{course.codice}</td>
                      <td style={{ fontWeight: 500 }}>{course.nome}</td>
                      <td>{course.anno}</td>
                      <td>{course.cfu}</td>
                      <td style={{ fontWeight: 500 }}>{course.esito}</td>
                      <td>{course.data}</td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </div>
          </Container>
          <Container className="custom-container" style={{ overflowX: 'auto' }}>
            <div className="subsection">
              <span className="subsection-title">
                <PiListChecksBold size={28} className="subsection-icon" />
                {t('didattica.valutazioni')}
              </span>
              <Table striped className="custom-table" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                <thead style={{ fontFamily: 'Montserrat, sans-serif' }}>
                  <tr>
                    <th>{t('didattica.codice')}</th>
                    <th>{t('didattica.nome')}</th>
                    <th style={{ position: 'relative', left: -18 }}>{t('didattica.anno')}</th>
                    <th style={{ position: 'relative', left: -24 }}>{t('didattica.crediti')}</th>
                    <th style={{ position: 'relative', left: -10 }}>{t('didattica.esito')}</th>
                    <th>{t('didattica.data')}</th>
                  </tr>
                </thead>
                <tbody>
                  {valutazioni.map(course => (
                    <tr key={course.codice}>
                      <td style={{ fontWeight: 500 }}>{course.codice}</td>
                      <td style={{ fontWeight: 500 }}>{course.nome}</td>
                      <td>{course.anno}</td>
                      <td>{course.cfu}</td>
                      <td style={{ fontWeight: 500 }}>{course.voto}</td>
                      <td>{course.data}</td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </div>
          </Container>
        </Col>
        <Col md={12} lg={4}>
          <Container className="custom-container">
            <div className="subsection">
              <span className="subsection-title">
                <BsGraphUp size={20} className="subsection-icon" />
                {t('didattica.media_e_voti')}
              </span>
              <Row className="mt-2">
                <Col>
                  <span className="detail">{t('didattica.media_ponderata')}</span>
                  <br />
                  <span className="important-detail">28</span>
                </Col>
                <Col>
                  <span className="detail">{t('didattica.media_di_laurea')}</span>
                  <br />
                  <span className="important-detail">102.67</span>
                </Col>
              </Row>
            </div>
          </Container>
          <Row>
            <Col md={12} lg={6}>
              <Container className="custom-container">
                <div className="subsection truncated">
                  <span className="subsection-title">
                    <VscGraph size={20} className="subsection-icon" />
                    {t('didattica.la_tua_carriera')}
                  </span>
                  <Row className="mt-2">
                    <span className="detail">{t('didattica.crediti_acquisiti')}</span>
                    <br />
                    <span className="important-detail">90/120 CFU</span>
                  </Row>
                  <Row className="mt-1">
                    <span className="detail">{t('didattica.crediti_frequentati')}</span>
                    <br />
                    <span className="important-detail">120/120 CFU</span>
                  </Row>
                </div>
                <DoughnutChart values={[90, 30]} />
              </Container>
            </Col>
            <Col md={12} lg={6}>
              <Container className="custom-container">
                <div className="subsection truncated">
                  <span className="subsection-title">
                    <VscGraph size={20} className="subsection-icon" />
                    {t('didattica.questo_anno')}
                  </span>
                  <Row className="mt-2">
                    <span className="detail">{t('didattica.crediti_acquisiti')}</span>
                    <br />
                    <span className="important-detail">52/82 CFU</span>
                  </Row>
                  <Row className="mt-1">
                    <span className="detail">{t('didattica.crediti_frequentati')}</span>
                    <br />
                    <span className="important-detail">82/82 CFU</span>
                  </Row>
                </div>
                <DoughnutChart values={[52, 30]} />
              </Container>
            </Col>
          </Row>
        </Col>
      </Row>
    </>
  );
}
