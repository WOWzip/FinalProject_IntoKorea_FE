


import React, { useState, useEffect } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";
import '../../../styles/detail.css';
import '../../../styles/qna.css';
import Textinput from "./Textinput";
import styled from "styled-components";
import MyPageSidebar from "./ui/MyPageSidebar";

const PageContainer = styled.div`
display: flex;
`;

const MainContent = styled.div`
margin: auto;
`;

function QnAdetail() {
  const nickName = sessionStorage.getItem("nickName");
  const email = sessionStorage.getItem("email"); // 이메일 추가
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
      content: comment,
      nickName: nickName, // 닉네임 추가
      email: email // 이메일 추가
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
  <PageContainer>
  <MyPageSidebar />
  <MainContent>  
  <div className="qaform">
    <span><img className="commentImage" src="/image/qna.png" alt="qna" /></span>
    <div>
      <strong className="qadetailTitle">{question.title}</strong><br />
      <span className="QAsub">{question.nickName} 님</span> 
      <span className="separator"></span>
      <span className="QAsub">{question.AskDate}</span>
      <span className="separator"></span>
      <span>{question.fileName !== null && question.fileName !== 'null' && <button className="qnadetailB" onClick={downloadFile}>첨부파일 다운</button>}</span>
    </div>
    <p className="separatorwidth"></p>
    <div>
      <hr/>
      <p className="qadetailContent">{question.content}</p>
    </div>
    <br/>
    <p className="separatorwidth"></p>
    <div>
    <span style={{ display: "inline-block" }}><img className="commentImage" src="/image/comment.png" alt="comment" /></span>
    <span style={{ display: "inline-block" }}><h2>댓글</h2></span>
    </div>
    <div>
      <Textinput height={100} value={comment} onChange={handleCommentChange} placeholder="댓글을 작성하세요"/>
      <button className="qnadetailB" onClick={submitComment}>등록</button>
    </div>
    <div>
      <br/>
      <div>
        {comments.map((c, index) => (
          <div className="comment" key={index}>
            <strong>{c.content}</strong>
            <br/>
            <br/>
            <span>{c.nickName}</span>
            <span className="separator"></span>
            <span>{c.commentDate}</span>
            <span className="separator"></span>
            <button className="qnadetailB" onClick={() => deleteComment(c.commentSeq)}>삭제</button>
            <hr/>
          </div>
        ))}
      </div>
    </div>
  </div>
  </MainContent> 
  </PageContainer>
);
}

function getSeq(location) {
  const searchString = location.search;
  const params = new URLSearchParams(searchString);
  const keyword = params.get('seq');
  return keyword;
}

export default QnAdetail;
