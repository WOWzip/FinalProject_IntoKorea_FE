import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';


const GOOGLE_CLIENT_ID = process.env.REACT_APP_GOOGLE_REST_API_KEY;
const NAVER_CLIENT_ID = process.env.REACT_APP_NAVER_REST_API_KEY;
const KAKAO_CLIENT_ID = process.env.REACT_APP_KAKAO_REST_API_KEY;

const GOOGLE_REDIRECT_URL = process.env.REACT_APP_GOOGLE_REDIRECT_URL;
const NAVER_REDIRECT_URL = process.env.REACT_APP_NAVER_REDIRECT_URL;
const KAKAO_REDIRECT_URL = process.env.REACT_APP_KAKAO_REDIRECT_URL;

console.log({GOOGLE_CLIENT_ID});
console.log({KAKAO_CLIENT_ID});
console.log({GOOGLE_REDIRECT_URL});
console.log({KAKAO_REDIRECT_URL});


const GOOGLE_AUTH_URL = `https://accounts.google.com/o/oauth2/v2/auth?response_type=code&client_id=${GOOGLE_CLIENT_ID}&redirect_uri=${GOOGLE_REDIRECT_URL}&scope=email profile`; 

const NAVER_AUTH_URL = `https://nid.naver.com/oauth2.0/authorize?response_type=code&client_id=${NAVER_CLIENT_ID}&redirect_uri=${NAVER_REDIRECT_URL}&scope=name email`;

const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=${KAKAO_CLIENT_ID}&redirect_uri=${KAKAO_REDIRECT_URL}&scope=profile_nickname account_email&prompt=login`; // &prompt=login: 사용자에게 로그인을 요청합니다.

const LoginForm = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleLogin = (e) => {
    e.preventDefault();
    // You can add your login logic here using email and password states
    console.log('Login button clicked');
  };

  // 카카오 로그인 페이지 
  const KakaoLogin  = () => {
    window.location.href = KAKAO_AUTH_URL;
  };

  return (
    <div>
      <h1>로그인 페이지</h1>
      <hr/>
      <form onSubmit={handleLogin}>
        <input type="email" name="email" placeholder="Email" value={email} onChange={handleEmailChange} /> <br />
        <input type="password" name="password" placeholder="Password" value={password} onChange={handlePasswordChange} /> <br />
        <button type="submit">로그인</button>
      </form>
      <Link to={GOOGLE_AUTH_URL}>구글 로그인</Link> <br/>
      <Link to={NAVER_AUTH_URL}>네이버 로그인</Link> <br/>
      <button onClick={KakaoLogin}>카카오 로그인</button><br/>
      {/* <Link to={KAKAO_AUTH_URL}>카카오 로그인</Link> <br/> */}
      <Link to="/joinForm">회원가입을 아직 하지 않으셨나요?</Link>
    </div>
  );
};

export default LoginForm;