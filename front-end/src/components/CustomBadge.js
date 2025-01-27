import React, { useContext } from 'react';

import { Button } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import {
  FaBook,
  FaBrain,
  FaBuildingCircleArrowRight,
  FaBuildingColumns,
  FaCalculator,
  FaCalendar,
  FaChartBar,
  FaChartColumn,
  FaChartPie,
  FaCircleCheck,
  FaCircleExclamation,
  FaCircleXmark,
  FaCode,
  FaEarthAmericas,
  FaFlask,
  FaKey,
  FaMagnifyingGlassChart,
  FaPenToSquare,
  FaUncharted,
  FaUser,
  FaWhmcs,
} from 'react-icons/fa6';

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
            <div className="custom-badge-icon">{renderIcon(item.content)}</div>
            <span className="custom-badge-text">{variant === 'type' ? item.content.toUpperCase() : item.content}</span>
            <div className="custom-badge-icon">
              <FaCircleXmark size={14} className="ms-1" />
            </div>
          </Button>,
        );
      } else {
        elements.push(
          <div key={`${item}-${index}`} className={`custom-badge badge ${variant}_${appliedTheme}`}>
            <div className="custom-badge-icon">{renderIcon(item)}</div>
            <div className="custom-badge-text">{variant === 'type' ? item.toUpperCase() : item}</div>
          </div>,
        );
      }
    });

    return elements;
  };

  const renderIcon = contentItem => {
    switch (variant) {
      case 'teacher':
        return <FaUser size={14} className="me-1" />;
      case 'keyword':
        return <FaKey size={14} className="me-1" />;
      case 'internal':
        return <FaBuildingColumns size={14} className="me-1" />;
      case 'external':
        return <FaBuildingCircleArrowRight size={14} className="me-1" />;
      case 'abroad':
        return <FaEarthAmericas size={14} className="me-1" />;
      case 'date':
        return <FaCalendar size={14} className="me-1" />;
      case 'success':
        return <FaCircleCheck size={14} className="me-1" />;
      case 'warning':
        return <FaCircleExclamation size={14} className="me-1" />;
      case 'error':
        return <FaCircleXmark size={14} className="me-1" />;
      case 'type':
        switch (contentItem.toLowerCase()) {
          // analisi dati
          case 'analisi dati':
          case 'data analysis':
            return <FaChartColumn size={14} className="me-1" />;
          // analitica
          case 'analitica':
          case 'analytical':
            return <FaChartBar size={14} className="me-1" />;
          // applicativa
          case 'applicativa':
          case 'applied':
            return <FaWhmcs size={14} className="me-1" />;
          // compilativa
          case 'compilativa':
          case 'bibliographic':
            return <FaPenToSquare size={14} className="me-1" />;
          // computazionale
          case 'computazionale':
          case 'computational':
            return <FaBrain size={14} className="me-1" />;
          // progettuale
          case 'progettuale':
          case 'design':
            return <FaUncharted size={14} className="me-1" />;
          // ricerca
          case 'ricerca':
          case 'research':
            return <FaMagnifyingGlassChart size={14} className="me-1" />;
          // simulativa
          case 'simulativa':
          case 'simulation':
            return <FaChartPie size={14} className="me-1" />;
          // sperimentale
          case 'sperimentale':
          case 'experimental':
            return <FaFlask size={14} className="me-1" />;
          // sviluppo
          case 'sviluppo':
          case 'development':
            return <FaCode size={14} className="me-1" />;
          // teorica
          case 'teorica':
          case 'theoretical':
            return <FaBook size={14} className="me-1" />;
          // numerica
          case 'numerica':
          case 'numerical':
            return <FaCalculator size={14} className="me-1" />;
          default:
            return <FaCircleXmark size={14} className="me-1" />;
        }
      default:
        return <FaCircleXmark size={14} className="me-1" />;
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
            <FaCircleXmark size={14} />
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
            {renderIcon(content)}
            {renderTranslatedContent()}
            <FaCircleXmark size={14} className="ms-1" />
          </Button>,
        );
      } else {
        elements.push(
          <div key="custom-badge-div" className={`custom-badge badge ${variant}_${appliedTheme}`}>
            {renderIcon(content)}
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
