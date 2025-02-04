import React, { useContext } from 'react';

import { Button, Card, Col, OverlayTrigger, Row, Tooltip } from 'react-bootstrap';
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
  const { theme } = useContext(ThemeContext);
  const appliedTheme = theme === 'auto' ? getSystemTheme() : theme;

  const { t } = useTranslation();
  return (
    <Col xs={12} sm={12} md={12} lg={6} xl={6} className="mb-3">
      <Card className="mb-3 roundCard h-100 py-2">
        <Card.Header className="border-0">
          <Row>
            <Col xs={10} sm={10} md={10} lg={10} xl={10}>
              <h3 className="thesis-topic">{props.topic}</h3>
            </Col>
            <Col xs={2} sm={2} md={2} lg={2} xl={2} className="thesis-topic text-end">
              <OverlayTrigger
                key={`${props.isAbroad}`}
                delay={{ show: 250, hide: 400 }}
                overlay={
                  <Tooltip id={`tooltip-${props.isAbroad}`}>
                    {props.isAbroad
                      ? t('carriera.proposte_di_tesi.tesi_estero')
                      : t('carriera.proposte_di_tesi.tesi_italia')}
                  </Tooltip>
                }
                placement="bottom"
              >
                {props.isAbroad ? (
                  <i
                    className="fa-sharp-duotone fa-solid fa-earth-americas fa-xl"
                    style={{
                      '--fa-primary-color': 'var(--green-500)',
                      '--fa-secondary-color': 'var(--lightBlue-600)',
                      '--fa-secondary-opacity': '1',
                      height: '12px',
                    }}
                  />
                ) : (
                  <span className="fi fi-it" style={{ borderRadius: '3px' }} />
                )}
              </OverlayTrigger>
            </Col>
          </Row>
        </Card.Header>
        <Card.Body className="pt-2">
          <div className="custom-badge-container mb-2">
            <CustomBadge variant="status" content={props.expirationDate} />
            {props.isInternal ? <CustomBadge variant="internal" /> : <CustomBadge variant="external" />}
            <CustomBadge variant="type" content={props.types.map(type => type.type)} />
          </div>
          <div className="info-container mb-2">
            <div className="title-container">
              <i className="fa-regular fa-user fa-fw" />
              {t('carriera.proposte_di_tesi.relatori')}:
            </div>
            <CustomBadge
              variant="teacher"
              content={teachers.map(teacher => teacher.firstName + ' ' + teacher.lastName)}
            />
          </div>
          {props.keywords.length > 0 && (
            <div className="info-container mb-2">
              <div className="title-container">
                <i className="fa-regular fa-key fa-fw" />
                {t('carriera.proposte_di_tesi.keywords')}:
              </div>
              <CustomBadge
                variant="keyword"
                content={props.keywords.map(keyword => keyword.keyword)}
                type="truncated"
              />
            </div>
          )}
          <Card.Text className="thesis-description">{props.description}</Card.Text>
        </Card.Body>
        <Card.Footer className="mx-2 px-2 d-flex justify-content-end border-0">
          <Link to={`${props.id}`} style={{ textDecoration: 'none' }}>
            <Button className={`btn-${appliedTheme}`} size="md">
              {t('carriera.proposte_di_tesi.show_more')}
            </Button>
          </Link>
        </Card.Footer>
      </Card>
    </Col>
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
