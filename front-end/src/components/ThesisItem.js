import React, { useState } from 'react';

import { Button } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import { FaUniversity } from 'react-icons/fa';
import { FaCalendar, FaEarthAmericas, FaUser } from 'react-icons/fa6';
import { HiBuildingOffice2 } from 'react-icons/hi2';
import { Link } from 'react-router-dom';

import PropTypes from 'prop-types';

import '../styles/Theme.css';
import styles from '../styles/ThesisProposals.module.css';
import '../styles/Utilities.css';

function formatDate(date) {
  const dateObj = new Date(date);
  return dateObj.toLocaleDateString('it-IT', { year: 'numeric', month: 'numeric', day: 'numeric' });
}
function ThesisItem(props) {
  return (
    <article
      style={{
        border: '0.0625rem solid var(--background)',
        borderRadius: '1rem',
        alignItems: 'flex-start',
        backgroundColor: 'var(--surface)',
        display: 'flex',
        gap: '40px',
        maxWidth: '100%',
        overflow: 'hidden',
        justifyContent: 'flex-start',
        paddingLeft: '1rem',
        paddingRight: '1rem',
        paddingBottom: '1.75rem',
        paddingTop: '1.75rem',
      }}
    >
      <div>
        <ThesisHeader
          topic={props.topic}
          isInternal={props.isInternal}
          isAbroad={props.isAbroad}
          keywords={props.keywords}
        />
        <p
          style={{
            color: 'var(--text)',
            fontFamily: 'var(--font-primary)',
            fontSize: 'var(--font-size-sm)',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            whiteSpace: 'normal',
            wordBreak: 'break-word',
          }}
        >
          {props.description.slice(0, 350) + '...'}
        </p>
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '1rem',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
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
      <h3
        style={{
          width: '100%',
          overflow: 'hidden',
          color: 'var(--text)',
          fontFamily: 'var(--font-primary)',
          fontSize: 'var(--font-size-lg)',
          display: 'flex',
          flexWrap: 'wrap',
          gap: '0.5rem',
          justifyContent: 'space-between',
        }}
      >
        {' '}
        {topic}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            flexDirection: 'row',
            justifyContent: 'flex-end',
            gap: '0.5rem',
          }}
        >
          {isInternal ? (
            <GenericTag text={t('carriera.proposte_di_tesi.internal_thesis')} icon={<FaUniversity />} />
          ) : (
            <GenericTag text={t('carriera.proposte_di_tesi.external_thesis')} icon={<HiBuildingOffice2 />} />
          )}
          {isAbroad && <GenericTag text={t('carriera.proposte_di_tesi.abroad_thesis')} icon={<FaEarthAmericas />} />}
        </div>
        <div
          style={{
            display: 'flex',
            marginTop: '0.6rem',
            width: '100%',
            alignItems: 'flex-start',
            gap: '0.375rem',
            color: 'var(--background)',
            justifyContent: 'flex-start',
            flexWrap: 'wrap',
          }}
        >
          {keywords.map(keyword => (
            <Keyword key={keyword.id} keyword={keyword} />
          ))}
        </div>
      </h3>
    </div>
  );
};

const GenericTag = ({ text, icon }) => {
  return (
    <span
      style={{
        alignItems: 'center',
        borderRadius: '0.375rem',
        border: '0.0625rem solid var(--type-tag-border)',
        padding: '0px 6px',
        backgroundColor: 'var(--type-tag-bg)',
        color: 'var(--type-tag-text)',
        display: 'flex',
        justifyContent: 'center',
        fontFamily: 'var(--font-primary)',
        fontSize: 'var(--font-size-sm)',
        height: '1.5rem',
      }}
    >
      {icon} <span style={{ marginLeft: '0.25rem' }}>{text}</span>
    </span>
  );
};

const Keyword = ({ keyword }) => {
  return (
    <span
      key={keyword.id}
      style={{
        alignSelf: 'stretch',
        borderRadius: '0.5rem',
        border: '0.0625rem solid var(--tag-border)',
        backgroundColor: 'var(--tag-bg)',
        color: 'var(--tag-text)',
        gap: '0.25rem',
        overflow: 'hidden',
        fontFamily: 'var(--font-primary)',
        padding: '0px 6px',
        fontSize: 'var(--font-size-md)',
      }}
    >
      {keyword.keyword}
    </span>
  );
};

