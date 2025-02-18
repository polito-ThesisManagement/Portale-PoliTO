import React, { useContext, useEffect, useState } from 'react';

import { Button } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import Select from 'react-select';

import { t } from 'i18next';
import PropTypes from 'prop-types';

import API from '../API';
import { ThemeContext } from '../App';
import '../styles/custom-select.css';
import { getSystemTheme } from '../utils/utils';
import CustomBadge from './CustomBadge';

export default function FiltersPanel({ filters, applyFilters, resetFilters, setFiltersOpen }) {
  const { theme } = useContext(ThemeContext);
  const appliedTheme = theme === 'auto' ? getSystemTheme() : theme;
  const { i18n } = useTranslation();

  const filterOptions = {
    keywords: { api: API.getThesisProposalsKeywords, label: 'keyword' },
    supervisors: { api: API.getThesisProposalsTeachers, label: 'teacher' },
    types: { api: API.getThesisProposalsTypes, label: 'type' },
  };

  const [options, setOptions] = useState({
    keywords: [],
    supervisors: [],
    types: [],
    location: [
      { value: 1, label: t('carriera.proposte_di_tesi.italy_thesis'), variant: 'italy', type: 'location' },
      { value: 2, label: t('carriera.proposte_di_tesi.abroad_thesis'), variant: 'abroad', type: 'location' },
    ],
    mode: [
      { value: 1, label: t('carriera.proposte_di_tesi.internal_thesis'), variant: 'internal', type: 'mode' },
      { value: 2, label: t('carriera.proposte_di_tesi.external_thesis'), variant: 'external', type: 'mode' },
    ],
  });

  const [selected, setSelected] = useState({
    keywords: filters.keyword.map(k => formatFilter(k, 'keyword')),
    supervisors: filters.teacher.map(t => formatFilter(t, 'teacher')),
    types: filters.type.map(t => formatFilter(t, 'type')),
    location: getStaticOption('location', filters.isAbroad),
    mode: getStaticOption('mode', filters.isInternal),
  });

  const loadOptions = (key, data, label) => {
    setOptions(prev => ({
      ...prev,
      [key]: data.map(item => formatFilter(item, label)),
    }));
  };

  useEffect(() => {
    Object.entries(filterOptions).forEach(([key, { api, label }]) => {
      api(key !== 'supervisors' ? i18n.language : null).then(data => {
        loadOptions(key, data, label);
      });
    });
  }, [i18n.language]);

  useEffect(() => {
    setSelected({
      ...selected,
      keywords: filters.keyword.map(k => ({ value: k.id, label: k.content, variant: 'keyword' })),
      supervisors: filters.teacher.map(t => ({ value: t.id, label: t.content, variant: 'teacher' })),
      types: filters.type.map(t => ({ value: t.id, label: t.content, variant: 'type' })),
      location: getStaticOption('location', filters.isAbroad),
      mode: getStaticOption('mode', filters.isInternal),
    });
  }, [filters]);

  function formatFilter(item, variant) {
    return { value: item.id, label: item.type || item.keyword || `${item.firstName} ${item.lastName}`, variant };
  }

  function getStaticOption(type, value) {
    return options[type][value - 1];
  }

  function handleApplyFilters() {
    applyFilters(
      'teacher',
      selected.supervisors.map(s => ({ id: s.value, content: s.label })),
    );
    applyFilters(
      'keyword',
      selected.keywords.map(k => ({ id: k.value, content: k.label })),
    );
    applyFilters(
      'type',
      selected.types.map(t => ({ id: t.value, content: t.label })),
    );
    applyFilters('isAbroad', selected.location?.value ? selected.location.value : 0);
    applyFilters('isInternal', selected.mode?.value ? selected.mode.value : 0);
    setFiltersOpen(false);
  }

  function handleResetFilters() {
    resetFilters();
    setFiltersOpen(false);
  }

  function renderSelect(name, isMulti = true) {
    const customSingleValue = props => <CustomSingleValue {...props} setSelected={setSelected} />;

    return (
      <>
        <div className="filters-title">
          <div>{t(`carriera.proposte_di_tesi.${name}`)}</div>
          <Button
            className={`link-${appliedTheme}-dropdown p-0`}
            onClick={() => setSelected(prev => ({ ...prev, [name]: [] }))}
            variant="link"
            size="sm"
          >
            {t(`carriera.proposte_di_tesi.reset`)}
          </Button>
        </div>
        {isMulti ? (
          <Select
            isMulti={isMulti}
            isClearable={false}
            components={{ MultiValue: CustomMultiValue, IndicatorSeparator: () => null }}
            closeMenuOnSelect={false}
            name={name}
            defaultValue={selected[name]}
            options={options[name]}
            placeholder={t(`carriera.proposte_di_tesi.select_${name}`) + '...'}
            value={selected[name]}
            onChange={selected => setSelected(prev => ({ ...prev, [name]: selected }))}
            className="multi-select"
            classNamePrefix="select"
            styles={{
              option: (basicStyles, state) => ({
                ...basicStyles,
                backgroundColor: state.isFocused ? 'transparent' : basicStyles.backgroundColor,
              }),
              placeholder: basicStyles => ({ ...basicStyles, color: 'var(--section-description)' }),
            }}
          />
        ) : (
          <Select
            isMulti={isMulti}
            isClearable={false}
            components={{
              SingleValue: customSingleValue,
              IndicatorSeparator: () => null,
            }}
            name={name}
            key={'name ' + selected[name]}
            defaultValue={selected[name]}
            options={options[name]}
            placeholder={t(`carriera.proposte_di_tesi.select_${name}`) + '...'}
            value={selected[name]}
            onChange={selected => setSelected(prev => ({ ...prev, [name]: selected }))}
            className="single-select"
            classNamePrefix="select"
            styles={{
              option: (basicStyles, state) => ({
                ...basicStyles,
                backgroundColor: state.isFocused ? 'transparent' : basicStyles.backgroundColor,
              }),
              placeholder: basicStyles => ({ ...basicStyles, color: 'var(--section-description)' }),
            }}
          />
        )}
      </>
    );
  }

  return (
    <div className="filters-section">
      {renderSelect('location', false)}
      {renderSelect('mode', false)}
      {renderSelect('types')}
      {renderSelect('supervisors')}
      {renderSelect('keywords')}
      <hr className={`hr-${appliedTheme} w-100 my-2`} />
      <div className="d-flex w-100 justify-content-between">
        <Button className={`btn-outlined-${appliedTheme}`} onClick={handleResetFilters} size="sm">
          {t('carriera.proposte_di_tesi.reset')}
        </Button>
        <Button className={`btn-primary-${appliedTheme}`} onClick={handleApplyFilters} size="sm">
          {t('carriera.proposte_di_tesi.apply')}
        </Button>
      </div>
    </div>
  );
}

