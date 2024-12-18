import React from 'react';

import { useTranslation } from 'react-i18next';
import { FaSortAmountDownAlt, FaSortAmountUpAlt } from 'react-icons/fa';

import PropTypes from 'prop-types';

import '../styles/ThesisProposals.css';

export default function TextToggle({ field, handleFieldChange }) {
  const { t } = useTranslation();
  return (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <div className="text-toggle-container">
        <div className="text-toggle">
          <label htmlFor="text-toggle-radio1">
            <FaSortAmountUpAlt /> {t('carriera.proposte_di_tesi.ascending')}
          </label>
          <input
            type="radio"
            id="text-toggle-radio1"
            name="text-toggle-radio"
            checked={field === 'ASC'}
            style={{ display: 'none' }}
            onChange={() => handleFieldChange('ASC')}
          />
          <label htmlFor="text-toggle-radio2">
            {t('carriera.proposte_di_tesi.descending')} <FaSortAmountDownAlt />
          </label>
          <input
            type="radio"
            id="text-toggle-radio2"
            name="text-toggle-radio"
            checked={field === 'DESC'}
            style={{ display: 'none' }}
            onChange={() => handleFieldChange('DESC')}
          />
        </div>
      </div>
    </div>
  );
}

TextToggle.propTypes = {
  field: PropTypes.string.isRequired,
  handleFieldChange: PropTypes.func.isRequired,
};
