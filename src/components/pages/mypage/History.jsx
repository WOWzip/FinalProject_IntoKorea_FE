
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
    // 사용자에게 삭제 여부를 묻는 경고창 표시
    const confirmDelete = window.confirm("정말로 다이어리를 삭제하시겠습니까?");
  
    // 사용자가 확인을 선택한 경우에만 삭제 요청 보내기
    if (confirmDelete) {
      axios.delete(`/mypage/deleteDiary/${seq}`)
        .then(() => {
          setDiarys(diarys.filter(diary => diary.seq !== seq));
        })
        .catch((error) => console.error("다이어리 삭제 에러 :", error))
    }
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
        <span style={{ display: "inline-block" }}><img className="diaimage" src="/image/diary.png" alt="diary" /></span>
        <span style={{ display: "inline-block" }}><h2>다이어리</h2></span>
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


{currentItems.map((diary) => (
  <tr key={diary.seq} style={{width:"500px"}}>
    <td style={{paddingRight:"30px"}}> 
      <img src={imagePaths && imagePaths[diary.seq]} alt="다이어리 이미지" className="diaryImage" style={{width:"150px"}} />
    </td>
    <td style={{paddingBottom:"50px",paddingRight:"30px"}}>
      <div style={{fontSize:"40px", marginBottom:"10px"}}>         
        <Link to={`/DiaryDetail?seq=${diary.seq}`} style={{textDecoration:"none", color:"black"}}>
          {diary.dtitle}
        </Link>
      </div>
      <div style={{marginBottom:"10px"}}>
        {diary.visitDate} ~ {diary.finishDate}
      </div>
      <div style={{marginBottom:"10px"}}>
        {diary.location}
      </div>
    </td>
    <td style={{paddingBottom:"20px", paddingRight:"30px"}}>
      <img src={themeImages[diary.theme]} alt={diary.theme} style={{ maxWidth: '50px', marginTop: '10px' }} />
    </td>
    <td style={{paddingBottom:"20px"}}>
      <div><button className="diaryedit" onClick={() => handleEdit(diary.seq)}>수정</button></div>
      <br/>
      <div><button className="diarydelete" onClick={() => handleDelete(diary.seq)}>삭제</button></div>
    </td>
  </tr>
))}






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
