import React from 'react';

import { useTranslation } from 'react-i18next';
import { FaUniversity } from 'react-icons/fa';
import { FaCalendar, FaEarthAmericas, FaUser } from 'react-icons/fa6';
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
                  {props.isInternal ? (
                    <FaUniversity className={styles.thesisTypeIcon} />
                  ) : (
                    <HiBuildingOffice2 className={styles.thesisTypeIcon} />
                  )}
                  <span className={styles.thesisTypeText}>
                    {props.isInternal
                      ? t('carriera.proposte_di_tesi.internal_thesis')
                      : t('carriera.proposte_di_tesi.external_thesis')}
                  </span>
                </span>
                {props.isAbroad && (
                  <div className={styles.thesisTypeTag}>
                    <FaEarthAmericas className={styles.thesisTypeIcon} />
                    <span className={styles.thesisTypeText}>{t('carriera.proposte_di_tesi.abroad_thesis')}</span>
                  </div>
                )}
              </div>
            </h3>
          </div>
          <div className={styles.tagGroup}>
            {props.keywords.map(keyword => (
              <span key={keyword.id} className={styles.tag}>
                {keyword.keyword}
              </span>
            ))}
          </div>
        </div>
        <p className={styles.thesisDescription}>{props.description.slice(0, 350) + '...'}</p>
        <div className={styles.thesisMetaInfo}>
          <div className={styles.professorTagGroup}>
            <div key={props.supervisor.id} className={styles.professorTag}>
              <FaUser className={styles.thesisTypeIcon} />
              <span key={props.supervisor.id} className={styles.professorName}>
                {props.supervisor.first_name} {props.supervisor.last_name}
              </span>
            </div>
            {props.internalCoSupervisors.map(coSupervisor => (
              <div key={coSupervisor.id} className={styles.professorTag}>
                <FaUser className={styles.thesisTypeIcon} />
                <span key={coSupervisor.id} className={styles.professorName}>
                  {coSupervisor.first_name} {coSupervisor.last_name}
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
                {t('carriera.proposte_di_tesi.created')} {formatDate(props.creationDate)}
              </span>
            </div>
          </div>
        </footer>
        <div className={styles.creationDate}>
          <Link to={`${props.id}`}>
            <button className={styles.showMoreButton}>{t('carriera.proposte_di_tesi.show_more')}</button>
          </Link>
          <div>
            <div className={styles.thesisTypeTag}>
              <FaCalendar size={14} style={{ marginRight: '4px', verticalAlign: 'baseline' }} />
              <span className="course-detail">
                {t('carriera.proposte_di_tesi.expires')} {formatDate(props.expirationDate)}
              </span>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}

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
