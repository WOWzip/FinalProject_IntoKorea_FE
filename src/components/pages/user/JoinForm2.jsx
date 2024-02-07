import React, { useState } from 'react';
import axios from 'axios';

const JoinForm2 = () => {


  // 따로따로 담음(이메일, 비번, 비번확인, 닉네임)
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repassword, setRePassword] = useState('');
  const [nickName, setNickName] = useState('');

  // 유효성 검사 결과 담는 변수
  const [isValidEmail, setIsValidEmail] = useState(true);
  const [isValidPwd, setIsValidPwd] = useState(true);
  const [isValidRePwd, setIsValidRePwd] = useState(true);
  const [isValidNickName, setIsValidNickName] = useState(true);


  // 이메일, 비밀번호, 닉네임 에러 메시지 표시
  const [errors, setErrors] = useState({});


  

  // 이메일, 비밀번호, 닉네임 유효성 검사
  // test() 메서드는 정규표현식과 함께 사용됨. 문자열이 정규표현식과 일치하는지 여부 확인
  const validateEmail = (email) => {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailRegex.test(email);
  };

  const validatePwd = (password) => {
    // 최소 8자리, 숫자, 영문, 특수문자 최소 1개 포함
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{8,}$/;
    return passwordRegex.test(password);
  };
  
  const validateNickname = (nickname) => {
    //글자수만 제한 (2~20)
    const nickNameRegex = /^[\w\Wㄱ-ㅎㅏ-ㅣ가-힣]{2,20}$/;
    return nickNameRegex.test(nickname);
  }


  const validateForm = () => {
  let isValid = true;
  const newErrors = {};

  // Email validation
  
  if (!email || !validateEmail(email)) { 
    newErrors.email = '올바른 이메일 주소를 입력하세요.';
    isValid = false;
  } else {
    newErrors.email = '올바른 이메일 형식입니다.';
  }

  // Password validation
  if (!password || !validatePwd(password)) {
    newErrors.password = '영문, 숫자, 특수기호 조합으로 8자리 이상 입력해주세요.';
    isValid = false;
  } else {
    newErrors.password = '올바른 비밀번호 형식입니다.';
  }

  // Confirm password validation
  if (password !== repassword) {
    newErrors.repassword = '비밀번호가 일치하지 않습니다.';
    isValid = false;
  } else {
    newErrors.repassword = '비밀번호가 일치합니다.';
  }

  // Nickname validation
  if (!nickName || !validateNickname(nickName)) {
    newErrors.nickName = '닉네임은 2글자 이상 20글자 이하로 입력해주세요.';
    isValid = false;
  } else {
    newErrors.nickName = '올바른 닉네임 형식입니다.';
  }

  setErrors(newErrors);
  return isValid;
};


 

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    // const newEmail = e.target.value;
    // setEmail(newEmail);
    // setIsValidEmail(validateEmail(newEmail));
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleRePasswordChange = (e) => {
    setRePassword(e.target.value);
  };

  const handleNickNameChange = (e) => {
    setNickName(e.target.value);
  };


  const handleJoin = async (e) => {
    e.preventDefault();
    // You can add your join logic here using email, password, and nickName states
    console.log('Join button clicked');
    console.log('Form submitted:', email);
    console.log('Form submitted:', nickName + "님 회원가입 시도함");

    

    // 유효성 검사 성공 시
    if (validateForm()) {
      // Perform registration logic (e.g., send data to the server)
      console.log('Form is valid. Submitting:', {email, nickName});

      // 백앤드와 통신
      try {
        const response = await axios.post('http://localhost:8081/join', {email, password, repassword, nickName});
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
        <h1>회원가입 페이지2</h1>
        <hr />
        <form onSubmit={handleJoin}>
          <div>
            <label htmlFor="email">이메일 주소 :</label>
            <input type="email" id="email" name="email" placeholder="Email" value={email} onChange={handleEmailChange} required/> <br />
            {errors.email && <span className={isValidEmail ? 'success' : 'error'}>{errors.email}</span>}
          </div>
          
          <div>
            <label htmlFor="password">비밀번호 :</label>
            <input type="password" id="password" name="password" placeholder="Password" value={password} onChange={handlePasswordChange} required/> <br />
            {errors.password && <span className={isValidPwd ? 'success' : 'error'}>{errors.password}</span>}
          </div>
          
          <div>
            <label htmlFor="repassword">비밀번호 확인 :</label>
            <input type="password" id="repassword" name="repassword" placeholder="RePassword" value={repassword} onChange={handleRePasswordChange} required/> <br />
            {errors.repassword && <span className={isValidRePwd ? 'success' : 'error'}>{errors.repassword}</span>}
          </div>
          
          <div>
            <label htmlFor="nickName">닉네임 :</label>
            <input type="text" id="nickName" name="nickName" placeholder="NickName" value={nickName} onChange={handleNickNameChange} required/> <br />
            {errors.nickName && <span className={isValidNickName ? 'success' : 'error'}>{errors.nickName}</span>}
          </div>
          
          <button type="submit">회원가입</button>
        </form>
      </div>

      {/* 스타일 정의 */}
      <style jsx>{`
          form {
            max-width: 300px;
            margin: auto;
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
        `}</style>

    </>

  );
};



export default JoinForm2;