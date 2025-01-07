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

export default function Badge({ variant, content, filters, applyFilters }) {
  const { theme } = useContext(ThemeContext);
  const { t } = useTranslation();
  const appliedTheme = theme === 'auto' ? getSystemTheme() : theme;

  const renderContent = () => {
    const contentArray = Array.isArray(content) ? content : [content];
    const elements = [];

    contentArray.forEach((item, index) => {
      if (
        variant === 'date' ||
        variant === 'success' ||
        variant === 'warning' ||
        variant === 'error' ||
        !applyFilters
      ) {
        elements.push(
          <div key={`${item}-${index}`} className={`badge ${variant}_${appliedTheme}`}>
            <div className="badge-icon">{renderIcon(item)}</div>
            <div className="badge-text">{variant === 'type' ? item.toUpperCase() : item}</div>
          </div>,
        );
      } else {
        elements.push(
          <Button
            key={`${item.content}-${index}`}
            className={`badge ${variant}_${appliedTheme} clickable`}
            onClick={() => {
              if (applyFilters) {
                if (variant === 'type') {
                  if (!filters.type.includes(item.id)) {
                    applyFilters('type', [...filters.type, item.id]);
                  }
                } else if (variant === 'keyword') {
                  if (!filters.keyword.includes(item.id)) {
                    applyFilters('keyword', [...filters.keyword, item.id]);
                  }
                } else if (variant === 'teacher') {
                  if (!filters.teacher.includes(item.id)) {
                    applyFilters('teacher', [...filters.teacher, item.id]);
                  }
                }
              }
            }}
          >
            <div className="badge-icon">{renderIcon(item.content)}</div>
            <div className="badge-text">{variant === 'type' ? item.content.toUpperCase() : item.content}</div>
          </Button>,
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
      <div className="badge-container">
        <div className={`badge error_${appliedTheme}`}>
          <div className="badge-icon">
            <FaCircleXmark size={14} />
          </div>
          <div className="badge-text">{t('carriera.proposta_di_tesi.badge_errato')}</div>
        </div>
      </div>
    );
  }

  const renderBadge = () => {
    const elements = [];

    if (variant === 'internal' || variant === 'external' || variant === 'abroad') {
      if (applyFilters) {
        elements.push(
          <Button
            key="badge-button"
            className={`badge ${variant}_${appliedTheme} clickable`}
            onClick={() => {
              if (variant === 'internal') {
                applyFilters('isInternal', 1);
              } else if (variant === 'external') {
                applyFilters('isInternal', 2);
              } else {
                applyFilters('isAbroad', true);
              }
            }}
          >
            {renderIcon(content)}
            {renderTranslatedContent()}
          </Button>,
        );
      } else {
        elements.push(
          <div key="badge-div" className={`badge ${variant}_${appliedTheme}`}>
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

  return <div className="badge-container">{renderBadge()}</div>;
}

Badge.propTypes = {
  variant: PropTypes.string.isRequired,
  content: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.object),
    PropTypes.arrayOf(PropTypes.string),
  ]),
  filters: PropTypes.object,
  applyFilters: PropTypes.func,
};
