import React, { useContext } from 'react';

import { useTranslation } from 'react-i18next';
import { FaBuildingCircleArrowRight, FaBuildingColumns, FaEarthAmericas, FaKey, FaUser } from 'react-icons/fa6';

import PropTypes from 'prop-types';

import { ThemeContext } from '../App';
import '../styles/Badge.css';
import { getSystemTheme } from '../utils/utils';

/**
 * Badge component.
 * @param {string} variant - The variant of the badge. Available options are:
 *  - "teacher": Renders a badge with a teacher icon.
 *  - "keyword": Renders a badge with a keyword icon.
 *  - "internal": Renders a badge with an internal thesis icon.
 *  - "external": Renders a badge with an external thesis icon.
 *  - "abroad": Renders a badge with an abroad thesis icon.
 * @param {string} content - If available, populate the content of the badge. Note that not every badge needs it!
 * @returns {JSX.Element} - The badge component.
 */

export default function Badge({ variant, content }) {
  const { theme } = useContext(ThemeContext);
  const { t } = useTranslation();
  const appliedTheme = theme === 'auto' ? getSystemTheme() : theme;
  switch (variant) {
    case 'teacher':
      return (
        <span className={`badge teacher_${appliedTheme}`}>
          <FaUser size={16} />
          {content}
        </span>
      );
    case 'keyword':
      return (
        <span className={`badge keyword_${appliedTheme}`}>
          <FaKey size={16} />
          {content}
        </span>
      );
    case 'internal':
      return (
        <span className={`badge environment_${appliedTheme}`}>
          <FaBuildingColumns size={16} />
          {t('carriera.proposte_di_tesi.internal_thesis')}
        </span>
      );
    case 'external':
      return (
        <span className={`badge environment_${appliedTheme}`}>
          <FaBuildingCircleArrowRight size={16} />
          {t('carriera.proposte_di_tesi.external_thesis')}
        </span>
      );
    case 'abroad':
      return (
        <span className={`badge abroad_${appliedTheme}`}>
          <FaEarthAmericas size={16} />
          {t('carriera.proposte_di_tesi.abroad_thesis')}
        </span>
      );
    default:
      throw new Error(
        'Unable to render the badge: invalid parameters. You must provide a variant and where available a content.',
      );
  }
}

Badge.propTypes = {
  variant: PropTypes.string.isRequired,
  content: PropTypes.string,
};
