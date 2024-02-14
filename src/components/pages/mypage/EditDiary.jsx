import React, { useState, useEffect } from "react";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";
import "../../../styles/TravelDiary.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

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
    const [image, setImage] = useState(null); 

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

    const handleImageChange = (e) => {
        setImage(e.target.files[0]);
    };

    const handleThemeChange = (e) => {
        setTheme(e.target.value);
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

    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     axios.put("/mypage/updateDiary", { seq, dtitle: title, dcontent: content, location: locationA, rating, theme })
    //         .then((response) => {
    //             console.log("다이어리 수정 완료 :", response.data);
    //             navigate("/History");
    //         })
    //         .catch((error) => console.error("수정 실패 :", error));
    // };

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("seq", seq);
        formData.append("dtitle", title);
        formData.append("dcontent", content);
        formData.append("location", locationA);
        formData.append("rating", rating);
        formData.append("visitDate", visitDate.toISOString());
        formData.append("image", image); // 이미지 추가
        formData.append("theme", theme); // 테마 추가
    
        axios.put("/mypage/updateDiary", formData, {
            headers: {
                "Content-Type": "multipart/form-data"
            }
        })
        .then((response) => {
            console.log("다이어리 수정 완료 :", response.data);
            navigate("/History");
        })
        .catch((error) => console.error("수정 실패 :", error));
    };

    return (
        <div className="form-container">
            <h2>다이어리 수정</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>제목 : </label>
                    <input
                        type="text"
                        value={title}
                        onChange={handleTitleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label>내용:</label>
                    <textarea
                        value={content}
                        onChange={handleContentChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label>장소:</label>
                    <input
                        type="text"
                        value={locationA}
                        onChange={handleLocationAChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label>평점:</label>
                    <input
                        type="text"
                        value={rating}
                        onChange={handleRatingChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label>방문일자</label>
                    <DatePicker
                        dateFormat="yyyy-MM-dd"
                        shouldCloseOnSelect 
                        maxDate={new Date()}
                        selected={visitDate}
                        onChange={handleVisitDateChange}
                    />
                </div>
                <div className="form-group">
                    <label>이미지 업로드</label>
                    <input type="file" onChange={handleImageChange} />
                </div>
                <div className="form-group">
                    <label>테마</label>
                    <select value={theme} onChange={handleThemeChange}>
                        <option value="">테마 선택</option>
                        {Object.keys(themeImages).map((themeOption) => (
                            <option key={themeOption} value={themeOption}>{themeOption}</option>
                        ))}
                    </select>
                    {theme && <img className="theme-image" src={themeImages[theme]} alt={theme} />}
                </div>
                <button type="submit">다이어리 수정</button>
            </form>
        </div>
    );
}

export default EditDiary;

