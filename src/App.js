import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/header/Header';
import Home from "./components/home/Home"
import About from "./components/about/About"
import BikeRent from "./components/bikeRent/BikeRent"
import NoPage from "./components/noPage/NoPage"
import Contact from "./components/contact/Contact"
import './App.css';
import Services from './components/services/Services';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path='/services' element={<Services />} />
          <Route path="/bikerent" element={<BikeRent />} />
          <Route path="/contact" element={<Contact />} />
          {/* <Route path="/logIn" element={<LogIn />} /> */}
          {/* <Route path="/signUp" element={<SignUp />} /> */}
          <Route path="*" element={<NoPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
