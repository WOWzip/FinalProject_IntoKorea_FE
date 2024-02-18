

// import React, { useState } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";
// import '../../../styles/AskStyles.css';


// function Question() {
//   const [title, setTitle] = useState("");
//   const [content, setContent] = useState("");
//   const [file, setFile] = useState(null);
//   const navigate = useNavigate();

//   const handleTitleChange = (e) => {
//     setTitle(e.target.value);
//   };

//   const handleContentChange = (e) => {
//     setContent(e.target.value);
//   };

//   const handleFileChange = (e) => {
//     setFile(e.target.files[0]);
//   };


//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const formData = new FormData();
//     formData.append("title", title);
//     formData.append("content", content);
//     formData.append("file", file);
  
//     try {
//       const response = await axios.post("/mypage/submitQuestion", formData, {
//         headers: {
//           "Content-Type": "multipart/form-data",
//         },
//       });
//       alert("질문이 등록되었습니다.")
//       console.log("Question submitted successfully:", response.data);
//       navigate("/QnA");
//     } catch (error) {
//       console.error("Error submitting question:", error);
//     }
//   };
//   return (
//     <>
//       <h2 className="ask-title">질문 등록</h2>
//       <div className="ask-container">
//         <form className="ask-form" onSubmit={handleSubmit}>
//           <div className="form-group">
//             <label className="form-label">제목 <span className="must">(필수)</span></label>
//             <input
//               type="text"
//               className="form-input"
//               id="title"
//               value={title}
//               onChange={handleTitleChange}
//               required
//             />
//           </div>
//           <br />
//           <div className="form-group">
//             <label className="form-label">내용 <span className="must">(필수)</span></label>
//             <textarea
//               id="content"
//               className="form-textarea"
//               value={content}
//               onChange={handleContentChange}
//               required
//             />
//           </div>
//           <div className="form-group">
//             <label className="form-label">첨부 파일</label>
//             <input
//               type="file"
//               accept=".pdf, .doc, .docx, .jpg, .jpeg, .png"
//               onChange={handleFileChange}
//             />
//           </div>
//           <button type="submit" className="form-button">등록</button>
//         </form>
//       </div>
//     </>
//   );
// }

// export default Question;










// 



import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import '../../../styles/AskStyles.css';
import MyPageSidebar from "./ui/MyPageSidebar";
import styled from "styled-components";

const PageContainer = styled.div`
  display: flex;
`;

const MainContent = styled.div`
  margin: auto;
`;


function Question() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [file, setFile] = useState(null);
  const navigate = useNavigate();
  const email = sessionStorage.getItem("email"); // 현재 로그인된 사용자의 이메일
  const nickName = sessionStorage.getItem("nickName");

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleContentChange = (e) => {
    setContent(e.target.value);
  };

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("title", title);
    formData.append("content", content);
    formData.append("file", file);
    formData.append("email", email); // 현재 로그인된 사용자의 이메일 추가
    formData.append("nickName", nickName);
    
  
    try {
      const response = await axios.post("/mypage/submitQuestion", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      alert("질문이 등록되었습니다.")
      console.log("Question submitted successfully:", response.data);
      navigate("/QnA");
    } catch (error) {
      console.error("Error submitting question:", error);
    }
  };

  return (
    <PageContainer>
    <MyPageSidebar />
    <MainContent>
      <h2 className="ask-title">질문 등록</h2>
      <div className="ask-container">
        <form className="ask-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label className="form-label">제목 <span className="must">(필수)</span></label>
            <input
              type="text"
              className="form-input"
              id="title"
              value={title}
              onChange={handleTitleChange}
              required
            />
          </div>
          <br />
          <div className="form-group">
            <label className="form-label">내용 <span className="must">(필수)</span></label>
            <textarea
              id="content"
              className="form-textarea"
              value={content}
              onChange={handleContentChange}
              required
            />
          </div>
          <div className="form-group">
            <label className="form-label">첨부 파일</label>
            <input
              type="file"
              accept=".pdf, .doc, .docx, .jpg, .jpeg, .png"
              onChange={handleFileChange}
            />
          </div>
          <button type="submit" className="form-button">등록</button>
        </form>
      </div>
      </MainContent>
    </PageContainer>
  );
}

export default Question;
