import React, { useContext } from 'react';

import { Accordion, Badge } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import { FaFilter, FaKey, FaTags, FaUser } from 'react-icons/fa6';

import PropTypes from 'prop-types';

import API from '../API';
import { ThemeContext } from '../App';
import { getSystemTheme } from '../utils/utils';
import CustomBadge from './CustomBadge';
import FilterDropdown from './FilterDropdown';
import FilterGroup from './FilterGroup';
import ResetButton from './ResetButton';
import SortDropdown from './SortDropdown';

export default function FiltersAccordion({
  accordionOpen,
  setAccordionOpen,
  filters,
  applyFilters,
  resetFilters,
  sortFields,
  sorting,
  applySorting,
}) {
  const { theme } = useContext(ThemeContext);
  const { t } = useTranslation();
  const appliedTheme = theme === 'auto' ? getSystemTheme() : theme;

  return (
    <Accordion activeKey={accordionOpen ? '0' : null} onSelect={() => setAccordionOpen(!accordionOpen)}>
      <Accordion.Item eventKey="0">
        <Accordion.Header>
          <div className="accordion-title">
            <FaFilter /> {t('carriera.proposte_di_tesi.filter')}
            {(filters.isInternal != 0 ||
              filters.isAbroad ||
              filters.keyword.length > 0 ||
              filters.type.length > 0 ||
              filters.teacher.length > 0 ||
              sorting.sortBy !== 'id') && (
              <Badge pill bg="secondary" className="top-0">
                {filters.keyword.length +
                  filters.type.length +
                  filters.teacher.length +
                  (filters.isInternal != 0 ? 1 : 0) +
                  (filters.isAbroad ? 1 : 0) +
                  (sorting.sortBy !== 'id' ? 1 : 0)}
              </Badge>
            )}
          </div>
        </Accordion.Header>
        <Accordion.Body>
          <div className="filters-section">
            <FilterGroup
              key={`${filters.isInternal}-${filters.isAbroad}`}
              isAbroad={filters.isAbroad}
              isInternal={filters.isInternal}
              handleCheckChange={value => applyFilters('isAbroad', value)}
              handleRadioChange={value => applyFilters('isInternal', value)}
            />
            <FilterDropdown
              api={API.getThesisProposalsTypes}
              filters={filters.type}
              icon={<FaTags size={14} style={{ width: '15px' }} />}
              itemType={'type'}
              applyFilters={applyFilters}
              selectedItems={filters.type}
            />
            <FilterDropdown
              api={API.getThesisProposalsKeywords}
              filters={filters.keyword}
              icon={<FaKey size={14} style={{ width: '15px' }} />}
              itemType={'keyword'}
              applyFilters={applyFilters}
              selectedItems={filters.keyword}
            />
            <FilterDropdown
              api={API.getThesisProposalsTeachers}
              filters={filters.teacher}
              icon={<FaUser size={14} />}
              itemType={'teacher'}
              applyFilters={applyFilters}
              selectedItems={filters.teacher}
            />
            <SortDropdown sortFields={sortFields} sorting={sorting} applySorting={applySorting} />
          </div>
          <hr className={`hr-${appliedTheme}`} />
          <div className="applied-filters-container">
            <div className="badge-group">
              {(filters.isInternal != 0 ||
                filters.isAbroad ||
                filters.keyword.length > 0 ||
                filters.teacher.length > 0 ||
                filters.type.length > 0) && (
                <span className="applied-filters-label">{t('carriera.proposte_di_tesi.applied_filters')}</span>
              )}
              {filters.isInternal === 1 && <CustomBadge variant="internal" type="reset" applyFilters={applyFilters} />}
              {filters.isInternal === 2 && <CustomBadge variant="external" type="reset" applyFilters={applyFilters} />}
              {filters.isAbroad && <CustomBadge variant="abroad" type="reset" applyFilters={applyFilters} />}
              {filters.type.map(type => (
                <CustomBadge
                  key={type.id}
                  variant="type"
                  content={type}
                  type="reset"
                  filters={filters}
                  applyFilters={applyFilters}
                />
              ))}
              {filters.keyword.map(keyword => (
                <CustomBadge
                  key={keyword.id}
                  variant="keyword"
                  content={keyword}
                  type="reset"
                  filters={filters}
                  applyFilters={applyFilters}
                />
              ))}
              {filters.teacher.map(teacher => (
                <CustomBadge
                  key={teacher.id}
                  variant="teacher"
                  content={teacher}
                  type="reset"
                  filters={filters}
                  applyFilters={applyFilters}
                />
              ))}
            </div>
            <div className="reset-button-container">
              <ResetButton resetFilters={resetFilters} />
            </div>
          </div>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}

FiltersAccordion.propTypes = {
  accordionOpen: PropTypes.bool.isRequired,
  setAccordionOpen: PropTypes.func.isRequired,
  filters: PropTypes.object.isRequired,
  applyFilters: PropTypes.func.isRequired,
  resetFilters: PropTypes.func.isRequired,
  sortFields: PropTypes.array.isRequired,
  sorting: PropTypes.object.isRequired,
  applySorting: PropTypes.func.isRequired,
};
