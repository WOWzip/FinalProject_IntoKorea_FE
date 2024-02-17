import axios from 'axios';
import React, { useCallback, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ModifyNickName = () => {

  const navigate = useNavigate();

  const email = sessionStorage.getItem("email");
  const [nickName, setNickname] = useState('');

  // 유효성 검사 결과 담는 변수
  const [isValidNickName, setIsValidNickName] = useState(false);

  // 닉네임 에러 메시지 표시
  const [nicknameMsg, setNicknameMsg] = useState("");

  // 닉네임 중복 확인
  const [checkNickName, setCheckNickName] = useState(false);

  // 전체 유효한 값인지 체크
  const isAllVaild = isValidNickName && checkNickName ;


  
  // < 닉네임 유효성 검사 >
  const validateNickname = (nickname) => {
    //글자수만 제한 (2~20)
    const nickNameRegex = /^[\w\Wㄱ-ㅎㅏ-ㅣ가-힣]{2,20}$/;
    return nickNameRegex.test(nickname);
  }



  // 닉네임 유효성 체크
  const handleNickNameChange = useCallback( (e) => {
    const currNickName = e.target.value;
    setNickname(currNickName);
    setIsValidNickName(validateNickname(currNickName));

    if (!nickName || !validateNickname(currNickName)) {
      setNicknameMsg('닉네임은 2글자 이상 20글자 이하로 입력해주세요.');
    } else {
      setNicknameMsg('올바른 닉네임 형식입니다.');
    }
  }, [nickName]);





  // 닉네임 중복 체크
  const handleNickNameBlur = useCallback( async () => {
    
    // 백앤드와 통신
    // API로 보낼 데이터를 JSON으로 변환
    var sendData = JSON.stringify({ // 백앤드의 객체명과 같아야함.
      "nickName": nickName
    });
    if(isValidNickName){
      try {
        const response = await axios.post("http://localhost:8081/check/existNickName", sendData, {
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


}, [nickName, isValidNickName]);




  
  const handleNickNameUpdate = async (e) => {
    e.preventDefault();

    
    // 백앤드와 통신
    // API로 보낼 데이터를 JSON으로 변환
    var sendData = JSON.stringify({ // 백앤드의 객체명과 같아야함.
      "email": email,
      "nickName": nickName
    });

    

    console.log('email:', email);
    console.log('nickName:', nickName);

    


    // 유효성 검사 성공 시
    if (isAllVaild) {

      try {
        const response = await axios.post("http://localhost:8081/modifyNickName", sendData, {
          headers: {'Content-Type': 'application/json'}
        });
        console.log(response.data); 
        console.log(response.status);
        const status = response.status;
        if(status === 200){
          alert("닉네임 변경 성공!!")
          sessionStorage.setItem("nickName", nickName);
          navigate("/");
        }


      } catch (error) {
        console.error('Error:', error);
      }

      // 유효성 검사 실패 시
    } else {
        alert("닉네임 변경 실패!! 닉네임을 다시 입력해주세요.")
      console.log('Form is invalid. Please fix the errors.');
    }

  };

  return (

      <>
        <div>
          <h1>IntoKorea 닉네임 변경</h1>
          <hr/>
          
          <form onSubmit={handleNickNameUpdate}>
            <div>
              <label htmlFor="nickName">새 닉네임 :</label>
              <input type="text" id="nickName" name="nickName" placeholder="새 닉네임" value={nickName} onChange={handleNickNameChange} onBlur={handleNickNameBlur} /><br />
              <span className={isValidNickName && checkNickName ? 'success' : 'error'}>{nicknameMsg}</span>
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

export default ModifyNickName;