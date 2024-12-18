import React from 'react';

import { Button, Container } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import { FaRectangleXmark } from 'react-icons/fa6';

import PropTypes from 'prop-types';

export default function ProposalsNotFound({ resetFilters }) {
  const { t } = useTranslation();
  return (
    <Container style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', margin: '2em' }}>
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
        <Button className="card-button" onClick={() => resetFilters()}>
          {' '}
          {t('carriera.proposte_di_tesi.reset_filters')}{' '}
        </Button>
      </div>
    </Container>
  );
}

ProposalsNotFound.propTypes = {
  resetFilters: PropTypes.func.isRequired,
};
