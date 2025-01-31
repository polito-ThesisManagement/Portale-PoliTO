import React, { useContext } from 'react';

import { Button, Card, Col, Row } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

import PropTypes from 'prop-types';

import { ThemeContext } from '../App';
import '../styles/Theme.css';
import '../styles/ThesisItem.css';
import '../styles/Utilities.css';
import { getSystemTheme } from '../utils/utils';
import CustomBadge from './CustomBadge';

function ThesisItem(props) {
  const teachers = [props.supervisor, ...props.internalCoSupervisors];
  const theme = useContext(ThemeContext);
  const appliedTheme = getSystemTheme(theme);
  const { t } = useTranslation();
  return (
    <Card className="mb-3 h-100 roundCard p-2">
      <Card.Header className="border-0">
        <Row>
          <Col lg={7}>
            <h3 className="thesis-topic">{props.topic}</h3>
          </Col>
        </Row>
      </Card.Header>
      <Card.Body className="pt-2">
        <Row>
          <Col lg={7}>
            <div className="info">
              <p className="thesis-info-title">{t('carriera.proposte_di_tesi.relatori')}:</p>
              <CustomBadge
                variant="teacher"
                content={teachers.map(teacher => teacher.firstName + ' ' + teacher.lastName)}
              />
            </div>
            <Card.Text className="thesis-description">{props.description}</Card.Text>
          </Col>
          <Col lg={5} className="d-flex flex-column" style={{ gap: '.5rem' }}>
            <div className="info">
              <p className="thesis-info-title" style={{ minWidth: '7rem' }}>
                {t('carriera.proposta_di_tesi.ambiente')}:
              </p>
              <div className="custom-badge-container">
                {props.isInternal ? <CustomBadge variant="internal" /> : <CustomBadge variant="external" />}
                {props.isAbroad && <CustomBadge variant="abroad" />}
              </div>
            </div>
            {props.types.length > 0 && (
              <div className="info">
                <p className="thesis-info-title" style={{ minWidth: '7rem' }}>
                  {t('carriera.proposta_di_tesi.tipo')}:
                </p>
                <CustomBadge variant="type" content={props.types.map(type => type.type)} type="truncated" />
              </div>
            )}
            {props.keywords.length > 0 && (
              <div className="info">
                <p className="thesis-info-title" style={{ minWidth: '7rem' }}>
                  {t('carriera.proposte_di_tesi.keywords')}:
                </p>
                <CustomBadge
                  variant="keyword"
                  content={props.keywords.map(keyword => keyword.keyword)}
                  type="truncated"
                />
              </div>
            )}
          </Col>
        </Row>
      </Card.Body>
      <Card.Footer className="pt-3 mx-2 px-2">
        <Row className="d-flex align-items-center justify-content-between" style={{ gap: '1rem' }}>
          <Col lg={'auto'} md={'auto'} sm={'auto'} xs={'auto'}>
            <div className="info">
              <p className="thesis-info-title" style={{ minWidth: '7rem' }}>
                {t('carriera.proposta_di_tesi.stato')}:
              </p>
              <CustomBadge variant="status" content={props.expirationDate} />
            </div>
          </Col>
          <Col lg={'auto'} md={'auto'} sm={'auto'} xs={'auto'} className="ms-auto text-end">
            <Link to={`${props.id}`} style={{ textDecoration: 'none' }}>
              <Button className={`btn-${appliedTheme}`} size="sm" style={{ fontSize: 'var(--font-size-sm)' }}>
                {t('carriera.proposte_di_tesi.show_more')}
              </Button>
            </Link>
          </Col>
        </Row>
      </Card.Footer>
    </Card>
  );
}

ThesisItem.propTypes = {
  id: PropTypes.number.isRequired,
  topic: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  types: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      type: PropTypes.string.isRequired,
    }),
  ),
  supervisor: PropTypes.shape({
    id: PropTypes.number.isRequired,
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
  }).isRequired,
  internalCoSupervisors: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      firstName: PropTypes.string.isRequired,
      lastName: PropTypes.string.isRequired,
    }),
  ),
  expirationDate: PropTypes.string.isRequired,
  isInternal: PropTypes.bool.isRequired,
  isAbroad: PropTypes.bool.isRequired,
  keywords: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      keyword: PropTypes.string.isRequired,
    }),
  ),
};

export { ThesisItem };
