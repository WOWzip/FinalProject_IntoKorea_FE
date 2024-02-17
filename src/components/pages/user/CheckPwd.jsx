import axios from 'axios';
import React, { useCallback, useState } from 'react';
import { useNavigate } from 'react-router-dom';



const CheckPwd = () => {
  
  const email = sessionStorage.getItem("email");
  const provider = sessionStorage.getItem("provider");

  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  const params = new URLSearchParams(window.location.search);
  let value = params.get("value");
  

  const handlePwdChange = useCallback( async (e) => {
      setPassword(e.target.value);
  },[])


  const handleCheckPwd = async (e) => {
    e.preventDefault();
  

    // 백앤드와 통신 
    var sendData = JSON.stringify({ // 백앤드의 객체명과 같아야함.
      "email": email,
      "password": password
    });


    // 백앤드 컨트롤러로 직접 처리
    try {
      const response = await axios.post("http://localhost:8081/checkPwd", sendData, {
        headers: {'Content-Type': 'application/json; charset=UTF-8'}
      });
      
      const data = response.data;
      const msg = response.data.msg;
      const check = response.data.check;
      console.log(data);
      console.log(msg);
      console.log(check);

      // 비밀번호 확인 성공시
      if(check !=="0"){
        
        
        if(value === "modify"){
          // 비번 수정페이지

          // 소셜 로그인이면 소셜계정에서 바꾸도록 하기
          if(check ==="1"){
            alert("소셜로 가입된 계정입니다. 해당 소셜에서 변경해주세요.");
            navigate("/");
          }

          if(check ==="21"){
            alert("비밀번호를 확인해주세요");
          }

          if(check ==="22"){
            sessionStorage.setItem("checkPwd", true);
            navigate("/ModifyPwd");
          } 

          
          

        } else if(value === "delete"){
          // 계정 삭제페이지

          if(check === "1"){
            alert("소셜로 가입된 계정입니다. 탈퇴경로가 잘못되었습니다.")
            navigate("/CheckCode");
          }

          if(check ==="21"){
            alert("비밀번호를 확인해주세요");
          }
          
          else {
            sessionStorage.setItem("checkPwd", true);
            navigate("/DeleteUser");
          }
          
        }
		    
      }
      else {
        alert("Email을 확인해주세요.")
      }
      

    } catch (error) {
      console.error('Error:', error);
    }

  };

  return (

  <>
    <div>
      <h1>IntoKorea 비밀번호 확인</h1>
      <h2>본인 확인을 위해 비밀번호를 입력해 주세요</h2>
      <hr/>
      
      <form onSubmit={handleCheckPwd}>
          <label htmlFor="password">비밀번호 :</label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={handlePwdChange}
            required
          />

          <button type="submit">확인</button>
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

        span {
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

export default CheckPwd;