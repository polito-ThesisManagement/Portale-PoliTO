import './App.css';
import PoliNavbar from './components/Navbar';
import Libretto from './pages/Libretto';
import Tesi from './pages/Tesi';
import Home from './pages/Home';
import { Row, Col } from 'react-bootstrap';
import { Route, Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar';

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
