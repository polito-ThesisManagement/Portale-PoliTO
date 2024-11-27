import React from 'react';

import { useTranslation } from 'react-i18next';
import { FaUniversity } from 'react-icons/fa';
import { FaCalendar, FaUser } from 'react-icons/fa6';
import { FaEarthAmericas } from 'react-icons/fa6';
import { HiBuildingOffice2 } from 'react-icons/hi2';
import { Link } from 'react-router-dom';

import PropTypes from 'prop-types';

import styles from '../styles/ThesisProposals.module.css';
import '../styles/Utilities.css';

export default function ThesisItem(props) {
  const { t } = useTranslation();

  function formatDate(date) {
    const dateObj = new Date(date);
    return dateObj.toLocaleDateString('it-IT', { year: 'numeric', month: 'numeric', day: 'numeric' });
  }

  return (
    <article className={styles.thesisItem}>
      <div className={styles.thesisItemContent}>
        <div className={styles.thesisItemMeta}>
          <div className={styles.thesisItemHeader}>
            <h3 className={styles.thesisTitle}>
              {props.topic}
              <div className={styles.thesisTypeTagGroup}>
                <span className={styles.thesisTypeTag}>
                  {props.where === 'P' ? (
                    <FaUniversity className={styles.thesisTypeIcon} />
                  ) : (
                    <HiBuildingOffice2 className={styles.thesisTypeIcon} />
                  )}
                  <span className={styles.thesisTypeText}>
                    {props.where === 'P'
                      ? t('carriera.proposte_di_tesi.internal_thesis')
                      : t('carriera.proposte_di_tesi.external_thesis')}
                  </span>
                </span>
                {props.foreign === 'S' && (
                  <div className={styles.thesisTypeTag}>
                    <FaEarthAmericas className={styles.thesisTypeIcon} />
                    <span className={styles.thesisTypeText}>{t('carriera.proposte_di_tesi.abroad_thesis')}</span>
                  </div>
                )}
              </div>
            </h3>
          </div>
          <div className={styles.tagGroup}>
            {props.keywords.map((keyword, index) => (
              <span key={index} className={styles.tag}>
                {keyword}
              </span>
            ))}
          </div>
        </div>
        <p className={styles.thesisDescription}>{props.description.slice(0, 350) + '...'}</p>
        <div className={styles.thesisMetaInfo}>
          <div className={styles.professorTagGroup}>
            {props.advisors.map(advisor => (
              <div key={advisor.matricola} className={styles.professorTag}>
                <FaUser className={styles.thesisTypeIcon} />
                <span key={advisor.matricola} className={styles.professorName}>
                  {advisor.name}
                </span>
              </div>
            ))}
          </div>
          {/*Qui i tag se non dovessero andare bene*/}
        </div>
        <footer className={styles.thesisItemFooter}>
          <div className={styles.expirationDate}>
            <div className={styles.thesisTypeTag}>
              <FaCalendar size={14} style={{ marginRight: '4px', verticalAlign: 'baseline' }} />
              <span className="course-detail">
                {t('carriera.proposte_di_tesi.created')} {formatDate(props.creation_date)}
              </span>
            </div>
          </div>
        </footer>
        <div className={styles.creationDate}>
          <Link to={`${props.ID}`} state={{ ...props }}>
            <button className={styles.showMoreButton}>{t('carriera.proposte_di_tesi.show_more')}</button>
          </Link>
          <div>
            <div className={styles.thesisTypeTag}>
              <FaCalendar size={14} style={{ marginRight: '4px', verticalAlign: 'baseline' }} />
              <span className="course-detail">
                {t('carriera.proposte_di_tesi.expires')} {formatDate(props.exp_date)}
              </span>
            </div>
          </div>
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
