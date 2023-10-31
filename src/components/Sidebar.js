import React from 'react';
import {Nav, Col} from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';
import "../styles/Sidebar.css"

export default function Sidebar() {
  const location = useLocation();

  return (
    <Col className="col-md-2 d-none d-md-block bg-light custom-sidebar px-4 py-1">
      <Nav defaultActiveKey="/home" className="flex-column">
        <Nav.Item>
          <Link to="/" className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}>Home</Link>
        </Nav.Item>
        <Nav.Item>
          <Link to="/didattica" className={`nav-link ${location.pathname === '/didattica' ? 'active' : ''}`}>Didattica</Link>
        </Nav.Item>
        <Nav.Item>
          <Link to="/carriera" className={`nav-link ${location.pathname === '/carriera' ? 'active' : ''}`}>Carriera</Link>
        </Nav.Item>
        <Nav.Item>
          <Link to="/opportunita" className={`nav-link ${location.pathname === '/opportunita' ? 'active' : ''}`}>Opportunità</Link>
        </Nav.Item>
        <Nav.Item>
          <Link to="/servizi" className={`nav-link ${location.pathname === '/servizi' ? 'active' : ''}`}>Servizi</Link>
        </Nav.Item>
        <Nav.Item>
          <Link to="/help" className={`nav-link ${location.pathname === '/help' ? 'active' : ''}`}>Help</Link>
        </Nav.Item>
      </Nav>
    </Col>
  );
}