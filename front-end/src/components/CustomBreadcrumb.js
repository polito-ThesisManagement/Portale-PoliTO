import React from 'react';

import { Breadcrumb } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const breadcrumbConfig = {
  didattica: {
    icon: <i className="fa-solid fa-book-open fa-fw me-2" />,
    label: 'sidebar.didattica',
    path: '/didattica',
  },
  area_personale: {
    icon: <i className="fa-solid fa-user me-2" />,
    label: 'sidebar.area_personale',
    path: '/area_personale',
  },
  carriera: {
    icon: <i className="fa-solid fa-user-graduate me-2" />,
    label: 'sidebar.carriera',
    path: '/carriera',
  },
  proposte_di_tesi: {
    icon: <i className="fa-solid fa-lightbulb-exclamation-on me-2" />,
    label: 'carriera.proposte_di_tesi.title_half_lowercase',
    path: '/carriera/proposte_di_tesi',
  },
  proposta_di_tesi: {
    icon: <i className="fa-solid fa-file-lines me-2" />,
    label: 'carriera.proposta_di_tesi.dettagli_proposta_di_tesi',
  },
  opportunita: {
    icon: <i className="fa-solid fa-briefcase me-2" />,
    label: 'sidebar.opportunità',
    path: '/opportunita',
  },
  servizi: {
    icon: <i className="fa-solid fa-grid me-2" />,
    label: 'sidebar.servizi',
    path: '/servizi',
  },
  help: {
    icon: <i className="fa-solid fa-circle-info me-2" />,
    label: 'Help',
    path: '/help',
  },
};

export default function CustomBreadcrumb() {
  const { t } = useTranslation();
  const location = useLocation();
  const navigate = useNavigate();
  const pathnames = location.pathname.split('/').filter(x => x);

  const renderBreadcrumbElement = (value, index) => {
    const config = breadcrumbConfig[value];

    if (config) {
      return (
        <Breadcrumb.Item key={index} onClick={() => navigate(config.path)} active={index === pathnames.length - 1}>
          {config.icon}
          {t(config.label)}
        </Breadcrumb.Item>
      );
    }

    // Check if the value is an integer and follows "proposte_di_tesi"
    if (index > 0 && pathnames[index - 1] === 'proposte_di_tesi' && !isNaN(value)) {
      return (
        <Breadcrumb.Item
          key={index}
          onClick={() => navigate(`/carriera/proposte_di_tesi/${value}`)}
          active={index === pathnames.length - 1}
        >
          {breadcrumbConfig.proposta_di_tesi.icon}
          {t(breadcrumbConfig.proposta_di_tesi.label)}
        </Breadcrumb.Item>
      );
    }
  };

  return (
    <div className="breadcrumbs_container">
      {pathnames.length >= 3 && (
        <>
          <Link onClick={() => navigate(-1)} className={`breadcrumb-back-link me-3`} size="sm">
            <i className="fa-solid fa-arrow-left fa-fw me-1" />
            <span className="d-none d-sm-inline-block">{t('breadcrumb.back')}</span>
            <span className="d-sm-none">
              {t('breadcrumb.back_to')} {t(breadcrumbConfig[pathnames[pathnames.length - 2]].label)}
            </span>
          </Link>
          <span
            style={{
              borderLeft: '1px solid var(--placeholder)',
              height: '15px',
              marginBottom: '1rem',
            }}
            className="me-3 separator"
          />
        </>
      )}
      <Breadcrumb className={pathnames.length >= 3 ? 'breadcrumb-long' : 'breadcrumb-short'}>
        {pathnames.map((value, index) => renderBreadcrumbElement(value, index))}
      </Breadcrumb>
    </div>
  );
}
