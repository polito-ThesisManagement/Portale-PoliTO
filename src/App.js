import { Row, Col } from 'react-bootstrap';
import PoliNavbar from './components/Navbar';
import Esami from './pages/Esami';
import Libretto from './pages/Libretto';
import Servizi from './pages/Servizi';
import Tesi from './pages/Tesi';
import Home from './pages/Home';
import Help from './pages/Help';
import { Route, Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import './App.css';

function App() {
  return (
    <>
      <PoliNavbar />
      <Row>
        <Sidebar/>
        <Col md={10}>
          <Routes>
            <Route path='/' element={<Libretto />} />
            <Route path='/libretto' element={<Libretto />} />
            <Route path='/tesi' element={<Tesi />} />
            <Route path='/home' element={<Home />} />
          </Routes>
        </Col>
      </Row>
    </>
  );
}

export default App;
