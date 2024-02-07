import React, { useState } from 'react';
import axios from 'axios';

const JoinForm = () => {

  // 데이터 한번에 담음.
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    repassword: '',
    nickName: ''
  });

  const handleChange = (e) => {
    setFormData({
      [e.target.email]: e.target.value,
      [e.target.password]: e.target.value,
      [e.target.repassword]: e.target.value,
      [e.target.nickName]: e.target.value,
    })
  }


  //따로따로 담음
  // const [email, setEmail] = useState('');
  // const [password, setPassword] = useState('');
  // const [repassword, setRePassword] = useState('');
  // const [nickName, setNickName] = useState('');

  // const handleEmailChange = (e) => {
  //   setEmail(e.target.value);
  // };

  // const handlePasswordChange = (e) => {
  //   setPassword(e.target.value);
  // };

  // const handleRePasswordChange = (e) => {
  //   setRePassword(e.target.value);
  // };

  // const handleNickNameChange = (e) => {
  //   setNickName(e.target.value);
  // };


  const handleJoin = (e) => {
    e.preventDefault();
    // You can add your join logic here using email, password, and nickName states
    console.log('Join button clicked');
    console.log('Form submitted:', formData.email);
    console.log('Form submitted:', formData.nickName + "님 회원가입 시도함");

    // console.log('Form submitted:', email);
    // console.log('Form submitted:', nickName + "님 회원가입 시도함");


    // 방법1)
    // Example: Send form data to the server
    // fetch('/join', {
    //   method: 'POST',
    //   headers: { 
    //     // 서버에게 전송되는 데이터 형식
    //     'Content-Type': 'application/json', 
    //   },
    //   // 데이터 담기
    //   body: JSON.stringify({ // JS객체를 JSON 문자열 형태로 변환
    //     email: formData.email,
    //     password: formData.password,
    //     nickName: formData.nickName 
    //   }) 
    // })
    // .then(response => response.json())
    // .then(data => console.log(data))
    // .catch(error => console.error('Error:', error));

    // 방법2) axios로 비동기 통신 방식
    // try {
    //   const response = await axios.post('/join', {
    //     email: email // assuming email is a variable containing the email data
    //   }, {
    //     headers: {
    //       'Content-Type': 'application/json',
    //     }
    //   });
  
    //   console.log(response.data);
    // } catch (error) {
    //   console.error('Error:', error);
    // }

  };

  return (
    <div>
      <h1>회원가입 페이지</h1>
      <hr />
      <form onSubmit={handleJoin}>
        <label htmlFor="email">이메일 주소 :</label>
        <input type="email" id="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required/> <br />
        <label htmlFor="password">비밀번호 :</label>
        <input type="password" id="password" name="password" placeholder="Password" value={formData.password} onChange={handleChange} required/> <br />
        <label htmlFor="repassword">비밀번호 확인 :</label>
        <input type="password" id="repassword" name="repassword" placeholder="RePassword" value={formData.repassword} onChange={handleChange} required/> <br />
        <label htmlFor="nickName">닉네임 :</label>
        <input type="text" id="nickName" name="nickName" placeholder="NickName" value={formData.nickName} onChange={handleChange} required/> <br />
        <button type="submit">회원가입</button>
      </form>
    </div>
  );

  // return (
  //   <div>
  //     <h1>회원가입 페이지</h1>
  //     <hr />
  //     <form onSubmit={handleJoin}>
  //       <label htmlFor="email">이메일 주소 :</label>
  //       <input type="email" id="email" name="email" placeholder="Email" value={email} onChange={handleEmailChange} required/> <br />
  //       <label htmlFor="password">비밀번호 :</label>
  //       <input type="password" id="password" name="password" placeholder="Password" value={password} onChange={handlePasswordChange} required/> <br />
  //       <label htmlFor="repassword">비밀번호 확인 :</label>
  //       <input type="password" id="repassword" name="repassword" placeholder="RePassword" value={repassword} onChange={handleRePasswordChange} required/> <br />
  //       <label htmlFor="nickName">닉네임 :</label>
  //       <input type="text" id="nickName" name="nickName" placeholder="NickName" value={nickName} onChange={handleNickNameChange} required/> <br />
  //       <button type="submit">회원가입</button>
  //     </form>
  //   </div>
  // );
};

export default JoinForm;