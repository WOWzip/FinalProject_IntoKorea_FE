/* KakaoRedirectPage.jsx */

import React, {useEffect} from 'react';
import {useLocation, useNavigate} from 'react-router-dom';
import axios from 'axios';

const KakaoRedirectPage = () => {
    const location = useLocation();
    const navigate = useNavigate();

    const handleOAuthKakao = async (code) => {
        try {
            // 카카오로부터 받아온 code를 서버에 전달하여 카카오로 회원가입 & 로그인한다
            const response = await axios.get(`http://localhost:8081/oauth/login/kakao?code=${code}`);
            const data = response.data; // 응답 데이터
            const memberCheck = response.data.memberCheck;
            const access_token = response.data.accessToken; // 토큰 받기
            const email = response.data.email;
            const nickName = response.data.nickName;
            const provider = response.data.provider;
            
            console.log(data)

            console.log("memberCheck: ", memberCheck);
            console.log("access_token: ", access_token);
            console.log("email: ", email);
            console.log("nickName: ", nickName);
            console.log("provider: ", provider);

            //const ACCESS_TOKEN = response.data.access_token;

            //sessionStorage.clear();
            if(email !== undefined){ 
                if(memberCheck === 0){
                    alert(nickName + "님, 성공적으로 회원가입 및 로그인 처리되었습니다.");
                    sessionStorage.setItem("token", access_token); // 토큰 저장
                    sessionStorage.setItem("email", email); // 이메일 저장
                    sessionStorage.setItem("nickName", nickName); // 닉네임 저장
                    sessionStorage.setItem("provider", provider); // 계정 종류 저장

                } else if(memberCheck === 2){
                    alert(nickName + "님, 성공적으로 로그인 되었습니다");
                    sessionStorage.setItem("token", access_token); // 토큰 저장
                    sessionStorage.setItem("email", email); // 이메일 저장
                    sessionStorage.setItem("nickName", nickName); // 닉네임 저장
                    sessionStorage.setItem("provider", provider); // 계정 종류 저장

                } else {
                    alert("이미 일반 및 다른 소셜방식으로 가입된 이메일 입니다.");
                }
                
            } 

            navigate("/"); // 로그인 성공 후 이동할 페이지
        } catch (error) {
            console.log("소셜 로그인 에러" ,error);
            window.alert("로그인에 실패하였습니다.")
            navigate("/loginForm"); // 로그인 실패 후 이동할 페이지. 로그인 화면으로 돌려보냄
        }
    };

    useEffect(() => {
        const searchParams = new URLSearchParams(location.search);
        const code = searchParams.get('code');  // 카카오는 Redirect 시키면서 code를 쿼리 스트링으로 준다.
        if (code) {
            console.log("CODE = " + code)
            handleOAuthKakao(code);
        }
    }, []);

    return (
        <div>
            <div>Processing...</div>
        </div>
    );
};

export default KakaoRedirectPage;

/* Local Storage: 해당 도메인에 영구 저장하고 싶을 때 

Session Storage: 해당 도메인의, 한 세션에서만 저장하고 싶을 때 (창 닫으면 data 날아감)

Cookie: 해당 도메인에 날짜를 설정하고 그 때까지만 저장하고 싶을 때

  */


