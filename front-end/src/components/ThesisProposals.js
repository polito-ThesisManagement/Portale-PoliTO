import React, { useEffect, useState } from 'react';

import { Search, SortDown, SortUp } from 'react-bootstrap-icons';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { useTranslation } from 'react-i18next';
import { HiLightBulb } from 'react-icons/hi';

import PropTypes from 'prop-types';

import '../styles/Searchbar.css';
import '../styles/Theme.css';
import styles from '../styles/ThesisProposals.module.css';
import { ThesisItem } from './ThesisItem';
import Title from './Title';

export default function ThesisProposals({ thesisProposals }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [proposalsPerPage, setProposalsPerPage] = useState(5);
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('');
  const [orderBy, setOrderBy] = useState('asc');
  const [pageProposals, setPageProposals] = useState([]);
  const [pageNumbers, setPageNumbers] = useState([1, 2, 3, 4]);
  const [filteredProposals, setFilteredProposals] = useState(thesisProposals);
  const [totalPages, setTotalPages] = useState(Math.ceil(thesisProposals.length / proposalsPerPage));

  const { t } = useTranslation();

  const handleToggle = () => {
    setActiveIndex(prevIndex => (prevIndex === 0 ? 1 : 0));
  };

  const handlePageChange = pageNumber => {
    if (pageNumber !== currentPage) {
      setCurrentPage(pageNumber);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleProposalsPerPageChange = event => {
    setProposalsPerPage(Number(event.target.value));
    setCurrentPage(1); // Reset to first page when changing proposals per page
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSortByChange = event => {
    setSortBy(event.target.value);
  };

  const handleOrderByChange = () => {
    if (sortBy !== '' && orderBy === 'asc') {
      setOrderBy('desc');
    }
    if (sortBy !== '' && orderBy === 'desc') {
      setOrderBy('asc');
    }
  };

  const handleSearchbarChange = event => {
    setSearchQuery(event.target.value);
  };

  function sortingProposals(proposals) {
    const sortedProposals = [...proposals];
    if (orderBy === 'asc') {
      if (sortBy === 'creationDate') {
        sortedProposals.sort((a, b) => new Date(a.creationDate) - new Date(b.creationDate));
      } else if (sortBy === 'expirationDate') {
        sortedProposals.sort((a, b) => new Date(a.expirationDate) - new Date(b.expirationDate));
      }
    } else if (orderBy === 'desc') {
      if (sortBy === 'creationDate') {
        sortedProposals.sort((a, b) => new Date(b.creationDate) - new Date(a.creationDate));
      } else if (sortBy === 'expirationDate') {
        sortedProposals.sort((a, b) => new Date(b.expirationDate) - new Date(a.expirationDate));
      }
    }
    return sortedProposals;
  }

  // Filter proposals based on activeIndex
  useEffect(() => {
    if (activeIndex === 0) {
      setFilteredProposals(filteredProposals);
    } else {
      const filtered = filteredProposals; // Add filter for thesis related to the logged student's degree course
      setFilteredProposals(sortingProposals(filtered));
    }
    setCurrentPage(1);
  }, [activeIndex]);

  // Filter proposals based on search query
  useEffect(() => {
    if (searchQuery === '') {
      setFilteredProposals(thesisProposals);
      setCurrentPage(1);
      return;
    }
    const filtered = thesisProposals.filter(
      proposal =>
        proposal.topic.toLowerCase().includes(searchQuery.toLowerCase()) ||
        proposal.keywords.some(keyword => keyword.keyword.toLowerCase().includes(searchQuery.toLowerCase())) ||
        proposal.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        proposal.supervisor.first_name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        proposal.supervisor.last_name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        proposal.internalCoSupervisors.some(coSupervisor => {
          return (
            coSupervisor.first_name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            coSupervisor.last_name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            coSupervisor.first_name
              .concat(' ', coSupervisor.last_name)
              .toLowerCase()
              .includes(searchQuery.toLowerCase())
          );
        }),
    );
    setFilteredProposals(sortingProposals(filtered));
    setCurrentPage(1);
  }, [searchQuery]);

  // Sort the filtered proposals based on the selected sort option
  useEffect(() => {
    const sortedProposals = sortingProposals(filteredProposals);
    setFilteredProposals(sortedProposals);
    setPageProposals(sortedProposals.slice(0, proposalsPerPage));
  }, [sortBy, orderBy]);

  // Set page numbers
  useEffect(() => {
    setTotalPages(Math.ceil(filteredProposals.length / proposalsPerPage));
    if (totalPages <= 5) {
      const array = [];
      for (let i = 1; i <= totalPages; i++) {
        array.push(i);
      }
      setPageNumbers(array);
    } else {
      if (currentPage <= 3) {
        setPageNumbers([1, 2, 3, 4, '...', totalPages]);
      } else if (currentPage > totalPages - 3) {
        setPageNumbers([1, '...', totalPages - 3, totalPages - 2, totalPages - 1, totalPages]);
      } else {
        setPageNumbers([
          1,
          '...',
          currentPage - 2,
          currentPage - 1,
          currentPage,
          currentPage + 1,
          currentPage + 2,
          '...',
          totalPages,
        ]);
      }
    }
    setPageProposals(filteredProposals.slice((currentPage - 1) * proposalsPerPage, currentPage * proposalsPerPage));
  }, [currentPage, totalPages, proposalsPerPage, filteredProposals]);

  return (
    <>
      <Title icon={<HiLightBulb size={28} />} sectionName={t('carriera.proposte_di_tesi.title')} />
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          width: '100%',
          paddingBottom: '5.675rem',
        }}
      >
        <main
          style={{
            borderRadius: '1rem',
            display: 'flex',
            backgroundColor: 'var(--surface)',
            width: '100%',
            flexDirection: 'column',
            overflow: 'hidden',
            flexGrow: '1',
            paddingBottom: '2%',
          }}
        >
          <section style={{ marginBottom: '0.5rem' }}>
            <div
              style={{
                display: 'flex',
                width: '100%',
                flexDirection: 'column',
                justifyContent: 'center',
                flexGrow: '1',
                padding: '1.75rem',
              }}
            >
              <div
                style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  gap: '1rem',
                  marginBottom: '8px',
                }}
              >
                <Slider activeIndex={activeIndex} handleToggle={handleToggle} />
                <Form className="d-flex me-3 w-100" style={{ maxWidth: '220px' }} onSubmit={e => e.preventDefault()}>
                  <InputGroup className="flex-nowrap w-100">
                    <Form.Select
                      label="order_by"
                      style={{
                        height: '2rem',
                        backgroundColor: 'var(--background)',
                        color: 'var(--primary)',
                        borderRadius: '8px',
                        lineHeight: '1rem',
                        paddingRight: '2rem',
                        fontFamily: 'var(--font-family)',
                        fontSize: 'var(--font-size-md)',
                      }}
                      value={sortBy}
                      onChange={handleSortByChange}
                    >
                      <option value="" disabled={sortBy !== ''}>
                        {t('carriera.proposte_di_tesi.order_by')}
                      </option>
                      <option value="creationDate">{t('carriera.proposte_di_tesi.created_order')}</option>
                      <option value="expirationDate">{t('carriera.proposte_di_tesi.exp_order')}</option>
                    </Form.Select>
                    {orderBy === 'asc' ? (
                      <SortUp
                        style={{
                          color: 'var(--primary)',
                          height: '2.2rem',
                          width: '2.2rem',
                          cursor: 'pointer',
                          padding: '0 0.5rem',
                        }}
                        onClick={handleOrderByChange}
                        disabled={sortBy === ''}
                      />
                    ) : (
                      <SortDown
                        style={{
                          color: 'var(--primary)',
                          height: '2.2rem',
                          width: '2.2rem',
                          cursor: 'pointer',
                          padding: '0 0.5rem',
                        }}
                        onClick={handleOrderByChange}
                        disabled={sortBy === ''}
                      />
                    )}
                  </InputGroup>
                </Form>
                <Form className="d-flex me-3 w-100" style={{ maxWidth: '250px' }} onSubmit={e => e.preventDefault()}>
                  <InputGroup className="flex-nowrap w-100">
                    <Form.Control
                      className="truncated"
                      type="search"
                      placeholder={t('carriera.proposte_di_tesi.search')}
                      aria-label="search_proposals"
                      style={{
                        height: '2rem',
                        backgroundColor: 'var(--background)',
                        color: 'var(--primary)',
                        borderRadius: '8px',
                      }}
                      value={searchQuery}
                      onChange={handleSearchbarChange}
                    />
                    <Search
                      style={{
                        position: 'relative',
                        zIndex: '3',
                        right: '30',
                        top: '8',
                        color: 'var(--primary)',
                        height: '1.1rem',
                      }}
                    />
                  </InputGroup>
                </Form>
              </div>
            </div>
          </section>
          <section className={styles.thesisList}>
            <div className={styles.thesisListInner}>
              {pageProposals.map(thesis => {
                return <ThesisItem key={thesis.id} {...thesis} />;
              })}
            </div>
          </section>
          <div className={styles.pagination}>
            <div style={{ display: 'flex', alignItems: 'center', width: '300px' }}>
              <b
                style={{
                  fontFamily: 'var(--font-primary)',
                  fontSize: 'var(--font-size-sm)',
                  color: 'var(--text)',
                  fontWeight: '600',
                  paddingRight: '2rem',
                  width: '100%',
                }}
              >
                {t('carriera.proposte_di_tesi.elements_per_page')}:
              </b>
              <Form className="d-flex me-3 w-100" style={{ maxWidth: '80px' }}>
                <InputGroup className="flex-nowrap w-100">
                  <Form.Select
                    label="page_elements"
                    style={{
                      height: '2rem',
                      backgroundColor: 'var(--background)',
                      color: 'var(--primary)',
                      borderRadius: '8px',
                      lineHeight: '1rem',
                      paddingRight: '2rem',
                      fontFamily: 'var(--font-family)',
                    }}
                    value={proposalsPerPage}
                    onChange={handleProposalsPerPageChange}
                    onSubmit={e => e.preventDefault()}
                  >
                    <option value={5}>5</option>
                    <option value={10}>10</option>
                    <option value={20}>20</option>
                    <option value={50}>50</option>
                  </Form.Select>
                </InputGroup>
              </Form>
            </div>
            <div className={styles.paginationNumbers}>
              {pageNumbers.map((number, index) =>
                number === '...' ? (
                  <button key={`ellipsis-${index}`} className={styles.ellipsis} disabled>
                    {number}
                  </button>
                ) : (
                  <button
                    key={`page-${number}`}
                    onClick={() => handlePageChange(number)}
                    className={currentPage === number ? styles.activePage : ''}
                  >
                    {number}
                  </button>
                ),
              )}
            </div>
            <span
              style={{
                fontFamily: 'var(--font-primary)',
                fontSize: 'var(--font-size-sm)',
                color: 'var(--text)',
                fontWeight: '600',
                paddingRight: '2rem',
              }}
            >
              {t('carriera.proposte_di_tesi.total')} {filteredProposals.length}
            </span>
          </div>
        </main>
      </div>
    </>
  );
}

