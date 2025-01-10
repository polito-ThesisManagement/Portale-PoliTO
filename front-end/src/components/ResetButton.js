import React from 'react';

import { Button } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import { FaRegTrashCan } from 'react-icons/fa6';

import PropTypes from 'prop-types';

export default function ResetButton({ resetFilters }) {
  const { t } = useTranslation();
  return (
    <Button className="card-button" size="sm" onClick={() => resetFilters()}>
      <FaRegTrashCan size={16} />
      {t('carriera.proposte_di_tesi.reset_all')}{' '}
    </Button>
  );
}

ResetButton.propTypes = {
  resetFilters: PropTypes.func.isRequired,
};
