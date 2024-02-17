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

    setClickBtn(true);

    // 백앤드와 통신
    var sendData = JSON.stringify({
      "email": email
    });
  
    if(email !== null && provider !== "none"){
      
      try {
        const response = await axios.post("http://localhost:8081/emails/sendCode", sendData, {
              headers: {'Content-Type': 'application/json'}
          });
  
        alert("해당 이메일로 인증코드가 발송되었습니다.")
        setIsTimer(true);
        const code = response.data;
        console.log("전송된 인증코드:", code);
  
      } catch (error) {
        console.log("실패");
      }
    } else {
      alert("유효한 이메일을 입력해주세요.")
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
    <div>
      <h1>IntoKorea 소셜 회원탈퇴 인증코드 확인</h1>
      <h2>본인 확인을 위해 인증코드를 입력해 주세요</h2>
      <hr/>
      
      <form>
          <div>
            <button type="button" onClick={handleEPwSend} className={clickBtn ? 'disabledBtn' : 'activeBtn'} disabled={clickBtn&&true} >인증번호 받기</button>
          </div>

          <div>
            <label htmlFor="ePw">인증번호 :</label>
            <input type="text" id="ePw" name="ePw" placeholder="인증번호 입력" value={ePw} onChange={handleCodeChange} required/>
            {isTimer && !isValidEPw ? (
                    <Timer/>
                  ) : null}
            <div className={isValidEPw ? 'success' : 'error'}>{ePwMsg}</div>
          </div>
          <button type="button" onClick={handleEPwConfirm}>인증번호 확인</button>
          <button type="button" onClick={() => window.location.href = '/'}>취소</button>
        </form>
    </div>


    {/* 스타일 정의 */}
    <style jsx="true">{`
        form {
            max-width: 300px;
            margin: auto;
            padding: 20px; /* Add padding to improve spacing on smaller screens */
        }

        div {
            margin-bottom: 20px;
        }

        label {
            display: block;
            margin-bottom: 5px;
        }

        input {
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


        button {
            width:100%;
            margin-top: 10px;
            padding: 8px;
            background-color: #4caf50;
            color: white;
            border: none;
            cursor: pointer;
        }

        button:hover {
            background-color: #45a049;
        }



        .disabledBtn {
          background-color: #666;
          color:#fff;
          pointer-events: none;
          cursor: default;
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