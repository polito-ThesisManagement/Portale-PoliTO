import React from 'react';

import { useTranslation } from 'react-i18next';
import { FaUser } from 'react-icons/fa6';

import Title from '../components/Title';

export default function AreaPersonale() {
  const { t } = useTranslation();
  return <Title icon={<FaUser size={30} />} sectionName={t('sidebar.area_personale')} />;
}
