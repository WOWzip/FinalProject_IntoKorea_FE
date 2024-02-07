import { Routes, Route } from 'react-router-dom'; 
import axios from "axios";

import LoginForm from './user/LoginForm';
import JoinForm from './user/JoinForm';
import JoinForm2 from './user/JoinForm2';
import JoinForm3 from './user/JoinForm3';
import JoinForm4 from './user/JoinForm4';
import JoinForm5 from './user/JoinForm5';
import KakaoRedirectPage from './user/KakaoRedirectPage';
import Main from "./main";
import ToursListApi from "./tours/toursListApi";
import CheckData from "./tours/zcheckAndTest/checkData";
import TourDetailPageApi from "./tourDetailPage/tourDetailPageApi";
import Logout from './user/Logout';

function App() {



  return (
    <div className="App">

        <Routes>
        <Route index element={<Main />}/>
          <Route path="/toursMain" element={<ToursListApi />}></Route>
          <Route path="/checkData" element={<CheckData />}></Route>
          <Route path="/tourDetail" element={<TourDetailPageApi/>}></Route>
          <Route path='/LoginForm' element={<LoginForm />}/>
          <Route path='/JoinForm' element={<JoinForm />}/>
          <Route path='/JoinForm2' element={<JoinForm2 />}/>
          <Route path='/JoinForm3' element={<JoinForm3 />}/>
          <Route path='/JoinForm4' element={<JoinForm4 />}/>
          <Route path='/JoinForm5' element={<JoinForm5 />}/>
          <Route path="/Logout" element={<Logout/>}/>
          <Route path='/login/oauth2/code/kakao' element={<KakaoRedirectPage />}/>
        </Routes>
    
    </div>

  );
}

export default App;
