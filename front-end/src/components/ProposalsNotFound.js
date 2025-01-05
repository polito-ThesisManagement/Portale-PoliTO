import React from 'react';

import { Container } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import { FaRectangleXmark } from 'react-icons/fa6';

import PropTypes from 'prop-types';

import ResetButton from './ResetButton';

export default function ProposalsNotFound({ resetFilters }) {
  const { t } = useTranslation();

  return (
    <Container
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        paddingBottom: '2em',
        paddingTop: '1em',
      }}
    >
      <div
        className="pol-headline pol-headline--with-bar"
        style={{ fontFamily: 'var(--font-primary)', color: 'var(--primary)' }}
      >
        <h3 className="bold-weight">{t('carriera.proposte_di_tesi.not_found')}</h3>
      </div>
      <FaRectangleXmark size={100} style={{ color: 'var(--primary)' }} strokeWidth={1} />
      <div className="mb-3" style={{ color: 'var(--text)' }}>
        <p> {t('carriera.proposte_di_tesi.message_not_found')} </p>
      </div>
      <div>
        <ResetButton resetFilters={resetFilters} />
      </div>
    </Container>
  );
}

ProposalsNotFound.propTypes = {
  resetFilters: PropTypes.func.isRequired,
};
