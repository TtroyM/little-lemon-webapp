import React from 'react';
import {Helmet} from 'react-helmet';
import Header from './Header';
import Nav from './Nav';
import Main from './Main';
import Footer from './Footer';
import './App.css';

function App() {
  return (
    <>
      <Helmet>
        <title>Little Lemon-Reserve a Table</title>
        <meta name="description" content="Little Lemon: Reserve a Table" />
        <meta name="og:title" property="og:title" content="Little Lemon-Reserve a Table" />
        <meta name="og:description" property="og:description" content="Little Lemon: Reserve a Table" />
        <meta name="og:image" property="og:image" content="" />
      </Helmet>
      <Header />
      <Nav />
      <Main />
      <Footer />
    </>
  );
}

export default App;
