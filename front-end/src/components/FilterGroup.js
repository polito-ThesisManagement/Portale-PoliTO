import React, { useContext } from 'react';

import { ButtonGroup, ToggleButton, ToggleButtonGroup } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';

import { faBuildingCircleArrowRight, faBuildingColumns, faEarthAmericas } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';

import { ThemeContext } from '../App';
import '../styles/filter-group.css';
import '../styles/utilities.css';
import { getSystemTheme } from '../utils/utils';

export default function FilterGroup({ isAbroad, isInternal, handleCheckChange, handleRadioChange }) {
  const { t } = useTranslation();
  const { theme } = useContext(ThemeContext);
  const appliedTheme = theme === 'auto' ? getSystemTheme() : theme;

  const radios = [
    { name: t('carriera.proposte_di_tesi.all_theses'), value: 0 },
    { name: t('carriera.proposte_di_tesi.internal_theses'), value: 1, icon: faBuildingColumns },
    { name: t('carriera.proposte_di_tesi.external_theses'), value: 2, icon: faBuildingCircleArrowRight },
  ];

  return (
    <>
      <ToggleButtonGroup name="options" size="sm" type="radio">
        {radios.map(radio => (
          <ToggleButton
            checked={isInternal === radio.value}
            className={`radio-${radio.value}-${appliedTheme} ${isInternal === radio.value ? 'checked' : ''} d-flex align-items-center`}
            id={`radio-${radio.value}`}
            key={radio.value}
            name="radio"
            onChange={e => {
              handleRadioChange(Number(e.currentTarget.value));
            }}
            style={{
              fontSize: 'var(--font-size-sm)',
              fontWeight: 'var(--font-weight-medium)',
              gap: '.5rem',
            }}
            type="radio"
            value={radio.value}
          >
            <>
              {radio.icon && <FontAwesomeIcon icon={radio.icon} />}
              {radio.name}
            </>
          </ToggleButton>
        ))}
      </ToggleButtonGroup>
      <ButtonGroup>
        <ToggleButton
          id="toggle-check"
          checked={isAbroad}
          className={`toggle-check-${appliedTheme} ${isAbroad ? 'checked' : ''} d-flex align-items-center`}
          type="checkbox"
          value="1"
          onChange={e => {
            handleCheckChange(e.currentTarget.checked);
          }}
          size="sm"
          style={{
            fontSize: 'var(--font-size-sm)',
            fontWeight: 'var(--font-weight-medium)',
            gap: '.5rem',
            height: 'fit-content',
          }}
        >
          <FontAwesomeIcon icon={faEarthAmericas} />
          {t('carriera.proposte_di_tesi.abroad_theses')}
        </ToggleButton>
      </ButtonGroup>
    </>
  );
}

FilterGroup.propTypes = {
  isAbroad: PropTypes.bool,
  isInternal: PropTypes.number,
  handleCheckChange: PropTypes.func,
  handleRadioChange: PropTypes.func,
};
