import React, { useContext } from 'react';

import { useTranslation } from 'react-i18next';
import {
  FaBook,
  FaBrain,
  FaBuildingCircleArrowRight,
  FaBuildingColumns,
  FaCalculator,
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
 * @param {string|array<string>} content - If available, populate the content of the badge. It could be a single string or an array of strings.
 * If you provide an array, the component will automatically render a tag for every string item.
 * @returns {JSX.Element} - The badge component.
 * @note The content of variant="type" badges can be provided in UPPERCASE or lowercase or a mix of them.
 * Regardless, they'll be always showed in UPPERCASE format. Beware that you must maintain spaces between words!
 */

const validVariants = ['teacher', 'keyword', 'internal', 'external', 'abroad', 'type', 'warning', 'success', 'error'];
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

export default function Badge({ variant, content }) {
  const { theme } = useContext(ThemeContext);
  const { t } = useTranslation();
  const appliedTheme = theme === 'auto' ? getSystemTheme() : theme;

  const renderContent = () => {
    const contentArray = Array.isArray(content) ? content : [content];

    return contentArray.map((item, index) => (
      <span key={`${item}-${index}`} className={`badge ${variant}_${appliedTheme}`}>
        {renderIcon(item)}
        {variant === 'type' ? item.toUpperCase() : item}
      </span>
    ));
  };

  const renderIcon = contentItem => {
    switch (variant) {
      case 'teacher':
        return <FaUser size={15} />;
      case 'keyword':
        return <FaKey size={15} />;
      case 'internal':
        return <FaBuildingColumns size={15} />;
      case 'external':
        return <FaBuildingCircleArrowRight size={15} />;
      case 'abroad':
        return <FaEarthAmericas size={15} />;
      case 'success':
        return <FaCircleCheck size={15} />;
      case 'warning':
        return <FaCircleExclamation size={15} />;
      case 'error':
        return <FaCircleXmark size={15} />;
      case 'type':
        switch (contentItem.toLowerCase()) {
          // analisi dati
          case 'analisi dati':
          case 'data analysis':
            return <FaChartColumn size={15} />;
          // analitica
          case 'analitica':
          case 'analytical':
            return <FaChartBar size={15} />;
          // applicativa
          case 'applicativa':
          case 'applied':
            return <FaWhmcs size={15} />;
          // compilativa
          case 'compilativa':
          case 'bibliographic':
            return <FaPenToSquare size={15} />;
          // computazionale
          case 'computazionale':
          case 'computational':
            return <FaBrain size={15} />;
          // progettuale
          case 'progettuale':
          case 'design':
            return <FaUncharted size={15} />;
          // ricerca
          case 'ricerca':
          case 'research':
            return <FaMagnifyingGlassChart size={15} />;
          // simulativa
          case 'simulativa':
          case 'simulation':
            return <FaChartPie size={15} />;
          // sperimentale
          case 'sperimentale':
          case 'experimental':
            return <FaFlask size={15} />;
          // sviluppo
          case 'sviluppo':
          case 'development':
            return <FaCode size={15} />;
          // teorica
          case 'teorica':
          case 'theoretical':
            return <FaBook size={15} />;
          // numerica
          case 'numerica':
          case 'numerical':
            return <FaCalculator size={15} />;
          default:
            return <FaCircleXmark size={15} />;
        }
      default:
        return <FaCircleXmark size={15} />;
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
      return content.every(item => validTypeContent.includes(item.toLowerCase()));
    }
    return validTypeContent.includes(content.toLowerCase());
  };

  if (
    !validVariants.includes(variant) ||
    (['teacher', 'keyword', 'type', 'success', 'warning', 'error'].includes(variant) && !content) ||
    (variant === 'type' && !isValidTypeContent(content))
  ) {
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
          {renderIcon(content)}
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
