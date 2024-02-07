import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import {Route, Routes} from 'react-router-dom'
import MyPage from './components/pages/mypage/MyPage';
import QnA from './components/pages/mypage/QnA';
import Question from './components/pages/mypage/Question';
import History from './components/pages/mypage/History';
import Keep from './components/pages/mypage/Keep';
import MyPageSidebar from './components/MyPageSidebar';
import Traveldiary from './components/pages/mypage/TravelDiary';
import EditQuestion from './components/pages/mypage/EditQuestion';
import QnAdetail from './components/pages/mypage/QnAdetail';


import Header from './components/pages/fragnents/header';
import Footer from './components/pages/fragnents/footer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Header />
    <App/>
    <Footer />
    <div style={{ display: 'flex' }}>
      <MyPageSidebar />
      <Routes>
        <Route index element={<MyPage/>} />
        <Route path="/QnA" element={<QnA />} />
        <Route path="/Question" element={<Question />} />
        <Route path="/History" element={<History />} />
        <Route path="/Keep" element={<Keep />} />
        <Route path="/Traveldiary" element={<Traveldiary/>}/>
        <Route path="/EditQuestion" element={<EditQuestion/>}/>
        <Route path="/QnAdetail" element={<QnAdetail/>}/>
      </Routes>
    </div>
  </BrowserRouter>
);





