import React, { useContext } from 'react';

import { Button } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import { FaCalendar } from 'react-icons/fa6';
import { Link } from 'react-router-dom';

import PropTypes from 'prop-types';

import { ThemeContext } from '../App';
import '../styles/Theme.css';
import '../styles/ThesisItem.css';
import '../styles/Utilities.css';
import { getSystemTheme } from '../utils/utils';
import Badge from './Badge';

function formatDate(date) {
  const dateObj = new Date(date);
  return dateObj.toLocaleDateString('it-IT', { year: 'numeric', month: 'numeric', day: 'numeric' });
}
function ThesisItem(props) {
  return (
    <article className="thesis-article">
      <div style={{ width: '100%' }}>
        <ThesisHeader
          topic={props.topic}
          types={props.types}
          isInternal={props.isInternal}
          isAbroad={props.isAbroad}
          keywords={props.keywords}
        />
        <p className="thesis-description">{props.description}</p>
        <div className="thesis-professor-tags">
          <ThesisProfessorTags supervisor={props.supervisor} internalCoSupervisors={props.internalCoSupervisors} />
        </div>
        <ThesisFooter id={props.id} creationDate={props.creationDate} expirationDate={props.expirationDate} />
      </div>
    </article>
  );
}

const ThesisHeader = ({ topic, types, isInternal, isAbroad, keywords }) => {
  return (
    <div>
      <h3 className="thesis-topic">
        {' '}
        {topic}
        {types.length === 0 && (
          <div className="thesis-position-tags">
            {isInternal ? <Badge variant={'internal'} /> : <Badge variant={'external'} />}
            {isAbroad && <Badge variant={'abroad'} />}
          </div>
        )}
      </h3>
      {types.length > 0 && (
        <div className="thesis-tags" style={{ marginTop: '1rem', marginBottom: '1rem' }}>
          <div className="thesis-type-tags">
            {types.map(type => (
              <Badge key={type.id} variant={'type'} content={type.type} />
            ))}
          </div>
          <div className="thesis-position-tags">
            {isInternal ? <Badge variant={'internal'} /> : <Badge variant={'external'} />}
            {isAbroad && <Badge variant={'abroad'} />}
          </div>
        </div>
      )}
      <div className="thesis-keyword-tags">
        {keywords.map(keyword => (
          <Badge key={keyword.id} variant={'keyword'} content={keyword.keyword} />
        ))}
      </div>
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
  const { theme } = useContext(ThemeContext);
  const appliedTheme = theme === 'auto' ? getSystemTheme() : theme;
  return (
    <Link to={`${id}`}>
      <Button className={`btn-${appliedTheme}`} size="sm">
        {t('carriera.proposte_di_tesi.show_more')}
      </Button>
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
          <GenericTag
            text={t('carriera.proposte_di_tesi.created') + ' ' + formatDate(creationDate)}
            icon={<FaCalendar />}
          />
        </div>
      </footer>
      <div className="thesis-footer-lower">
        <ShowMore id={id} />
        <GenericTag
          text={t('carriera.proposte_di_tesi.expires') + ' ' + formatDate(expirationDate)}
          icon={<FaCalendar />}
        />
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
  types: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      type: PropTypes.string.isRequired,
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
