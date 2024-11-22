import React, { useEffect, useState } from 'react';

import { Search, SortDown, SortUp } from 'react-bootstrap-icons';

import { HiLightBulb } from 'react-icons/hi';

import PropTypes from 'prop-types';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

import '../styles/Searchbar.css';
import styles from '../styles/ThesisProposals.module.css';
import ThesisItem from './ThesisItem';
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
      if (sortBy === 'creation_date') {
        sortedProposals.sort((a, b) => new Date(a.creation_date) - new Date(b.creation_date));
      } else if (sortBy === 'exp_date') {
        sortedProposals.sort((a, b) => new Date(a.exp_date) - new Date(b.exp_date));
      }
    } else if (orderBy === 'desc') {
      if (sortBy === 'creation_date') {
        sortedProposals.sort((a, b) => new Date(b.creation_date) - new Date(a.creation_date));
      } else if (sortBy === 'exp_date') {
        sortedProposals.sort((a, b) => new Date(b.exp_date) - new Date(a.exp_date));
      }
    }
    return sortedProposals;
  }

  // Filter proposals based on activeIndex
  useEffect(() => {
    if (activeIndex === 0) {
      setFilteredProposals(filteredProposals);
    } else {
      const filtered = filteredProposals.filter(proposal => proposal.cds_type === '2');
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
        proposal.keywords.some(keyword => keyword.toLowerCase().includes(searchQuery.toLowerCase())) ||
        proposal.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        proposal.advisors.some(advisor => advisor.name.toLowerCase().includes(searchQuery.toLowerCase())),
    );
    setFilteredProposals(sortingProposals(filtered));
    setCurrentPage(1);
  }, [searchQuery]);

  // Sort the filtered proposals based on the selected sort option
  useEffect(() => {
    const sortedProposals = sortingProposals(filteredProposals);
    console.log(sortedProposals);
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
      <Title icon={<HiLightBulb size={28} />} sectionName="Proposte di tesi" />
      <div className={styles.container}>
        <main className={styles.mainContent}>
          <section className={styles.card}>
            <div className={styles.cardBody}>
              <div className={styles.filterRow}>
                <label className={styles.segmentedControl}>
                  <input type="checkbox" checked={activeIndex === 1} onChange={handleToggle} />
                  <span className={styles.slider}>
                    <span className={`${styles.toggleText} ${styles.toggleTextLeft}`}>
                      {activeIndex === 0 ? 'Tutte le tesi' : 'Tutte le tesi'}
                    </span>
                    <span className={`${styles.toggleText} ${styles.toggleTextRight}`}>
                      {activeIndex === 1 ? 'Tesi per il tuo corso di studi' : 'Tesi per il tuo corso di studi'}
                    </span>
                  </span>
                </label>
                <Form className="d-flex me-3 w-100" style={{ maxWidth: '220px' }} onSubmit={e => e.preventDefault()}>
                  <InputGroup className="flex-nowrap w-100">
                    <Form.Select
                      label="Ordina per"
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
                        Ordina per:
                      </option>
                      <option value="creation_date">Data di creazione</option>
                      <option value="exp_date">Data di scadenza</option>
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
                      placeholder="Ricerca tra le proposte..."
                      aria-label="Search"
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
              {pageProposals.map((thesis, index) => (
                <ThesisItem key={index} {...thesis} />
              ))}
            </div>
          </section>
          <div className={styles.pagination}>
            <b className={styles.bText} style={{ paddingLeft: '2rem' }}>
              Elementi per pagina:
            </b>
            <Form className="d-flex me-3 w-100" style={{ maxWidth: '100px', paddingLeft: '1rem' }}>
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
            <span className={styles.bText} style={{ paddingRight: '4rem' }}>
              Totale: {filteredProposals.length}
            </span>
          </div>
        </main>
      </div>
    </>
  );
}

ThesisProposals.propTypes = {
  thesisProposals: PropTypes.arrayOf(
    PropTypes.shape({
      ID: PropTypes.number.isRequired,
      topic: PropTypes.string.isRequired,
      keywords: PropTypes.arrayOf(PropTypes.string).isRequired,
      description: PropTypes.string.isRequired,
      link: PropTypes.string.isRequired,
      required_skills: PropTypes.string.isRequired,
      additional_notes: PropTypes.string.isRequired,
      advisors: PropTypes.arrayOf(PropTypes.shape({ matricola: PropTypes.string, name: PropTypes.string })).isRequired,
      external_advisors: PropTypes.string.isRequired,
      thesis_types: PropTypes.arrayOf(PropTypes.string).isRequired,
      where: PropTypes.string.isRequired,
      foreign: PropTypes.string.isRequired,
      cds_type: PropTypes.string.isRequired,
      exp_date: PropTypes.string.isRequired,
      creation_date: PropTypes.string.isRequired,
    }),
  ).isRequired,
};
