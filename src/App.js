import React, { createContext, useEffect, useState } from 'react';

import { Route, Routes, useLocation } from 'react-router-dom';

import { Col, Row } from 'react-bootstrap';

import PoliNavbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Avvisi_GC from './data/Avvisi_GC.json';
import AreaPersonale from './pages/AreaPersonale';
import Carriera from './pages/Carriera';
import Didattica from './pages/Didattica';
import Help from './pages/Help';
import Home from './pages/Home';
import Opportunita from './pages/Opportunita';
import Servizi from './pages/Servizi';
import LaureaEdEsameFinale from './pages/carriera/LaureaEdEsameFinale';
import PropostaDiTesi from './pages/carriera/PropostaDiTesi';
import ProposteDiTesi from './pages/carriera/ProposteDiTesi';
import Appelli from './pages/course_sections/Appelli';
import Avvisi from './pages/course_sections/Avvisi';
import Elaborati from './pages/course_sections/Elaborati';
import Guida from './pages/course_sections/Guida';
import Materiale from './pages/course_sections/Materiale';
import Moodle from './pages/course_sections/Moodle';
import OrarioCorso from './pages/course_sections/OrarioCorso';
import VirtualClassroom from './pages/course_sections/VirtualClassroom';
import Corsi from './pages/didattica/Corsi';
import CoursePage from './pages/didattica/CoursePage';
import Libretto from './pages/didattica/Libretto';
import Lingue from './pages/didattica/Lingue';
import OrarioLezioni from './pages/didattica/OrarioLezioni';
import Job from './pages/opportunita/Job';
import Tirocinio from './pages/opportunita/Tirocini';
import './styles/Theme.css';
import './styles/Utilities.css';
import { getSystemTheme } from './utils/utils';

export const FavoritesContext = createContext(null);
export const AvvisiContext = createContext(null);
export const ThemeContext = createContext(null);

function App() {
  const [theme, setTheme] = useState('auto');
  const [favorites, setFavorites] = useState([]);
  const [avvisi, setAvvisi] = useState([Avvisi_GC]);
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
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
          ? getComputedStyle(document.documentElement).getPropertyValue('--surface-dark')
          : getComputedStyle(document.documentElement).getPropertyValue('--surface-light'),
      );
  };

  return (
    <>
      <style>@import url(https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500&display=swap);</style>
      <ThemeContext.Provider value={{ theme, setTheme }}>
        <FavoritesContext.Provider value={{ favorites, setFavorites }}>
          <AvvisiContext.Provider value={{ avvisi, setAvvisi }}>
            <PoliNavbar />
            <Row>
              <Sidebar />
              <Col className={'main-space reduced'}>
                <Col className={'custom-content reduced'}>
                  <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/area_personale" element={<AreaPersonale />} />
                    <Route path="/home" element={<Home />} />
                    <Route path="/didattica" element={<Didattica />}>
                      <Route path="" element={<Corsi />} />
                      <Route path="libretto" element={<Libretto />} />
                      <Route path="orario" element={<OrarioLezioni />} />
                      <Route path="lingue" element={<Lingue />} />
                    </Route>
                    <Route path="/carriera" element={<Carriera />} />
                    <Route path="/carriera/proposte_di_tesi" element={<ProposteDiTesi />} />
                    <Route path="/carriera/proposte_di_tesi/:id" element={<PropostaDiTesi />} />
                    <Route path="/carriera/laurea_ed_esame_finale" element={<LaureaEdEsameFinale />} />
                    <Route path="/opportunita" element={<Opportunita />} />
                    <Route path="/opportunita/job" element={<Job />} />
                    <Route path="/opportunita/tirocinio" element={<Tirocinio />} />
                    <Route path="/servizi" element={<Servizi />} />
                    <Route path="/help" element={<Help />} />
                    <Route path="/didattica/:nome" element={<CoursePage />}>
                      <Route path="materiale" element={<Materiale />} />
                      <Route path="avvisi" element={<Avvisi />} />
                      <Route path="orario" element={<OrarioCorso />} />
                      <Route path="guida" element={<Guida />} />
                      <Route path="moodle" element={<Moodle />} />
                      <Route path="elaborati" element={<Elaborati />} />
                      <Route path="appelli" element={<Appelli />} />
                      <Route path="vc" element={<VirtualClassroom />} />
                    </Route>
                  </Routes>
                </Col>
              </Col>
            </Row>
          </AvvisiContext.Provider>
        </FavoritesContext.Provider>
      </ThemeContext.Provider>
    </>
  );
}

export default App;
