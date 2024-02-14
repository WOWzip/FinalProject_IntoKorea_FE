

import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import '../../../styles/AskStyles.css';


function Question() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [file, setFile] = useState(null);
  const navigate = useNavigate();

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleContentChange = (e) => {
    setContent(e.target.value);
  };

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  // const handleSubmit = () => {
  //   const formData = new FormData();
  //   formData.append("title", title);
  //   formData.append("content", content);
  //   formData.append("file", file);

  //   axios.post("/mypage/submitQuestion", formData, {
  //     headers: {
  //       "Content-Type": "multipart/form-data",
  //     },
  //   })
  //     .then((response) => {
  //       console.log("Question submitted successfully:", response.data);
  //       navigate("/QnA");
  //     })
  //     .catch((error) => console.error("Error submitting question:", error));
  // };

  // const handleSubmit = (e) => {
  //   e.preventDefault(); // 폼 제출 방지
  
  //   const formData = new FormData();
  //   formData.append("title", title);
  //   formData.append("content", content);
  //   formData.append("file", file);
  
  //   axios.post("/mypage/submitQuestion", formData, {
  //     headers: {
  //       "Content-Type": "multipart/form-data",
  //     },
  //   })
  //     .then((response) => {
  //       console.log("Question submitted successfully:", response.data);
  //       navigate("/QnA");
  //     })
  //     .catch((error) => console.error("Error submitting question:", error));
  // };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("title", title);
    formData.append("content", content);
    formData.append("file", file);
  
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
    <>
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
    </>
  );
}

export default Question;
