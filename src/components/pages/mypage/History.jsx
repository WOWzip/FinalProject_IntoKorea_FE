// import axios from "axios";
// import React, { useState, useEffect} from "react";
// import { Link, useNavigate} from "react-router-dom";
// import MyPageSidebar from "../../MyPageSidebar";
// import "../../../styles/Diary.css";

// function History(){
//   const [diarys, setDiarys] = useState([]);
//   const navigate = useNavigate();
//   const [imagePaths, setImagePaths] = useState(null);

//   // // 다이어리 리스트
//   // useEffect(() => {
//   //   axios.get("/mypage/getAllDiarys")
//   //   .then((response) => {
//   //       setDiarys(response.data);
//   //   })
//   //   .catch((error) => console.error("리스트 출력 에러 :",  error));
//   // }, []);

//   // 다이어리 삭제
//   const handleDelete = (seq) => {
//     axios.delete(`/mypage/deleteDiary/${seq}`)
//     .then(() => {
//         setDiarys(diarys.filter(diary => diary.seq !== seq));
//     })
//     .catch((error) => console.error("다이어리 삭제 에러 :", error))
//   }

//     // 다이어리 리스트
//     useEffect(() => {
//       axios.get("/mypage/getAllDiarys")
//       .then((response) => {
//           setDiarys(response.data);
//           // 다이어리별 이미지 경로 가져오기
//           response.data.forEach(diary => {
//             axios.get(`/mypage/getDimage/${diary.seq}`)
//             .then((imageResponse) => {
//               setImagePaths(prevState => ({
//                 ...prevState,
//                 [diary.seq]: imageResponse.data
//               }));
//             })
//             .catch((error) => console.error(`이미지 경로를 가져오는 중 오류 발생: ${error}`));
//           });
//       })
//       .catch((error) => console.error("리스트 출력 에러 :",  error));
//     }, []);

//   // 다이어리 수정
//   const handleEdit=(seq) => {
//     navigate(`/EditDiary?seq=${seq}`);
//   }

//   // 테마 이미지
//   const themeImages = {
//     '산': "/image/mountain.png",
//     '바다': "/image/sea.png",
//     '캠핑' : "/image/tent.png",
//     '도시' : "/image/city.png",
//     '맛집' : "/image/restaurant.png",
//     '쇼핑' : "/image/shopping.png",
//     '공연' : "/image/stage.png",
//     '여가' : "/image/culture.png"
//   };

//   return (
//     <div style={{ display: 'flex' }}>
//       <MyPageSidebar/>
//       <div>
//         <h1>다이어리</h1>
//         <button>
//           <Link to="/TravelDiary">
//             다이어리 작성
//           </Link>
//         </button>
//         <ul className="Dtable">
//             {diarys.map((diary) => (
//               <div key={diary.seq} className="DiaryArea">
//                  {imagePaths && imagePaths[diary.seq] && <img src={imagePaths[diary.seq]} alt="다이어리 이미지" className="diary-image" style={{ maxWidth: '300px', marginTop: '10px' }} />}
//                 <li>
//                   <Link 
//                     to={`/DiaryDetail?seq=${diary.seq}`}
//                   >
//                   {diary.dtitle}
//                   </Link>
//                   <span>위치 - {diary.location} </span>
//                   <img src={themeImages[diary.theme]} alt={diary.theme} style={{ maxWidth: '50px', marginTop: '10px' }}/>
//                   <span>방문일 : {diary.visitDate}</span>
//                   <br/>
//                   <button onClick={() => handleEdit(diary.seq)}>수정</button>
//                   <button onClick={() => handleDelete(diary.seq)}>삭제</button>
//                 </li>
//               </div>
//             ))}
//         </ul>
//       </div>
//     </div>
//   )
// }

// export default History;

import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import MyPageSidebar from "../../MyPageSidebar";
import "../../../styles/Diary.css";

function History() {
  const [diarys, setDiarys] = useState([]);
  const [searchType, setSearchType] = useState("title"); // 검색 조건: 제목으로 초기화
  const [searchKeyword, setSearchKeyword] = useState(""); // 검색어
  const navigate = useNavigate();
  const [imagePaths, setImagePaths] = useState(null);

  // 다이어리 리스트
  useEffect(() => {
    axios.get("/mypage/getAllDiarys")
      .then((response) => {
        setDiarys(response.data);
        // 다이어리별 이미지 경로 가져오기
        response.data.forEach(diary => {
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
  }, []);

  // 다이어리 수정
  const handleEdit = (seq) => {
    navigate(`/EditDiary?seq=${seq}`);
  }

  // 다이어리 삭제
  const handleDelete = (seq) => {
    axios.delete(`/mypage/deleteDiary/${seq}`)
      .then(() => {
        setDiarys(diarys.filter(diary => diary.seq !== seq));
      })
      .catch((error) => console.error("다이어리 삭제 에러 :", error))
  }

  // 검색 조건 변경 핸들러
  const handleSearchTypeChange = (e) => {
    setSearchType(e.target.value);
  }

  // 검색어 변경 핸들러
  const handleSearchKeywordChange = (e) => {
    setSearchKeyword(e.target.value);
  }

  // 검색 버튼 클릭 핸들러
  const handleSearch = () => {
    axios.get(`/mypage/searchDiary?searchType=${searchType}&keyword=${searchKeyword}`)
      .then((response) => {
        setDiarys(response.data);
      })
      .catch((error) => console.error("다이어리 검색 에러 :", error));
  }
  const handleShowAll = () => {
    axios.get("/mypage/getAllDiarys")
      .then((response) => {
        setDiarys(response.data);
      })
      .catch((error) => console.error("리스트 출력 에러 :", error));
  }

  // 테마 이미지
  const themeImages = {
    '산': "/image/mountain.png",
    '바다': "/image/sea.png",
    '캠핑': "/image/tent.png",
    '도시': "/image/city.png",
    '맛집': "/image/restaurant.png",
    '쇼핑': "/image/shopping.png",
    '공연': "/image/stage.png",
    '여가': "/image/culture.png"
  };

  return (
    <div style={{ display: 'flex' }}>
      <MyPageSidebar />
      <div>
        <h1>다이어리</h1>
        <div>
          <select value={searchType} onChange={handleSearchTypeChange}>
            <option value="title">제목</option>
            <option value="theme">테마</option>
            <option value="content">내용</option>
          </select>
          <input type="text" value={searchKeyword} onChange={handleSearchKeywordChange} />
          <button onClick={handleSearch}>검색</button>
          <button onClick={handleShowAll}>전체보기</button>
        </div>
        <button>
          <Link to="/TravelDiary">
            다이어리 작성
          </Link>
        </button>
        <ul className="Dtable">
          {diarys.map((diary) => (
            <div key={diary.seq} className="DiaryArea">
              {imagePaths && imagePaths[diary.seq] && <img src={imagePaths[diary.seq]} alt="다이어리 이미지" className="diary-image" style={{ maxWidth: '300px', marginTop: '10px' }} />}
              <li>
                <Link
                  to={`/DiaryDetail?seq=${diary.seq}`}
                >
                  {diary.dtitle}
                </Link>
                <span>위치 - {diary.location} </span>
                <img src={themeImages[diary.theme]} alt={diary.theme} style={{ maxWidth: '50px', marginTop: '10px' }} />
                <span>방문일 : {diary.visitDate}</span>
                <br />
                <button onClick={() => handleEdit(diary.seq)}>수정</button>
                <button onClick={() => handleDelete(diary.seq)}>삭제</button>
              </li>
            </div>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default History;


