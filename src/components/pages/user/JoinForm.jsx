import React from 'react';
import { useNavigate } from 'react-router-dom';
import KakaoLogin from './KakaoLogin';

const JoinForm = () => {

  const navigate = useNavigate();

  const handleButtonClick = () => {

  navigate("/JoinForm2");

};

  return (
    <>
      <div>
        <h1>회원가입 페이지</h1>
        <hr />
        <div>
          <button className='emailBtn' onClick={handleButtonClick}>
            <img src="/image/join/email.png" alt="이메일 회원가입 버튼"/>
            이메일로 회원가입
          </button>
          <KakaoLogin/>
        </div>
      </div>

      {/* 스타일 정의 */}
      <style jsx="true">{`
          form {
            max-width: 300px;
            margin: auto;
            padding: 20px; /* Add padding to improve spacing on smaller screens */
          }

          // div {
          //   margin-bottom: 20px;
          // }

          label {
            display: block;
            margin-bottom: 5px;
          }

          input {
            width: 100%;
            padding: 8px;
            box-sizing: border-box;
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