const Slider = ({ activeIndex, handleToggle }) => {
  const { t } = useTranslation();
  return (
    <label className={styles.segmentedControl} aria-label="Toggle thesis proposals">
      <input type="checkbox" checked={activeIndex === 1} onChange={handleToggle} />
      <span className={styles.slider}>
        <span className={`${styles.toggleText} ${styles.toggleTextLeft}`}>
          {activeIndex === 0 ? t('carriera.proposte_di_tesi.all_thesis') : t('carriera.proposte_di_tesi.all_thesis')}
        </span>
        <span className={`${styles.toggleText} ${styles.toggleTextRight}`}>
          {activeIndex === 1
            ? t('carriera.proposte_di_tesi.course_thesis')
            : t('carriera.proposte_di_tesi.course_thesis')}
        </span>
      </span>
    </label>
  );
};

Slider.propTypes = {
  activeIndex: PropTypes.number.isRequired,
  handleToggle: PropTypes.func.isRequired,
};

ThesisProposals.propTypes = {
  thesisProposals: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      topic: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      supervisor: PropTypes.shape({
        id: PropTypes.number.isRequired,
        first_name: PropTypes.string.isRequired,
        last_name: PropTypes.string.isRequired,
      }).isRequired,
      internalCoSupervisors: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.number.isRequired,
          first_name: PropTypes.string.isRequired,
          last_name: PropTypes.string.isRequired,
        }),
      ).isRequired,
      creationDate: PropTypes.string.isRequired,
      expirationDate: PropTypes.string.isRequired,
      isInternal: PropTypes.bool.isRequired,
      isAbroad: PropTypes.bool.isRequired,
      keywords: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.number.isRequired,
          keyword: PropTypes.string.isRequired,
        }),
      ),
    }),
  ),
};
