/* 아이디 찾기(아이디 존재여부 확인) */
// 이메일 이용. 어떤(일반 및 소셜) 계정인지 안내해주기.

import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const FindId = () =>  {

    const [email, setEmail] = useState('');
    const [msg, setMsg] = useState('');

    const [isValidEmail, setIsValidEmail] = useState(true);
    const navigate = useNavigate();

    const handleEmailChange = async(e) => {
        setEmail(e.target.value);
      };


    const handleForgotPassword = async(e) => {
        e.preventDefault();

        // 백앤드와 통신 
        var sendData = JSON.stringify({ // 백앤드의 객체명과 같아야함.
            "email": email
        });

  
        // 백앤드 컨트롤러로 직접 처리
        try {
            const response = await axios.post("http://localhost:8081/find/userEmail", sendData, {
            headers: {'Content-Type': 'application/json; charset=UTF-8'}
            });
            const emailCheck = response.data;
            console.log("emailCheck: " , emailCheck);

            // 존재하는 이메일이면, 메일 발송
            if(emailCheck === 1 || emailCheck === 2){

                try {
                    await axios.post("http://localhost:8081/find/mailConfirmId", sendData, {
                    headers: {'Content-Type': 'application/json; charset=UTF-8'}
                    });
                    

                    alert("입력하신 이메일로 아이디 관련 안내 메시지가 발송되었습니다.");
                    navigate("/");


                } catch (error) {
                    console.error('Error:', error);
                }

            } else if(emailCheck === 0){ // 존재하지 않는 이메일이면, 에러 메시지 띄우기
                setMsg("존재하지 않는 이메일입니다.");
                setIsValidEmail(false);
            } 
        } catch (error) {
            console.error('Error:', error);
        }

    } 

      
    return(

        <>
            <div>
                <h1>IntoKorea 아이디 찾기</h1>
                <hr/>
                <p>입력한 정보로 가입한 아이디 계정 안내 메시지가 전송됩니다.</p>
                <form onSubmit={handleForgotPassword}>
                    <label>Email:</label>
                    <input type="email" value={email} onChange={handleEmailChange} placeholder="가입한 Email을 입력해주세요." required/><br/>
                    {!isValidEmail && <span>{msg}</span>} 
                    <br/>
                    <button type="submit">메시지 전송</button>
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

}

export default FindId;