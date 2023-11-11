import { Row, Col } from 'react-bootstrap';
import { Route, Routes } from 'react-router-dom';

import './styles/Utilities.css';

import PoliNavbar from './components/Navbar';
import Servizi from './pages/Servizi';
import Home from './pages/Home';
import Help from './pages/Help';
import Sidebar from './components/Sidebar';
import CoursePage from './pages/didattica/CoursePage';
import Materiale from './pages/course_sections/Materiale';
import OrarioCorso from './pages/course_sections/OrarioCorso';
import Guida from './pages/course_sections/Guida';
import Elaborati from './pages/course_sections/Elaborati';
import Appelli from './pages/course_sections/Appelli';
import Avvisi from './pages/course_sections/Avvisi';
import VirtualClassroom from './pages/course_sections/VirtualClassrom'; //sbagliato a scrivere room
import Didattica from './pages/Didattica';
import AreaPersonale from './pages/AreaPersonale';
import Carriera from './pages/Carriera';
import Opportunita from './pages/Opportunita';
import Libretto from './pages/didattica/Libretto';
import Timetable from './components/Timetable' //si può fare proprio una pagina con dentro la timetable che è un componente 
import Lingue from './pages/didattica/Lingue';
import Corsi from './pages/didattica/Corsi';
import Tesi from './pages/carriera/Tesi';
import Job from './pages/opportunita/Job';
import Tirocinio from './pages/opportunita/Tirocini';



//metterei il path di Home solo con "/"
function App() {
  return (
    <>
      <head>
        <style>
          @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500&display=swap');
        </style>
      </head>
      <PoliNavbar/>
      <Row>
        <Sidebar />
        <Col className='custom-content'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/area_personale' element={<AreaPersonale />} />
            <Route path='/home' element={<Home />} />
            <Route path='/didattica' element={<Didattica />}>
              <Route path='' element={<Corsi />} />
              <Route path='libretto' element={<Libretto />} />
              <Route path='orario' element={<Timetable />} />
              <Route path='lingue' element={<Lingue />} />
            </Route>
            <Route path='/carriera' element={<Carriera />} />
            <Route path='carriera/tesi' element={<Tesi />} />
            <Route path='/opportunita' element={<Opportunita />} />
            <Route path='/opportunita/job' element={<Job />} />
            <Route path='/opportunita/tirocinio' element={<Tirocinio />} />
            <Route path='/servizi' element={<Servizi />} />
            <Route path='/help' element={<Help />} />
            <Route path="/didattica/:nome" element={<CoursePage />}>
              <Route path="materiale" element={<Materiale />} />
              <Route path="avvisi" element={<Avvisi />} />
              <Route path="orario" element={<OrarioCorso />} />
              <Route path="guida" element={<Guida />} />
              <Route path="elaborati" element={<Elaborati />} />
              <Route path="appelli" element={<Appelli />} />
              <Route path="vclassrom" element={<VirtualClassroom />} />
            </Route>
          </Routes>
        </Col>
      </Row>
    </>
  );
}

export default App;
