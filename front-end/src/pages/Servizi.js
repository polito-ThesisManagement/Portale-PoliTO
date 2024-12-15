import React from 'react';

import { useTranslation } from 'react-i18next';
import { MdApps } from 'react-icons/md';

import Title from '../components/Title';
import '../styles/Utilities.css';

export default function Servizi() {
  const { t } = useTranslation();
  return <Title icon={<MdApps size={30} />} sectionName={t('sidebar.servizi')} />;
}
