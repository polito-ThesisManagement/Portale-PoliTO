import React, { useEffect, useState } from 'react';

import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';

import API from '../../API';
import LoadingModal from '../../components/LoadingModal';
import { MyBreadcrumb, ThesisProposalDetail } from '../../components/ThesisProposalDetail';

function PropostaDiTesi() {
  const id = useParams().id;
  const { i18n } = useTranslation();
  const [thesisProposal, setThesisProposal] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    API.getThesisProposalById(id, i18n.language)
      .then(data => {
        setThesisProposal(data);
      })
      .catch(error => console.error('Error fetching thesis proposal by ID:', error))
      .finally(() => setLoading(false));
  }, [id, i18n.language]);

  return (
    <>
      {loading ? (
        <LoadingModal show={loading} onHide={() => setLoading(false)} />
      ) : (
        <>
          <MyBreadcrumb />
          <ThesisProposalDetail id={id} thesisProposal={thesisProposal} />
        </>
      )}
    </>
  );
}

export default PropostaDiTesi;
