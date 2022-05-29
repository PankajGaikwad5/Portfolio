import About from './components/About';
import Contact from './components/Contact';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Skills from './components/Skills';
import Work from './components/Work';
import { Routes, Route } from 'react-router-dom';
import TravelNavbar from './components/Travel_app/TravelNavbar';
import TravelHero from './components/Travel_app/TravelHero';

function App() {
  return (
    <>
      <Routes>
        <Route
          path='/'
          element={
            <>
              <Navbar />
              <Home />
              <About />
              <Skills />
              <Work />
              <Contact />
            </>
          }
        />
        <Route
          path='/travelapp'
          element={
            <>
              <TravelNavbar />
              <TravelHero />
            </>
          }
        />
      </Routes>
    </>
  );
}

export default App;
