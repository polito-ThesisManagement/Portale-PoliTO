import React from 'react';

import { Button } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import { FaUniversity } from 'react-icons/fa';
import { FaCalendar, FaEarthAmericas } from 'react-icons/fa6';
import { HiBuildingOffice2 } from 'react-icons/hi2';
import { Link } from 'react-router-dom';

import PropTypes from 'prop-types';

import '../styles/Theme.css';
import '../styles/ThesisItem.css';
import '../styles/Utilities.css';
import Badge from './Badge';

function formatDate(date) {
  const dateObj = new Date(date);
  return dateObj.toLocaleDateString('it-IT', { year: 'numeric', month: 'numeric', day: 'numeric' });
}
function ThesisItem(props) {
  return (
    <article className="thesis-article">
      <div>
        <ThesisHeader
          topic={props.topic}
          isInternal={props.isInternal}
          isAbroad={props.isAbroad}
          keywords={props.keywords}
        />
        <p className="thesis-description">{props.description.slice(0, 350) + '...'}</p>
        <div className="thesis-professor-tags">
          <ThesisProfessorTags supervisor={props.supervisor} internalCoSupervisors={props.internalCoSupervisors} />
        </div>
        <ThesisFooter id={props.id} creationDate={props.creationDate} expirationDate={props.expirationDate} />
      </div>
    </article>
  );
}

const ThesisHeader = ({ topic, isInternal, isAbroad, keywords }) => {
  const { t } = useTranslation();

  return (
    <div>
      <h3 className="thesis-topic">
        {' '}
        {topic}
        <div className="thesis-type-tags">
          {isInternal ? (
            <GenericTag text={t('carriera.proposte_di_tesi.internal_thesis')} icon={<FaUniversity />} />
          ) : (
            <GenericTag text={t('carriera.proposte_di_tesi.external_thesis')} icon={<HiBuildingOffice2 />} />
          )}
          {isAbroad && <GenericTag text={t('carriera.proposte_di_tesi.abroad_thesis')} icon={<FaEarthAmericas />} />}
        </div>
        <div className="thesis-keyword-tags">
          {keywords.map(keyword => (
            <Badge key={keyword.id} variant={'keyword'} content={keyword.keyword} />
          ))}
        </div>
      </h3>
    </div>
  );
};

const GenericTag = ({ text, icon }) => {
  return (
    <span className="thesis-tag">
      {icon} <span style={{ marginLeft: '0.25rem' }}>{text}</span>
    </span>
  );
};

const ShowMore = ({ id }) => {
  const { t } = useTranslation();

  return (
    <Link to={`${id}`}>
      <Button className="show-more-button">{t('carriera.proposte_di_tesi.show_more')}</Button>
    </Link>
  );
};

const ThesisProfessorTags = ({ supervisor, internalCoSupervisors }) => {
  return (
    <div
      style={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: '0.5rem',
      }}
    >
      <Badge key={supervisor.id} variant={'teacher'} content={supervisor.firstName + ' ' + supervisor.lastName} />
      {internalCoSupervisors &&
        internalCoSupervisors.map(coSupervisor => (
          <Badge
            key={coSupervisor.id}
            variant={'teacher'}
            content={coSupervisor.firstName + ' ' + coSupervisor.lastName}
          />
        ))}
    </div>
  );
};

const ThesisFooter = ({ id, creationDate, expirationDate }) => {
  const { t } = useTranslation();

  return (
    <>
      <footer className="thesis-footer-container>">
        <div className="thesis-dates">
          <div>
            <GenericTag
              text={t('carriera.proposte_di_tesi.created') + ' ' + formatDate(creationDate)}
              icon={<FaCalendar />}
            />
          </div>
        </div>
      </footer>
      <div className="thesis-footer-lower">
        <ShowMore id={id} />
        <div>
          <div>
            <GenericTag
              text={t('carriera.proposte_di_tesi.expires') + ' ' + formatDate(expirationDate)}
              icon={<FaCalendar />}
            />
          </div>
        </div>
      </div>
    </>
  );
};

ThesisHeader.propTypes = {
  topic: PropTypes.string.isRequired,
  isInternal: PropTypes.bool.isRequired,
  isAbroad: PropTypes.bool.isRequired,
  keywords: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      keyword: PropTypes.string.isRequired,
    }),
  ),
};

ThesisFooter.propTypes = {
  id: PropTypes.number.isRequired,
  creationDate: PropTypes.string.isRequired,
  expirationDate: PropTypes.string.isRequired,
};

ThesisProfessorTags.propTypes = {
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
};

GenericTag.propTypes = {
  text: PropTypes.string.isRequired,
  icon: PropTypes.element.isRequired,
};

ShowMore.propTypes = {
  id: PropTypes.number.isRequired,
};

ThesisItem.propTypes = {
  id: PropTypes.number.isRequired,
  topic: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
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
  creationDate: PropTypes.string.isRequired,
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

export { ThesisItem, GenericTag, ThesisHeader, ThesisFooter, ThesisProfessorTags, ShowMore };
