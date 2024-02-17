import axios from 'axios';
import React, { useCallback, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ModifyPwd = () => {

  const navigate = useNavigate();

  const email = sessionStorage.getItem("email");
  const [password, setPassword] = useState('');
  const [repassword, setRePassword] = useState('');

  // 유효성 검사 결과 담는 변수
  const [isValidPwd, setIsValidPwd] = useState(false);
  const [isValidRePwd, setIsValidRePwd] = useState(false);

  // 비밀번호 에러 메시지 표시
  const [pwdMsg, setPwdMsg] = useState('');
  const [rePwdMsg, setRePwdMsg]= useState("");

 

  // 전체 유효한 값인지 체크
  const isAllVaild = isValidPwd && isValidRePwd ;

  // < 비밀번호 유효성 검사 >

  // 비밀번호
  const validatePwd = (password) => {
    // 최소 8자리, 숫자, 영문, 특수문자 최소 1개 포함
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{8,}$/;
    return passwordRegex.test(password);
  };

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




  const handlePwdUpdate = async (e) => {
    e.preventDefault();

    // 유효성 검사 성공 시
    if (isAllVaild) {

      // 백앤드와 통신
      // API로 보낼 데이터를 JSON으로 변환
      var sendData = JSON.stringify({ // 백앤드의 객체명과 같아야함.
        "email": email,
        "password": password,
      });
      
      try {
        const response = await axios.post("http://localhost:8081/modifyPwd", sendData, {
          headers: {'Content-Type': 'application/json'}
        });
        console.log(response.data); 
        console.log(response.status);
        const status = response.status;
        if(status === 200){
          alert("비밀번호 변경 성공!!")
          sessionStorage.setItem("password", password);
          navigate("/");
        }


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
          <h1>IntoKorea 비밀번호 변경</h1>
          <hr/>
          
          <form onSubmit={handlePwdUpdate}>
            <div>
              <label htmlFor="password">새 비밀번호 :</label>
              <input type="password" id="password" name="password" placeholder="새 비밀번호" value={password} onChange={handlePasswordChange} /><br />
              <span className={isValidPwd ? 'success' : 'error'}>{pwdMsg}</span>
            </div>
            
            <div>
              <label htmlFor="repassword">새 비밀번호 확인 :</label>
              <input type="password" id="repassword" name="repassword"  placeholder="새 비밀번호 확인" value={repassword} onChange={handleRePasswordChange} /><br /><br />
              <span className={isValidRePwd ? 'success' : 'error'}>{rePwdMsg}</span>
            </div>
            <button type="submit">등록</button>
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
                width: 100%;
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

export default ModifyPwd;