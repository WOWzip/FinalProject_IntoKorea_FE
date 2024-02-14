

// import { useState } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";
// import DatePicker from "react-datepicker";
// import "react-datepicker/dist/react-datepicker.css";

// function TravelDiary() {
//   const [title, setTitle] = useState("");
//   const [content, setContent] = useState("");
//   const [location, setLocation] = useState("");
//   const [rating, setRating] = useState("");
//   const [theme, setTheme] = useState("");
//   const [visitDate, setVisitDate] = useState(null);
//   const [image, setImage] = useState(null); 
//   const navigate = useNavigate();
  
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const formData = new FormData();
//     formData.append("image", image); 
//     formData.append("Dtitle", title);
//     formData.append("Dcontent", content);
//     formData.append("Location", location);
//     formData.append("rating", rating);
//     formData.append("theme", theme);
//     formData.append("visitDate", visitDate);

//     try {
//       await axios.post("/mypage/TravelDiary", formData, {
//         headers: {
//           "Content-Type": "multipart/form-data", // FormData를 사용할 때는 Content-Type을 지정해야 합니다.
//         },
//       });
//       alert("다이어리가 저장되었습니다.");
//       setTitle("");
//       setContent("");
//       setLocation("");
//       setRating("");
//       setTheme("");
//       setVisitDate(null); 
//       setImage(null); 
//       console.log("다이어리가 성공적으로 저장되었습니다.");
//       console.log("제목:", title);
//       console.log("내용:", content);
//       console.log("장소:", location);
//       console.log("평점:", rating);
//       console.log("테마:", theme);
//       console.log("방문일자:", visitDate);
//       navigate("/History")
//     } catch (error) {
//       console.error("다이어리 작성 오류 :", error);
//     }
//   };

//   const handleDateChange = (date) => {
//     setVisitDate(date);
//   };

//   const handleImageChange = (e) => {
//     setImage(e.target.files[0]); // 추가: 이미지 변경 핸들러
//   };

//   // 테마
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
//     <div>
//       <h2>다이어리 작성</h2>
//       <form onSubmit={handleSubmit}>
//         <div>
//           <label>제목 : </label>
//           <input
//             type="text"
//             value={title}
//             onChange={(e) => setTitle(e.target.value)}
//             required
//           />
//         </div>
//         <div>
//           <label>내용:</label>
//           <textarea
//             value={content}
//             onChange={(e) => setContent(e.target.value)}
//             required
//           />
//         </div>
//         <div>
//           <label>장소:</label>
//           <input
//             type="text"
//             value={location}
//             onChange={(e) => setLocation(e.target.value)}
//             required
//           />
//         </div>
//         <div>
//           <label>평점:</label>
//           <input
//             type="text"
//             value={rating}
//             onChange={(e) => setRating(e.target.value)}
//             required
//           />
//         </div>
//         <div>
//           <label>방문일자:</label>
//           <DatePicker
//             dateFormat="yyyy.MM.dd"
//             shouldCloseOnSelect 
//             maxDate={new Date()} // maxDate 이후 날짜 선택 불가
//             selected={visitDate}
//             onChange={handleDateChange}
//           />
//         </div>
//         <div>
//           <label>이미지 업로드:</label>
//           <input type="file" onChange={handleImageChange} />
//         </div>
//         <div>
//           <label>테마 :</label>
//           <select value={theme} onChange={(e) => setTheme(e.target.value)}>
//             <option value="">테마 선택</option>
//             {Object.keys(themeImages).map((themeOption) => (
//               <option key={themeOption} value={themeOption}>{themeOption}</option>
//             ))}
//           </select>
//           {theme && <img src={themeImages[theme]} alt={theme} style={{ maxWidth: '100px', marginTop: '10px' }} />}
//         </div>
//         <button type="submit">다이어리 작성</button>
//       </form>
//     </div>
//   );
// }

