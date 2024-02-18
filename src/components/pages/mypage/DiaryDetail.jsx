
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
        rating: '' ,
        visitDate: '',
        finishDate: '',
        theme: ''
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
    
    const themeImages = {
        산: "/image/mountain.png",
        바다: "/image/sea.png",
        캠핑: "/image/tent.png",
        도시: "/image/city.png",
        맛집: "/image/restaurant.png",
        쇼핑: "/image/shopping.png",
        공연: "/image/stage.png",
        여가: "/image/culture.png",
      };
    return (
        <>
        <br/>
        <div className="travelForm">
        <span style={{ display: "inline-block" }}><img className="diaimage" src="/image/diary.png" alt="diary" /></span>
        <span style={{ display: "inline-block" }}><h2>다이어리</h2></span>
        <br/>
        <br/>
        <form  className="two-column-form">
            <div  className="diaryform1">
            <label className="diaryTitleLabel">제목</label>
                <span>
                {diary.dtitle}
                <p className="separatorwidth1"></p>
                </span>
                <label className="diaryContentLabel">내용</label>
                <span>
                {diary.dcontent}
                <p className="separatorwidth1"></p>
                </span>
            </div>
            <div className="diaryform1">
                <div className="row">
                <div className="column">
                <label className="diarydateLabel">방문일자</label>
                <span>
                {diary.visitDate}{" "}<span className="SEvisitdate">출발</span>
                </span>
                <br/>
                {diary.finishDate}{" "}<span className="SEvisitdate">도착</span>
                <p className="separatorwidth1"></p>
                <label className="diarylocationLabel">장소</label>
                <span >{diary.location}</span>
                <p className="separatorwidth1"></p>
                </div>
                </div>
            <div className="row">
                <div className="column">
                <label className="diaryimageLabel">{diary.rating}</label>
                {imagePath && <img src={imagePath} alt="다이어리 이미지" className="diary-image" style={{ maxWidth: '300px', marginTop: '10px' }}/>}
                </div>
            </div>
            </div>
        </form>
        </div>
        <br/>
        </>
    );
}


function getSeq(location) {
    const searchString = location.search;
    const params = new URLSearchParams(searchString);
    const keyword = params.get('seq');
    return keyword;
}

export default DiaryDetail;