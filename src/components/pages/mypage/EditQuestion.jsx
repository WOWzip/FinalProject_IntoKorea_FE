
// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { useLocation, useNavigate } from "react-router-dom";

// function EditQuestion() {
//   const location = useLocation();
//   const navigate = useNavigate();
//   const seq = new URLSearchParams(location.search).get("seq");
//   const [title, setTitle] = useState("");
//   const [content, setContent] = useState("");
//   const [file, setFile] = useState(null);

//   useEffect(() => {
//     axios.get(`/mypage/getAsk/${seq}`)
//       .then((response) => {
//         const questionData = response.data;
//         setTitle(questionData.title);
//         setContent(questionData.content);
//       })
//       .catch((error) => console.error("Error fetching question data:", error));
//   }, [seq]);

//   const handleTitleChange = (e) => {
//     setTitle(e.target.value);
//   };

//   const handleContentChange = (e) => {
//     setContent(e.target.value);
//   };

//   const handleFileChange = (e) => {
//     setFile(e.target.value);
//   };

//   const handleSubmit = () => {
//     axios.put("/mypage/updateAsk", { seq, title, content,file })
//       .then((response) => {
//         console.log("Question updated successfully:", response.data);
//         navigate("/QnA");
//       })
//       .catch((error) => console.error("Error updating question:", error));
//   };

//   return (
//     <>
//       <h2 className="ask-title">질문 수정</h2>
//       <div className="ask-container">
//         <form className="ask-form">
//           <div className="form-group">
//             <label className="form-label">제목 <span className="must">(필수)</span></label>
//             <input
//               type="text"
//               className="form-input"
//               value={title}
//               onChange={handleTitleChange}
//             />
//           </div>
//           <br />
//           <div className="form-group">
//             <label className="form-label">내용 <span className="must">(필수)</span></label>
//             <textarea
//               className="form-textarea"
//               value={content}
//               onChange={handleContentChange}
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
//           <button type="button" className="form-button" onClick={handleSubmit}>수정 완료</button>
//         </form>
//       </div>
//     </>
//   );
// }

// export default EditQuestion;

import React, { useState, useEffect } from "react";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";
import '../../../styles/AskStyles.css';

function EditQuestion() {
  const location = useLocation();
  const navigate = useNavigate();
  const params = new URLSearchParams(location.search);
  const seq = params.get("seq");
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [file, setFile] = useState(null);
  const email = sessionStorage.getItem("email"); // 현재 로그인된 사용자의 이메일
  const nickName = sessionStorage.getItem("nickName");


  useEffect(() => {
    axios.get(`/mypage/getAsk/${seq}`)
      .then((response) => {
        const questionData = response.data;
        setTitle(questionData.title);
        setContent(questionData.content);
      })
      .catch((error) => console.error("Error fetching question data:", error));
  }, [seq]);

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleContentChange = (e) => {
    setContent(e.target.value);
  };

  const handleFileChange = (e) => {
    setFile(e.target.files[0]); // 파일 선택 시 첫 번째 파일만 사용
  };

  const handleSubmit = () => {
    const formData = new FormData();
    formData.append("file", file); // 파일 추가 부분 수정
    formData.append("seq", seq);
    formData.append("title", title);
    formData.append("content", content);
    formData.append("email", email); // 현재 로그인된 사용자의 이메일 추가
    formData.append("nickName", nickName);

    axios.put(`/mypage/updateAsk`, formData, {
        headers: {
            "Content-Type": "multipart/form-data",
        },
    })
    .then((response) => {
        alert("수정이 완료되었습니다.")
        console.log("수정 성공:", response.data);
        navigate("/QnA");
    })
    .catch((error) => console.error("수정 실패:", error));
};


  return (
    <>
      <h2 className="ask-title">질문 수정</h2>
      <div className="ask-container">
        <form className="ask-form">
          <div className="form-group">
            <label className="form-label">제목 <span className="must">(필수)</span></label>
            <input
              type="text"
              className="form-input"
              value={title}
              onChange={handleTitleChange}
            />
          </div>
          <br />
          <div className="form-group">
            <label className="form-label">내용 <span className="must">(필수)</span></label>
            <textarea
              className="form-textarea"
              value={content}
              onChange={handleContentChange}
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
          <button type="button" className="form-button" onClick={handleSubmit}>수정 완료</button>
        </form>
      </div>
    </>
  );
}

export default EditQuestion;