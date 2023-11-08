import { React } from 'react';
import { Nav, Col } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';

import "../styles/Sidebar.css"
import "../styles/Utilities.css"

import { HiHome } from 'react-icons/hi'
import { HiMiniBookOpen } from 'react-icons/hi2'
import { PiStudent } from 'react-icons/pi'
import { FaInfoCircle, FaSuitcase } from 'react-icons/fa'
import { MdApps } from 'react-icons/md'

export default function Sidebar() {
  const location = useLocation();

  return (
    <>
    <Col
    className={`col-md-1 d-none d-md-block custom-sidebar px-3 py-2`}
    >
      <Nav defaultActiveKey="/home" className="flex-column">
        <Nav.Item>
          <Link to="/" className={`nav-link text-style ${location.pathname === '/' ? 'active' : ''}`}>
            <HiHome size={28}/>
            <span className='sidebar-text' style={{marginTop:'3px'}}>Homepage</span>
          </Link>
        </Nav.Item>
        <Nav.Item>
          <Link to="/didattica" className={`nav-link text-style ${location.pathname === '/didattica' ? 'active' : ''}`}>
            <HiMiniBookOpen size={28}/>
            <span className='sidebar-text' style={{marginTop:'2px'}}>Opportunità</span>
            </Link>
        </Nav.Item>
        <Nav.Item>
          <Link to="/carriera" className={`nav-link text-style ${location.pathname === '/carriera' ? 'active' : ''}`}>
            <PiStudent size={28}/>
            <span className='sidebar-text' style={{marginTop:'3px'}}>Carriera</span>
            </Link>
        </Nav.Item>
        <Nav.Item>
          <Link to="/opportunita" className={`nav-link text-style ${location.pathname === '/opportunita' ? 'active' : ''}`}>
            <FaSuitcase size={25} style={{marginLeft:'1px'}}/>
            <span className='sidebar-text'style={{marginTop:'1px'}}>Opportunità</span>
            </Link>
        </Nav.Item>
        <Nav.Item>
          <Link to="/servizi" className={`nav-link text-style ${location.pathname === '/servizi' ? 'active' : ''}`}>
            <MdApps size={28} style={{marginLeft:'-1px'}}/>
            <span className='sidebar-text' style={{marginTop:'3px'}}>Servizi</span>
            </Link>
        </Nav.Item>
        <Nav.Item>
          <Link to="/help" className={`nav-link text-style ${location.pathname === '/help' ? 'active' : ''}`}>
            <FaInfoCircle size={28} style={{marginLeft:'-1px'}}/>
            <span className='sidebar-text' style={{marginTop:'3px'}}>Help</span>
          </Link>
        </Nav.Item>
      </Nav>
    </Col>
    </>
  );
}