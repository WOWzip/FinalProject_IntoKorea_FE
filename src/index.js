import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter } from 'react-router-dom';


import Header from './components/pages/fragnents/header';
import Footer from './components/pages/fragnents/footer';
import App from './components/pages/App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
   <Header/>
    <App/>
    <Footer/>
  </BrowserRouter>
);
