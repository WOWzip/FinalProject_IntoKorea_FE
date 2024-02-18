import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';



import App from './components/pages/App';
import ConnectPage from 'components/pages/tourDetailPage/connectPage';

//style
import "bootstrap/scss/bootstrap.scss";
import "assets/scss/paper-kit.scss?v=1.3.0";
import "assets/demo/demo.css?v=1.3.0";
import ToursList from 'components/pages/tours/toursList';
import MyPage from 'components/pages/mypage/MyPage';
import QnA from 'components/pages/mypage/QnA';
import Question from 'components/pages/mypage/Question';
import History from 'components/pages/mypage/History';
import TravelDiary from 'components/pages/mypage/TravelDiary';
import EditQuestion from 'components/pages/mypage/EditQuestion';
import QnAdetail from 'components/pages/mypage/QnAdetail';
import EditDiary from 'components/pages/mypage/EditDiary';
import DiaryDetail from 'components/pages/mypage/DiaryDetail';
import TourDetailPageApi from 'components/pages/tourDetailPage/tourDetailPageApi';
import LoginForm from 'components/pages/user/LoginForm';
import Logout from 'components/pages/user/Logout';
import KakaoRedirectPage from 'components/pages/user/KakaoRedirectPage';
import FindId from 'components/pages/user/FindId';
import FindPwd from 'components/pages/user/FindPwd';
import CheckPwd from 'components/pages/user/CheckPwd';
import ModifyPwd from 'components/pages/user/ModifyPwd';
import ModifyNickName from 'components/pages/user/ModifyNickName';
import JoinForm from 'components/pages/user/JoinForm';
import DeleteUser from 'components/pages/user/DeleteUser';
import CheckCode from 'components/pages/user/CheckCode';
import BookMark from 'components/pages/mypage/BookMark';
import IndexNavbar from 'components/pages/fragnents/Navbars/IndexNavbar';
import DemoFooter from 'components/pages/fragnents/Footers/DemoFooter';
import SearchKeyword1 from 'components/pages/searchKeyword/searchKeyword1';
import SearchFestival1 from 'components/pages/tours/searchFestival1/searchFestival1';
import JoinForm2 from 'components/pages/user/JoinForm2';

const email = sessionStorage.getItem("email");
const checkPwd = sessionStorage.getItem("checkPwd");


console.log("email존재유무::" , email)
console.log("checkPwd 상태 : " , checkPwd)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
  <BrowserRouter basename='/'>
    <IndexNavbar />
    <div className='bodyContainer'>
    <Routes>
      <Route path="/" element={<App />}/>
      <Route path="/toursMain" element={<ToursList />} />
      <Route path="/tourDetailPage/:contentid" element={<ConnectPage />} />
      <Route path="/search" element={<SearchKeyword1 />} />
      <Route path="/festival" element={<SearchFestival1/> } />

      {/* 마이페이지 */}
      {/* <Route path="/Mypage" element={<MyPage/>} />
      <Route path="/QnA" element={<QnA />} />
      <Route path="/Question" element={<Question />} />
      <Route path="/History" element={<History />} />   
      <Route path="/BookMark" element={<BookMark />} />
      <Route path="/Traveldiary" element={<TravelDiary/>}/>
      <Route path="/EditQuestion" element={<EditQuestion/>}/>
      <Route path="/QnAdetail" element={<QnAdetail/>}/>
      <Route path="/EditDiary" element={<EditDiary/>} />
      <Route path="/DiaryDetail" element={<DiaryDetail/>} /> */}
      

      <Route path="/tourDetail" element={<TourDetailPageApi/>} />
      <Route path='/LoginForm' element={<LoginForm />}/>
      <Route path='/JoinForm' element={<JoinForm />}/>
      {/* <Route path="/Logout" element={<Logout/>}/> */}
      <Route path='/login/oauth2/code/kakao' element={<KakaoRedirectPage />}/>
      <Route path='/FindId' element={<FindId/>}/>
      <Route path='/FindPwd' element={<FindPwd/>}/>
      <Route path='/DeleteUser' element={<DeleteUser/>}/>
      <Route path='/CheckCode' element={<CheckCode/>}/>
      <Route path='/JoinForm2' element={<JoinForm2/>}/>

      
      {/* 그 이외에 URL 요청 >> 메인페이지로 이동
      <Route path="*" element={< Navigate to="/"/>} /> */}
      
      {/* 로그인에 따른 접근제한 페이지. 로그인 안되어 있으면 로그인 페이지로 이동 */}
      
      {							
          email ?
              <>
                <Route path="/Logout" element={<Logout/>}/>
                <Route path='/CheckPwd' element={<CheckPwd/>}/>
                
                {/* 마이페이지 */}
                <Route path="/Mypage" element={<MyPage/>} />
                <Route path="/QnA" element={<QnA />} />
                <Route path="/Question" element={<Question />} />
                <Route path="/History" element={<History />} />   
                <Route path="/BookMark" element={<BookMark />} />
                <Route path="/Traveldiary" element={<TravelDiary/>}/>
                <Route path="/EditQuestion" element={<EditQuestion/>}/>
                <Route path="/QnAdetail" element={<QnAdetail/>}/>
                <Route path="/EditDiary" element={<EditDiary/>} />
                <Route path="/DiaryDetail" element={<DiaryDetail/>} />
                

                {/* <Route path='/ModifyPwd' element={<ModifyPwd/>}/>
                <Route path='/ModifyNickName' element={<ModifyNickName/>}/> */}

              </>
              :
              <>
                <Route path="/Logout" element={<Navigate to="/"/>}/>

                <Route path='/CheckPwd' element={<Navigate to="/LoginForm"/>}/>
                <Route path='/ModifyPwd' element={<Navigate to="/LoginForm"/>}/>
                <Route path='/ModifyNickName' element={<Navigate to="/LoginForm"/>}/>
                <Route path='/DeleteUser' element={<Navigate to="/LoginForm"/>}/>

                {/* 마이페이지 */}
                <Route path="/Mypage" element={<Navigate to="/LoginForm"/>} />
                <Route path="/QnA" element={<Navigate to="/LoginForm"/>} />
                <Route path="/Question" element={<Navigate to="/LoginForm"/>} />
                <Route path="/History" element={<Navigate to="/LoginForm"/>} />   
                <Route path="/BookMark" element={<Navigate to="/LoginForm"/>} />
                <Route path="/Traveldiary" element={<Navigate to="/LoginForm"/>}/>
                <Route path="/EditQuestion" element={<Navigate to="/LoginForm"/>}/>
                <Route path="/QnAdetail" element={<Navigate to="/LoginForm"/>}/>
                <Route path="/EditDiary" element={<Navigate to="/LoginForm"/>} />
                <Route path="/DiaryDetail" element={<Navigate to="/LoginForm"/>} />
                
              </>
      }

      {
         checkPwd ?

        <>
                <Route path='/ModifyPwd' element={<ModifyPwd/>}/>
                <Route path='/ModifyNickName' element={<ModifyNickName/>}/>
                <Route path='/DeleteUser' element={<DeleteUser/>}/>
        </>

         :

        <>
                <Route path='/CheckPwd' element={<ModifyPwd/>}/>
                <Route path='/CheckPwd' element={<ModifyNickName/>}/>
                <Route path='/CheckPwd' element={<DeleteUser/>}/>
        </>

      }




    </Routes>
    <DemoFooter />
    </div>

  </BrowserRouter>
);
