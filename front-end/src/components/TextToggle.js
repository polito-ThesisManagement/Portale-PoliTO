import React from 'react';

import { FaSortAmountDownAlt, FaSortAmountUpAlt } from 'react-icons/fa';

import PropTypes from 'prop-types';

import '../styles/ThesisProposals.css';

export default function TextToggle({ field, handleFieldChange }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <div className="text-toggle-container">
        <div className="text-toggle">
          <label htmlFor="text-toggle-radio1">
            <FaSortAmountUpAlt /> Crescente
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
            Decrescente <FaSortAmountDownAlt />
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
