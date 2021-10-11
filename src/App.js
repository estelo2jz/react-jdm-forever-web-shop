import React from 'react';
import Header from './components/Header'
// import Products from './components/Products'
import { CurrentDataProvider} from './components/Data/Current/CurrentInventory';
import { SoldDataProvider } from './components/Data/Sold/SoldInventory';
import { FutureDataProvider} from './components/Data/Future/FutureInventory';
import { JapanDataProvider } from './components/Data/Japan/JapanInventory';
import  { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { DataProvider } from './components/DataProvider'
import ScrollToTop from './components/ScrollToTop';

import Details from './components/Details'
import Home from './components/Home/Home';
import Cart from './components/Cart'
import Footer from './components/Footer/Footer';
import Contact from '../src/pages/Contact/Contact';
import FindVehicle from '../src/pages/FindVehicle/FindVehicle';
import News from '../src/pages/News/News';
import FAQ from '../src/pages/FAQ/FAQ';

import Inventory from '../src/pages/Inventory/Inventory';
import CurrentPage from '../src/pages/Inventory/CurrentPage';
import SoldPage from '../src/pages/Inventory/SoldPage';
import JapanPage from '../src/pages/Inventory/JapanPage';
import FuturePage from '../src/pages/Inventory/FuturePage';
import Buyer from './pages/Buyer/Buyer';


function App() {
  return (
    <SoldDataProvider>
      <JapanDataProvider>
        <FutureDataProvider>
          <CurrentDataProvider>
            <DataProvider>
              <div className="App">
                <Router>
                  <ScrollToTop>
                    <Header />
                    <div className="App__container">
                      <section>
                        <Routes>
                          <Route path="/" exact element={<Home />} />
                          <Route path="/inventory" exact element={<Inventory />} />
                          <Route path="/inventory/current-inventory" exact element={<CurrentPage />} />
                          <Route path="/inventory/sold" exact element={<SoldPage />} />
                          <Route path="/inventory/future-inventory" exact element={<FuturePage />} />
                          <Route path="/inventory/japan-inventory" exact element={<JapanPage />} />

                          <Route path="/car-finder" exact element={<FindVehicle />} />
                          <Route path="/media" exact element={<News />} />
                          <Route path="/contact" exact element={<Contact />} />
                          <Route path="/faq-and-info" exact element={<FAQ />} />
                          <Route path="/california-buyer" exact element={<Buyer />} />
                          <Route path="/inventory/:id" exact element={<Details />} />
                          <Route path="/cart" exact element={<Cart />} />
                        </Routes>
                      </section>
                    </div>
                    <Footer />
                  </ScrollToTop>
                </Router>
              </div>
            </DataProvider>
          </CurrentDataProvider>
        </FutureDataProvider>
      </JapanDataProvider>
    </SoldDataProvider>
  );
}

export default App;