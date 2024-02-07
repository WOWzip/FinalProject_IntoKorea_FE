import React, { useState } from "react";
import { format } from "date-fns";
import moment from 'moment'; // moment 추가
import axios from "axios";

const Traveldiary = ({ selectedDate }) => {
  const [title, setTitle] = useState(""); // 제목을 빈 문자열로 초기화
  const [content, setContent] = useState(""); // 내용을 빈 문자열로 초기화
  const [isEditing, setIsEditing] = useState(false);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    axios.post("/mypage/saveDiary", {
      Dtitle: title,
      Dcontent: content,
    })
      .then((response) => {
        console.log("Diary saved successfully:", response.data);
        setIsEditing(false);
      })
      .catch((error) => console.error("Error saving diary:", error));
  };

  // moment 객체를 문자열로 변환
  const formattedSelectedDate = selectedDate && moment(selectedDate).format("YYYY년 MM월 DD일");

  return (
    <div className="traveldiary">
      <div className="selected-date">
        {formattedSelectedDate && (
          <p>
            {" "}
            {formattedSelectedDate}
          </p>
        )}
      </div>
      {isEditing ? (
        <div>
          <label>제목</label>
          <input
            type="text"
            placeholder="다이어리 제목"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <br />
          <br />
          <label>내용</label>
          <textarea
            placeholder="다이어리 내용"
            id="content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
          <br />
          <button onClick={handleSave}>저장</button>
        </div>
      ) : (
        <div>
          <h2>
            <label>제목</label>
            <br />
            {title}
          </h2>
          <p>
            <label>내용 </label>
            <br />
            {content}
          </p>
          <button onClick={handleEdit}>추가</button>
        </div>
      )}
    </div>
  );
};

export default Traveldiary;