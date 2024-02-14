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
import LoginForm from 'components/pages/user/LoginForm';
import Logout from 'components/pages/user/Logout';
import KakaoRedirectPage from 'components/pages/user/KakaoRedirectPage';
import FindId from 'components/pages/user/FindId';
import FindPwd from 'components/pages/user/FindPwd';
import CheckPwd from 'components/pages/user/CheckPwd';
import ModifyPwd from 'components/pages/user/ModifyPwd';
import ModifyNickName from 'components/pages/user/ModifyNickName';
import JoinForm from 'components/pages/user/JoinForm';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  

  <BrowserRouter>
    <Routes>
      <Route index element={<App />}/>
      <Route path="/toursMain" element={<ToursList />}></Route>
      <Route path="/checkData" element={<CheckData />}></Route>
      <Route path="/tourDetailPage/:contentid" element={<ConnectPage />}></Route>
      <Route path="/check" element={<CheckCallAPI />}></Route>
      <Route path='/LoginForm' element={<LoginForm />}/>
      <Route path='/JoinForm' element={<JoinForm />}/>
      <Route path="/Logout" element={<Logout/>}/>
      <Route path='/login/oauth2/code/kakao' element={<KakaoRedirectPage />}/>
      <Route path='/FindId' element={<FindId/>}/>
      <Route path='/FindPwd' element={<FindPwd/>}/>
      <Route path='/CheckPwd' element={<CheckPwd/>}/>
      <Route path='/ModifyPwd' element={<ModifyPwd/>}/>
      <Route path='/ModifyNickName' element={<ModifyNickName/>}/>
    </Routes>
  </BrowserRouter>
);