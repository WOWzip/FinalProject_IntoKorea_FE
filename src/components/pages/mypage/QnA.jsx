
import { Link, useNavigate } from "react-router-dom";
import React, { useState, useEffect } from "react";
import axios from "axios";
import '../../../styles/qna.css';
import Pagination from "../fragnents/Pagination";
import MyPageSidebar from "../../MyPageSidebar";

function QnA() {
  const [questions, setQuestions] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(3);  // 한 페이지에 표시될 질문 수
  const navigate = useNavigate();
  const [selectedSeq, setSelectedSeq] = useState(null);

  useEffect(() => {
    axios.get("/mypage/getAllAsks")
      .then((response) => {
        // seq를 기준으로 오름차순으로 정렬
        console.log("Server Response:", response.data);
        const sortedQuestions = response.data.sort((a, b) => a.seq - b.seq);
        setQuestions(sortedQuestions);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const handleDelete = (seq) => {
    axios.delete(`/mypage/deleteAsk/${seq}`)
      .then(() => {
        setQuestions((prevQuestions) => prevQuestions.filter((question) => question.seq !== seq));
      })
      .catch((error) => console.error("삭제 에러:", error));
  };

  const handleEdit = (seq) => {
    navigate(`/EditQuestion?seq=${seq}`);
  };

  // 현재 페이지의 질문 목록 계산
  const indexOfLast = currentPage * postsPerPage;
  const indexOfFirst = indexOfLast - postsPerPage;
  const currentPosts = questions.slice(indexOfFirst, indexOfLast);

  // 페이지 변경 이벤트 핸들러
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div style={{ display: 'flex' }}>
      <MyPageSidebar />
      <div className="qna-page-content">
        <h1 className="qa">Q&A</h1>
        <ul className="form">
          <button className="askbutton">
            <Link to="/Question" className="link">
              질문등록
            </Link>
          </button>
          {currentPosts.map((question) => (
            <div className="textarea" key={question.seq}>
              <Link
                to={`/QnAdetail?seq=${question.seq}`}
                className={`QAtitle ${question.seq === selectedSeq ? 'active' : ''}`}
                onClick={() => setSelectedSeq(question.seq)}
              >
                <strong className="QAtitle">{question.title}</strong>
              </Link>
              <br />
              <div className="QAinfo">
                <span className="line">작성자</span>
                <span className="separator"></span>
                <span className="line">{question.AskDate}</span>
                <span className="separator"></span>
                <span className="ans">답변완료</span>
                <span>
                  <button
                    className="deletebutton"
                    onClick={() => handleDelete(question.seq)}
                  >
                    삭제
                  </button>
                </span>
                <br />
                <span>
                  <button
                    className="editbutton"
                    onClick={() => handleEdit(question.seq)}
                  >
                    수정
                  </button>
                </span>
              </div>
            </div>
          ))}
          <div className="pagination">
            <Pagination
              postsPerPage={postsPerPage}
              totalPosts={questions.length}
              paginate={paginate}
            />
          </div>
        </ul>
      </div>
    </div>
  );
}

export default QnA;