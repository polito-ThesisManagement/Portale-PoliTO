import React, { useContext } from 'react';

import { useTranslation } from 'react-i18next';
import {
  FaBuildingCircleArrowRight,
  FaBuildingColumns,
  FaCircleXmark,
  FaEarthAmericas,
  FaFolder,
  FaKey,
  FaUser,
} from 'react-icons/fa6';

import PropTypes from 'prop-types';

import { ThemeContext } from '../App';
import '../styles/Badge.css';
import { getSystemTheme } from '../utils/utils';

/**
 * Badge component.
 * @param {string} variant - The variant of the badge. Available options are:
 *  - "teacher": Renders a badge with a teacher icon. Requires a "content".
 *  - "keyword": Renders a badge with a keyword icon. Requires a "content".
 *  - "internal": Renders a badge with an internal thesis icon.
 *  - "external": Renders a badge with an external thesis icon.
 *  - "abroad": Renders a badge with an abroad thesis icon.
 *  - "type": Renders a badge with a thesis type icon. Requires a "content".
 * @param {string|array<string>} content - If available, populate the content of the badge. It could be a single string or an array of strings.
 * If you provide an array the component will automatically render a tag for every string item.
 * @returns {JSX.Element} - The badge component.
 */

export default function Badge({ variant, content }) {
  const { theme } = useContext(ThemeContext);
  const { t } = useTranslation();
  const appliedTheme = theme === 'auto' ? getSystemTheme() : theme;

  const renderContent = () => {
    if (Array.isArray(content)) {
      return content.map((item, index) => (
        <span key={index} className={`badge ${variant}_${appliedTheme}`}>
          {renderIcon()}
          {item}
        </span>
      ));
    }
    return (
      <span className={`badge ${variant}_${appliedTheme}`}>
        {renderIcon()}
        {content}
      </span>
    );
  };

  const renderIcon = () => {
    switch (variant) {
      case 'teacher':
        return <FaUser size={16} />;
      case 'keyword':
        return <FaKey size={16} />;
      case 'internal':
        return <FaBuildingColumns size={16} />;
      case 'external':
        return <FaBuildingCircleArrowRight size={16} />;
      case 'abroad':
        return <FaEarthAmericas size={16} />;
      case 'type':
        return <FaFolder size={16} />;
      default:
        return <FaCircleXmark size={16} />;
    }
  };

  const renderTranslatedContent = () => {
    switch (variant) {
      case 'internal':
        return t('carriera.proposte_di_tesi.internal_thesis');
      case 'external':
        return t('carriera.proposte_di_tesi.external_thesis');
      case 'abroad':
        return t('carriera.proposte_di_tesi.abroad_thesis');
      default:
        return t('carriera.proposta_di_tesi.badge_errato');
    }
  };

  const validVariants = ['teacher', 'keyword', 'internal', 'external', 'abroad', 'type'];
  const requiresContent = ['teacher', 'keyword', 'type'].includes(variant);

  if (!validVariants.includes(variant) || (requiresContent && !content)) {
    return (
      <div className="badge-container">
        <span className={`badge error_${appliedTheme}`}>
          <FaCircleXmark size={16} />
          {t('carriera.proposta_di_tesi.badge_errato')}
        </span>
      </div>
    );
  }

  return (
    <div className="badge-container">
      {variant === 'internal' || variant === 'external' || variant === 'abroad' ? (
        <span className={`badge ${variant}_${appliedTheme}`}>
          {renderIcon()}
          {renderTranslatedContent()}
        </span>
      ) : (
        renderContent()
      )}
    </div>
  );
}

Badge.propTypes = {
  variant: PropTypes.string.isRequired,
  content: PropTypes.oneOfType([PropTypes.string, PropTypes.arrayOf(PropTypes.string)]),
};
