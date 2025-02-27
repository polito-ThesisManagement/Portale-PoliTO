import React, { useContext } from 'react';

import { Button, Card } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import { FaRectangleXmark, FaRegTrashCan } from 'react-icons/fa6';

import PropTypes from 'prop-types';

import { ThemeContext } from '../App';
import { getSystemTheme } from '../utils/utils';

export default function ProposalsNotFound({ resetFilters }) {
  const { t } = useTranslation();
  const { theme } = useContext(ThemeContext);
  const appliedTheme = theme === 'auto' ? getSystemTheme() : theme;
  return (
    <Card className="mt-3 roundCard">
      <Card.Body className="d-flex flex-column align-items-center my-4">
        <div className="pol-headline pol-headline--with-bar" style={{ color: 'var(--primary)' }}>
          <h3 className="bold-weight">{t('carriera.proposte_di_tesi.not_found')}</h3>
        </div>
        <FaRectangleXmark size={100} style={{ color: 'var(--primary)' }} strokeWidth={1} />
        <div className="mb-3 mt-2 text-center" style={{ color: 'var(--text)' }}>
          <p> {t('carriera.proposte_di_tesi.message_not_found')} </p>
        </div>
        <Button className={`btn-${appliedTheme}`} size="sm" onClick={resetFilters}>
          <FaRegTrashCan size={16} />
          {t('carriera.proposte_di_tesi.reset_filters')}{' '}
        </Button>
      </Card.Body>
    </Card>
  );
}

ProposalsNotFound.propTypes = {
  resetFilters: PropTypes.func.isRequired,
};
