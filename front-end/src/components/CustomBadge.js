import React, { useContext } from 'react';

import { Button, OverlayTrigger, Tooltip } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';

import moment from 'moment';
import PropTypes from 'prop-types';

import { ThemeContext } from '../App';
import '../styles/custom-badge.css';
import { getSystemTheme } from '../utils/utils';

moment.locale('it');
/**
 * Custom badge component.
 * @param {string} variant - The variant of the badge. Available options are:
 *  - "teacher": Renders a badge with a teacher icon. Requires a "content".
 *  - "keyword": Renders a badge with a keyword icon. Requires a "content".
 *  - "internal": Renders a badge with an internal thesis icon.
 *  - "external": Renders a badge with an external thesis icon.
 *  - "italy": Renders a badge with the Italy flag icon.
 *  - "abroad": Renders a badge with an abroad icon.
 *  - "status": Renders a badge with a success, warning or error icon. Requires a "content" (the expiration date).
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
  'italy',
  'abroad',
  'type',
  'status',
  'warning',
  'success',
  'error',
];
const validTypes = ['reset', 'truncated'];
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
    let truncatedContentArray = [];

    const handleRemoveFilter = (filterType, filterArray, item) => {
      applyFilters(
        filterType,
        filterArray.filter(filter => filter.id !== item.id),
      );
    };

    let displayedContent = [...contentArray];

    if (type === 'truncated' && contentArray.length > 2) {
      truncatedContentArray = contentArray.slice(2); // Store hidden items
      displayedContent = [...contentArray.slice(0, 2), t('carriera.proposte_di_tesi.others') + '...']; // Only show first 2 + "Others..."
    }

    displayedContent.forEach((item, index) => {
      if (type === 'reset' && applyFilters) {
        elements.push(
          <Button
            key={`${item.content}-${index}`}
            className={`custom-badge badge ${variant}_${appliedTheme} reset clickable`}
            onClick={() => handleRemoveFilter(variant, filters[variant], item)}
          >
            <div className="custom-badge-icon">{renderIcon(item.content)}</div>
            <span className="custom-badge-text">{item.content}</span>
            <div className="custom-badge-icon">
              <i className="fa-regular fa-circle-xmark fa-lg" />
            </div>
          </Button>,
        );
      } else if (type === 'truncated' && item === 'Altri...') {
        elements.push(
          <OverlayTrigger
            key={`${item}-${index}`}
            delay={{ show: 250, hide: 400 }}
            overlay={<Tooltip id={`tooltip-${truncatedContentArray}`}>{truncatedContentArray.join(', ')}</Tooltip>}
            placement="top"
          >
            <div className={`custom-badge badge ${variant}_${appliedTheme} pe-2 clickable`}>
              <span className="custom-badge-text">{item}</span>
            </div>
          </OverlayTrigger>,
        );
      } else {
        elements.push(
          <div
            key={`${item}-${index}`}
            className={`custom-badge badge ${variant}_${appliedTheme} ${variant === 'type' ? 'pe-2' : ''}`}
          >
            {variant === 'type' && <div className="custom-badge-icon">{renderIcon(item)}</div>}
            <div className="custom-badge-text">{item}</div>
          </div>,
        );
      }
    });

    return elements;
  };

  const renderIcon = content => {
    switch (variant) {
      case 'teacher':
        return <i className="fa-regular fa-user fa-lg" />;
      case 'keyword':
        return <i className="fa-regular fa-key fa-lg" />;
      case 'internal':
        return <i className="fa-regular fa-building-columns fa-lg" />;
      case 'external':
        return <i className="fa-regular fa-building-circle-arrow-right fa-lg" />;
      case 'italy':
        return <span className="fi fi-it" style={{ borderRadius: '3px' }} />;
      case 'abroad':
        return (
          <i
            className="fa-sharp-duotone fa-solid fa-earth-americas fa-lg"
            style={{
              '--fa-primary-color': 'var(--green-500)',
              '--fa-secondary-color': 'var(--lightBlue-600)',
              '--fa-secondary-opacity': '1',
            }}
          />
        );
      case 'status':
        switch (content) {
          case 'success':
            return <i className="fa-regular fa-circle-check fa-lg" />;
          case 'warning':
            return <i className="fa-regular fa-circle-exclamation fa-lg" />;
          case 'error':
            return <i className="fa-regular fa-circle-xmark fa-lg" />;
          default:
            return <i className="fa-regular fa-circle-xmark fa-lg" />;
        }
      case 'type':
        switch (content.toLowerCase()) {
          // analisi dati
          case 'analisi dati':
          case 'data analysis':
            return <i className="fa-regular fa-chart-column fa-lg" />;
          // analitica
          case 'analitica':
          case 'analytical':
            return <i className="fa-regular fa-chart-line fa-lg" />;
          // applicativa
          case 'applicativa':
          case 'applied':
            return <i className="fa-regular fa-gear fa-lg" />;
          // compilativa
          case 'compilativa':
          case 'bibliographic':
            return <i className="fa-regular fa-pen-to-square fa-lg" />;
          // computazionale
          case 'computazionale':
          case 'computational':
            return <i className="fa-regular fa-brain fa-lg" />;
          // progettuale
          case 'progettuale':
          case 'design':
            return <i className="fa-brands fa-uncharted fa-lg" />;
          // ricerca
          case 'ricerca':
          case 'research':
            return <i className="fa-regular fa-book-atlas fa-lg" />;
          // simulativa
          case 'simulativa':
          case 'simulation':
            return <i className="fa-regular fa-chart-pie fa-lg" />;
          // sperimentale
          case 'sperimentale':
          case 'experimental':
            return <i className="fa-regular fa-flask fa-lg" />;
          // sviluppo
          case 'sviluppo':
          case 'development':
            return <i className="fa-solid fa-code fa-lg" />;
          // teorica
          case 'teorica':
          case 'theoretical':
            return <i className="fa-regular fa-book fa-lg" />;
          // numerica
          case 'numerica':
          case 'numerical':
            return <i className="fa-regular fa-calculator fa-lg" />;
          default:
            return <i className="fa-regular fa-circle-xmark fa-lg" />;
        }
      default:
        return <i className="fa-regular fa-circle-xmark fa-lg" />;
    }
  };

  const renderTranslatedContent = type => {
    switch (variant) {
      case 'internal':
        return t('carriera.proposte_di_tesi.internal_thesis');
      case 'external':
        return t('carriera.proposte_di_tesi.external_thesis');
      case 'italy':
        return t('carriera.proposte_di_tesi.italy_thesis');
      case 'abroad':
        return t('carriera.proposte_di_tesi.abroad_thesis');
      case 'status':
        switch (type) {
          case 'success':
            return t('carriera.proposta_di_tesi.disponibile');
          case 'warning':
            return t('carriera.proposta_di_tesi.in_scadenza');
          case 'error':
            return t('carriera.proposta_di_tesi.scaduta');
          default:
            return t('carriera.proposta_di_tesi.badge_errato');
        }
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
    (type && !validTypes.includes(type)) ||
    (['teacher', 'keyword', 'type', 'status', 'success', 'warning', 'error'].includes(variant) && !content) ||
    (variant === 'type' && !isValidTypeContent(content))
  ) {
    return (
      <div className="custom-badge-container">
        <div className={`custom-badge badge error_${appliedTheme}`}>
          <div className="custom-badge-icon">
            <i className="fa-regular fa-circle-xmark fa-lg" />
          </div>
          <div className="custom-badge-text">{t('carriera.proposta_di_tesi.badge_errato')}</div>
        </div>
      </div>
    );
  }

  const renderBadge = () => {
    const elements = [];

    const getStatusBadgeType = remainingTime => {
      if (remainingTime > 14) return 'success';
      if (remainingTime <= 14 && remainingTime > 0) return 'warning';
      return 'error';
    };

    if (variant === 'internal' || variant === 'external' || variant === 'italy' || variant === 'abroad') {
      if (type === 'reset' && applyFilters) {
        elements.push(
          <Button
            key="custom-badge-button"
            className={`custom-badge badge ${variant}_${appliedTheme} reset clickable`}
            onClick={() => {
              if (variant === 'internal') {
                applyFilters('isInternal', 0);
              } else if (variant === 'external') {
                applyFilters('isInternal', 0);
              } else {
                applyFilters('isAbroad', 0);
              }
            }}
          >
            <div className="custom-badge-icon">{renderIcon()}</div>
            <div className="custom-badge-text">{renderTranslatedContent()}</div>
            <div className="custom-badge-icon">
              <i className="fa-regular fa-circle-xmark fa-lg" />
            </div>
          </Button>,
        );
      } else {
        elements.push(
          <div key="custom-badge-div" className={`custom-badge badge ${variant}_${appliedTheme} pe-2`}>
            <div className="custom-badge-icon">{renderIcon()}</div>
            <div className="custom-badge-text">{renderTranslatedContent()}</div>
          </div>,
        );
      }
    } else if (variant === 'status') {
      const start = moment();
      const end = moment(content);
      const remainingTime = end.diff(start, 'seconds') / 86400;
      const statusVariant = getStatusBadgeType(remainingTime);

      elements.push(
        <div key="custom-badge-div" className={`custom-badge badge ${statusVariant}_${appliedTheme} pe-2`}>
          <div className="custom-badge-icon">{renderIcon(statusVariant)}</div>
          <div className="custom-badge-text">{renderTranslatedContent(statusVariant)}</div>
        </div>,
      );
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