// export default TravelDiary;
//----------------------------------------------------------------------------
import { useState } from "react";
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
  const [image, setImage] = useState(null); 
  const navigate = useNavigate();
  
  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   const formData = new FormData();
  //   formData.append("image", image); 
  //   formData.append("Dtitle", title);
  //   formData.append("Dcontent", content);
  //   formData.append("Location", location);
  //   formData.append("rating", rating);
  //   formData.append("theme", theme);
  //   formData.append("visitDate", visitDate.toISOString()); 

  //   try {
  //     await axios.post("/mypage/TravelDiary", formData, {
  //       headers: {
  //         "Content-Type": "multipart/form-data",
  //       },
  //     });
  //     alert("다이어리가 저장되었습니다.");
  //     setTitle("");
  //     setContent("");
  //     setLocation("");
  //     setRating("");
  //     setTheme("");
  //     setVisitDate(null); 
  //     setImage(null); 
  //     navigate("/History")
  //   } catch (error) {
  //     console.error("다이어리 작성 오류 :", error);
  //   }
  // };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("image", image); 
    formData.append("Dtitle", title);
    formData.append("Dcontent", content);
    formData.append("Location", location);
    formData.append("rating", rating);
    formData.append("theme", theme);
    formData.append("visitDate", visitDate.toISOString()); 
  
    try {
      await axios.post("/mypage/TravelDiary", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      alert("다이어리가 저장되었습니다.");
      setTitle("");
      setContent("");
      setLocation("");
      setRating("");
      setTheme("");
      setVisitDate(null); 
      setImage(null); 
      navigate("/History")
    } catch (error) {
      console.error("다이어리 작성 오류 :", error);
    }
  };

  const handleDateChange = (date) => {
    setVisitDate(date);
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
          <label>평점</label>
          <input
            type="text"
            value={rating}
            onChange={(e) => setRating(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>방문일자</label>
          <DatePicker
            dateFormat="yyyy-MM-dd"
            shouldCloseOnSelect 
            maxDate={new Date()}
            selected={visitDate}
            onChange={handleDateChange}
          />
        </div>
        <div className="form-group">
          <label>이미지 업로드</label>
          <input type="file" onChange={handleImageChange} />
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
//   const [image1, setImage1] = useState(null);
//   const [image2, setImage2] = useState(null);
//   const navigate = useNavigate();
  
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const formData = new FormData();
//     formData.append("image1", image1); 
//     formData.append("image2", image2); 
//     formData.append("Dtitle", title);
//     formData.append("Dcontent", content);
//     formData.append("Location", location);
//     formData.append("rating", rating);
//     formData.append("theme", theme);
//     formData.append("visitDate", visitDate.toISOString()); 

//     try {
//       await axios.post("/mypage/TravelDiary", formData, {
//         headers: {
//           "Content-Type": "multipart/form-data",
//         },
//       });
//       alert("다이어리가 저장되었습니다.");
//       setTitle("");
//       setContent("");
//       setLocation("");
//       setRating("");
//       setTheme("");
//       setVisitDate(null); 
//       setImage1(null); 
//       setImage2(null); 
//       navigate("/History")
//     } catch (error) {
//       console.error("다이어리 작성 오류 :", error);
//     }
//   };

//   const handleDateChange = (date) => {
//     setVisitDate(date);
//   };

//   const handleImage1Change = (e) => {
//     setImage1(e.target.files[0]); 
//   };

//   const handleImage2Change = (e) => {
//     setImage2(e.target.files[0]); 
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
//           <label>제목 : </label>
//           <input
//             type="text"
//             value={title}
//             onChange={(e) => setTitle(e.target.value)}
//             required
//           />
//         </div>
//         <div className="form-group">
//           <label>내용:</label>
//           <textarea
//             value={content}
//             onChange={(e) => setContent(e.target.value)}
//             required
//           />
//         </div>
//         <div className="form-group">
//           <label>장소:</label>
//           <input
//             type="text"
//             value={location}
//             onChange={(e) => setLocation(e.target.value)}
//             required
//           />
//         </div>
//         <div className="form-group">
//           <label>평점:</label>
//           <input
//             type="text"
//             value={rating}
//             onChange={(e) => setRating(e.target.value)}
//             required
//           />
//         </div>
//         <div className="form-group">
//           <label>방문일자:</label>
//           <DatePicker
//             dateFormat="yyyy.MM.dd"
//             shouldCloseOnSelect 
//             maxDate={new Date()}
//             selected={visitDate}
//             onChange={handleDateChange}
//           />
//         </div>
//         <div className="form-group">
//           <label>이미지 업로드 1:</label>
//           <input type="file" onChange={handleImage1Change} />
//         </div>
//         <div className="form-group">
//           <label>이미지 업로드 2:</label>
//           <input type="file" onChange={handleImage2Change} />
//         </div>
//         <div className="form-group">
//           <label>테마 :</label>
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
