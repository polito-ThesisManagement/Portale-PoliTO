import React, { createContext, useEffect, useState } from 'react';

import { Col, Row } from 'react-bootstrap';
import { Route, Routes, useLocation } from 'react-router-dom';

import API from './API';
import LoadingModal from './components/LoadingModal';
import PoliNavbar from './components/Navbar';
import { Sidebar } from './components/Sidebar';
import FloatingButton from './components/FloatingButton';
import Avvisi_GC from './data/Avvisi_GC.json';
import AreaPersonale from './pages/AreaPersonale';
import Carriera from './pages/Carriera';
import Didattica from './pages/Didattica';
import Help from './pages/Help';
import Homepage from './pages/Homepage';
import Opportunita from './pages/Opportunita';
import PageNotFound from './pages/PageNotFound';
import Servizi from './pages/Servizi';
import LaureaEdEsameFinale from './pages/carriera/LaureaEdEsameFinale';
import PropostaDiTesi from './pages/carriera/PropostaDiTesi';
import ProposteDiTesi from './pages/carriera/ProposteDiTesi';
import './styles/Theme.css';
import './styles/Utilities.css';
import { getSystemTheme, scrollTop } from './utils/utils';

export const FavoritesContext = createContext(null);
export const AvvisiContext = createContext(null);
export const ThemeContext = createContext(null);
export const DesktopToggleContext = createContext(null);
export const LoggedStudentContext = createContext(null);

function App() {
  const [theme, setTheme] = useState('auto');
  const [favorites, setFavorites] = useState([]);
  const [avvisi, setAvvisi] = useState([Avvisi_GC]);
  const [desktopToggle, setDesktopToggle] = useState(false);
  const [allStudents, setAllStudents] = useState([]);
  const [loggedStudent, setLoggedStudent] = useState(null);
  const [navbarDataLoading, setNavbarDataLoading] = useState(true);
  const location = useLocation();

  useEffect(() => {
    scrollTop();
  }, [location]);

  useEffect(() => {
    const initialTheme = 'auto';
    setTheme(initialTheme);
    updateTheme(initialTheme);
  }, []);

  useEffect(() => {
    updateTheme(theme);
  }, [theme]);

  const updateTheme = theme => {
    const appliedTheme = theme === 'auto' ? getSystemTheme() : theme;
    document.documentElement.setAttribute('data-theme', appliedTheme);
    document
      .querySelector('meta[name="theme-color"]')
      .setAttribute(
        'content',
        appliedTheme === 'dark'
          ? getComputedStyle(document.documentElement).getPropertyValue('--background-dark')
          : getComputedStyle(document.documentElement).getPropertyValue('--background-light'),
      );
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (navbarDataLoading) {
          const allStudents = await API.getAllStudents();
          setAllStudents(allStudents);
          console.log(allStudents)
          const loggedStudent = await API.getLoggedStudent();
          setLoggedStudent(loggedStudent);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setNavbarDataLoading(false);
      }
    };
    fetchData();
  }, [loggedStudent]);

  return (
    <>
      <style>@import url(https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500&display=swap);</style>
      <ThemeContext.Provider value={{ theme, setTheme }}>
        <LoggedStudentContext.Provider value={{ loggedStudent, setLoggedStudent }}>
          <DesktopToggleContext.Provider value={{ desktopToggle, setDesktopToggle }}>
            <FavoritesContext.Provider value={{ favorites, setFavorites }}>
              <AvvisiContext.Provider value={{ avvisi, setAvvisi }}>
                <LoadingModal show={navbarDataLoading} onHide={() => setNavbarDataLoading(false)} />
                <PoliNavbar allStudents={allStudents} setNavbarDataLoading={setNavbarDataLoading} />
                <Row>
                  <Sidebar />
                  <Col className={`main-space reduced ${desktopToggle ? 'toggle' : ''}`}>
                    <Col className={`custom-content reeduced`}>
                      <Routes>
                        <Route path="/" element={<Homepage />} />
                        <Route path="/area_personale" element={<AreaPersonale />} />
                        <Route path="/home" element={<Homepage />} />
                        <Route path="/didattica" element={<Didattica />} />
                        <Route path="/carriera" element={<Carriera />} />
                        <Route path="/carriera/proposte_di_tesi" element={<ProposteDiTesi />} />
                        <Route path="/carriera/proposte_di_tesi/:id" element={<PropostaDiTesi />} />
                        <Route path="/carriera/laurea_ed_esame_finale" element={<LaureaEdEsameFinale />} />
                        <Route path="/opportunita" element={<Opportunita />} />
                        <Route path="/servizi" element={<Servizi />} />
                        <Route path="/help" element={<Help />} />
                        <Route path="*" element={<PageNotFound />} />
                      </Routes>
                      <FloatingButton />
                    </Col>
                  </Col>
                </Row>
              </AvvisiContext.Provider>
            </FavoritesContext.Provider>
          </DesktopToggleContext.Provider>
        </LoggedStudentContext.Provider>
      </ThemeContext.Provider>
    </>
  );
}

export default App;