const ProfessorTag = ({ supervisor }) => {
  return (
    <div
      key={supervisor.id}
      style={{
        alignItems: 'center',
        borderRadius: '0.375rem',
        border: '0.0625rem solid rgba(var(--professor-tag), 0.8)',
        backgroundColor: 'rgba(var(--professor-tag), 0.25)',
        display: 'flex',
        justifyContent: 'flex-start',
        color: 'rgba(var(--professor-tag), 1)',
        padding: '0px 6px',
        fontFamily: 'var(--font-primary)',
        fontSize: 'var(--font-size-md)',
      }}
    >
      <FaUser className={styles.thesisTypeIcon} />
      <span
        key={supervisor.id}
        style={{
          alignSelf: 'stretch',
          overflow: 'hidden',
          margin: 'auto 0',
        }}
      >
        {supervisor.first_name} {supervisor.last_name}
      </span>
    </div>
  );
};

const ShowMore = ({ id }) => {
  const { t } = useTranslation();
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const buttonStyle = {
    border: '0.0625rem solid var(--text)',
    borderRadius: '0.5rem',
    backgroundColor: 'var(--surface)',
    minHeight: '1.375rem',
    color: 'var(--text)',
    textAlign: 'center',
    padding: '0 6px',
    cursor: 'pointer',
    maxWidth: '200px',
    transition: 'background-color 0.3s ease, box-shadow 0.3s ease',
    fontFamily: 'var(--font-primary)',
    fontSize: 'var(--font-size-sm)',
    ...(isHovered && {
      backgroundColor: 'var(--background)',
      color: 'var(--text)',
    }),
  };

  return (
    <Link to={`${id}`}>
      <Button style={buttonStyle} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
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
      <ProfessorTag supervisor={supervisor} />
      {internalCoSupervisors &&
        internalCoSupervisors.map(coSupervisor => <ProfessorTag key={coSupervisor.id} supervisor={coSupervisor} />)}
    </div>
  );
};

const ThesisFooter = ({ id, creationDate, expirationDate }) => {
  const { t } = useTranslation();

  return (
    <>
      <footer
        style={{
          position: 'relative',
          display: 'flex',
          flexWrap: 'wrap',
          marginTop: '0.5rem',
          minHeight: '22px',
          width: '100%',
          alignItems: 'flex-start',
          gap: '1rem',
          justifyContent: 'flex-start',
          fontFamily: 'var(--font-primary)',
          fontSize: 'var(--font-size-sm)',
        }}
      >
        <div
          style={{
            position: 'relative',
            overflow: 'hidden',
            whiteSpace: 'nowrap',
            marginLeft: 'auto',
            color: 'var(--text)',
            fontFamily: 'var(--font-primary)',
            fontSize: 'var(--font-size-sm)',
          }}
        >
          <div className={styles.thesisTypeTag}>
            <GenericTag
              text={t('carriera.proposte_di_tesi.created') + ' ' + formatDate(creationDate)}
              icon={<FaCalendar />}
            />
          </div>
        </div>
      </footer>
      <div
        style={{
          position: 'relative',
          overflow: 'hidden',
          fontFamily: 'var(--font-primary)',
          fontSize: 'var(--font-size-sm)',
          fontWeight: '400',
          color: 'var(--text)',
          marginRight: '0',
          display: 'flex',
          justifyContent: 'space-between',
          marginTop: '6px',
        }}
      >
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

export { ThesisItem, ProfessorTag };

ProfessorTag.propTypes = {
  supervisor: PropTypes.shape({
    id: PropTypes.number.isRequired,
    first_name: PropTypes.string.isRequired,
    last_name: PropTypes.string.isRequired,
  }).isRequired,
};

Keyword.propTypes = {
  keyword: PropTypes.shape({
    id: PropTypes.number.isRequired,
    keyword: PropTypes.string.isRequired,
  }).isRequired,
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
    first_name: PropTypes.string.isRequired,
    last_name: PropTypes.string.isRequired,
  }).isRequired,
  internalCoSupervisors: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      first_name: PropTypes.string.isRequired,
      last_name: PropTypes.string.isRequired,
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
    first_name: PropTypes.string.isRequired,
    last_name: PropTypes.string.isRequired,
  }).isRequired,
  internalCoSupervisors: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      first_name: PropTypes.string.isRequired,
      last_name: PropTypes.string.isRequired,
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
