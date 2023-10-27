import { Row, Col } from 'react-bootstrap';
import PoliNavbar from './components/Navbar';
import Libretto from './pages/Libretto';
import Servizi from './pages/Servizi';
import Tesi from './pages/Tesi';
import Home from './pages/Home';
import Help from './pages/Help';
import Timetable from './components/Timetable'
import { Route, Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import './App.css';


//metterei il path di Home solo con "/"
function App() {
  return (
    <>
      <PoliNavbar />
      <Row>
        <Sidebar/>
        <Col md={10}>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/home' element={<Home />} />
            <Route path='/libretto' element={<Libretto />} />
            <Route path='/tesi' element={<Tesi />} />
            <Route path='/servizi' element={<Servizi/>}/>
            <Route path='/help' element={<Help/>} />
            <Route path='/orario' element={<Timetable />} />
          </Routes>
        </Col>
      </Row>
    </>
  );
}

export default App;
