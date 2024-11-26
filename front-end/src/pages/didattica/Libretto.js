import React from 'react';

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
import '../../styles/Table.css';

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
              <Table striped className="custom-table">
                <thead>
                  <tr>
                    <th className="custom-th">{t('didattica.codice')}</th>
                    <th className="custom-th">{t('didattica.nome')}</th>
                    <th className="custom-th text-center d-none d-sm-table-cell">{t('didattica.anno')}</th>
                    <th className="custom-th text-center d-none d-sm-table-cell">{t('didattica.crediti')}</th>
                    <th className="custom-th text-center">{t('didattica.esito')}</th>
                    <th className="custom-th d-none d-sm-table-cell">{t('didattica.data')}</th>
                  </tr>
                </thead>
                <tbody>
                  {valutazioniProvvisorie.map((course, index) => (
                    <tr key={course.codice}>
                      <td
                        className="custom-td medium-weight"
                        style={{ backgroundColor: index % 2 === 0 ? 'var(--background)' : 'var(--surface)' }}
                      >
                        {course.codice}
                      </td>
                      <td
                        className="custom-td medium-weight"
                        style={{ backgroundColor: index % 2 === 0 ? 'var(--background)' : 'var(--surface)' }}
                      >
                        {course.nome}
                      </td>
                      <td
                        className="custom-td text-center d-none d-sm-table-cell"
                        style={{ backgroundColor: index % 2 === 0 ? 'var(--background)' : 'var(--surface)' }}
                      >
                        {course.anno}
                      </td>
                      <td
                        className="custom-td text-center d-none d-sm-table-cell"
                        style={{ backgroundColor: index % 2 === 0 ? 'var(--background)' : 'var(--surface)' }}
                      >
                        {course.cfu}
                      </td>
                      <td
                        className="custom-td text-center medium-weight"
                        style={{ backgroundColor: index % 2 === 0 ? 'var(--background)' : 'var(--surface)' }}
                      >
                        {course.esito}
                      </td>
                      <td
                        className="custom-td d-none d-sm-table-cell"
                        style={{ backgroundColor: index % 2 === 0 ? 'var(--background)' : 'var(--surface)' }}
                      >
                        {course.data}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </div>
          </Container>
          <Container className="custom-container" style={{ overflowX: 'auto' }}>
            <div className="subsection">
              <span className="subsection-title">
                <PiListChecksBold size={32} className="subsection-icon" />
                {t('didattica.valutazioni')}
              </span>
              <Table striped className="custom-table">
                <thead>
                  <tr>
                    <th className="custom-th">{t('didattica.codice')}</th>
                    <th className="custom-th">{t('didattica.nome')}</th>
                    <th className="custom-th text-center d-none d-sm-table-cell">{t('didattica.anno')}</th>
                    <th className="custom-th text-center d-none d-sm-table-cell">{t('didattica.crediti')}</th>
                    <th className="custom-th text-center">{t('didattica.esito')}</th>
                    <th className="custom-th d-none d-sm-table-cell">{t('didattica.data')}</th>
                  </tr>
                </thead>
                <tbody>
                  {valutazioni.map((course, index) => (
                    <tr key={course.codice}>
                      <td
                        className="custom-td medium-weight"
                        style={{ backgroundColor: index % 2 === 0 ? 'var(--background)' : 'var(--surface)' }}
                      >
                        {course.codice}
                      </td>
                      <td
                        className="custom-td medium-weight"
                        style={{ backgroundColor: index % 2 === 0 ? 'var(--background)' : 'var(--surface)' }}
                      >
                        {course.nome}
                      </td>
                      <td
                        className="custom-td text-center d-none d-sm-table-cell"
                        style={{ backgroundColor: index % 2 === 0 ? 'var(--background)' : 'var(--surface)' }}
                      >
                        {course.anno}
                      </td>
                      <td
                        className="custom-td text-center d-none d-sm-table-cell"
                        style={{ backgroundColor: index % 2 === 0 ? 'var(--background)' : 'var(--surface)' }}
                      >
                        {course.cfu}
                      </td>
                      <td
                        className="custom-td text-center medium-weight"
                        style={{ backgroundColor: index % 2 === 0 ? 'var(--background)' : 'var(--surface)' }}
                      >
                        {course.voto}
                      </td>
                      <td
                        className="custom-td d-none d-sm-table-cell"
                        style={{ backgroundColor: index % 2 === 0 ? 'var(--background)' : 'var(--surface)' }}
                      >
                        {course.data}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </div>
          </Container>
        </Col>
        <Col md={12} lg={4}>
          <Container className="custom-container" style={{ color: 'var(--text)' }}>
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
              <Container className="custom-container" style={{ color: 'var(--text)' }}>
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
              <Container className="custom-container" style={{ color: 'var(--text)' }}>
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
