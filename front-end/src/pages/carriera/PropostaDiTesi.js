import React, { useContext, useEffect, useState } from 'react';

import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';

import API from '../../API';
import { BodyDataLoadingContext } from '../../App';
import Badge from '../../components/Badge';
import MyBreadcrumb from '../../components/MyBreadcrumb';
import ThesisProposalDetail from '../../components/ThesisProposalDetail';

function PropostaDiTesi() {
  const id = useParams().id;
  const { setBodyDataLoading } = useContext(BodyDataLoadingContext);
  const [thesisProposal, setThesisProposal] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const { t, i18n } = useTranslation();

  useEffect(() => {
    setBodyDataLoading(true);
    setIsLoading(true);
    API.getThesisProposalById(id, i18n.language)
      .then(thesis => {
        setThesisProposal(thesis);
      })
      .catch(error => console.error('Error fetching thesis proposal by ID:', error))
      .finally(() => {
        setBodyDataLoading(false);
        setIsLoading(false);
      });
  }, [id, i18n.language]);

  return (
    <>
      <MyBreadcrumb />
      {isLoading ? (
        <></>
      ) : thesisProposal ? (
        <ThesisProposalDetail thesisProposal={thesisProposal} />
      ) : (
        <Badge variant="error" content={t('carriera.proposta_di_tesi.errore_proposta_di_tesi')} />
      )}
    </>
  );
}

export default PropostaDiTesi;
