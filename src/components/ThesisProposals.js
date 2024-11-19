import React, { useEffect, useState } from 'react';

import { HiLightBulb } from 'react-icons/hi';

import PropTypes from 'prop-types';

import styles from '../styles/ThesisProposals.module.css';
import ThesisItem from './ThesisItem';
import Title from './Title';

export default function ThesisProposals({ thesisProposals }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [proposalsPerPage, setProposalsPerPage] = useState(5);
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('');
  const [orderBy, setOrderBy] = useState('');
  const [pageProposals, setPageProposals] = useState([]);
  const [pageNumbers, setPageNumbers] = useState([1, 2, 3, 4]);
  const [filteredProposals, setFilteredProposals] = useState(thesisProposals);
  const [totalPages, setTotalPages] = useState(Math.ceil(thesisProposals.length / proposalsPerPage));

  const handleToggle = () => {
    setActiveIndex(prevIndex => (prevIndex === 0 ? 1 : 0));
  };

  const handlePageChange = pageNumber => {
    setCurrentPage(pageNumber);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleProposalsPerPageChange = event => {
    setProposalsPerPage(Number(event.target.value));
    setCurrentPage(1); // Reset to first page when changing proposals per page
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSortByChange = event => {
    setSortBy(event.target.value);
  };

  const handleOrderByChange = event => {
    setOrderBy(event.target.value);
  };

  const handleSearchbarChange = event => {
    setSearchQuery(event.target.value);
  };

  function filterAndSorting(proposals) {
    const sortedProposals = [...proposals];
    if (orderBy === 'asc') {
      if (sortBy === 'creation_date' && orderBy === 'asc') {
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
      setFilteredProposals(filtered);
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
    console.log(filterAndSorting(filtered));
    setFilteredProposals(filterAndSorting(filtered));
    setCurrentPage(1);
  }, [searchQuery]);

  // Sort the filtered proposals based on the selected sort option
  useEffect(() => {
    const sortedProposals = filterAndSorting(filteredProposals);
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
          <div className={styles.contentWrapper}>
            <section className={styles.card}>
              <div className={styles.cardBody}>
                <div className={styles.filterSection}>
                  <div className={styles.filterWrapper}>
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
                    <div className={styles.sortBy}>
                      <div className={styles.sortByInner}>
                        <label htmlFor="sortBy" className={styles.sortByLabel}>
                          Ordina per:
                        </label>
                        <select
                          id="sortBy"
                          value={sortBy}
                          placeholder=""
                          onChange={handleSortByChange}
                          className={styles.sortBySelect}
                        >
                          <option value="" disabled={sortBy !== ''}>
                            Seleziona...
                          </option>
                          <option value="exp_date">Data di scadenza</option>
                          <option value="creation_date">Data di creazione</option>
                        </select>
                        <select
                          id="orderBy"
                          value={orderBy}
                          onChange={handleOrderByChange}
                          className={styles.sortBySelect}
                        >
                          <option value="" disabled={orderBy !== ''}>
                            Seleziona...
                          </option>
                          <option value="asc">Ascendente</option>
                          <option value="desc">Discendente</option>
                        </select>
                      </div>
                    </div>
                    <div className={styles.searchBar}>
                      <div className={styles.searchBarInner}>
                        <label htmlFor="searchInput" className={styles['visually-hidden']}></label>
                        <input
                          id="searchInput"
                          type="text"
                          value={searchQuery}
                          onChange={handleSearchbarChange}
                          className={styles.searchInput}
                          placeholder="Ricerca tra le proposte..."
                        />
                        <div className={styles.searchIcon}>
                          <img
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/a80747fb44e9ee0d6e39fbcf3093cbe80fcfe231f4c7adb450c279b34baaf281?placeholderIfAbsent=true&apiKey=72cc577f79b64674b03fc8a1de6d7a2a"
                            alt="Search"
                            className={styles.searchIconImage}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
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
              <div className={styles.paginationControls}>
                <label htmlFor="proposalsPerPage">Elementi per pagina:</label>
                <select
                  id="proposalsPerPage"
                  value={proposalsPerPage}
                  onChange={handleProposalsPerPageChange}
                  className={styles.sortBySelect}
                >
                  <option value={5}>5</option>
                  <option value={10}>10</option>
                  <option value={20}>20</option>
                  <option value={50}>50</option>
                </select>
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
              <span className={styles.totalItems}>Totale: {filteredProposals.length}</span>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}

ThesisProposals.propTypes = {
  thesisProposals: PropTypes.arrayOf(
    PropTypes.shape({
      topic: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      exp_date: PropTypes.string.isRequired,
      advisors: PropTypes.arrayOf(PropTypes.shape({ matricola: PropTypes.string, name: PropTypes.string })).isRequired,
      keywords: PropTypes.arrayOf(PropTypes.string).isRequired,
      thesis_types: PropTypes.arrayOf(PropTypes.string).isRequired,
      cds_type: PropTypes.string.isRequired,
    }),
  ).isRequired,
};
