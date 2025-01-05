import React, { useContext } from 'react';

import { Button } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
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
    <div className="thesis-overview">
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
  );
}

const ThesisHeader = ({ topic, types, isInternal, isAbroad, keywords }) => {
  return (
    <>
      <div className="thesis-header">
        <h3 className="thesis-topic">{topic}</h3>
        <div className="thesis-position-tags">
          {isInternal ? <Badge variant={'internal'} /> : <Badge variant={'external'} />}
          {isAbroad && <Badge variant={'abroad'} />}
        </div>
      </div>
      {types.length > 0 && (
        <div className="thesis-type-tags">
          <Badge variant="type" content={types.map(item => item.type)} />
        </div>
      )}
      <Badge variant="keyword" content={keywords.map(item => item.keyword)} />
    </>
  );
};

const ShowMore = ({ id }) => {
  const { t } = useTranslation();
  const { theme } = useContext(ThemeContext);
  const appliedTheme = theme === 'auto' ? getSystemTheme() : theme;
  return (
    <Link to={`${id}`} className="show-more-button">
      <Button className={`btn-${appliedTheme}`} size="sm">
        {t('carriera.proposte_di_tesi.show_more')}
      </Button>
    </Link>
  );
};

const ThesisProfessorTags = ({ supervisor, internalCoSupervisors }) => {
  const teachers = [supervisor, ...internalCoSupervisors];
  return <Badge variant={'teacher'} content={teachers.map(teacher => teacher.firstName + ' ' + teacher.lastName)} />;
};

const ThesisFooter = ({ id, creationDate, expirationDate }) => {
  const { t } = useTranslation();
  return (
    <div className="thesis-footer">
      <ShowMore id={id} />
      <div className="thesis-dates">
        <Badge variant={'date'} content={t('carriera.proposte_di_tesi.created') + ' ' + formatDate(creationDate)} />
        <Badge variant={'date'} content={t('carriera.proposte_di_tesi.expires') + ' ' + formatDate(expirationDate)} />
      </div>
    </div>
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

export { ThesisItem, ThesisHeader, ThesisFooter, ThesisProfessorTags, ShowMore };
