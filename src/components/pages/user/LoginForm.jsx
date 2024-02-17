import axios from 'axios';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const KAKAO_CLIENT_ID = process.env.REACT_APP_KAKAO_REST_API_KEY;

const KAKAO_REDIRECT_URL = process.env.REACT_APP_KAKAO_REDIRECT_URL;

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
      const provider = response.data.provider;
      console.log(data);
      console.log(msg);
      console.log(nickName);
      console.log(check);
      console.log(provider);


      // 일반 로그인 성공시
      if(check==="2"){
        sessionStorage.setItem("email", email);
        sessionStorage.setItem("nickName" ,nickName);
        sessionStorage.setItem("provider", provider);
        sessionStorage.setItem("checkPwd", false);
        alert(nickName + "님, 성공적으로 로그인 되었습니다");
		    navigate("/");
      } else if(check==="1") {
        sessionStorage.setItem("provider", provider);
        alert(msg);
      }
      else {
        alert(msg);
      }

    } catch (error) {
      console.error('Error:', error);
    }

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
        <input type="email" name="email" placeholder="Email" value={email} onChange={handleEmailChange}  required/> <br />
        <input type="password" name="password" placeholder="Password" value={password} onChange={handlePasswordChange}  required/> <br />
        <button type="submit">로그인</button>
      </form>
      <button onClick={KakaoLogin}>카카오 로그인</button><br/>

      <Link to="/JoinForm">회원가입을 아직 하지 않으셨나요?</Link> <br/>
      <Link to="/FindId">아이디 찾기</Link> <br/>
      <Link to="/FindPwd">비밀번호 찾기</Link> <br/>
    </div>
  );
};

export default LoginForm;