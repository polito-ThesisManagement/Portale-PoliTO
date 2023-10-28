import { Row, Col } from 'react-bootstrap';
import { Route, Routes } from 'react-router-dom';

import './App.css';

import PoliNavbar from './components/Navbar';
import Libretto from './pages/Libretto';
import Servizi from './pages/Servizi';
import Tesi from './pages/Tesi';
import Home from './pages/Home';
import Help from './pages/Help';
import Timetable from './components/Timetable'
import Sidebar from './components/Sidebar';
import CoursePage from './pages/CoursePage';
import Materiale from './pages/course_sections/Materiale';
import Avvisi from './pages/course_sections/Avvisi';
import CPD from './pages/course_sections/CPD';



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
            <Route path="/didattica/:nome" element={<CoursePage />}>
              <Route path="materiale" element={<Materiale />} />
              <Route path="avvisi" element={<Avvisi />} />
              <Route path="cpd" element={<CPD />} />
            </Route>
          </Routes>
        </Col>
      </Row>
    </>
  );
}

export default App;
