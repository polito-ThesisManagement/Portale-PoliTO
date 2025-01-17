import React, { useContext } from 'react';

import { Button } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import { FaRegTrashCan } from 'react-icons/fa6';

import PropTypes from 'prop-types';

import { ThemeContext } from '../App';
import { getSystemTheme } from '../utils/utils';

export default function ResetButton({ resetFilters }) {
  const { t } = useTranslation();
  const { theme } = useContext(ThemeContext);
  const appliedTheme = theme === 'auto' ? getSystemTheme() : theme;
  return (
    <Button className={`btn-${appliedTheme}`} size="sm" onClick={() => resetFilters()}>
      <FaRegTrashCan size={16} />
      {t('carriera.proposte_di_tesi.reset_all')}{' '}
    </Button>
  );
}

ResetButton.propTypes = {
  resetFilters: PropTypes.func.isRequired,
};
