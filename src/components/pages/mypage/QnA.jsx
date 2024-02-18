



import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import '../../../styles/qna.css';
import MyPageSidebar from "./ui/MyPageSidebar";
import styled from "styled-components";
import Pagination from "react-js-pagination";


const PageContainer = styled.div`
  display: flex;
`;

const MainContent = styled.div`
  margin: auto;
`;

const PaginationBox = styled.div`
    .pagination { display: flex; justify-content: center; margin-top: 15px;}
    ul { list-style: none; padding: 0; }
    ul.pagination li {
        display: inline-block;
        width: 30px;
        height: 30px;
        border: 1px solid #e2e2e2;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 1rem; 
    }
    ul.pagination li:first-child{ border-radius: 5px 0 0 5px; }
    ul.pagination li:last-child{ border-radius: 0 5px 5px 0; }
    ul.pagination li a { text-decoration: none; color: #337ab7; font-size: 1rem; }
    ul.pagination li.active a { color: white; }
    ul.pagination li.active { background-color: #337ab7; }
    ul.pagination li a:hover,
    ul.pagination li a.active { color: blue; }
`


function QnA() {
  const [questions, setQuestions] = useState([]);
  const navigate = useNavigate();
  const [selectedSeq, setSelectedSeq] = useState(null);
  
  const email = sessionStorage.getItem("email"); // 현재 로그인된 사용자의 이메일

  const [page, setPage] = useState(1);
  const [totalItems, setTotalItems] = useState(0);
  const itemsPerPage = 3; // 페이지당 보여줄 아이템 수

  useEffect(() => {
    if (email === "manager@ma.com") {
      axios.get("/mypage/getAllAsks")
        .then((response) => {
          console.log("Server Response:", response.data);
          const sortedQuestions = response.data.sort((a, b) => a.seq - b.seq);
          setQuestions(sortedQuestions);
          setTotalItems(sortedQuestions.length);
        })
        .catch((error) => console.error("Error fetching data:", error));
    } else {
      axios.get("/mypage/getAllAsks")
        .then((response) => {
          console.log("Server Response:", response.data);
          const sortedQuestions = response.data.sort((a, b) => a.seq - b.seq);
          const filteredQuestions = sortedQuestions.filter(question => question.email === email);
          setQuestions(filteredQuestions);
          setTotalItems(filteredQuestions.length);
        })
        .catch((error) => console.error("Error fetching data:", error));
    }
  }, [email]);


  const handleDelete = (seq) => {
    // 사용자에게 삭제 여부를 묻는 경고창 표시
    const confirmDelete = window.confirm("정말로 삭제하시겠습니까?");
  
    // 사용자가 확인을 선택한 경우에만 삭제 요청 보내기
    if (confirmDelete) {
      axios.delete(`/mypage/deleteAsk/${seq}`)
        .then(() => {
          setQuestions((prevQuestions) => prevQuestions.filter((question) => question.seq !== seq));
          setTotalItems(totalItems - 1);
        })
        .catch((error) => console.error("삭제 에러:", error));
    }
  };

  const handleEdit = (seq) => {
    navigate(`/EditQuestion?seq=${seq}`);
  };

  const handlePageChange = (page) => {
    setPage(page);
  };

  const markAsAnswered = (seq) => {
    // 질문의 상태를 답변 완료로 변경하는 API 호출
    axios.post(`/mypage/submitAnswer?seq=${seq}`)
      .then(() => {
        // 질문 목록 다시 불러오기
        axios.get("/mypage/getAllAsks")
          .then((response) => {
            const sortedQuestions = response.data.sort((a, b) => a.seq - b.seq);
            setQuestions(sortedQuestions);
            setTotalItems(sortedQuestions.length);
          })
          .catch((error) => console.error("Error fetching data:", error));
      })
      .catch((error) => console.error("답변 완료 처리 에러:", error));
  };

  const indexOfLastItem = page * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = questions.slice(indexOfFirstItem, indexOfLastItem);

  return (
    <PageContainer>
      <MyPageSidebar />
      <MainContent>
        <img className="qnaimage" src="/image/qna.png" alt="qna" />
        {questions.length === 0 ? (
          <div>
            <p>질문을 등록해주세요!</p>
            <br/>
            <button className="askbutton">
            <Link to="/Question" className="link">
              질문등록
            </Link>
          </button>
          </div>
        ) : (
          <>
        <ul className="form">
          <button className="askbutton">
            <Link to="/Question" className="link">
              질문등록
            </Link>
          </button>
          {currentItems.map((question) => (
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
                <span className="line">{question.nickName} 님</span>
                <span className="separator"></span>
                <span className="line">{question.AskDate}</span>
                <span className="separator"></span>
                <span className="ans" style={{ color: question.answered ? 'green' : 'red' }}>{question.ready}</span>
                {email === "manager@ma.com" && !question.answered && (
                  <button
                    className="answerbutton"
                    onClick={() => markAsAnswered(question.seq)}
                  >
                    답변 완료
                  </button>
                )}
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
        </ul>
        <br/>
        <PaginationBox>
          <Pagination
            activePage={page}
            itemsCountPerPage={itemsPerPage}
            totalItemsCount={totalItems}
            pageRangeDisplayed={5}
            onChange={handlePageChange}
          />
        </PaginationBox>
        </>
        )}
      </MainContent>
    </PageContainer>
  );
}

export default QnA;




