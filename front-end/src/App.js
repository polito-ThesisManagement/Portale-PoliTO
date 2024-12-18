import React, { createContext, useEffect, useMemo, useState } from 'react';

import { Col, Row } from 'react-bootstrap';
import { Route, Routes, useLocation } from 'react-router-dom';

import API from './API';
import FloatingButton from './components/FloatingButton';
import LoadingModal from './components/LoadingModal';
import PoliNavbar from './components/Navbar';
import { Sidebar } from './components/Sidebar';
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
export const ThemeContext = createContext(null);
export const DesktopToggleContext = createContext(null);
export const LoggedStudentContext = createContext(null);
export const BodyDataLoadingContext = createContext(null);

function App() {
  const [theme, setTheme] = useState('auto');
  const [favorites, setFavorites] = useState([]);
  const [desktopToggle, setDesktopToggle] = useState(false);
  const [allStudents, setAllStudents] = useState([]);
  const [loggedStudent, setLoggedStudent] = useState(null);
  const [navbarDataLoading, setNavbarDataLoading] = useState(true);
  const [bodyDataLoading, setBodyDataLoading] = useState(false);
  const [refresh, setRefresh] = useState(false);
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
          const allStudents = await API.getStudents();
          if (allStudents && allStudents.length > 0) setAllStudents(allStudents);
          else setAllStudents([]);
          const loggedStudent = await API.getLoggedStudent();
          if (loggedStudent) setLoggedStudent(loggedStudent);
          else setLoggedStudent(null);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setNavbarDataLoading(false);
      }
    };
    fetchData();
  }, [refresh]);

  const loggedStudentValue = useMemo(() => ({ loggedStudent, setLoggedStudent }), [loggedStudent]);
  const desktopToggleValue = useMemo(() => ({ desktopToggle, setDesktopToggle }), [desktopToggle]);
  const favoritesValue = useMemo(() => ({ favorites, setFavorites }), [favorites]);
  const themeValue = useMemo(() => ({ theme, setTheme }), [theme]);

  return (
    <>
      <style>@import url(https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500&display=swap);</style>
      <ThemeContext.Provider value={themeValue}>
        <LoggedStudentContext.Provider value={loggedStudentValue}>
          <DesktopToggleContext.Provider value={desktopToggleValue}>
            <FavoritesContext.Provider value={favoritesValue}>
              <BodyDataLoadingContext.Provider value={{ bodyDataLoading, setBodyDataLoading }}>
                <LoadingModal show={navbarDataLoading || bodyDataLoading} onHide={() => setNavbarDataLoading(false)} />
                <PoliNavbar
                  allStudents={allStudents}
                  setNavbarDataLoading={setNavbarDataLoading}
                  refresh={refresh}
                  setRefresh={setRefresh}
                />
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
              </BodyDataLoadingContext.Provider>
            </FavoritesContext.Provider>
          </DesktopToggleContext.Provider>
        </LoggedStudentContext.Provider>
      </ThemeContext.Provider>
    </>
  );
}

export default App;
