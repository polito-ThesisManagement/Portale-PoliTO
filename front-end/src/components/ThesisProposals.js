import React, { useMemo, useRef } from 'react';

import { Card, Container, Row } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { useTranslation } from 'react-i18next';

import useThesisProposalsState from '../hooks/useThesisProposalsState';
import '../styles/searchbar.css';
import '../styles/thesis-proposals.css';
import '../styles/utilities.css';
import CustomBadge from './CustomBadge';
import FiltersDropdown from './FiltersDropdown';
import LoadingModal from './LoadingModal';
import PaginationItem from './PaginationItem';
import ProposalsNotFound from './ProposalsNotFound';
import SegmentedControl from './SegmentedControl';
import SortDropdown from './SortDropdown';
import { ThesisItem } from './ThesisItem';

export default function ThesisProposals() {
  const { t } = useTranslation();
  const {
    count,
    pageProposals,
    pageNumbers,
    totalPages,
    state,
    loading,
    setLoading,
    applyFilters,
    applySorting,
    resetFilters,
    handlePageChange,
    handleProposalsPerPageChange,
    handleSearchbarChange,
    handleTabChange,
  } = useThesisProposalsState();

  const courseRef = useRef();
  const allRef = useRef();
  const segments = useMemo(
    () => [
      { label: t('carriera.proposte_di_tesi.course_proposals'), value: 'course', ref: courseRef },
      { label: t('carriera.proposte_di_tesi.all_proposals'), value: 'all', ref: allRef },
    ],
    [t],
  );

  const getFilterBadges = () => {
    const badgeConfigs = [
      { condition: state.filters.isAbroad === 1, variant: 'italy' },
      { condition: state.filters.isAbroad === 2, variant: 'abroad' },
      { condition: state.filters.isInternal === 1, variant: 'internal' },
      { condition: state.filters.isInternal === 2, variant: 'external' },
    ];

    const mapArrayToBadges = (array, variant) =>
      array.map(item => (
        <CustomBadge
          key={item.id}
          variant={variant}
          content={item}
          type="reset"
          filters={state.filters}
          applyFilters={applyFilters}
        />
      ));

    return (
      <>
        {badgeConfigs
          .filter(({ condition }) => condition)
          .map(({ variant }) => (
            <CustomBadge key={variant} variant={variant} type="reset" applyFilters={applyFilters} />
          ))}
        {mapArrayToBadges(state.filters.type, 'type')}
        {mapArrayToBadges(state.filters.teacher, 'teacher')}
        {mapArrayToBadges(state.filters.keyword, 'keyword')}
      </>
    );
  };

  return (
    <div className="proposals-container">
      <Card className="roundCard">
        <Card.Body>
          <div className="filters-container" key={state.tab}>
            <SegmentedControl
              name="proposals-segmented-control"
              callback={handleTabChange}
              controlRef={useRef()}
              defaultIndex={state.tab === 'course' ? 0 : 1}
              segments={segments}
            />
            <div className="d-flex gap-3 flex-wrap">
              <FiltersDropdown filters={state.filters} applyFilters={applyFilters} resetFilters={resetFilters} />
              <SortDropdown sorting={state.sorting} applySorting={applySorting} />
              <Form style={{ minWidth: '220px', zIndex: '1' }} onSubmit={e => e.preventDefault()}>
                <InputGroup className="flex-nowrap w-100">
                  <Form.Control
                    className="truncated"
                    type="search"
                    placeholder={t('carriera.proposte_di_tesi.search')}
                    aria-label="search_proposals"
                    style={{
                      fontSize: 'var(--font-size-sm)',
                      fontWeight: 'var(--font-weight-medium)',
                      backgroundColor: 'var(--background)',
                      color: 'var(--primary)',
                      borderColor: 'var(--border-color)',
                      borderRadius: 'var(--border-radius-button)',
                    }}
                    value={state.searchQuery}
                    onChange={handleSearchbarChange}
                  />
                  <i className="fa-solid fa-magnifying-glass search-icon" />
                </InputGroup>
              </Form>
            </div>
          </div>
          {(state.filters.isAbroad != 0 ||
            state.filters.isInternal != 0 ||
            state.filters.type.length > 0 ||
            state.filters.teacher.length > 0 ||
            state.filters.keyword.length > 0) && (
            <div className="applied-filters-container">
              <div className="badge-group">{getFilterBadges()}</div>
            </div>
          )}
        </Card.Body>
      </Card>
      {loading ? (
        <LoadingModal show={loading} onHide={() => setLoading(false)} />
      ) : (
        <>
          {pageProposals.length > 0 ? (
            <>
              <Container className="card-container mx-0 mt-3 mb-0 p-0">
                <Row>
                  {pageProposals.map(thesis => {
                    return <ThesisItem key={thesis.id} {...thesis} />;
                  })}
                </Row>
              </Container>
              <Card className="roundCard">
                <Card.Body>
                  <PaginationItem
                    count={count}
                    currentPage={state.currentPage}
                    handleProposalsPerPageChange={handleProposalsPerPageChange}
                    handlePageChange={handlePageChange}
                    pageNumbers={pageNumbers}
                    proposalsPerPage={state.proposalsPerPage}
                    totalPages={totalPages}
                  />
                </Card.Body>
              </Card>
            </>
          ) : (
            <ProposalsNotFound resetFilters={resetFilters} />
          )}
        </>
      )}
    </div>
  );
}
