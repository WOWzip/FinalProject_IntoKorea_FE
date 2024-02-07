// EditQuestion 컴포넌트
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";

function EditQuestion() {
  const location = useLocation();
  const navigate = useNavigate();
  const seq = new URLSearchParams(location.search).get("seq");
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

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

  const handleSubmit = () => {
    axios.put("/mypage/updateAsk", { seq, title, content })
      .then((response) => {
        console.log("Question updated successfully:", response.data);
        navigate("/QnA");
      })
      .catch((error) => console.error("Error updating question:", error));
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
          <button type="button" className="form-button" onClick={handleSubmit}>수정 완료</button>
        </form>
      </div>
    </>
  );
}

export default EditQuestion;


