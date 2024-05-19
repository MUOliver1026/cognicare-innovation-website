import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import DiseaseTarget from './pages/DiseaseTarget';
import Medicine from './pages/Medicine';
import HitDiscovery from './pages/HitDiscovery';
import Optimization from './pages/Optimization';
import Tablet from './pages/Tablet';
import TBD from './pages/TBD';
import SocietyImpact from './pages/SocietyImpact';
import FutureDevelopment from './pages/FutureDevelopment';
import './index.css';

const App = () => {
  return (
    <Router>
      <div className="App">
        <Header />
        <main className="p-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/disease-target" element={<DiseaseTarget />} />
            <Route path="/medicine" element={<Medicine />} />
            <Route path="/hit-discovery" element={<HitDiscovery />} />
            <Route path="/optimization" element={<Optimization />} />
            <Route path="/tablet" element={<Tablet />} />
            <Route path="/tbd" element={<TBD />} />
            <Route path="/society-impact" element={<SocietyImpact />} />
            <Route path="/future-development" element={<FutureDevelopment />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;
