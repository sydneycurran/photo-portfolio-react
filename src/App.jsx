import { useState } from 'react'
import {
	BrowserRouter as Router,
	Routes,
	Route,
} from "react-router-dom";
import Navbar from "./components/Navbar";

import FloraFauna from './pages/creative_pages/FloraFauna'
import Creative from './pages/Creative'
import About from './pages/About'
import Events from './pages/Events'
import Pets from './pages/Pets'
import Home from './pages/Home';
import Footer from './components/Footer';
import TopNavbar from './components/Navbar/TopBar';
import DoggosOfChicago from './pages/DoggosOfChicago';
import BitsPieces from './pages/creative_pages/BitsPieces';
import ThereThen from './pages/creative_pages/ThereThen';

function App() {
   return (
    <>
      <Router>
      <TopNavbar />
			<Routes>
				<Route exact path="/" element={<Home />} />
				<Route path="/about" element={<About />} />
				<Route path="/creative" element={<Creative />} />
				<Route path="/creative/flora-and-fauna" element={<FloraFauna />} />
        		<Route path="/creative/there-and-then" element={<ThereThen />} />
        		<Route path="/creative/bits-and-pieces" element={<BitsPieces />} />
				<Route path="/events" element={<Events />} />
				<Route path="/pets" element={<Pets />} />
        		<Route path="/doggos-of-chicago" element={<DoggosOfChicago />} />
			</Routes>
      <Navbar />
	  </Router>
    </>
  )
}

export default App
