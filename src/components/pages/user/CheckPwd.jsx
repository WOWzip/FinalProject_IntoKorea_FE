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
            alert("탈퇴경로가 잘못되었습니다. 소셜 계정 탈퇴 페이지로 이동합니다.")
            navigate("/CheckCode");

          } else if(check ==="21"){
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
    <div className='checkPwd_div'>

      <form className='checkPwd_form' onSubmit={handleCheckPwd}>
        <p className='checkPwd_p'>IntoKorea 본인확인 </p>
        <p className='checkPwd_p2'>본인 확인을 위해 비밀번호를 입력해 주세요.</p>
        <input
          className='checkPwd_input'
          type="password"
          id="password"
          name="password"
          value={password}
          placeholder="비밀번호 입력" 
          onChange={handlePwdChange}
          required
        />

        <button className="submitBtn" type="submit">확인</button>
        <button className="cancelBtn" type="button" onClick={() => window.location.href = '/'}>취소</button>
      </form>
    </div>


    {/* 스타일 정의 */}
    <style jsx="true">{`

        .checkPwd_div {
          margin-top: 5%;
          margin-bottom: 5%;
        }

        .checkPwd_form {
          max-width: 350px;
          margin: auto;
          padding: 20px; /* Add padding to improve spacing on smaller screens */
          border: 1px solid #000;
        }

        .checkPwd_p {
          font-size: 30px;
          margin-bottom: 20px;
          text-align : center;
        }

        .checkPwd_p2 {
          margin-top: 30px;
          margin-bottom: 30px;
          text-align : center;
        }

        .checkPwd_input {
            width: 100%;
            padding: 8px;
            box-sizing: border-box;
        }
        
        .submitBtn {
          width: 100%;
          background-color: #008000;
          margin: 10px 0 10px 0 ;
          padding: 8px;
          color: white;
          border: none;
          cursor: pointer;
        }

        .submitBtn:hover {
          background-color: #8fbc8f;
        }



        .cancelBtn {
          width: 100%;
          background-color: #b22222;
          padding: 8px;
          color: white;
          border: none;
          cursor: pointer;
        }


        .cancelBtn:hover {
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

export default CheckPwd;