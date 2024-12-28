import React, { useContext, useEffect, useState } from 'react';

import { ButtonGroup, ToggleButton, ToggleButtonGroup } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import { FaBuildingCircleArrowRight, FaBuildingColumns, FaEarthAmericas } from 'react-icons/fa6';

import PropTypes from 'prop-types';

import { ThemeContext } from '../App';
import '../styles/FilterGroup.css';
import '../styles/Utilities.css';
import { getSystemTheme } from '../utils/utils';

export default function FilterGroup({ isAbroad, isInternal, handleCheckChange, handleRadioChange }) {
  const { theme } = useContext(ThemeContext);
  const { t } = useTranslation();
  const appliedTheme = theme === 'auto' ? getSystemTheme() : theme;

  const [checked, setChecked] = useState(isAbroad);
  const [radioValue, setRadioValue] = useState(isInternal);

  const radios = [
    { name: t('carriera.proposte_di_tesi.all_theses'), value: 0 },
    { name: t('carriera.proposte_di_tesi.internal_theses'), value: 1, icon: FaBuildingColumns },
    { name: t('carriera.proposte_di_tesi.external_theses'), value: 2, icon: FaBuildingCircleArrowRight },
  ];

  useEffect(() => {
    setChecked(isAbroad);
  }, [isAbroad]);

  return (
    <>
      <ToggleButtonGroup name="options" size="sm" type="radio">
        {radios.map(radio => (
          <ToggleButton
            checked={radioValue === radio.value}
            className={`radio-${radio.value}-${appliedTheme} ${radioValue === radio.value ? 'checked' : ''}`}
            id={`radio-${radio.value}`}
            key={radio.value}
            name="radio"
            onChange={e => {
              setRadioValue(Number(e.currentTarget.value));
              handleRadioChange(e.currentTarget.value);
            }}
            style={{
              display: 'flex',
              alignItems: 'center',
              fontFamily: 'var(--font-primary)',
              fontSize: 'var(--font-size-md)',
            }}
            type="radio"
            value={radio.value}
          >
            <>
              {radio.icon && (
                <radio.icon
                  size={radio.icon === FaBuildingColumns ? 14 : 16}
                  style={{ marginRight: '5px', alignItems: 'center' }}
                />
              )}
              {radio.name}
            </>
          </ToggleButton>
        ))}
      </ToggleButtonGroup>
      <ButtonGroup>
        <ToggleButton
          id="toggle-check"
          checked={checked}
          className={`toggle-check-${appliedTheme} ${checked ? 'checked' : ''}`}
          type="checkbox"
          variant="secondary"
          value="1"
          onChange={e => {
            setChecked(e.currentTarget.checked);
            handleCheckChange(e.currentTarget.checked);
          }}
          size="sm"
          style={{
            fontFamily: 'var(--font-primary)',
            fontSize: 'var(--font-size-md)',
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <FaEarthAmericas size={16} style={{ marginRight: '5px' }} />
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
