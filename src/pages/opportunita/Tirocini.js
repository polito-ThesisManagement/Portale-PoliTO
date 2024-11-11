import { useState } from 'react';

import { Link } from 'react-router-dom';

import { Container } from 'react-bootstrap';
import { Form, Table } from 'react-bootstrap';

import { ArrowRightShort, FilterCircleFill, List, Send } from 'react-bootstrap-icons';

import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

import Stages from '../../data/Stages.json';
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
      <div className="d-flex mt-3 mx-3">
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
            <List size={28} style={{ position: 'relative', bottom: '2px', paddingRight: '2px' }} />
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
          <Table striped responsive="sm" hover="primary">
            <thead>
              <tr>
                <th style={{ backgroundColor: 'var(--medium-navy)', color: 'var(--white)' }}>Azienda</th>
                <th style={{ backgroundColor: 'var(--medium-navy)', color: 'var(--white)' }}>Incarico</th>
                <th style={{ backgroundColor: 'var(--medium-navy)', color: 'var(--white)' }}>Sede/i</th>
                <th style={{ backgroundColor: 'var(--medium-navy)', color: 'var(--white)' }}>Durata</th>
                <th style={{ backgroundColor: 'var(--medium-navy)', color: 'var(--white)' }}>Scadenza</th>
                <th style={{ backgroundColor: 'var(--medium-navy)', color: 'var(--white)' }}>Invia CV</th>
              </tr>
            </thead>
            <tbody>
              {stages.map(element => (
                <tr key={element.id}>
                  <td>{element.azienda}</td>
                  <td>{element.oggetto}</td>
                  <td>{element.luogo}</td>
                  <td>{element.durata} mesi</td>
                  <td>{element.scadenza}</td>
                  <td style={{ textAlign: 'center' }}>
                    <Send />
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      </Container>

      <Modal show={show} onHide={handleClose} style={{ color: 'var(--text)' }}>
        <Modal.Header closeButton style={{ backgroundColor: 'var(--surface)' }}>
          <Modal.Title>Filtra tirocini disponibili</Modal.Title>
        </Modal.Header>
        <Modal.Body style={{ backgroundColor: 'var(--surface)' }}>
          <div>
            <label style={{ fontFamily: 'var(--font-primary)', marginBottom: '2px' }}>Durata:</label>
            <Form.Select
              onChange={e => setDurata(e.target.value)}
              style={{ backgroundColor: 'var(--background)', color: 'var(--text)' }}
            >
              <option value="">Tutte</option>
              <option value="3">3 mesi</option>
              <option value="6">6 mesi</option>
              <option value="8">8 mesi</option>
            </Form.Select>
          </div>
          <div className="my-2">
            <label style={{ fontFamily: 'var(--font-primary)', marginBottom: '2px' }}>Tipo:</label>
            <Form.Select
              onChange={e => setCurriculare(e.target.value === 'true')}
              style={{ backgroundColor: 'var(--background)', color: 'var(--text)' }}
            >
              <option value="">Tutti</option>
              <option value="true">Curriculare</option>
              <option value="false">Extra-curriculare</option>
            </Form.Select>
          </div>
          <div>
            <label style={{ fontFamily: 'var(--font-primary)', marginBottom: '2px' }}>Scadenza entro:</label>
            <Form.Control
              type="date"
              onChange={e => setScadenza(e.target.value)}
              style={{ backgroundColor: 'var(--background)', color: 'var(--text)' }}
            />
          </div>
        </Modal.Body>
        <Modal.Footer style={{ backgroundColor: 'var(--surface)' }}>
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
