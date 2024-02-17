

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
//     const formData = new FormData();
//     formData.append("image", image); 
//     formData.append("Dtitle", title);
//     formData.append("Dcontent", content);
//     formData.append("Location", location);
//     formData.append("rating", rating);
//     formData.append("theme", theme);
//     formData.append("visitDate", visitDate.toISOString());
//     formData.append("finishDate", finishDate.toISOString());
//     formData.append("email", email); // 현재 로그인된 사용자의 이메일 추가
//     console.log(visitDate.toISOString);
//     console.log(formData);
  
//     // try {
//     //   await axios.post("/mypage/TravelDiary", formData, {
//     //     headers: {
//     //       "Content-Type": "multipart/form-data",
//     //     },
//     //   });
//     //   alert("다이어리가 저장되었습니다.");
//     //   setTitle("");
//     //   setContent("");
//     //   setLocation("");
//     //   setRating("");
//     //   setTheme("");
//     //   setVisitDate(null); 
//     //   setFinishDate(null);
//     //   setImage(null); 
//     //   navigate("/History")
//     //   console.log(visitDate);
//     //   console.log(finishDate);
//     // } catch (error) {
//     //   console.error("다이어리 작성 오류 :", error);
//     // }
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
//             onChange={(date) => setLocation(date.target.value)}
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

    axios.post("/mypage/TravelDiary", formData, {
      headers : {
        "Content-Type": "multipart/form-data"
      }
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
    '산': "/image/mountain.png",
    '바다': "/image/sea.png",
    '캠핑' : "/image/tent.png",
    '도시' : "/image/city.png",
    '맛집' : "/image/restaurant.png",
    '쇼핑' : "/image/shopping.png",
    '공연' : "/image/stage.png",
    '여가' : "/image/culture.png"
  };

  return(
    <div className="form-container">
      <h2>다이어리 작성</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>제목</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>내용</label>
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>장소</label>
          <input
            type="text"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>방문일자</label>
          <DatePicker
            dateFormat="yyyy/MM/dd"
            shouldCloseOnSelect 
            maxDate={new Date()}
            selected={visitDate}
            onChange={handleDateChange}
            required
          /> ~
          <DatePicker
            dateFormat="yyyy/MM/dd"
            shouldCloseOnSelect 
            minDate={visitDate || new Date()}
            maxDate={new Date()}
            selected={finishDate}
            onChange={handleDateChange2}
            required
          />
        </div>
        <div className="form-group">
          <label>이미지 업로드</label>
          <input type="file" onChange={handleImageChange} />
        </div>
        <div className="form-group">
          <label>사진의 제목을 적어주세요 !</label>
          <input
            type="text"
            value={rating}
            onChange={(e) => setRating(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>테마</label>
          <select value={theme} onChange={(e) => setTheme(e.target.value)}>
            <option value="">테마 선택</option>
            {Object.keys(themeImages).map((themeOption) => (
              <option key={themeOption} value={themeOption}>{themeOption}</option>
            ))}
          </select>
          {theme && <img className="theme-image" src={themeImages[theme]} alt={theme} />}
        </div>
        <button type="submit">다이어리 작성</button>
      </form>
    </div>
  );
}

export default TravelDiary;





