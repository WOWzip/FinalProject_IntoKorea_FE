


import React, { useState, useEffect } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";
import '../../../styles/detail.css';
import '../../../styles/qna.css';
import Textinput from "./Textinput";

function QnAdetail() {
  const location = useLocation();
  const keyword = getSeq(location);
  const [question, setQuestion] = useState({
    seq: '',
    title: '',
    content: '',
    fileName: '' 
  });

  // 댓글
  const [comments, setComments] = useState([]);
  const [comment, setComment] = useState("");

  useEffect(() => {
    axios.get(`/mypage/comments?askSeq=${question.seq}`)
      .then(res => {
        console.log("백엔드에서 받아온 댓글 데이터:", res.data);
        setComments(res.data);
      })
      .catch(error => console.log(error));
  }, [question.seq]);

  useEffect(() => {
    axios.get("/mypage/detail", {
      params: {
        seq: parseInt(keyword)
      }
    })
    .then(res => {
      setQuestion(res.data.ask1);
      setComments(res.data.comments || []);
    })
    .catch(error => console.log(error));
  }, [keyword]);

  const handleCommentChange = (e) => {
    setComment(e.target.value);
  };

  //댓글
  const submitComment = () => {
    axios.post("/mypage/comments/add", {
      ask: { seq: question.seq },
      content: comment
    })
    .then(res => {
      console.log("댓글 저장 성공");
      setComments([...comments, res.data]); // 새로운 댓글 추가
      setComment(""); // 댓글 입력값 초기화
    })
    .catch(error => console.error("댓글 저장 실패:", error));
  };

  //댓글 삭제
  const deleteComment = (commentSeq) => {
    axios.delete(`/mypage/comments/delete/${commentSeq}`)
        .then(res => {
            console.log("댓글 삭제 성공");
            setComments(comments.filter(c => c.commentSeq  !== commentSeq));
        })
        .catch(error => console.error("댓글 삭제 실패:", error));
  };


  // 그냥 안댐 에러조차 안뜸
  // // 파일 다운
  // const downloadFile = () => {
  //   if (question.fileName) {

  //     const fileURL = `/files/${question.fileName}`;
      
  //     axios({
  //       url: fileURL,
  //       method: 'GET',
  //       responseType: 'blob',
  //     }).then((response) => {
  //       const url = window.URL.createObjectURL(new Blob([response.data]));

  //       const link = document.createElement('a');
  //       link.href = url;
  //       link.setAttribute('download', question.fileName); // 파일 이름 사용
  //       document.body.appendChild(link);
  //       link.click();

  //       document.body.removeChild(link);
  //     }).catch(error => console.error("파일 다운로드 실패:", error)); // 에러 처리
  //   }
  // };

  // // 경로 에러 c: 는안댐
  // // 파일 다운로드 함수
  // const downloadFile = async (event) => {
  //   event.preventDefault();
  //   const downloadUrl = `../../../${question.fileName}`;
    
  //   try {
  //     const result = await axios.get(downloadUrl, { responseType: 'blob' });
  //     const blob = new Blob([result.data], { type: result.headers['content-type'] });

  //     const link = document.createElement('a');
  //     link.href = window.URL.createObjectURL(blob);

  //     // 파일 이름과 확장자 설정
  //     link.setAttribute("download", `${question.fileName}`);

  //     link.click();
  //   } catch (error) {
  //     console.error("파일 다운로드 실패:", error);
  //   }
  // };

// 그냥 다운만됨
// // 파일 다운로드 함수
// const downloadFile = async () => {
//   const downloadUrl = `/mypage/download/${question.seq}`;

//   try {
//     const result = await axios.get(downloadUrl, { responseType: 'blob' });
//     const blob = new Blob([result.data], { type: result.headers['content-type'] });

//     const url = window.URL.createObjectURL(blob);
//     const link = document.createElement('a');
//     link.href = url;

//     // 파일 이름과 확장자 설정
//     link.setAttribute("download", `${question.fileName}`);

//     document.body.appendChild(link);
//     link.click();
//     document.body.removeChild(link);
//   } catch (error) {
//     console.error("파일 다운로드 실패:", error);
//   }
// };

// 파일 다운로드 함수
const downloadFile = async () => {
  const downloadUrl = `/mypage/download/${question.seq}`;

  try {
    const result = await axios.get(downloadUrl, { responseType: 'blob' });
    const blob = new Blob([result.data], { type: result.headers['content-type'] });

    const url = window.URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;

    // 파일 이름과 확장자 설정
    link.setAttribute("download", `${question.fileName}`);

    // 파일 저장 다이얼로그 띄우기
    link.click();
  } catch (error) {
    console.error("파일 다운로드 실패:", error);
  }
};


return (
  <div className="form">
    <h1>상세글</h1>
    <div>
      <strong className="title">{question.title}</strong><br />
    </div>
    <div>
      <hr/>
      <p className="content">{question.content}</p>
      {question.fileName !== null && question.fileName !== 'null' && <button onClick={downloadFile}>첨부파일 다운</button>}
      <hr/>
      <span className="sub">작성자</span> 
      <span className="separator"></span>
      <span className="sub">{question.AskDate}</span>
    </div>
    <br/>
    <div>
      <Textinput height={100} value={comment} onChange={handleCommentChange} />
      <button onClick={submitComment}>등록</button>
    </div>
    <div>
      <h2>댓글</h2>
      <div>
        {comments.map((c, index) => (
          <div className="comment" key={index}>
            <strong>{c.content}</strong>
            <br/>
            <br/>
            <span>관리자</span>
            <span className="separator"></span>
            <span>{c.commentDate}</span>
            <span className="separator"></span>
            <button onClick={() => deleteComment(c.commentSeq)}>삭제</button>
            <hr/>
          </div>
        ))}
      </div>
    </div>
  </div>
);
}

function getSeq(location) {
  const searchString = location.search;
  const params = new URLSearchParams(searchString);
  const keyword = params.get('seq');
  return keyword;
}

export default QnAdetail;