const CustomSingleValue = ({ data, setSelected }) => {
  const handleRemove = () => {
    setSelected(prev => ({
      ...prev,
      [data.type === 'location' ? 'location' : 'mode']: 0,
    }));
  };

  const removeProps = {
    onClick: handleRemove,
    onMouseDown: e => e.stopPropagation(),
    onTouchEnd: handleRemove,
  };

  return <CustomBadge variant={data.variant} type="reset" removeProps={removeProps} />;
};

const CustomMultiValue = ({ data, removeProps }) => {
  return (
    <CustomBadge
      variant={data.variant}
      type="reset"
      content={{ id: data.value, content: data.label }}
      removeProps={removeProps}
    />
  );
};

CustomSingleValue.propTypes = {
  data: PropTypes.shape({
    variant: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
  }).isRequired,
  setSelected: PropTypes.func.isRequired,
};

CustomMultiValue.propTypes = {
  data: PropTypes.shape({
    variant: PropTypes.string.isRequired,
    value: PropTypes.number.isRequired,
    label: PropTypes.string.isRequired,
  }).isRequired,
  removeProps: PropTypes.object.isRequired,
};

FiltersPanel.propTypes = {
  filters: PropTypes.object.isRequired,
  applyFilters: PropTypes.func.isRequired,
  resetFilters: PropTypes.func.isRequired,
  setFiltersOpen: PropTypes.func.isRequired,
};
