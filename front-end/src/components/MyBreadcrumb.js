import React from 'react';

import { useTranslation } from 'react-i18next';
import { FaBookOpen, FaFileLines, FaUserGraduate } from 'react-icons/fa6';
import { HiLightBulb } from 'react-icons/hi';
import { useLocation, useNavigate } from 'react-router-dom';

const breadcrumbConfig = {
  carriera: { icon: <FaUserGraduate size={14} />, label: 'sidebar.carriera', path: '/carriera' },
  didattica: { icon: <FaBookOpen size={14} />, label: 'sidebar.didattica', path: '/didattica' },
  proposte_di_tesi: {
    icon: <HiLightBulb size={17} />,
    label: 'carriera.proposte_di_tesi.title_half_lowercase',
    path: '/carriera/proposte_di_tesi',
  },
};

export default function MyBreadcrumb() {
  const { t } = useTranslation();
  const location = useLocation();
  const navigate = useNavigate();
  const pathnames = location.pathname.split('/').filter(x => x);

  const handleKeyDown = (event, path) => {
    if (event.key === 'Enter' || event.key === ' ') {
      navigate(path);
    }
  };

  const renderBreadcrumbElement = (value, index) => {
    const config = breadcrumbConfig[value];
    const isLast = index === pathnames.length - 1;

    if (config) {
      return (
        <React.Fragment key={index}>
          <div
            className="mybreadcrumb-element"
            onClick={() => navigate(config.path)}
            onKeyDown={event => handleKeyDown(event, config.path)}
            role="button"
            tabIndex={0}
          >
            {config.icon}
            {t(config.label)}
          </div>
          {!isLast && <div className="mybreadcrumb-separator"> / </div>}
        </React.Fragment>
      );
    }

    // Check if the value is an integer and follows "proposte_di_tesi"
    if (index > 0 && pathnames[index - 1] === 'proposte_di_tesi' && !isNaN(value)) {
      return (
        <React.Fragment key={index}>
          <div
            className="mybreadcrumb-element"
            onClick={() => navigate(`/carriera/proposte_di_tesi/${value}`)}
            onKeyDown={event => handleKeyDown(event, `/carriera/proposte_di_tesi/${value}`)}
            role="button"
            tabIndex={0}
          >
            <FaFileLines size={14} />
            {t('carriera.proposta_di_tesi.dettagli_proposta_di_tesi')}
          </div>
          {!isLast && <div className="mybreadcrumb-separator"> / </div>}
        </React.Fragment>
      );
    }

    return (
      <React.Fragment key={index}>
        <div className="mybreadcrumb-element">{value}</div>
        {!isLast && <div className="mybreadcrumb-separator"> / </div>}
      </React.Fragment>
    );
  };

  return <div className="mybreadcrumb">{pathnames.map((value, index) => renderBreadcrumbElement(value, index))}</div>;
}
