import React from 'react';

import { useTranslation } from 'react-i18next';

import PropTypes from 'prop-types';

import '../styles/ThesisProposalsToggle.css';

export default function ThesisProposalsToggle({ tab, handleTabChange }) {
  const { t, i18n } = useTranslation();

  return (
    <div style={{ display: 'flex', alignItems: 'center', width: '100%', maxWidth: '380px' }}>
      <div className="proposals-toggle-container">
        <div className={`proposals-toggle proposals-toggle-${tab}-${i18n.language} proposals-toggle-${i18n.language}`}>
          <label htmlFor="proposals-toggle-radio1">{t('carriera.proposte_di_tesi.course_proposals')}</label>
          <input
            type="radio"
            id="proposals-toggle-radio1"
            name="proposals-radio"
            checked={tab === 'course'}
            style={{ display: 'none' }}
            onChange={() => handleTabChange('course')}
          />
          <label htmlFor="proposals-toggle-radio2">{t('carriera.proposte_di_tesi.all_proposals')}</label>
          <input
            type="radio"
            id="proposals-toggle-radio2"
            name="proposals-radio"
            checked={tab === 'all'}
            style={{ display: 'none' }}
            onChange={() => handleTabChange('all')}
          />
        </div>
      </div>
    </div>
  );
}

ThesisProposalsToggle.propTypes = {
  tab: PropTypes.string.isRequired,
  handleTabChange: PropTypes.func.isRequired,
};
