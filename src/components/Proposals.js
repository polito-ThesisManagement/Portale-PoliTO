import React from 'react';
import { useState } from 'react';

import ThesisProposalsData from '../data/ThesisProposalsData.json';
import styles from '../styles/Proposals.module.css';
import ThesisItem from './ThesisItem';

export default function Proposals() {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleToggle = () => {
    setActiveIndex(prevIndex => (prevIndex === 0 ? 1 : 0));
  };

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
                      <span className={`${styles.toggleText} ${styles.toggleTextLeft}`}>Tutte le tesi</span>
                      <span className={`${styles.toggleText} ${styles.toggleTextRight}`}>
                        Tesi per il tuo corso di studi
                      </span>
                    </span>
                  </label>
                  <div className={styles.searchBar}>
                    <div className={styles.searchBarInner}>
                      <input
                        id="searchInput"
                        type="text"
                        placeholder="Ricerca tra le proposte..."
                        className={styles.searchInput}
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
                  <div className={styles.sortBy}>
                    <div className={styles.searchBarInner}>
                      <div className={styles.sortByInner}>
                        <span className={styles.sortByLabel}>Sort by:</span>
                        <span className={styles.sortByValue}>Data di creazione</span>
                      </div>
                      <div className={styles.sortByIcon}>
                        <img
                          src="https://cdn.builder.io/api/v1/image/assets/TEMP/e674cf310ea20dfc5bd1174ff8c4ad024c334cc3259c6ba02e84cbce1c24a4c5?placeholderIfAbsent=true&apiKey=72cc577f79b64674b03fc8a1de6d7a2a"
                          alt="Sort"
                          className={styles.sortByIconImage}
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
              {ThesisProposalsData.map((thesis, index) => (
                <ThesisItem key={index} {...thesis} />
              ))}
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
