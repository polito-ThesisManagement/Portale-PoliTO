import { Row, Col } from 'react-bootstrap';
import { Route, Routes } from 'react-router-dom';

import './App.css';

import PoliNavbar from './components/Navbar';
import Servizi from './pages/Servizi';
import Home from './pages/Home';
import Help from './pages/Help';
import Sidebar from './components/Sidebar';
import CoursePage from './pages/didattica/CoursePage';
import Materiale from './pages/course_sections/Materiale';
import Avvisi from './pages/course_sections/Avvisi';
import CPD from './pages/course_sections/CPD';
import Didattica from './pages/Didattica';
import AreaPersonale from './pages/AreaPersonale';
import Carriera from './pages/Carriera';
import Opportunita from './pages/Opportunita';
import Libretto from './pages/didattica/Libretto';
import Timetable from './components/Timetable' //si può fare proprio una pagina con dentro la timetable che è un componente 
import Lingue from './pages/didattica/Lingue';



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
            <Route path='/area_personale' element={<AreaPersonale/>}/>
            <Route path='/home' element={<Home />} />
            <Route path='/didattica' element={<Didattica/>}>
              <Route path='libretto' element={<Libretto/>} />
              <Route path='orario' element={<Timetable/>} />
              <Route path='lingue' element={<Lingue/>} />
            </Route>
            <Route path='/carriera' element={<Carriera />} />
            <Route path='/opportunita' element={<Opportunita/>}/>
            <Route path='/servizi' element={<Servizi/>} />
            <Route path='/help' element={<Help />} />
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
