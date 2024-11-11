import React from 'react';

import styles from '../styles/Proposals.module.css';
import ThesisItem from './ThesisItem';

export default function Proposals() {
  const thesisData = [
    {
      title: 'AI models for high-level semantic image interpretation',
      tags: ['ANALISI DI IMMAGINI', 'DEEP LEARNING', 'VISUAL BIG DATA'],
      description:
        'Context: Social media platforms have a profound impact on the way individuals choose to (re)present themselves in the digital era. Through the analysis of visual big data, we seek to understand how face representations have changed over time...',
      professor: 'Morra Lia',
      thesisType: 'Tesi interna',
      expirationDate: '25/01/2025',
    },
    {
      title: 'AI-Powered Testing Tools',
      tags: ['AI', 'TESTING'],
      description:
        "La tesi sarà condotta presso Concept Quality Reply Contesto: Nel contesto del testing del software per i servizi Offboard nel settore Automotive e a causa della crescente complessità dei sistemi da testare, i nostri clienti richiedono nuove alternative adattative basate sull'Intelligenza Artificiale...",
      professor: 'Coppola Riccardo',
      thesisType: 'Tesi in azienda',
      expirationDate: '03/09/2025',
    },
    {
      title: 'AI-based solutions for web site automated monitoring & regression testing',
      tags: ['AI', 'TESTING'],
      description:
        'Tesi presso Concept Quality Reply Contesto: Nel contesto di progetti altamente innovativi e tecnicamente stimolanti, vogliamo sviluppare una soluzione capace di eseguire il monitoraggio e i test di non regressione su un sito web in modo completamente automatizzato...',
      professor: 'Coppola Riccardo',
      thesisType: 'Tesi in azienda',
      expirationDate: '03/09/2025',
    },
  ];

  return (
    <div className={styles.container}>
      <main className={styles.mainContent}>
        <div className={styles.subHeader}>
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/dccd6c21cc2dba0fc5eddbcc61d9d9c6e208c5f8f1a45925abe44be65c1e5966?placeholderIfAbsent=true&apiKey=72cc577f79b64674b03fc8a1de6d7a2a"
            alt=""
            className={styles.subHeaderIcon}
          />
          <h2>Proposte di tesi</h2>
        </div>
        <div className={styles.contentWrapper}>
          <section className={styles.card}>
            <div className={styles.cardBody}>
              <div className={styles.filterSection}>
                <div className={styles.filterWrapper}>
                  <div className={styles.segmentedControl}>
                    <div className={styles.segmentedControlInner}>
                      <button className={styles.segmentedItem}>Tutte le tesi</button>
                      <button className={styles.segmentedItemInactive}>Tesi per il tuo corso di studi</button>
                    </div>
                  </div>
                  <div className={styles.searchBar}>
                    <div className={styles.searchBarInner}>
                      <label htmlFor="searchInput" className={styles['visually-hidden']}>
                        Search
                      </label>
                      <input id="searchInput" type="text" className={styles.searchInput} placeholder="Search ..." />
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
              {thesisData.map((thesis, index) => (
                <ThesisItem key={index} {...thesis} />
              ))}
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
