import axios from 'axios';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';


//const GOOGLE_CLIENT_ID = process.env.REACT_APP_GOOGLE_REST_API_KEY;
//const NAVER_CLIENT_ID = process.env.REACT_APP_NAVER_REST_API_KEY;
const KAKAO_CLIENT_ID = process.env.REACT_APP_KAKAO_REST_API_KEY;

//const GOOGLE_REDIRECT_URL = process.env.REACT_APP_GOOGLE_REDIRECT_URL;
//const NAVER_REDIRECT_URL = process.env.REACT_APP_NAVER_REDIRECT_URL;
const KAKAO_REDIRECT_URL = process.env.REACT_APP_KAKAO_REDIRECT_URL;

//const GOOGLE_AUTH_URL = `https://accounts.google.com/o/oauth2/v2/auth?response_type=code&client_id=${GOOGLE_CLIENT_ID}&redirect_uri=${GOOGLE_REDIRECT_URL}&scope=email profile`; 

//const NAVER_AUTH_URL = `https://nid.naver.com/oauth2.0/authorize?response_type=code&client_id=${NAVER_CLIENT_ID}&redirect_uri=${NAVER_REDIRECT_URL}&scope=name email`;

const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=${KAKAO_CLIENT_ID}&redirect_uri=${KAKAO_REDIRECT_URL}&scope=profile_nickname account_email&prompt=login`; // &prompt=login: 사용자에게 로그인을 요청합니다.

const LoginForm = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    // 백앤드와 통신 
    var sendData = JSON.stringify({ // 백앤드의 객체명과 같아야함.
      "email": email,
      "password": password
    });

    // 백앤드 컨트롤러로 직접 처리
    try {
      const response = await axios.post("http://localhost:8081/userLogin", sendData, {
        headers: {'Content-Type': 'application/json; charset=UTF-8'}
      });
      const data = response.data;
      const msg = response.data.msg;
      const nickName = response.data.nickName;
      const check = response.data.check;
      console.log(data);
      console.log(msg);
      console.log(nickName);
      console.log(check);
      alert(msg);

      // 로그인 성공시
      if(check==="true"){
        sessionStorage.setItem("email", email);
        sessionStorage.setItem("nickName" ,nickName);
		    navigate("/");
      }

    } catch (error) {
      console.error('Error:', error);
    }

    console.log('Login button clicked');
  };

  
  // 네이버 로그인 페이지 
  // const NaverLogin  = () => {
  //   window.location.href = NAVER_AUTH_URL;
  // };


  // 카카오 로그인 페이지 
  const KakaoLogin  = () => {
    window.location.href = KAKAO_AUTH_URL;
  };

  return (
    <div>
      <h1>로그인 페이지</h1>
      <hr/>
      <form onSubmit={handleLogin}>
        <input type="email" name="email" placeholder="Email" value={email} onChange={handleEmailChange}  required/> <br />
        <input type="password" name="password" placeholder="Password" value={password} onChange={handlePasswordChange}  required/> <br />
        <button type="submit">로그인</button>
      </form>
      {/* <Link to={GOOGLE_AUTH_URL}>구글 로그인</Link> <br/> */}
      {/* <Link to={NAVER_AUTH_URL}>네이버 로그인</Link> <br/> */}
      {/* <button onClick={NaverLogin}>네이버 로그인</button><br/> */}
      <button onClick={KakaoLogin}>카카오 로그인</button><br/>
      {/* <Link to={KAKAO_AUTH_URL}>카카오 로그인</Link> <br/> */}
      <Link to="/JoinForm5">회원가입을 아직 하지 않으셨나요?</Link> <br/>
      <Link to="/FindId">아이디 찾기</Link> <br/>
      <Link to="/FindPwd">비밀번호 찾기</Link> <br/>
    </div>
  );
};

export default LoginForm;