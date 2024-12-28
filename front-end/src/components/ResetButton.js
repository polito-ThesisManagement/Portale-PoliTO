import React from 'react';

import { Button } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import { FaRegTrashCan } from 'react-icons/fa6';

import PropTypes from 'prop-types';

export default function ResetButton({ resetFilters }) {
  const { t } = useTranslation();
  return (
    <Button
      className="card-button"
      onClick={() => resetFilters()}
      size="sm"
      style={{ display: 'flex', alignItems: 'center' }}
    >
      <FaRegTrashCan size={16} style={{ marginRight: '5px' }} />
      {t('carriera.proposte_di_tesi.reset_filters')}{' '}
    </Button>
  );
}

ResetButton.propTypes = {
  resetFilters: PropTypes.func.isRequired,
};
