import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import App from './components/pages/App';
import CheckData from 'components/pages/tours/zcheckAndTest/checkData';
import ConnectPage from 'components/pages/tourDetailPage/connectPage';
import CheckCallAPI from 'components/pages/tours/zcheckAndTest/checkCallAPI';

//style
import "bootstrap/scss/bootstrap.scss";
import "assets/scss/paper-kit.scss?v=1.3.0";
import "assets/demo/demo.css?v=1.3.0";
import ToursList from 'components/pages/tours/toursList';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  

  <BrowserRouter>
    <Routes>
      <Route index element={<App />}/>
      <Route path="/toursMain" element={<ToursList />}></Route>
      <Route path="/checkData" element={<CheckData />}></Route>
      <Route path="/tourDetailPage/:contentid" element={<ConnectPage />}></Route>
      <Route path="/check" element={<CheckCallAPI />}></Route>
    </Routes>
  </BrowserRouter>
);