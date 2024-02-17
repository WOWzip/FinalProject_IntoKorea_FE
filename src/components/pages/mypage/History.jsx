
import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import MyPageSidebar from "./ui/MyPageSidebar";
import "../../../styles/Diary.css";
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
`;

const StyledButton = styled.button`
  background-color: #337ab7;
  color: white;
  border: none;
  padding: 10px 20px;
  margin-left: 10px;
  border-radius: 5px;
  cursor: pointer;
`;

const StyledInput = styled.input`
  padding: 8px;
  margin-right: 10px;
  border-radius: 5px;
  border: 1px solid #ccc;
`;

const StyledSelect = styled.select`
  padding: 8px;
  margin-right: 10px;
  border-radius: 5px;
  border: 1px solid #ccc;
`;

const StyledTable = styled.table`
  border-collapse: collapse;
  width: 100%;
`;

const StyledTh = styled.th`
  border: 1px solid #ddd;
  padding: 8px;
  text-align: left;
  background-color: #f2f2f2;
`;

const StyledTd = styled.td`
  border: 1px solid #ddd;
  padding: 8px;
`;

function History() {
  const [diarys, setDiarys] = useState([]);
  const [searchType, setSearchType] = useState("title"); 
  const [searchKeyword, setSearchKeyword] = useState(""); 
  const navigate = useNavigate();
  const [imagePaths, setImagePaths] = useState(null);
  const email = sessionStorage.getItem("email"); 

  const [page, setPage] = useState(1);
  const [totalItems, setTotalItems] = useState(0);
  const itemsPerPage = 5; 

  useEffect(() => {
    axios.get("/mypage/getAllDiarys")
      .then((response) => {
        const filteredDiarys = response.data.filter(diary => diary.email === email);
        setDiarys(filteredDiarys);
        setTotalItems(filteredDiarys.length);
        filteredDiarys.forEach(diary => {
          axios.get(`/mypage/getDimage/${diary.seq}`)
            .then((imageResponse) => {
              setImagePaths(prevState => ({
                ...prevState,
                [diary.seq]: imageResponse.data
              }));
            })
            .catch((error) => console.error(`이미지 경로를 가져오는 중 오류 발생: ${error}`));
        });
      })
      .catch((error) => console.error("리스트 출력 에러 :", error));
  }, [email]);

  const handleEdit = (seq) => {
    navigate(`/EditDiary?seq=${seq}`);
  }

  const handleDelete = (seq) => {
    axios.delete(`/mypage/deleteDiary/${seq}`)
      .then(() => {
        setDiarys(diarys.filter(diary => diary.seq !== seq));
      })
      .catch((error) => console.error("다이어리 삭제 에러 :", error))
  }

  const handleSearchTypeChange = (e) => {
    setSearchType(e.target.value);
  }

  const handleSearchKeywordChange = (e) => {
    setSearchKeyword(e.target.value);
  }

  // const handleSearch = () => {
  //   axios.get(`/mypage/searchDiary?searchType=${searchType}&keyword=${searchKeyword}`)
  //     .then((response) => {
  //       const filteredDiarys = response.data.filter(diary => diary.email === email);
  //       setDiarys(filteredDiarys);
  //       setTotalItems(filteredDiarys.length);
  //     })
  //     .catch((error) => console.error("다이어리 검색 에러 :", error));
  // }

  
  const handleSearch = () => {
    axios.get(`/mypage/searchDiary?searchType=${searchType}&keyword=${searchKeyword}`)
      .then((response) => {
        const filteredDiarys = response.data.filter(diary => diary.email === email);
        if (filteredDiarys.length === 0) {
          axios.get("/mypage/getAllDiarys")
            .then((response) => {
              const allDiarys = response.data.filter(diary => diary.email === email);
              setDiarys(allDiarys);
              setTotalItems(allDiarys.length);
            })
            .catch((error) => console.error("전체 다이어리 목록 가져오기 에러:", error));
        } else {
          setDiarys(filteredDiarys);
          setTotalItems(filteredDiarys.length);
        }
      })
      .catch((error) => console.error("다이어리 검색 에러 :", error));
  }
  
  
  const handleShowAll = () => {
    axios.get("/mypage/getAllDiarys")
      .then((response) => {
        const filteredDiarys = response.data.filter(diary => diary.email === email);
        setDiarys(filteredDiarys);
        setTotalItems(filteredDiarys.length);
      })
      .catch((error) => console.error("리스트 출력 에러 :", error));
  }

  const handlePageChange = (page) => {
    setPage(page);
  };
  

  const indexOfLastItem = page * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = diarys.slice(indexOfFirstItem, indexOfLastItem);

  const themeImages = {
    '산': "/image/mountain.png",
    '바다': "/image/sea.png",
    '캠핑' : "/image/tent.png",
    '도시' : "/image/city.png",
    '맛집' : "/image/restaurant.png",
    '쇼핑' : "/image/shopping.png",
    '공연' : "/image/stage.png",
    '여가' : "/image/culture.png"
  };


  return (
    <PageContainer>
      <MyPageSidebar />
      <MainContent>
        <h2>다이어리</h2>
        {diarys.length === 0 ? (
          <div>
          <p>다이어리를 작성해주세요!</p>
          <br/>
          <StyledButton>
          <Link to="/TravelDiary">
            다이어리 작성
          </Link>
        </StyledButton>
        </div>
        ) : (
          <>
{/* 
        <ul className="Dtable">
          {currentItems.map((diary) => (
            <div key={diary.seq} className="DiaryArea">
              <li>
                 {imagePaths && imagePaths[diary.seq] && <img src={imagePaths[diary.seq]} alt="다이어리 이미지" className="diary-image" style={{ maxWidth: '100px', marginTop: '10px' }} />}
                <Link
                  to={`/DiaryDetail?seq=${diary.seq}`}
                  className="dtitle" 
                >
                  {diary.rating}
                </Link>
                <img src={themeImages[diary.theme]} alt={diary.theme} style={{ maxWidth: '50px', marginTop: '10px' }} />
                <span></span>
                <span>방문일 : {diary.visitDate} ~ {diary.finishDate}</span>
                <br />
                <button onClick={() => handleEdit(diary.seq)}>수정</button>
                <button onClick={() => handleDelete(diary.seq)}>삭제</button>
              </li>
            </div>
          ))}
        </ul> */}

<StyledTable >
          <thead>
            <tr>
              <StyledTh>날짜</StyledTh>
              <StyledTh>제목</StyledTh>
              <StyledTh>장소</StyledTh>
              <StyledTh>테마</StyledTh>
            </tr>
          </thead>
          <tbody>
            {currentItems.map((diary) => (
              <tr key={diary.seq}>
                <StyledTd>{diary.visitDate} ~ {diary.finishDate}</StyledTd>
                <StyledTd>
                  <Link to={`/DiaryDetail?seq=${diary.seq}`} className="dtitle">
                    {diary.rating}
                  </Link>
                </StyledTd>
                <StyledTd>{diary.location}</StyledTd>
                <StyledTd>
                <img src={themeImages[diary.theme]} alt={diary.theme} style={{ maxWidth: '50px', marginTop: '10px' }} />

                </StyledTd>
                <button onClick={() => handleEdit(diary.seq)}>수정</button>
                  <button onClick={() => handleDelete(diary.seq)}>삭제</button>
              </tr>
            ))}
          </tbody>
        </StyledTable>
        <br/>
        <StyledButton>
          <Link to="/TravelDiary">
            다이어리 작성
          </Link>
        </StyledButton>
        <br/>
        <div>
          <br/>
          <StyledSelect value={searchType} onChange={handleSearchTypeChange}>
            <option value="title">제목</option>
            <option value="theme">테마</option>
            <option value="content">내용</option>
          </StyledSelect>
          <StyledInput type="text" value={searchKeyword} onChange={handleSearchKeywordChange} />
          <StyledButton onClick={handleSearch}>검색</StyledButton>
          <StyledButton onClick={handleShowAll}>전체보기</StyledButton>
        </div>
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
  )
}

export default History;
