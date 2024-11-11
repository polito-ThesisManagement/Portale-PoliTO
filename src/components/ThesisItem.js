import React from 'react';

import styles from '../styles/Proposals.module.css';

export default function ThesisItem({ title, tags, description, professor, thesisType, expirationDate }) {
  return (
    <article className={styles.thesisItem}>
      <div className={styles.thesisItemContent}>
        <div className={styles.thesisItemMeta}>
          <h3 className={styles.thesisTitle}>{title}</h3>
          <div className={styles.tagGroup}>
            {tags.map((tag, index) => (
              <span key={index} className={styles.tag}>
                {tag}
              </span>
            ))}
          </div>
        </div>
        <p className={styles.thesisDescription}>{description}</p>
        <div className={styles.thesisMetaInfo}>
          <div className={styles.professorTag}>
            <span className={styles.professorName}>{professor}</span>
          </div>
          <div className={styles.thesisTypeTag}>
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/be06d7d0211abe99ae37b3fc1acc5d383fa3835db098f12e3e6d13733b908fa8?placeholderIfAbsent=true&apiKey=72cc577f79b64674b03fc8a1de6d7a2a"
              alt=""
              className={styles.thesisTypeIcon}
            />
            <span className={styles.thesisTypeText}>{thesisType}</span>
          </div>
        </div>
        <footer className={styles.thesisItemFooter}>
          <span className={styles.expirationDate}>Data di scadenza:</span>
          <span className={styles.expirationDateValue}>{expirationDate}</span>
          <button className={styles.showMoreButton}>Mostra di più</button>
        </footer>
      </div>
    </article>
  );
}
