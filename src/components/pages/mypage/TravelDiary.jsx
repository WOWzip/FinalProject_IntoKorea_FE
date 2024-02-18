

// import React, { useState } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";
// import DatePicker from "react-datepicker";
// import "react-datepicker/dist/react-datepicker.css";
// import "../../../styles/TravelDiary.css";

// function TravelDiary() {
//   const [title, setTitle] = useState("");
//   const [content, setContent] = useState("");
//   const [location, setLocation] = useState("");
//   const [rating, setRating] = useState("");
//   const [theme, setTheme] = useState("");
//   const [visitDate, setVisitDate] = useState(null);
//   const [finishDate, setFinishDate] = useState(null);
//   const [image, setImage] = useState(null); 
//   const navigate = useNavigate();
//   const email = sessionStorage.getItem("email"); // 현재 로그인된 사용자의 이메일

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const adjustedVisitDate = new Date(visitDate);
//     adjustedVisitDate.setDate(adjustedVisitDate.getDate() + 1);
//     const adjustedFinishDate = new Date(finishDate);
//     adjustedFinishDate.setDate(adjustedFinishDate.getDate() + 1);

//     const formData = new FormData();
//     formData.append("image", image); 
//     formData.append("Dtitle", title);
//     formData.append("Dcontent", content);
//     formData.append("Location", location);
//     formData.append("rating", rating);
//     formData.append("theme", theme);
//     formData.append("visitDate", adjustedVisitDate.toISOString());
//     formData.append("finishDate", adjustedFinishDate.toISOString());
//     formData.append("email", email); // 현재 로그인된 사용자의 이메일 추가

//     axios.post("/mypage/TravelDiary", formData, {
//       headers : {
//         "Content-Type": "multipart/form-data"
//       }
//     })
//     .then((response) => {
//       console.log(visitDate);
//       console.log(finishDate);
//       alert("다이어리가 저장되었습니다.");
//       console.log("다이어리 작성완료 :", response.data);
//       navigate("/History");
//     })
//     .catch((error) => console.error("작성 실패 :", error));
//   };

//   const handleDateChange = (date) => {
//     setVisitDate(date);
//   };

//   const handleDateChange2 = (date) => {
//     setFinishDate(date);
//   };

//   const handleImageChange = (e) => {
//     setImage(e.target.files[0]); 
//   };

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

//   return(
//     <div className="form-container">
//       <h2>다이어리 작성</h2>
//       <form onSubmit={handleSubmit}>
//         <div className="form-group">
//           <label>제목</label>
//           <input
//             type="text"
//             value={title}
//             onChange={(e) => setTitle(e.target.value)}
//             required
//           />
//         </div>
//         <div className="form-group">
//           <label>내용</label>
//           <textarea
//             value={content}
//             onChange={(e) => setContent(e.target.value)}
//             required
//           />
//         </div>
//         <div className="form-group">
//           <label>장소</label>
//           <input
//             type="text"
//             value={location}
//             onChange={(e) => setLocation(e.target.value)}
//             required
//           />
//         </div>
//         <div className="form-group">
//           <label>방문일자</label>
//           <DatePicker
//             dateFormat="yyyy/MM/dd"
//             shouldCloseOnSelect 
//             maxDate={new Date()}
//             selected={visitDate}
//             onChange={handleDateChange}
//             required
//           /> ~
//           <DatePicker
//             dateFormat="yyyy/MM/dd"
//             shouldCloseOnSelect 
//             minDate={visitDate || new Date()}
//             maxDate={new Date()}
//             selected={finishDate}
//             onChange={handleDateChange2}
//             required
//           />
//         </div>
//         <div className="form-group">
//           <label>이미지 업로드</label>
//           <input type="file" onChange={handleImageChange} />
//         </div>
//         <div className="form-group">
//           <label>사진의 제목을 적어주세요 !</label>
//           <input
//             type="text"
//             value={rating}
//             onChange={(e) => setRating(e.target.value)}
//             required
//           />
//         </div>
//         <div className="form-group">
//           <label>테마</label>
//           <select value={theme} onChange={(e) => setTheme(e.target.value)}>
//             <option value="">테마 선택</option>
//             {Object.keys(themeImages).map((themeOption) => (
//               <option key={themeOption} value={themeOption}>{themeOption}</option>
//             ))}
//           </select>
//           {theme && <img className="theme-image" src={themeImages[theme]} alt={theme} />}
//         </div>
//         <button type="submit">다이어리 작성</button>
//       </form>
//     </div>
//   );
// }

// export default TravelDiary;




import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "../../../styles/TravelDiary.css";

function TravelDiary() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [location, setLocation] = useState("");
  const [rating, setRating] = useState("");
  const [theme, setTheme] = useState("");
  const [visitDate, setVisitDate] = useState(null);
  const [finishDate, setFinishDate] = useState(null);
  const [image, setImage] = useState(null);
  const navigate = useNavigate();
  const email = sessionStorage.getItem("email"); // 현재 로그인된 사용자의 이메일

  const handleSubmit = async (e) => {
    e.preventDefault();
    const adjustedVisitDate = new Date(visitDate);
    adjustedVisitDate.setDate(adjustedVisitDate.getDate() + 1);
    const adjustedFinishDate = new Date(finishDate);
    adjustedFinishDate.setDate(adjustedFinishDate.getDate() + 1);

    const formData = new FormData();
    formData.append("image", image);
    formData.append("Dtitle", title);
    formData.append("Dcontent", content);
    formData.append("Location", location);
    formData.append("rating", rating);
    formData.append("theme", theme);
    formData.append("visitDate", adjustedVisitDate.toISOString());
    formData.append("finishDate", adjustedFinishDate.toISOString());
    formData.append("email", email); // 현재 로그인된 사용자의 이메일 추가

    axios
      .post("/mypage/TravelDiary", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((response) => {
        console.log(visitDate);
        console.log(finishDate);
        alert("다이어리가 저장되었습니다.");
        console.log("다이어리 작성완료 :", response.data);
        navigate("/History");
      })
      .catch((error) => console.error("작성 실패 :", error));
  };

  const handleDateChange = (date) => {
    setVisitDate(date);
  };

  const handleDateChange2 = (date) => {
    setFinishDate(date);
  };

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

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
    <div className="travelForm">
      <br/>
      <br/>
      <br/>
      <br/>
      <span style={{ display: "inline-block" }}><img className="diaimage" src="/image/diary.png" alt="diary" /></span>
      <span style={{ display: "inline-block" }}><h2>다이어리</h2></span>
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
              <label className="diarydateLabel">방문일자</label>
              <DatePicker
                className="datearea"
                dateFormat="yyyy/MM/dd"
                shouldCloseOnSelect
                maxDate={new Date()}
                selected={visitDate}
                onChange={handleDateChange}
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
                onChange={handleDateChange2}
                required
              /> <span className="SEvisitdate">도착</span>
              <label className="diarylocationLabel">장소</label>
              <input
                className="diarylocation"
                type="text"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                required
              />
            </div>
          </div>
          <div className="row">
            <div className="column">
              <label className="diaryupLabel">이미지 업로드</label>
              <input type="file" onChange={handleImageChange} />
              <label className="diaryimageLabel">사진의 제목을 적어주세요 !</label>
              <input
                className="diaryimagetext"
                type="text"
                value={rating}
                onChange={(e) => setRating(e.target.value)}
              />
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
          <button className="diarybutton" type="submit">다이어리 작성</button>
        </div>

      </form>
    </div>
  );
}

export default TravelDiary;

