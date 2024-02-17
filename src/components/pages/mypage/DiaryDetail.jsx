// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { useLocation } from "react-router-dom";

// function DiaryDetail() {
//     const location = useLocation();
//     const keyword = getSeq(location);
//     const [diary, setDiary] = useState({
//         seq:'',
//         title:'',
//         content:'',
//         location: '', 
//         rating: '' 
//     });

//     useEffect(() => {
//         axios.get(`/mypage/getDiary/${keyword}`)
//           .then((response) => {
//             setDiary(response.data);
//           })
//           .catch((error) => console.error("다이어리 상세 정보 불러오기 실패 :", error));
//     }, [keyword]);

//     return (
//         <div>
//             <h2>{diary.dtitle}</h2>
//             <p>내용: {diary.dcontent}</p>
//             <p>장소: {diary.location}</p>
//             <p>평점: {diary.rating}</p>
//         </div>
//     );
// }

// function getSeq(location) {
//     const searchString = location.search;
//     const params = new URLSearchParams(searchString);
//     const keyword = params.get('seq');
//     return keyword;
// }

// export default DiaryDetail;
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";
import "../../../styles/DiaryDetail.css";

function DiaryDetail() {
    const location = useLocation();
    const keyword = getSeq(location);
    const [diary, setDiary] = useState({
        seq:'',
        title:'',
        content:'',
        location: '', 
        rating: '' 
    });
    const [imagePath, setImagePath] = useState('');

    useEffect(() => {
        axios.get(`/mypage/getDiary/${keyword}`)
          .then((response) => {
            setDiary(response.data);
            // 다이어리에 대한 이미지 경로 가져오기
            axios.get(`/mypage/getDimage/${response.data.seq}`)
              .then((imageResponse) => {
                setImagePath(imageResponse.data);
              })
              .catch((error) => console.error(`이미지 경로를 가져오는 중 오류 발생: ${error}`));
          })
          .catch((error) => console.error("다이어리 상세 정보 불러오기 실패 :", error));
    }, [keyword]);

    return (
        <div className="diary-container">
            <h2 className="diary-title">{diary.dtitle}</h2>
            <p className="diary-detail">내용: {diary.dcontent}</p>
            <p className="diary-detail">장소: {diary.location}</p>
            <p className="diary-rating">평점: {diary.rating}</p>
            {imagePath && <img src={imagePath} alt="다이어리 이미지" className="diary-image" style={{ maxWidth: '300px', marginTop: '10px' }}/>}
        </div>
    );
}

function getSeq(location) {
    const searchString = location.search;
    const params = new URLSearchParams(searchString);
    const keyword = params.get('seq');
    return keyword;
}

export default DiaryDetail;