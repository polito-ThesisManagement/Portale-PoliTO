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
 *  - "success": Renders a badge with a success icon.
 *  - "warning": Renders a badge with a warning icon.
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

const validVariants = ['teacher', 'keyword', 'internal', 'external', 'abroad', 'type', 'warning', 'success'];
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
    if (Array.isArray(content)) {
      return content.map((item, index) => (
        <span key={index} className={`badge ${variant}_${appliedTheme}`}>
          {renderIcon(item)}
          {variant === 'type' ? item.toUpperCase() : item}
        </span>
      ));
    }
    return (
      <span className={`badge ${variant}_${appliedTheme}`}>
        {renderIcon(content)}
        {variant === 'type' ? content.toUpperCase() : content}
      </span>
    );
  };

  const renderIcon = contentItem => {
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
      case 'success':
        return <FaCircleCheck size={16} />;
      case 'warning':
        return <FaCircleExclamation size={16} />;
      case 'type':
        switch (contentItem.toLowerCase()) {
          // analisi dati
          case 'analisi dati':
          case 'data analysis':
            return <FaChartColumn size={16} />;
          // analitica
          case 'analitica':
          case 'analytical':
            return <FaChartBar size={16} />;
          // applicativa
          case 'applicativa':
          case 'applied':
            return <FaWhmcs size={16} />;
          // compilativa
          case 'compilativa':
          case 'bibliographic':
            return <FaPenToSquare size={16} />;
          // computazionale
          case 'computazionale':
          case 'computational':
            return <FaBrain size={16} />;
          // progettuale
          case 'progettuale':
          case 'design':
            return <FaUncharted size={16} />;
          // ricerca
          case 'ricerca':
          case 'research':
            return <FaMagnifyingGlassChart size={16} />;
          // simulativa
          case 'simulativa':
          case 'simulation':
            return <FaChartPie size={16} />;
          // sperimentale
          case 'sperimentale':
          case 'experimental':
            return <FaFlask size={16} />;
          // sviluppo
          case 'sviluppo':
          case 'development':
            return <FaCode size={16} />;
          // teorica
          case 'teorica':
          case 'theoretical':
            return <FaBook size={16} />;
          // numerica
          case 'numerica':
          case 'numerical':
            return <FaCalculator size={16} />;
          default:
            return <FaCircleXmark size={16} />;
        }
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

  const isValidTypeContent = content => {
    if (Array.isArray(content)) {
      return content.every(item => validTypeContent.includes(item.toLowerCase()));
    }
    return validTypeContent.includes(content.toLowerCase());
  };

  if (
    !validVariants.includes(variant) ||
    (['teacher', 'keyword', 'type', 'warning', 'success'].includes(variant) && !content) ||
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
