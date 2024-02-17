// 회원 탈퇴

import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const DeleteUser = () => {

  const email = sessionStorage.getItem("email")

  const navigate = useNavigate();
  const [message, setMessage] = useState('');


  // 회원 탈퇴 함수
  const deleteUser = async () => {

    try {
      const response = await axios.post("http://localhost:8081/deleteUser", null, {
      params: {userEmail: email}}
      );

      const existUser =  response.data;
      console.log("삭제할 이메일 존재유무:", existUser);

      if(existUser === false){
        setMessage("유효하지 않은 이메일입니다.");
        navigate("/");
      } 

      // 정상적으로 탈퇴되면 메시지 설정
      alert('회원 탈퇴가 정상적으로 처리되었습니다.');
      sessionStorage.clear(); // 세션 값 지우기
      navigate("/");


    } catch (error) {
      // 에러 처리 로직
      console.error('회원 탈퇴 에러:', error);
      setMessage('회원 탈퇴 중 오류가 발생했습니다.');
    }

    console.log(message)
  };

  useEffect(() => {
    deleteUser();
  }, [])


};

export default DeleteUser;