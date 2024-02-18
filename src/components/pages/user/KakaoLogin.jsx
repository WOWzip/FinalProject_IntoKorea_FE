import React from 'react';

const KAKAO_CLIENT_ID = process.env.REACT_APP_KAKAO_REST_API_KEY;
const KAKAO_REDIRECT_URL = process.env.REACT_APP_KAKAO_REDIRECT_URL;

const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=${KAKAO_CLIENT_ID}&redirect_uri=${KAKAO_REDIRECT_URL}&scope=profile_nickname account_email&prompt=login`; // &prompt=login: 사용자에게 로그인을 요청합니다.

const KakaoLogin = () => {

  // 카카오 로그인 페이지 
  const KakaoLogin  = () => {
    window.location.href = KAKAO_AUTH_URL;
  };
  return (
   <>
     <div>
      <button className='kakao' onClick={KakaoLogin}>카카오로 회원가입</button><br/>
    </div>
     {/* 스타일 정의 */}
    <style jsx="true">{`
    .kakao {
      background-color: red;
    }
    `}</style>
   
   </>
  );
};
 
export default KakaoLogin;