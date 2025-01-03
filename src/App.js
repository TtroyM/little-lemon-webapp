import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import {Helmet} from 'react-helmet';
import Header from './Header';
import Nav from './Nav';
import Main from './Main';
import Footer from './Footer';
import './App.css';
import ConfirmedBooking from './ConfirmedBooking';

function App() {
  return (
    <>
      <Router>
        <Helmet>
          <title>Little Lemon-Reserve a Table</title>
          <meta name="description" content="Little Lemon: Reserve a Table" />
          <meta name="og:title" property="og:title" content="Little Lemon-Reserve a Table" />
          <meta name="og:description" property="og:description" content="Little Lemon: Reserve a Table" />
          <meta name="og:image" property="og:image" content="" />
        </Helmet>
        <Header />
        <Nav />
        <Routes>
          <Route path="/" element={<Main/>} /> {/* Main page with the reservation form */}
          <Route path="/confirmed" element={<ConfirmedBooking/>} /> {/* Confirmation page */}
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
