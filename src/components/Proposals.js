import React, { useState } from 'react';

import ThesisProposalsData from '../data/ThesisProposalsData.json';
import styles from '../styles/Proposals.module.css';
import ThesisItem from './ThesisItem';

export default function Proposals() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [proposalsPerPage, setProposalsPerPage] = useState(5);
  const [sortBy, setSortBy] = useState('creationDate');

  const handleToggle = () => {
    setActiveIndex(prevIndex => (prevIndex === 0 ? 1 : 0));
  };

  const handlePageChange = pageNumber => {
    if (pageNumber != currentPage) {
      setCurrentPage(pageNumber);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleProposalsPerPageChange = event => {
    setProposalsPerPage(Number(event.target.value));
    setCurrentPage(1); // Reset to first page when changing proposals per page
  };

  const handleSortByChange = event => {
    setSortBy(event.target.value);
  };

  // Calculate the current proposals to display
  const indexOfLastProposal = currentPage * proposalsPerPage;
  const indexOfFirstProposal = indexOfLastProposal - proposalsPerPage;
  const currentProposals = ThesisProposalsData.slice(indexOfFirstProposal, indexOfLastProposal);

  // Calculate total pages
  const totalPages = Math.ceil(ThesisProposalsData.length / proposalsPerPage);

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
                    <label htmlFor="sortBy">Ordina per:</label>
                    <select id="sortBy" value={sortBy} onChange={handleSortByChange} className={styles.sortBySelect}>
                      <option value="creationDate">Data di creazione</option>
                      <option value="expirationDate">Data di scadenza</option>
                    </select>
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
              {currentProposals.map((thesis, index) => (
                <ThesisItem key={index} {...thesis} />
              ))}
            </div>
          </section>
          <div className={styles.pagination}>
            <div className={styles.paginationControls}>
              <label htmlFor="proposalsPerPage">Proposte per pagina:</label>
              <select id="proposalsPerPage" value={proposalsPerPage} onChange={handleProposalsPerPageChange}>
                <option value={5}>5</option>
                <option value={10}>10</option>
                <option value={20}>20</option>
                <option value={50}>50</option>
              </select>
              <span className={styles.totalItems}>Totale: {ThesisProposalsData.length}</span>
            </div>
            {Array.from({ length: totalPages }, (_, index) => (
              <button
                key={index + 1}
                onClick={() => handlePageChange(index + 1)}
                className={currentPage === index + 1 ? styles.activePage : ''}
              >
                {index + 1}
              </button>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
