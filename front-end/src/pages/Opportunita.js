import React from 'react';

import { useTranslation } from 'react-i18next';
import { FaBriefcase } from 'react-icons/fa6';

import Title from '../components/Title';

export default function Opportunita() {
  const { t } = useTranslation();
  return <Title icon={<FaBriefcase size={30} />} sectionName={t('sidebar.opportunità')} />;
}
