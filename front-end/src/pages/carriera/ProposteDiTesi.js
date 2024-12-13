import React, { useEffect, useState } from 'react';

import { useTranslation } from 'react-i18next';

import API from '../../API';
import LoadingModal from '../../components/LoadingModal';
import MyBreadcrumb from '../../components/MyBreadcrumb';
import ThesisProposals from '../../components/ThesisProposals';

export default function ProposteDiTesi() {
  const { i18n } = useTranslation();
  const [thesisProposals, setThesisProposals] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    API.getThesisProposals(i18n.language, 1, 5) // Fetch the first 5 thesis proposals
      .then(data => {
        setThesisProposals(data.thesisProposals);
      })
      .catch(error => console.error('Error fetching thesis proposals:', error))
      .finally(() => setLoading(false));
  }, [i18n.language]);

  return (
    <>
      {loading ? (
        <LoadingModal show={loading} onHide={() => setLoading(false)} />
      ) : (
        <>
          <MyBreadcrumb />
          <ThesisProposals thesisProposals={thesisProposals} />
        </>
      )}
    </>
  );
}
