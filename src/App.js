import './App.css';
import PoliNavbar from './components/Navbar';
import Libretto from './pages/Libretto';
import Tesi from './pages/Tesi';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
    <PoliNavbar />
    <Routes>
      <Route path='/' element={<Libretto />}></Route>
      <Route path='/libretto' element={<Libretto />}></Route>
      <Route path='/tesi' element={<Tesi />}></Route>
    </Routes>
    </>
  );
}

export default App;
