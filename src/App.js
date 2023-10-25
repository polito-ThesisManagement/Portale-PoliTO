import PoliNavbar from './components/Navbar';
import Esami from './pages/Esami';
import Libretto from './pages/Libretto';
import Servizi from './pages/Servizi';
import Tesi from './pages/Tesi';
import Home from './pages/Home';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
    <PoliNavbar />
    <Routes>
      <Route path='/' element={<Home />}></Route>
      <Route path='/libretto' element={<Libretto />}></Route>
      <Route path='/tesi' element={<Tesi />}></Route>
      <Route path='/esami' element={<Esami />}></Route>
      <Route path='/servizi' element={<Servizi />}></Route>
    </Routes>
    </>
  );
}

export default App;
