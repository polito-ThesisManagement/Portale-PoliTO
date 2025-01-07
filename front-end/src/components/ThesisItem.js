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
  const teachers = [props.supervisor, ...props.internalCoSupervisors];
  return (
    <div className="thesis-overview">
      <ThesisHeader
        topic={props.topic}
        types={props.types}
        isInternal={props.isInternal}
        isAbroad={props.isAbroad}
        filters={props.filters}
        applyFilters={props.applyFilters}
      />
      <p className="thesis-description">{props.description}</p>
      {props.keywords.length > 0 && (
        <div className="thesis-keyword-tags">
          <Badge
            variant="keyword"
            content={props.keywords.map(keyword => ({ content: keyword.keyword, id: keyword.id }))}
            filters={props.filters}
            applyFilters={props.applyFilters}
          />
        </div>
      )}
      <div className="thesis-professor-tags">
        <Badge
          variant={'teacher'}
          content={teachers.map(teacher => ({ content: teacher.firstName + ' ' + teacher.lastName, id: teacher.id }))}
          filters={props.filters}
          applyFilters={props.applyFilters}
        />
      </div>
      <ThesisFooter id={props.id} creationDate={props.creationDate} expirationDate={props.expirationDate} />
    </div>
  );
}

const ThesisHeader = ({ topic, types, isInternal, isAbroad, filters, applyFilters }) => {
  return (
    <>
      <div className="thesis-header">
        <h3 className="thesis-topic">{topic}</h3>
        <div className="thesis-position-tags">
          {isInternal ? (
            <Badge variant={'internal'} applyFilters={applyFilters} />
          ) : (
            <Badge variant={'external'} applyFilters={applyFilters} />
          )}
          {isAbroad && <Badge variant={'abroad'} applyFilters={applyFilters} />}
        </div>
      </div>
      {types.length > 0 && (
        <div className="thesis-type-tags">
          <Badge
            variant="type"
            content={types.map(type => ({ content: type.type, id: type.id }))}
            filters={filters}
            applyFilters={applyFilters}
          />
        </div>
      )}
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
  types: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      type: PropTypes.string.isRequired,
    }),
  ),
  filters: PropTypes.object,
  applyFilters: PropTypes.func,
};

ThesisFooter.propTypes = {
  id: PropTypes.number.isRequired,
  creationDate: PropTypes.string.isRequired,
  expirationDate: PropTypes.string.isRequired,
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
  filters: PropTypes.object,
  applyFilters: PropTypes.func,
};

export { ThesisItem, ThesisHeader, ThesisFooter, ShowMore };
