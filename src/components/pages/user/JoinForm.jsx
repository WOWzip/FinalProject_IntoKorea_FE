import React, { useCallback, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Timer from './Timer';
import KakaoLogin from './KakaoLogin';

const JoinForm = () => {

  // 기본 API URL
  const URL_API = "http://localhost:8081";

  // 이메일 중복체크 URL
  const URL_CheckEmail = `${URL_API}/check/existEmail`;

  // 닉네임 중복체크 URL
  const URL_CheckNickName = `${URL_API}/check/existNickName`;

  // // 회원가입 URL
  const URL_Join = `${URL_API}/join`;

  const navigate = useNavigate();


  // 따로따로 담음(이메일, 인증코드, 비번, 비번확인, 닉네임)
  const [email, setEmail] = useState('');
  const [ePw, setEPw] = useState('');
  const [password, setPassword] = useState('');
  const [repassword, setRePassword] = useState('');
  const [nickName, setNickName] = useState('');

  // 타이머
  const [isTimer, setIsTimer] = useState(false);

  // 유효성 검사 결과 담는 변수
  const [isValidEmail, setIsValidEmail] = useState(false);
  const [isValidEPw, setIsValidEPw] = useState(false);
  const [isValidPwd, setIsValidPwd] = useState(false);
  const [isValidRePwd, setIsValidRePwd] = useState(false);
  const [isValidNickName, setIsValidNickName] = useState(false);


  // 이메일, 인증코드, 비밀번호, 닉네임 에러 메시지 표시
  const [emailMsg, setEmailMsg] = useState("");
  const [ePwMsg, setEPwMsg] = useState("");
  const [pwdMsg, setPwdMsg] = useState('');
  const [rePwdMsg, setRePwdMsg]= useState("");
  const [nicknameMsg, setNicknameMsg] = useState("");

  // 이메일, 닉네임 중복 확인
  const [checkEmail, setCheckEmail] = useState(false);
  const [checkNickName, setCheckNickName] = useState(false);

  // 전체 유효한 값인지 체크
  const isAllVaild = isValidEmail && isValidEPw && isValidPwd && isValidRePwd && isValidNickName && checkEmail && checkNickName;


  // < 이메일, 비밀번호, 닉네임 유효성 검사 >
  // - test() 메서드는 정규표현식과 함께 사용됨. 문자열이 정규표현식과 일치하는지 여부 확인
  // 이메일
  const validateEmail = (email) => {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailRegex.test(email);
  };


  // 비밀번호
  const validatePwd = (password) => {
    // 최소 8자리, 숫자, 영문, 특수문자 최소 1개 포함
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{8,}$/;
    return passwordRegex.test(password);
  };
  
  // 닉네임
  const validateNickname = (nickname) => {
    //글자수만 제한 (2~20)
    const nickNameRegex = /^[\w\Wㄱ-ㅎㅏ-ㅣ가-힣]{2,20}$/;
    return nickNameRegex.test(nickname);
  }


  // 이메일 유효성 체크
  const handleEmailChange = useCallback( async (e) => {
    const currEmail = e.target.value;
    setEmail(currEmail);
    setIsValidEmail(validateEmail(currEmail));

    if (!email || !validateEmail(currEmail)) { 
        setEmailMsg('올바른 이메일 주소를 입력하세요.');
    } else {
        setEmailMsg('올바른 이메일 형식입니다.');
    } 

  }, [email] );


  // 비밀번호 유효성 체크
  const handlePasswordChange = useCallback((e) => {
    const currPwd = e.target.value;
    setPassword(currPwd);
    setIsValidPwd(validatePwd(currPwd));

    validatePwd(currPwd);
    validateRePassword(currPwd, repassword);

    if(!password || !validatePwd(currPwd)){
      setPwdMsg('영문, 숫자, 특수기호 조합으로 8자리 이상 입력해주세요.');
    } else {
      setPwdMsg('올바른 비밀번호 형식입니다.');
    }
  }, [repassword, password]);


  // 비밀번호 일치하는지 체크
  const handleRePasswordChange = useCallback((e) => {
    const currRePwd = e.target.value;
    setRePassword(currRePwd);
    validateRePassword(password, currRePwd);
  }, [password]);

  

  const validateRePassword = (newPassword, newRePassword) => {
    const isValid = newPassword === newRePassword;
    setIsValidRePwd(isValid);

    if (!isValid) {
      setRePwdMsg('비밀번호가 일치하지 않습니다.');
    } else {
      setRePwdMsg('비밀번호가 일치합니다.');
    }
  };

  // 닉네임 유효성 체크
  const handleNickNameChange = useCallback( (e) => {
    const currNickName = e.target.value;
    setNickName(currNickName);
    setIsValidNickName(validateNickname(currNickName));

    if (!nickName || !validateNickname(currNickName)) {
      setNicknameMsg('닉네임은 2글자 이상 20글자 이하로 입력해주세요.');
    } else {
      setNicknameMsg('올바른 닉네임 형식입니다.');
    }
  }, [nickName]);


  
 // < 이메일 및 닉네임 중복 체크 >
 // 이메일 중복 체크
 const handleEmailBlur = useCallback( async () => {

  // 백앤드와 통신
  // API로 보낼 데이터를 JSON으로 변환
  var sendData = JSON.stringify({ // 백앤드의 객체명과 같아야함.
    "email": email
  });

  if(isValidEmail){
    try {
      const response = await axios.post(URL_CheckEmail, sendData, {
            headers: {'Content-Type': 'application/json'}
        });
      console.log(sendData);
      console.log("성공:", `${sendData}`, " 넘어감");
      console.log("이메일 중복인가?:", response.data);
  
      if(response.data === false){ // 중복 x
        
        setCheckEmail(true);
        if (isValidEmail && !response.data) {
          setEmailMsg('사용 가능한 이메일입니다.');
        } 
      
      } else {
        setEmailMsg('중복된 이메일입니다.');
        setCheckEmail(false);
      }
  
    } catch (error) {
      console.log("실패");
      console.error(error);
    }
  
  }
  
}, [email, URL_CheckEmail, isValidEmail]);




  // 닉네임 중복 체크
  const handleNickNameBlur = useCallback( async () => {
    
    // 백앤드와 통신
    // API로 보낼 데이터를 JSON으로 변환
    var sendData = JSON.stringify({ // 백앤드의 객체명과 같아야함.
      "nickName": nickName
    });

    if(isValidNickName){
      try {
        const response = await axios.post(URL_CheckNickName, sendData, {
              headers: {'Content-Type': 'application/json'}
          });
        console.log(sendData);
        console.log("성공:", `${sendData}`, " 넘어감");
        console.log("닉네임 중복됨?:", response.data);
  
        if(response.data === false){ // 중복 x
          
          setCheckNickName(true);
          if (!response.data) {
            setNicknameMsg('사용 가능한 닉네임입니다.');
          } 
        
        } else {
          setNicknameMsg('중복된 닉네임입니다.');
          setCheckNickName(false);
        }
  
      } catch (error) {
        console.log("실패");
        console.error(error);
      }
    }
    

}, [nickName, URL_CheckNickName, isValidNickName]);


// 인증번호 발송
const handleEPwSend = async () => {

  // 백앤드와 통신
  var sendData = JSON.stringify({
    "email": email
  });

  setIsTimer(false);

  if(isValidEmail && checkEmail){
    
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
const handleEPwChange = useCallback( (e) => {
  const currEPw = e.target.value;
  setEPw(currEPw);
}, []);

// 인증번호 유효성 체크
const handleEPwConfirm =  async () => {

  // 백앤드와 통신
  try {
    const response = await axios.get("http://localhost:8081/emails/verifyCode", {
      params: {code: ePw, userEmail: email}});

    const verifyCode =  response.data;
    console.log("인증코드 유효성:", verifyCode);

    if(verifyCode === true){
      setIsValidEPw(true);
      setEPwMsg("인증이 완료되었습니다.");
    } else {
      setIsValidEPw(false);
      setEPwMsg("유효하지 않은 인증번호입니다.");
    }
    

  } catch (error) {
    console.log("실패");
  }

}


  const handleJoin = async (e) => {
    e.preventDefault();
    console.log('Join button clicked');
    console.log('Form submitted:', email);
    console.log('Form submitted:', nickName + "님 회원가입 시도함");
    console.log("email, pwd, repwd, nickname : ", isValidEmail, isValidPwd, isValidRePwd, isValidNickName);
    console.log("email, nickname 중복체크(중복x인가) : ", checkEmail, checkNickName);

    

    // 유효성 검사 및 중복확인 성공 시
    if (isAllVaild) {

      console.log('Form is valid. Submitting:', {email, nickName});

      // 백앤드와 통신
      // API로 보낼 데이터를 JSON으로 변환
      var sendData = JSON.stringify({ // 백앤드의 객체명과 같아야함.
        "email": email,
        "password": password,
        "nickName": nickName,
      });
      
      try {
        const response = await axios.post(URL_Join, sendData, {
          headers: {'Content-Type': 'application/json'}
        });
        console.log(response.data); 
        console.log(response.status);
        const status = response.status;
        if(status === 200){
          alert("회원가입 성공!!")
          navigate("/");
        }


      } catch (error) {
        console.error('Error:', error);
      }

      // 유효성 검사 실패 시
    } else {
      alert("유효한 값을 입력해주세요")
      console.log('Form is invalid. Please fix the errors.');
    }

  };

  return (
    <>
      <div>
        <h1>회원가입 페이지</h1>
        <hr />
        <form onSubmit={handleJoin}>
          <div>
            <label htmlFor="email">이메일 주소 :</label>
            <input type="email" id="email" name="email" placeholder="Email" value={email} onChange={handleEmailChange} onBlur={handleEmailBlur} disabled={isValidEPw&&true} required/>
            <button type="button" onClick={handleEPwSend} className={isValidEPw ? 'disabledBtn' : 'activeBtn'} disabled={isValidEPw&&true} >인증번호 받기</button>
            <br />
            <div className={isValidEmail && checkEmail ? 'success' : 'error'}>{emailMsg}</div>
          </div>

          <div>
            <label htmlFor="ePw">인증번호 :</label>
            <input type="text" id="ePw" name="ePw" placeholder="인증번호 입력" value={ePw} onChange={handleEPwChange} disabled={isValidEPw&&true} required/>
            {isTimer && !isValidEPw ? (
                    <Timer/>
                  ) : null}
            <button type="button" onClick={handleEPwConfirm}  className={isValidEPw ? 'disabledBtn' : 'activeBtn'} disabled={isValidEPw&&true}>인증번호 확인</button>
            <div className={isValidEPw ? 'success' : 'error'}>{ePwMsg}</div>
          </div>
          
          <div>
            <label htmlFor="password">비밀번호 :</label>
            <input type="password" id="password" name="password" placeholder="Password" value={password} onChange={handlePasswordChange} required/> <br />
            <span className={isValidPwd ? 'success' : 'error'}>{pwdMsg}</span>
          </div>
          
          <div>
            <label htmlFor="repassword">비밀번호 확인 :</label>
            <input type="password" id="repassword" name="repassword" placeholder="RePassword" value={repassword} onChange={handleRePasswordChange} required/> <br />
            <span className={isValidRePwd ? 'success' : 'error'}>{rePwdMsg}</span>
          </div>
          
          <div>
            <label htmlFor="nickName">닉네임 :</label>
            <input type="text" id="nickName" name="nickName" placeholder="NickName" value={nickName} onChange={handleNickNameChange} onBlur={handleNickNameBlur} required/> <br />
            <span className={isValidNickName && checkNickName ? 'success' : 'error'}>{nicknameMsg}</span>
          </div>
          
          <button type="submit">회원가입</button>

          <br/>
          <KakaoLogin/>

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



export default JoinForm;