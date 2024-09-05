import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Landing from './Landing';
import AboutUs from './AboutUs';
import Footer from './Footer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Landing/>
    <AboutUs/>
    
    <Footer/>
  </React.StrictMode>
);
