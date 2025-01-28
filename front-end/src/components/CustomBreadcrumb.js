import React from 'react';

import { Breadcrumb } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import { FaBookOpen, FaBriefcase, FaCircleInfo, FaFileLines, FaUser, FaUserGraduate } from 'react-icons/fa6';
import { HiLightBulb } from 'react-icons/hi';
import { MdApps } from 'react-icons/md';
import { useLocation, useNavigate } from 'react-router-dom';

const breadcrumbConfig = {
  didattica: { icon: <FaBookOpen size={14} className="me-2" />, label: 'sidebar.didattica', path: '/didattica' },
  area_personale: {
    icon: <FaUser size={14} className="me-2" />,
    label: 'sidebar.area_personale',
    path: '/area_personale',
  },
  carriera: { icon: <FaUserGraduate size={14} className="me-2" />, label: 'sidebar.carriera', path: '/carriera' },
  proposte_di_tesi: {
    icon: <HiLightBulb size={14} className="me-2" />,
    label: 'carriera.proposte_di_tesi.title_half_lowercase',
    path: '/carriera/proposte_di_tesi',
  },
  proposta_di_tesi: {
    icon: <FaFileLines size={14} className="me-2" />,
    label: 'carriera.proposta_di_tesi.dettagli_proposta_di_tesi',
  },
  opportunita: {
    icon: <FaBriefcase size={14} className="me-2" />,
    label: 'sidebar.opportunità',
    path: '/opportunita',
  },
  servizi: {
    icon: <MdApps size={14} className="me-2" />,
    label: 'sidebar.servizi',
    path: '/servizi',
  },
  help: {
    icon: <FaCircleInfo size={14} className="me-2" />,
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
        <Breadcrumb.Item key={index} onClick={() => navigate(config.path)}>
          {config.icon}
          {t(config.label)}
        </Breadcrumb.Item>
      );
    }

    // Check if the value is an integer and follows "proposte_di_tesi"
    if (index > 0 && pathnames[index - 1] === 'proposte_di_tesi' && !isNaN(value)) {
      return (
        <Breadcrumb.Item key={index} onClick={() => navigate(`/carriera/proposte_di_tesi/${value}`)}>
          {breadcrumbConfig.proposta_di_tesi.icon}
          {t(breadcrumbConfig.proposta_di_tesi.label)}
        </Breadcrumb.Item>
      );
    }
  };

  return (
    <div className="breadcrumbs_container">
      <Breadcrumb>{pathnames.map((value, index) => renderBreadcrumbElement(value, index))}</Breadcrumb>
    </div>
  );
}
