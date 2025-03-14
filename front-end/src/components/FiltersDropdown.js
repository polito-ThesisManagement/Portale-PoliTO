import React, { useContext, useEffect, useState } from 'react';

import { Badge, Button, Dropdown } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import Select from 'react-select';

import { t } from 'i18next';
import PropTypes from 'prop-types';

import API from '../API';
import { ThemeContext } from '../App';
import '../styles/custom-select.css';
import { getSystemTheme } from '../utils/utils';
import CustomBadge from './CustomBadge';
import CustomToggle from './CustomToggle';

export default function FiltersDropdown({ filters, applyFilters, resetFilters }) {
  const { theme } = useContext(ThemeContext);
  const appliedTheme = theme === 'auto' ? getSystemTheme() : theme;
  const { i18n } = useTranslation();

  const [isOpen, setIsOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
    environment: [
      { value: 1, label: t('carriera.proposte_di_tesi.internal_thesis'), variant: 'internal', type: 'environment' },
      { value: 2, label: t('carriera.proposte_di_tesi.external_thesis'), variant: 'external', type: 'environment' },
    ],
  });

  const [selected, setSelected] = useState({
    keywords: filters.keyword.map(k => formatFilter(k, 'keyword')),
    supervisors: filters.teacher.map(t => formatFilter(t, 'teacher')),
    types: filters.type.map(t => formatFilter(t, 'type')),
    location: getStaticOption('location', filters.isAbroad),
    environment: getStaticOption('environment', filters.isInternal),
  });

  const handleToggle = isOpen => {
    setIsOpen(isOpen);
  };

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
      environment: getStaticOption('environment', filters.isInternal),
    });
  }, [filters]);

  function formatFilter(item, variant) {
    return { value: item.id, label: item.type || item.keyword || `${item.lastName} ${item.firstName}`, variant };
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
    applyFilters('isInternal', selected.environment?.value ? selected.environment.value : 0);
    setIsOpen(false);
  }

  function handleResetFilters() {
    resetFilters();
    setIsOpen(false);
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
            name={name}
            defaultValue={selected[name]}
            options={options[name]}
            placeholder={isMenuOpen ? '' : t(`carriera.proposte_di_tesi.select_${name}`) + '...'}
            value={selected[name]}
            onChange={selected => setSelected(prev => ({ ...prev, [name]: selected }))}
            onMenuOpen={() => setIsMenuOpen(true)}
            onMenuClose={() => setIsMenuOpen(false)}
            className="multi-select"
            classNamePrefix="select"
            styles={{
              option: (basicStyles, state) => ({
                ...basicStyles,
                backgroundColor: state.isFocused ? 'var(--dropdown-hover)' : basicStyles.backgroundColor,
              }),
              placeholder: basicStyles => ({ ...basicStyles, color: 'var(--section-description)' }),
            }}
          />
        ) : (
          <Select
            isMulti={isMulti}
            isClearable={false}
            isSearchable={false}
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
                backgroundColor: state.isFocused ? 'var(--dropdown-hover)' : basicStyles.backgroundColor,
              }),
              placeholder: basicStyles => ({ ...basicStyles, color: 'var(--section-description)' }),
            }}
          />
        )}
      </>
    );
  }

  return (
    <Dropdown onToggle={handleToggle} show={isOpen} autoClose="outside" id={`dropdown-filters`}>
      <Dropdown.Toggle as={CustomToggle} className={`btn-${appliedTheme} custom-dropdown-toggle`}>
        <i className="fa-regular fa-filter" />
        {t('carriera.proposte_di_tesi.filtri')}
        {(filters.isInternal != 0 ||
          filters.isAbroad != 0 ||
          filters.keyword.length > 0 ||
          filters.type.length > 0 ||
          filters.teacher.length > 0) && (
          <Badge className={`squared-badge-${appliedTheme} badge-inline`}>
            {filters.keyword.length +
              filters.type.length +
              filters.teacher.length +
              (filters.isInternal != 0 ? 1 : 0) +
              (filters.isAbroad != 0 ? 1 : 0)}
          </Badge>
        )}
        {isOpen ? <i className="fa-solid fa-chevron-up" /> : <i className="fa-solid fa-chevron-down" />}
      </Dropdown.Toggle>

      <Dropdown.Menu className="custom-dropdown-menu" style={{ zIndex: '2' }}>
        <div className="filters-section">
          {renderSelect('location', false)}
          {renderSelect('environment', false)}
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
      </Dropdown.Menu>
    </Dropdown>
  );
}

const CustomSingleValue = ({ data, setSelected }) => {
  const handleRemove = () => {
    setSelected(prev => ({
      ...prev,
      [data.type === 'location' ? 'location' : 'environment']: 0,
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

FiltersDropdown.propTypes = {
  filters: PropTypes.object.isRequired,
  applyFilters: PropTypes.func.isRequired,
  resetFilters: PropTypes.func.isRequired,
};
