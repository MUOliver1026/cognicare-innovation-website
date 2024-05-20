import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import DiseaseTarget from './pages/DiseaseTarget';
import Medicine from './pages/Medicine';
import HitDiscoveryOptimization from './pages/HitDiscoveryOptimization';
import Tablet from './pages/Tablet';
import TBD from './pages/TBD';
import SocietyImpact from './pages/SocietyImpact';
import FutureDevelopment from './pages/FutureDevelopment';
import './index.css';
import Footer from './components/Footer';

const App = () => {
  return (
    <Router>
      <div className="App">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/disease-&-target" element={<DiseaseTarget />} />
            <Route path="/medicine" element={<Medicine />} />
            <Route path="/hit-discovery-&-optimization" element={<HitDiscoveryOptimization />} />
            <Route path="/tablet" element={<Tablet />} />
            <Route path="/tbd" element={<TBD />} />
            <Route path="/society-impact" element={<SocietyImpact />} />
            <Route path="/future-development" element={<FutureDevelopment />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
