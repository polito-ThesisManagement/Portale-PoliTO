import React from 'react';
import {Nav, Col} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import "../styles/Sidebar.css"

export default function Sidebar() {
  return (
    <Col className="col-md-2 d-none d-md-block bg-light custom-sidebar">
      <Nav defaultActiveKey="/home" className="flex-column">
        <Nav.Item>
          <Link to="/" className="nav-link">Home</Link>
        </Nav.Item>
        <Nav.Item>
          <Link to="/libretto" className="nav-link">Libretto</Link>
        </Nav.Item>
        <Nav.Item>
          <Link to="/tesi" className="nav-link">Tesi</Link>
        </Nav.Item>
        <Nav.Item>
          <Link to="/esami" className="nav-link">Esami</Link>
        </Nav.Item>
        <Nav.Item>
          <Link to="/servizi" className="nav-link">Servizi</Link>
        </Nav.Item>
        <Nav.Item>
          <Link to="/help" className="nav-link">Help</Link>
        </Nav.Item>
      </Nav>
    </Col>
  );
}
