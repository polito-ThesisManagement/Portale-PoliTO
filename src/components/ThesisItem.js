import React from 'react';

import { Link } from 'react-router-dom';

import { FaUniversity } from 'react-icons/fa';
import { FaUser } from 'react-icons/fa6';
import { FaEarthAmericas } from 'react-icons/fa6';
import { HiBuildingOffice2 } from 'react-icons/hi2';

import PropTypes from 'prop-types';

import styles from '../styles/ThesisProposals.module.css';

export default function ThesisItem(props) {
  const { description, advisors, foreign } = props;
  return (
    <article className={styles.thesisItem}>
      <div className={styles.thesisItemContent}>
        <div className={styles.thesisItemMeta}>
          <h3 className={styles.thesisTitle}>{props.topic}</h3>
          <div className={styles.tagGroup}>
            {props.keywords.map((keyword, index) => (
              <span key={index} className={styles.tag}>
                {keyword}
              </span>
            ))}
          </div>
        </div>
        <p className={styles.thesisDescription}>{description.slice(0, 350) + '...'}</p>
        <div className={styles.thesisMetaInfo}>
          <div className={styles.professorTagGroup}>
            {advisors.map(advisor => (
              <div key={advisor.matricola} className={styles.professorTag}>
                <FaUser className={styles.thesisTypeIcon} />
                <span key={advisor.matricola} className={styles.professorName}>
                  {advisor.name}
                </span>
              </div>
            ))}
          </div>
          <div className={styles.thesisTypeTagGroup}>
            <span className={styles.thesisTypeTag}>
              {props.where === 'P' ? (
                <FaUniversity className={styles.thesisTypeIcon} />
              ) : (
                <HiBuildingOffice2 className={styles.thesisTypeIcon} />
              )}
              <span className={styles.thesisTypeText}>{props.where === 'P' ? 'Tesi interna' : 'Tesi in azienda'}</span>
            </span>
            {foreign === 'S' && (
              <div className={styles.thesisTypeTag}>
                <FaEarthAmericas className={styles.thesisTypeIcon} />
                <span className={styles.thesisTypeText}>Tesi all’estero</span>
              </div>
            )}
          </div>
        </div>
        <footer className={styles.thesisItemFooter}>
          <Link to={`${props.ID}`} state={{ ...props }}>
            <button className={styles.showMoreButton}>Mostra di più</button>
          </Link>
          <div className={styles.expirationDate}>
            <span className={styles.expirationDateLabel}>Data di scadenza: &nbsp;</span>
            <span className={styles.expirationDateValue}>{props.exp_date}</span>
          </div>
        </footer>
        <div className={styles.creationDate}>
          <span className={styles.creationDateLabel}>Data di creazione: &nbsp;</span>
          <span className={styles.creationDateValue}>{props.creation_date}</span>
        </div>
      </div>
    </article>
  );
}

ThesisItem.propTypes = {
  ID: PropTypes.number.isRequired,
  topic: PropTypes.string.isRequired,
  keywords: PropTypes.arrayOf(PropTypes.string).isRequired,
  description: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  required_skills: PropTypes.string.isRequired,
  additional_notes: PropTypes.string.isRequired,
  advisors: PropTypes.arrayOf(PropTypes.shape({ matricola: PropTypes.string, name: PropTypes.string })).isRequired,
  external_advisors: PropTypes.string.isRequired,
  thesis_types: PropTypes.arrayOf(PropTypes.string).isRequired,
  where: PropTypes.string.isRequired,
  foreign: PropTypes.string.isRequired,
  cds_type: PropTypes.string.isRequired,
  exp_date: PropTypes.string.isRequired,
  creation_date: PropTypes.string.isRequired,
};
