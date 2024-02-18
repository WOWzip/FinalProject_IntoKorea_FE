import axios from 'axios';
import React, { useCallback, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Timer from './Timer';



const CheckCode = () => {

  const navigate = useNavigate();
  const email = sessionStorage.getItem("email");
  const provider = sessionStorage.getItem("provider");

  // 인증번호
  const [ePw, setEPw] = useState('');
  // 유효성 검사 결과
  const [isValidEPw, setIsValidEPw] = useState(false);
  // 메시지 표시
  const [ePwMsg, setEPwMsg] = useState("");

  // 타이머
  const [isTimer, setIsTimer] = useState(false);
  
  // 버튼 클릭 확인 ( 인증코드 한번 누르면 비활성화 )
  const [clickBtn, setClickBtn] = useState(false);

  // 인증번호 발송
  const handleEPwSend = async () => {

    // 백앤드와 통신
    var sendData = JSON.stringify({
      "email": email
    });
  
    if(email !== null){

      if(provider !== "none"){
        try {
          const response = await axios.post("http://localhost:8081/emails/sendCode", sendData, {
                headers: {'Content-Type': 'application/json'}
            });
    
          alert("가입된 이메일로 인증코드가 발송되었습니다.")
          setClickBtn(true);
          setIsTimer(true);
          const code = response.data;
          console.log("전송된 인증코드:", code);
    
        } catch (error) {
          console.log("실패");
        }
      } else {
        alert("경로가 잘못되었습니다. 일반 계정 탈퇴 페이지로 이동합니다.")
        navigate("/CheckPwd");
      }
      
    } else {
      alert("경로가 잘못되었습니다. 로그인이 필요합니다.")
      navigate("/Login");
    }
  }
 
  
  // 인증번호 입력
  const handleCodeChange = useCallback( async (e) => {
      const currEPw = e.target.value;
      setEPw(currEPw);
  },[]);



  // 인증번호 유효성 체크 
  const handleEPwConfirm = async (e) => {
  
    // 백앤드와 통신 
    try {
      const response = await axios.get("http://localhost:8081/emails/verifyCode", {
        params: {code: ePw, userEmail: email}});
      
      const verifyCode =  response.data;
      console.log("인증코드 유효성:", verifyCode);

    if(verifyCode === true){
      setIsValidEPw(true);
      navigate("/DeleteUser");
      alert("인증이 완료되었습니다.");

    } else {
      setIsValidEPw(false);
      setEPwMsg("유효하지 않은 인증번호입니다.");
    }
    

  } catch (error) {
    console.log("실패");
  }

}



  return (

  <>
    <div className='checkCode_div'>
      
      
      <form className='checkCode_form'>
          <p className='checkCode_p'>IntoKorea 회원탈퇴 <br/> 본인인증</p>
          <div className='form_div'>
            <button type="button" onClick={handleEPwSend} className={clickBtn ? 'disabledBtn' : 'activeBtn'} disabled={clickBtn&&true} >인증번호 받기</button>
          </div>

          <hr className='hr'/>

          <div className='form_div2'>
            <p className='checkCode_p2'>본인 확인을 위해 인증코드를 입력해 주세요.</p>
            <input className='checkCode_input' type="text" id="ePw" name="ePw" placeholder="인증번호 입력" value={ePw} onChange={handleCodeChange} required/>
            {isTimer && !isValidEPw ? (
                    <Timer/>
                  ) : null}
            <div className={isValidEPw ? 'success' : 'error'}>{ePwMsg}</div>
            <button className='button2' type="button" onClick={handleEPwConfirm}>인증번호 확인</button>
            <button className='button3' type="button" onClick={() => window.location.href = '/'}>취소</button>
          </div>
          
        </form>
    </div>


    {/* 스타일 정의 */}
    <style jsx="true">{`

        .hr {
          border: 2px solid black;
          margin-bottom: 100px;
        }

        .checkCode_div {
          margin-top: 5%;
          margin-bottom: 5%;
        }

        .checkCode_form {
            max-width: 350px;
            margin: auto;
            padding: 20px; /* Add padding to improve spacing on smaller screens */
            border: 1px solid #000;
          }

        .checkCode_p {
          font-size: 30px;
          margin-bottom: 20px;
          text-align : center;
        }

        .checkCode_p2 {
          margin-top: 30px;
          margin-bottom: 30px;
          text-align : center;
        }

        .form_div {
            margin-bottom: 20px;
        }

        .form_div2 {
          margin-bottom: 10px;
        }

        .checkCode_input {
            width: 100%;
            padding: 8px;
            box-sizing: border-box;
        }

        .success {
          color: green;
          font-size: 12px;
        }

        .error {
          color: red;
          font-size: 12px;
        }


        .activeBtn {
          width: 100%;
          margin-top: 10px;
          padding: 8px;
          background-color: black;
          color: white;
          border: none;
          cursor: pointer;
        }

        .activeBtn:hover {
          background-color: #818181;
        }

        .disabledBtn {
          width: 100%;
          background-color: #666;
          color:#fff;
          pointer-events: none;
          cursor: default;
        }


        .button2 {
          width: 100%;
          background-color: #008000;
          margin: 10px 0 10px 0 ;
          padding: 8px;
          color: white;
          border: none;
          cursor: pointer;
        }

        .button2:hover {
          background-color: #8fbc8f;
        }

        .button3 {
          width: 100%;
          background-color: #b22222;
          padding: 8px;
          color: white;
          border: none;
          cursor: pointer;
        }


        .button3:hover {
          background-color: #bc8f8f;
        }

        

        @media (max-width: 768px) {
            /* Apply styles for screens with a maximum width of 768px */
            form {
            max-width: 100%;
            }
        }
        `}</style>
</>
  );
};

export default CheckCode;