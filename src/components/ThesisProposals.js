import React, { useEffect, useState } from 'react';

import ThesisProposalsData from '../data/ThesisProposalsData.json';
import styles from '../styles/ThesisProposals.module.css';
import ThesisItem from './ThesisItem';

export default function ThesisProposals() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [proposalsPerPage, setProposalsPerPage] = useState(5);
  const [sortBy, setSortBy] = useState('');
  const [orderBy, setOrderBy] = useState('');
  const [pageProposals, setPageProposals] = useState([]);
  const [pageNumbers, setPageNumbers] = useState([1, 2, 3, 4]);
  const [filteredProposals, setFilteredProposals] = useState(ThesisProposalsData);
  const [totalPages, setTotalPages] = useState(Math.ceil(ThesisProposalsData.length / proposalsPerPage));

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

  // Filter proposals based on activeIndex
  useEffect(() => {
    const filteredProposals = ThesisProposalsData.filter(proposal =>
      activeIndex === 1 ? proposal.course === 'Computer Science' : true,
    );
    setFilteredProposals(filteredProposals);
    setCurrentPage(1);
  }, [activeIndex]);

  // Sort the filtered proposals based on the selected sort option
  useEffect(() => {
    const sortedProposals = [...filteredProposals];
    if (orderBy === 'asc') {
      if (sortBy === 'creationDate' && orderBy === 'asc') {
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
  }, [currentPage, totalPages, proposalsPerPage]);

  return (
    <div className={styles.container}>
      <div className={styles.subHeader}>
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/dccd6c21cc2dba0fc5eddbcc61d9d9c6e208c5f8f1a45925abe44be65c1e5966?placeholderIfAbsent=true&apiKey=72cc577f79b64674b03fc8a1de6d7a2a"
          alt=""
          className={styles.subHeaderIcon}
        />
        <h2>Proposte di tesi</h2>
      </div>
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
                        <option value="creationDate">Data di creazione</option>
                        <option value="expirationDate">Data di scadenza</option>
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
  );
}
