import React from 'react';

import { Accordion } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import { FaFilter, FaKey, FaTags, FaUser } from 'react-icons/fa6';

import PropTypes from 'prop-types';

import API from '../API';
import Badge from './Badge';
import FilterDropdown from './FilterDropdown';
import FilterGroup from './FilterGroup';
import ResetButton from './ResetButton';
import SortDropdown from './SortDropdown';

export default function FiltersAccordion({
  accordionOpen,
  setAccordionOpen,
  filters,
  setFilters,
  applyFilters,
  sortFields,
  sorting,
  applySorting,
  onResetSorting,
  appliedTheme,
}) {
  const { t } = useTranslation();
  return (
    <Accordion activeKey={accordionOpen ? '0' : null} onSelect={() => setAccordionOpen(!accordionOpen)}>
      <Accordion.Item eventKey="0">
        <Accordion.Header>
          <div className="accordion-title">
            <FaFilter className="me-2" /> {t('carriera.proposte_di_tesi.filter')}
            {(filters.isInternal != 0 ||
              filters.isAbroad ||
              filters.keyword.length > 0 ||
              filters.type.length > 0 ||
              filters.teacher.length > 0) && (
              <span
                style={{
                  backgroundColor: 'var(--secondary-600)',
                  color: 'var(--white)',
                  borderRadius: '50rem',
                  padding: '0.2rem 0.5rem',
                  marginLeft: '0.5rem',
                  marginRight: '0.5rem',
                  fontSize: 'var(--font-size-sm)',
                  fontWeight: 'var(--font-weight-regular)',
                }}
              >
                {filters.keyword.length +
                  filters.type.length +
                  filters.teacher.length +
                  (filters.isInternal != 0 ? 1 : 0) +
                  (filters.isAbroad ? 1 : 0)}
              </span>
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
              icon={<FaTags style={{ width: '20px' }} />}
              itemType={'type'}
              onApplyFilters={applyFilters}
              onResetFilters={() => applyFilters('type', [])}
              selectedItems={filters.type}
            />
            <FilterDropdown
              api={API.getThesisProposalsKeywords}
              filters={filters.keyword}
              icon={<FaKey style={{ width: '20px' }} />}
              itemType={'keyword'}
              onApplyFilters={applyFilters}
              onResetFilters={() => applyFilters('keyword', [])}
              selectedItems={filters.keyword}
            />
            <FilterDropdown
              api={API.getThesisProposalsTeachers}
              filters={filters.teacher}
              icon={<FaUser style={{ width: '20px' }} />}
              itemType={'teacher'}
              onApplyFilters={applyFilters}
              onResetFilters={() => applyFilters('teacher', [])}
              selectedItems={filters.teacher}
            />
            <SortDropdown
              sortFields={sortFields}
              sorting={sorting}
              onApplySorting={applySorting}
              onResetSorting={onResetSorting}
            />
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
              {filters.isInternal === 1 && <Badge variant="internal" type="reset" applyFilters={applyFilters} />}
              {filters.isInternal === 2 && <Badge variant="external" type="reset" applyFilters={applyFilters} />}
              {filters.isAbroad && <Badge variant="abroad" type="reset" applyFilters={applyFilters} />}
              {filters.type.map(type => (
                <Badge
                  key={type.id}
                  variant="type"
                  content={type}
                  type="reset"
                  filters={filters}
                  applyFilters={applyFilters}
                />
              ))}
              {filters.keyword.map(keyword => (
                <Badge
                  key={keyword.id}
                  variant="keyword"
                  content={keyword}
                  type="reset"
                  filters={filters}
                  applyFilters={applyFilters}
                />
              ))}
              {filters.teacher.map(teacher => (
                <Badge
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
              <ResetButton
                resetFilters={() => {
                  setFilters({ isAbroad: false, isInternal: 0, keyword: [], teacher: [], type: [] });
                }}
              />
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
  setFilters: PropTypes.func.isRequired,
  applyFilters: PropTypes.func.isRequired,
  sortFields: PropTypes.array.isRequired,
  sorting: PropTypes.object.isRequired,
  applySorting: PropTypes.func.isRequired,
  onResetSorting: PropTypes.func.isRequired,
  appliedTheme: PropTypes.string.isRequired,
};
