import React, { useContext } from 'react';

import { Button } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';

import {
  faBuildingCircleArrowRight,
  faBuildingColumns,
  faCalendar,
  faCircleCheck,
  faCircleExclamation,
  faCircleXmark,
  faEarthAmericas,
  faKey,
  faTags,
  faUser,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';

import { ThemeContext } from '../App';
import '../styles/CustomBadge.css';
import { getSystemTheme } from '../utils/utils';

/**
 * Custom badge component.
 * @param {string} variant - The variant of the badge. Available options are:
 *  - "teacher": Renders a badge with a teacher icon. Requires a "content".
 *  - "keyword": Renders a badge with a keyword icon. Requires a "content".
 *  - "internal": Renders a badge with an internal thesis icon.
 *  - "external": Renders a badge with an external thesis icon.
 *  - "abroad": Renders a badge with an abroad thesis icon.
 *  - "date": Renders a badge with a calendar icon. Requires a "content".
 *  - "success": Renders a badge with a success icon. Requires a "content".
 *  - "warning": Renders a badge with a warning icon. Requires a "content".
 *  - "error": Renders a badge with an error icon. Requires a "content".
 *  - "type": Renders a badge with a thesis type icon. Requires a "content". Valid content values are:
 *    - "ANALISI DATI" or "DATA ANALYSIS"
 *    - "ANALITICA" or "ANALYTICAL"
 *    - "APPLICATIVA" or "APPLIED"
 *    - "COMPILATIVA" or "BIBLIOGRAPHIC"
 *    - "COMPUTAZIONALE" or "COMPUTATIONAL"
 *    - "PROGETTUALE" or "DESIGN"
 *    - "RICERCA" or "RESEARCH"
 *    - "SIMULATIVA" or "SIMULATION"
 *    - "SPERIMENTALE" or "EXPERIMENTAL"
 *    - "SVILUPPO" or "DEVELOPMENT"
 *    - "TEORICA" or "THEORETICAL"
 *    - "NUMERICA" or "NUMERICAL"
 * @param {object|array<object>!string|array<string>} content - If available, populate the content of the badge. It could be a single object (with 'content' and 'id' attributes) or an array of objects, a single string or an array of strings.
 * If you provide an array, the component will automatically render a tag for every item.
 * @param {type} - Optional. It is used to specify if the badge is a 'reset' badge. If it is, the badge will be rendered as a button with a 'delete' icon at the end and will reset the filters when clicked.
 * @param {object} filters - The filters object. It's required only if the badge is a filter.
 * @param {function} applyFilters - The function to apply filters. It's required only if the badge is a filter (e.g. a teacher or a keyword filter).
 * @returns {JSX.Element} - The badge component.
 * @note The content of variant="type" badges can be provided in UPPERCASE or lowercase or a mix of them.
 * Regardless, they'll be always showed in UPPERCASE format. Beware that you must maintain spaces between words!
 */

const validVariants = [
  'teacher',
  'keyword',
  'internal',
  'external',
  'abroad',
  'date',
  'type',
  'warning',
  'success',
  'error',
];
const validTypeContent = [
  'analisi dati',
  'data analysis',
  'analitica',
  'analytical',
  'applicativa',
  'applied',
  'compilativa',
  'bibliographic',
  'computazionale',
  'computational',
  'progettuale',
  'design',
  'ricerca',
  'research',
  'simulativa',
  'simulation',
  'sperimentale',
  'experimental',
  'sviluppo',
  'development',
  'teorica',
  'theoretical',
  'numerica',
  'numerical',
];

export default function CustomBadge({ variant, content, type, filters, applyFilters }) {
  const { theme } = useContext(ThemeContext);
  const { t } = useTranslation();
  const appliedTheme = theme === 'auto' ? getSystemTheme() : theme;

  const renderContent = () => {
    const contentArray = Array.isArray(content) ? content : [content];
    const elements = [];

    const handleRemoveFilter = (filterType, filterArray, item) => {
      applyFilters(
        filterType,
        filterArray.filter(filter => filter.id !== item.id),
      );
    };

    contentArray.forEach((item, index) => {
      if (type === 'reset' && applyFilters) {
        elements.push(
          <Button
            key={`${item.content}-${index}`}
            className={`custom-badge badge ${variant}_${appliedTheme} clickable`}
            onClick={() => {
              handleRemoveFilter(variant, filters[variant], item);
            }}
          >
            <div className="custom-badge-icon">{renderIcon()}</div>
            <span className="custom-badge-text">{variant === 'type' ? item.content.toUpperCase() : item.content}</span>
            <div className="custom-badge-icon">
              <FontAwesomeIcon icon={faCircleXmark} />
            </div>
          </Button>,
        );
      } else {
        elements.push(
          <div key={`${item}-${index}`} className={`custom-badge badge ${variant}_${appliedTheme}`}>
            <div className="custom-badge-icon">{renderIcon()}</div>
            <div className="custom-badge-text">{variant === 'type' ? item.toUpperCase() : item}</div>
          </div>,
        );
      }
    });

    return elements;
  };

  const renderIcon = () => {
    switch (variant) {
      case 'teacher':
        return <FontAwesomeIcon icon={faUser} />;
      case 'keyword':
        return <FontAwesomeIcon icon={faKey} />;
      case 'internal':
        return <FontAwesomeIcon icon={faBuildingColumns} />;
      case 'external':
        return <FontAwesomeIcon icon={faBuildingCircleArrowRight} />;
      case 'abroad':
        return <FontAwesomeIcon icon={faEarthAmericas} />;
      case 'date':
        return <FontAwesomeIcon icon={faCalendar} />;
      case 'success':
        return <FontAwesomeIcon icon={faCircleCheck} />;
      case 'warning':
        return <FontAwesomeIcon icon={faCircleExclamation} />;
      case 'error':
        return <FontAwesomeIcon icon={faCircleXmark} />;
      case 'type':
        return <FontAwesomeIcon icon={faTags} />;
      default:
        return <FontAwesomeIcon icon={faCircleXmark} />;
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

  const isValidTypeContent = content => {
    if (Array.isArray(content)) {
      if (applyFilters) {
        return content.every(item => validTypeContent.includes(item.content.toLowerCase()));
      } else {
        return content.every(item => validTypeContent.includes(item.toLowerCase()));
      }
    }
    if (applyFilters) {
      return validTypeContent.includes(content.content.toLowerCase());
    } else {
      return validTypeContent.includes(content.toLowerCase());
    }
  };

  if (
    !validVariants.includes(variant) ||
    (['teacher', 'keyword', 'type', 'success', 'warning', 'error'].includes(variant) && !content) ||
    (variant === 'type' && !isValidTypeContent(content))
  ) {
    return (
      <div className="custom-badge-container">
        <div className={`custom-badge badge error_${appliedTheme}`}>
          <div className="custom-badge-icon">
            <FontAwesomeIcon icon={faCircleXmark} />
          </div>
          <div className="custom-badge-text">{t('carriera.proposta_di_tesi.badge_errato')}</div>
        </div>
      </div>
    );
  }

  const renderBadge = () => {
    const elements = [];

    if (variant === 'internal' || variant === 'external' || variant === 'abroad') {
      if (type === 'reset' && applyFilters) {
        elements.push(
          <Button
            key="custom-badge-button"
            className={`custom-badge badge ${variant}_${appliedTheme} clickable`}
            onClick={() => {
              if (variant === 'internal') {
                applyFilters('isInternal', 0);
              } else if (variant === 'external') {
                applyFilters('isInternal', 0);
              } else {
                applyFilters('isAbroad', false);
              }
            }}
          >
            <div className="custom-badge-icon">{renderIcon()}</div>
            {renderTranslatedContent()}
            <div className="custom-badge-icon">
              <FontAwesomeIcon icon={faCircleXmark} />
            </div>
          </Button>,
        );
      } else {
        elements.push(
          <div key="custom-badge-div" className={`custom-badge badge ${variant}_${appliedTheme}`}>
            <div className="custom-badge-icon">{renderIcon()}</div>
            {renderTranslatedContent()}
          </div>,
        );
      }
    } else {
      elements.push(renderContent());
    }

    return elements;
  };

  return <div className="custom-badge-container">{renderBadge()}</div>;
}

CustomBadge.propTypes = {
  variant: PropTypes.string.isRequired,
  content: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.object),
    PropTypes.arrayOf(PropTypes.string),
  ]),
  type: PropTypes.string,
  filters: PropTypes.object,
  applyFilters: PropTypes.func,
};
