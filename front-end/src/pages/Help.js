import React from 'react';

import { FaCircleInfo } from 'react-icons/fa6';

import Title from '../components/Title';
import '../styles/Utilities.css';

export default function Help() {
  return <Title icon={<FaCircleInfo size={30} />} sectionName="Help" />;
}
