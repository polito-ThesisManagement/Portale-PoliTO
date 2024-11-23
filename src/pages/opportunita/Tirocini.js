import React, { useState } from 'react';

import { Link } from 'react-router-dom';

import { Container } from 'react-bootstrap';
import { Form, Table } from 'react-bootstrap';

import { ArrowRightShort, FilterCircleFill, List, Send } from 'react-bootstrap-icons';

import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

import Stages from '../../data/Stages.json';
import '../../styles/Modal.css';
import '../../styles/Utilities.css';

export default function Tirocini() {
  const [stages, setStages] = useState(Stages);

  const [show, setShow] = useState(false);

  const [durata, setDurata] = useState(null);
  const [curriculare, setCurriculare] = useState(null);
  const [scadenza, setScadenza] = useState(null);

  const handleClose = () => {
    setShow(false);
    setDurata(null);
    setCurriculare(null);
    setScadenza(null);
  };
  const handleShow = () => setShow(true);

  const filterStages = () => {
    let filtered = Stages;

    console.log(durata);

    if (durata) {
      filtered = filtered.filter(stage => stage.durata.toString() === durata);
    }

    if (curriculare !== null) {
      filtered = filtered.filter(stage => stage.curriculare === curriculare);
    }

    if (scadenza) {
      filtered = filtered.filter(stage => new Date(stage.scadenza) <= new Date(scadenza));
    }

    setStages(filtered);
    handleClose();
  };

  return (
    <>
      <div className="d-flex mt-2 mx-3">
        <div>
          <Link to="/" className="breadcrumb-link">
            Homepage
          </Link>
          <span className="mx-2">
            <ArrowRightShort color="var(--placeholder)" />
          </span>
        </div>
        <div>
          <Link to="/opportunita" className="breadcrumb-link">
            Opportunità
          </Link>
          <span className="mx-2">
            <ArrowRightShort color="var(--placeholder)" />
          </span>
        </div>
        <span className="breadcrumb">Tirocinio</span>
      </div>
      <Container className="me-3">
        <div className="d-flex justify-content-start">
          <span className="section-title">
            <List size={32} style={{ position: 'relative', bottom: '2px', paddingRight: '2px' }} />
            Elenco Proposte Tirocinio
          </span>
        </div>
        <Button
          style={{ backgroundColor: 'var(--navy)', alignSelf: 'baseline', marginTop: '10px', marginBottom: '10px' }}
          onClick={handleShow}
        >
          <FilterCircleFill /> Filtra le proposte
        </Button>
        <div className="mt-3 pb-3">
          <Table className="custom-table" striped responsive="sm" hover="primary">
            <thead>
              <tr>
                <th className="custom-th">Azienda</th>
                <th className="custom-th">Incarico</th>
                <th className="custom-th">Sede/i</th>
                <th className="custom-th">Durata</th>
                <th className="custom-th">Scadenza</th>
                <th className="custom-th text-center">Invia CV</th>
              </tr>
            </thead>
            <tbody style={{ fontSize: 'var(--font-size-md)' }}>
              {stages.map(element => (
                <tr key={element.id}>
                  <td className="custom-td">{element.azienda}</td>
                  <td className="custom-td">{element.oggetto}</td>
                  <td className="custom-td">{element.luogo}</td>
                  <td className="custom-td">{element.durata} mesi</td>
                  <td className="custom-td">{element.scadenza}</td>
                  <td className="custom-td text-center">
                    <Send />
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      </Container>

      <Modal className="modal-custom" show={show} onHide={handleClose}>
        <Modal.Header className="modal-header-custom" closeButton>
          <Modal.Title>Filtra tirocini disponibili</Modal.Title>
        </Modal.Header>
        <Modal.Body className="modal-body-custom">
          <div>
            <label className="label-custom">Durata:</label>
            <Form.Select className="select-custom" onChange={e => setDurata(e.target.value)}>
              <option value="">Tutte</option>
              <option value="3">3 mesi</option>
              <option value="6">6 mesi</option>
              <option value="8">8 mesi</option>
            </Form.Select>
          </div>
          <div className="my-2">
            <label className="label-custom">Tipo:</label>
            <Form.Select className="select-custom" onChange={e => setCurriculare(e.target.value === 'true')}>
              <option value="">Tutti</option>
              <option value="true">Curriculare</option>
              <option value="false">Extra-curriculare</option>
            </Form.Select>
          </div>
          <div>
            <label className="label-custom">Scadenza entro:</label>
            <Form.Control className="select-custom" type="date" onChange={e => setScadenza(e.target.value)} />
          </div>
        </Modal.Body>
        <Modal.Footer className="modal-footer-custom">
          <Button style={{ fontFamily: 'var(--font-primary)' }} variant="danger" onClick={handleClose}>
            Annulla
          </Button>
          <Button style={{ backgroundColor: 'var(--navy)', fontFamily: 'var(--font-primary)' }} onClick={filterStages}>
            Salva Cambiamenti
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
