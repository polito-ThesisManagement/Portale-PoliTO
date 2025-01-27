import React, { useContext } from 'react';

import { ButtonGroup, ToggleButton, ToggleButtonGroup } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import { FaBuildingCircleArrowRight, FaBuildingColumns, FaEarthAmericas } from 'react-icons/fa6';

import PropTypes from 'prop-types';

import { ThemeContext } from '../App';
import '../styles/FilterGroup.css';
import '../styles/Utilities.css';
import { getSystemTheme } from '../utils/utils';

export default function FilterGroup({ isAbroad, isInternal, handleCheckChange, handleRadioChange }) {
  const { t } = useTranslation();
  const { theme } = useContext(ThemeContext);
  const appliedTheme = theme === 'auto' ? getSystemTheme() : theme;

  const radios = [
    { name: t('carriera.proposte_di_tesi.all_theses'), value: 0 },
    { name: t('carriera.proposte_di_tesi.internal_theses'), value: 1, icon: FaBuildingColumns },
    { name: t('carriera.proposte_di_tesi.external_theses'), value: 2, icon: FaBuildingCircleArrowRight },
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
              {radio.icon && <radio.icon className="radio-icon" size={radio.icon === FaBuildingColumns ? 14 : 16} />}
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
          <FaEarthAmericas size={16} />
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
