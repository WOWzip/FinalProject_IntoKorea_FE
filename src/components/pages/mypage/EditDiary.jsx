

import React, { useState, useEffect } from "react";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "../../../styles/TravelDiary.css";

function EditDiary() {
    const location = useLocation();
    const navigate = useNavigate();
    const params = new URLSearchParams(location.search);
    const seq = params.get("seq");
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [locationA, setLocationA] = useState("");
    const [rating, setRating] = useState("");
    const [theme, setTheme] = useState("");
    const [visitDate, setVisitDate] = useState(null);
    const [finishDate, setFinishDate] = useState(null); // 추가: finishDate 상태 추가
    const [image, setImage] = useState(null); 
    const email = sessionStorage.getItem("email"); // 현재 로그인된 사용자의 이메일


 
    useEffect(() => {
        axios.get(`/mypage/getDiary/${seq}`)
            .then((response) => {
                const diaryData = response.data;
                setTitle(diaryData.dtitle);
                setContent(diaryData.dcontent);
                setLocationA(diaryData.location);
                setRating(diaryData.rating);
                setTheme(diaryData.theme);
                setVisitDate(new Date(diaryData.visitDate));
                setFinishDate(new Date(diaryData.finishDate)); // 추가: finishDate 설정
            })
            .catch((error) => console.error("불러오기 실패 :", error))
    }, [seq]);

    const handleTitleChange = (e) => {
        setTitle(e.target.value);
    };

    const handleContentChange = (e) => {
        setContent(e.target.value);
    };

    const handleLocationAChange = (e) => {
        setLocationA(e.target.value);
    };

    const handleRatingChange = (e) => {
        setRating(e.target.value);
    };

    const handleVisitDateChange = (date) => {
        setVisitDate(date);
    };

    const handleFinishDateChange = (date) => { // 추가: finishDate 변경 핸들러
        setFinishDate(date);
    };

    const handleImageChange = (e) => {
        setImage(e.target.files[0]);
    };

    const handleThemeChange = (e) => {
        setTheme(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("seq", seq);
        formData.append("dtitle", title);
        formData.append("dcontent", content);
        formData.append("location", locationA);
        formData.append("rating", rating);
        formData.append("visitDate", visitDate.toISOString());
        formData.append("finishDate", finishDate.toISOString());
        formData.append("image", image); 
        formData.append("theme", theme); 
        formData.append("email", email); // 현재 로그인된 사용자의 이메일 추가

        axios.post("/mypage/updateDiary", formData, {
            headers: {
                "Content-Type": "multipart/form-data"
            }
        })
        .then((response) => {
            console.log(visitDate);
            console.log(finishDate);
            alert("다이어리가 수정되었습니다.");
            console.log("다이어리 수정 완료 :", response.data);
            navigate("/History");
        })
        .catch((error) => console.error("수정 실패 :", error));
    };

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
        <div className="travelForm">
          <br/>
          <br/>
          <br/>
          <br/>
          <span style={{ display: "inline-block" }}><img className="diaimage" src="/image/diary.png" alt="diary" /></span>
          <span style={{ display: "inline-block" }}><h2>다이어리 수정</h2></span>
          <br/>
          <br/>
          <br/>
          <form onSubmit={handleSubmit} className="two-column-form">
            <div className="diaryform1">
              <label className="diaryTitleLabel">제목</label>
              <input
                className="diaryTitle"
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
              />
              <label className="diaryContentLabel">내용</label>
              <textarea
                className="travelarea"
                value={content}
                onChange={(e) => setContent(e.target.value)}
                required
              />
            </div>
            <div className="diaryform1">
              <div className="row">
                <div className="column">
                  <div className="form-group">
                    <label className="diarydateLabel">방문일자</label>
                    <DatePicker
                      className="datearea"
                      dateFormat="yyyy/MM/dd"
                      shouldCloseOnSelect
                      maxDate={new Date()}
                      selected={visitDate}
                      onChange={handleVisitDateChange}
                      required
                    />{" "}
                    <span className="SEvisitdate">출발</span> {" "}
                    <DatePicker
                      className="datearea"
                      dateFormat="yyyy/MM/dd"
                      shouldCloseOnSelect
                      minDate={visitDate || new Date()}
                      maxDate={new Date()}
                      selected={finishDate}
                      onChange={handleFinishDateChange}
                      required
                    /> <span className="SEvisitdate">도착</span>
                  </div>
                  <label className="diarylocationLabel">장소</label>
                  <input
                    className="diarylocation"
                    type="text"
                    value={locationA}
                    onChange={(e) => setLocationA(e.target.value)}
                    required
                  />
                </div>
              </div>
              <div className="row">
                <div className="column">
                  <div className="form-group">
                    <label className="diaryupLabel">이미지 업로드</label>
                    <input type="file" onChange={handleImageChange} />
                    <label className="diaryimageLabel">사진의 제목을 적어주세요 !</label>
                    <input
                      className="diaryimagetext"
                      type="text"
                      value={rating}
                      onChange={(e) => setRating(e.target.value)}
                      required
                    />
                  </div>
                </div>
              </div>
      
              <div className="row">
                <div className="column">
                  <label className="diarythemeLabel">테마</label>
                  <select 
                    value={theme} 
                    onChange={(e) => setTheme(e.target.value)}
                    required
                  >
                    <option value="">테마 선택</option>
                    {Object.keys(themeImages).map((themeOption) => (
                      <option key={themeOption} value={themeOption}>
                        {themeOption}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="column">
                  {theme && (
                    <img
                      className="theme-image"
                      src={themeImages[theme]}
                      alt={theme}
                    />
                  )}
                </div>
              </div>
              <button type="submit">다이어리 수정</button>
            </div>
          </form>
        </div>
      );
      
    
}

export default EditDiary;
