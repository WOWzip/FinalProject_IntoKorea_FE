import React, { useCallback, useState } from 'react';
import axios from 'axios';

const JoinForm4 = () => {

  // 기본 API URL
  const URL_API = "http://localhost:8081";

  // 이메일 중복체크 URL
  const URL_CheckEmail = `${URL_API}/checkJoin/email`;

  // 닉네임 중복체크 URL
  const URL_CheckNickName = `${URL_API}/checkJoin/nickName`;

  // // 회원가입 URL
  const URL_Join = `${URL_API}/join`;

  


  // 따로따로 담음(이메일, 비번, 비번확인, 닉네임)
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repassword, setRePassword] = useState('');
  const [nickName, setNickName] = useState('');

  // 유효성 검사 결과 담는 변수
  const [isValidEmail, setIsValidEmail] = useState(false);
  const [isValidPwd, setIsValidPwd] = useState(false);
  const [isValidRePwd, setIsValidRePwd] = useState(false);
  const [isValidNickName, setIsValidNickName] = useState(false);




  // 이메일, 비밀번호, 닉네임 에러 메시지 표시
  const [emailMsg, setEmailMsg] = useState("");
  const [pwdMsg, setPwdMsg] = useState('');
  const [rePwdMsg, setRePwdMsg]= useState("");
  const [nicknameMsg, setNicknameMsg] = useState("");

  // 이메일, 닉네임 중복 확인
  const [checkEmail, setCheckEmail] = useState(false);
  const [checkNickName, setCheckNickName] = useState(false);

  // 전체 유효한 값인지 체크
  const isAllVaild = isValidEmail && isValidPwd && isValidRePwd && isValidNickName && checkEmail && checkNickName;


  // 1. 이메일, 비밀번호, 닉네임 유효성 검사
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


  // 2. 이메일 및 닉네임 중복 확인
  // 이메일 중복 확인
  // const onCheckEmail = async() => {

  //   // 백앤드와 통신
  //   try {
  //     const response = await axios.post(URL_CheckEmail, {email});
  //     console.log("성공:", `${email}`, " 넘어감");
  //     console.log(response.data);

  //     if(response.data === true){ // 중복 x
  //       setCheckEmail(true);
  //     } 

  //   } catch (error) {
  //     console.log("실패");
  //     console.error(error);
  //   }
    
  // };

  // 닉네임 중복 확인
  const onCheckNickName = async() => {

    // 백앤드와 통신
    try {
      const response = await axios.post(URL_CheckNickName, {nickName});
      console.log("성공:", `${nickName}`, " 넘어감");
      console.log(response.data);

      if(response.data){ // 중복 x
        setCheckNickName(true);
      }

    } catch (error) {
      console.log("실패");
      console.error(error);
    }
    
  };



  const handleEmailChange = useCallback( async (e) => {
    const currEmail = e.target.value;
    setEmail(currEmail);
    setIsValidEmail(validateEmail(currEmail));

    if (!email || !validateEmail(currEmail)) { 
        setEmailMsg('올바른 이메일 주소를 입력하세요.');
    } else {
        //onCheckEmail();
         
        // 이메일 중복 체크
        // 백앤드와 통신
        // API로 보낼 데이터를 JSON으로 변환
        var sendData = JSON.stringify({ // 백앤드의 객체명과 같아야함.
          "email": currEmail
        });

        try {
          const response = await axios.post(URL_CheckEmail, sendData, {
                headers: {'Content-Type': 'application/json'}
            });
          console.log({currEmail});
          console.log("성공:", `${currEmail}`, " 넘어감");
          console.log("response.data:", response.data);

          if(response.data === true){ // 중복 x
            
            // const r = response.data;
            setCheckEmail(true);
            if (response.data) {
              console.log("중복x??",checkEmail);
              setEmailMsg('사용 가능한 이메일입니다.');
              
          } 
          
          } else {
            console.log("중복x? : ",checkEmail);
            setEmailMsg('중복된 이메일입니다.');
          }

        } catch (error) {
          console.log("실패");
          console.error(error);
        }

        
    } 
    console.log("checkEmail:", checkEmail)
    

  }, [email] );

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

  const handleNickNameChange = useCallback( (e) => {
    const currNickName = e.target.value;
    setNickName(currNickName);
    setIsValidNickName(validateNickname(currNickName));

    if (!nickName || !validateNickname(nickName)) {
      setNicknameMsg('닉네임은 2글자 이상 20글자 이하로 입력해주세요.');
    } else {
      onCheckNickName();
      if(!checkNickName){
        setNicknameMsg('중복된 닉네임입니다.');
      }
      setNicknameMsg('사용 가능한 닉네임입니다.');
    }
  }, [nickName, checkNickName]);



  const handleJoin = async (e) => {
    e.preventDefault();
    // You can add your join logic here using email, password, and nickName states
    console.log('Join button clicked');
    console.log('Form submitted:', email);
    console.log('Form submitted:', nickName + "님 회원가입 시도함");
    console.log("email, pwd, repwd, nickname : ", isValidEmail, isValidPwd, isValidRePwd, isValidNickName);
    console.log("email, nickname 중복체크(중복x인가) : ", checkEmail, checkNickName);

    

    // 유효성 검사 및 중복확인 성공 시
    if (isAllVaild) {
      // Perform registration logic (e.g., send data to the server)
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
        console.log(response.data); // Handle the response as needed
      } catch (error) {
        console.error('Error:', error);
      }

      // 유효성 검사 실패 시
    } else {
      console.log('Form is invalid. Please fix the errors.');
    }

  };

  return (
    <>
      <div>
        <h1>회원가입 페이지4</h1>
        <hr />
        <form onSubmit={handleJoin}>
          <div>
            <label htmlFor="email">이메일 주소 :</label>
            <input type="email" id="email" name="email" placeholder="Email" value={email} onChange={handleEmailChange} required/> <br />
            <div className={isValidEmail && checkEmail ? 'success' : 'error'}>{emailMsg}</div>
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
            <input type="text" id="nickName" name="nickName" placeholder="NickName" value={nickName} onChange={handleNickNameChange} required/> <br />
            <span className={isValidNickName && checkNickName ? 'success' : 'error'}>{nicknameMsg}</span>
          </div>
          
          <button type="submit">회원가입</button>

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



export default JoinForm4;