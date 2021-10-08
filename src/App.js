import React from 'react';
import Header from './components/Header'
import Products from './components/Products'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { DataProvider } from './components/DataProvider'
import Details from './components/Details'
import Home from './components/Home/Home';
import Cart from './components/Cart'
import Footer from './components/Footer/Footer';

import ScrollToTop from './components/ScrollToTop'

import Contact from '../src/pages/Contact/Contact';
import FindVehicle from '../src/pages/FindVehicle/FindVehicle';
import Inventory from '../src/pages/Inventory/Inventory';
import News from '../src/pages/News/News';


function App() {
  return (
    <DataProvider>
      <div className="App">
        <Router>
          <ScrollToTop>
            <Header />
            <section>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="inventory" element={<Inventory />} />
                <Route path="inventory/:id" element={<Details />} />
                <Route path="cart" element={<Cart />} />
              </Routes>
            </section>
            <Footer />
          </ScrollToTop>
        </Router>
      </div>
    </DataProvider>
  );
}

export default App;