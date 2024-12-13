import React from 'react';

import { useTranslation } from 'react-i18next';

import PropTypes from 'prop-types';

import '../styles/ThesisProposals.css';

export default function ThesisProposalsToggle({ tab, handleTabChange }) {
  const { t } = useTranslation();

  return (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <div className="proposals-toggle-container">
        <div className={`proposals-toggle proposals-toggle-${tab}`}>
          <label htmlFor="proposals-toggle-radio1">{t('carriera.proposte_di_tesi.course_thesis')}</label>
          <input
            type="radio"
            id="proposals-toggle-radio1"
            name="proposals-radio"
            checked={tab === 'course'}
            style={{ display: 'none' }}
            onChange={() => handleTabChange('course')}
          />
          <label htmlFor="proposals-toggle-radio2">{t('carriera.proposte_di_tesi.all_thesis')}</label>
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
