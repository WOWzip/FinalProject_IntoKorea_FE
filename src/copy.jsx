
// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { useLocation, useNavigate } from "react-router-dom";
// import "../../../styles/TravelDiary.css";
// import DatePicker from "react-datepicker";
// import "react-datepicker/dist/react-datepicker.css";

// function EditDiary() {
//     const location = useLocation();
//     const navigate = useNavigate();
//     const params = new URLSearchParams(location.search);
//     const seq = params.get("seq");
//     const [title, setTitle] = useState("");
//     const [content, setContent] = useState("");
//     const [locationA, setLocationA] = useState("");
//     const [rating, setRating] = useState("");
//     const [theme, setTheme] = useState("");
//     const [visitDate, setVisitDate] = useState(null);
//     const [image, setImage] = useState(null); 

//     useEffect(() => {
//         axios.get(`/mypage/getDiary/${seq}`)
//             .then((response) => {
//                 const diaryData = response.data;
//                 setTitle(diaryData.dtitle);
//                 setContent(diaryData.dcontent);
//                 setLocationA(diaryData.location);
//                 setRating(diaryData.rating);
//                 setTheme(diaryData.theme);
//                 setVisitDate(diaryData.visitDate);
//                 setImage(diaryData.image);
//             })
//             .catch((error) => console.error("불러오기 실패 :", error))
//     }, [seq]);

//     const handleTitleChange = (e) => {
//         setTitle(e.target.value);
//     };

//     const handleContentChange = (e) => {
//         setContent(e.target.value);
//     };

//     const handleLocationAChange = (e) => {
//         setLocationA(e.target.value);
//     };

//     const handleRatingChange = (e) => {
//         setRating(e.target.value);
//     };

//     const handleVisitDateChange = (e) => {
//         setVisitDate(e.target.value);
//     };

//     const handleImageChange = (e) => {
//         setImage(e.target.value);
//     };

//     const handleThemeChange = (e) => {
//         setTheme(e.target.value);
//     };

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         axios.put("/mypage/updateDiary", { seq, dtitle: title, dcontent: content, location: locationA, rating })
//             .then((response) => {
//                 console.log("다이어리 수정 완료 :", response.data);
//                 navigate("/History");
//             })
//             .catch((error) => console.error("수정 실패 :", error));
//     };

//     return (
//         <div className="form-container">
//             <h2>다이어리 수정</h2>
//             <form onSubmit={handleSubmit}>
//                 <div>
//                     <label>제목 : </label>
//                     <input
//                         type="text"
//                         value={title}
//                         onChange={handleTitleChange}
//                         required
//                     />
//                 </div>
//                 <div>
//                     <label>내용:</label>
//                     <textarea
//                         value={content}
//                         onChange={handleContentChange}
//                         required
//                     />
//                 </div>
//                 <div>
//                     <label>장소:</label>
//                     <input
//                         type="text"
//                         value={locationA}
//                         onChange={handleLocationAChange}
//                         required
//                     />
//                 </div>
//                 <div>
//                     <label>평점:</label>
//                     <input
//                         type="text"
//                         value={rating}
//                         onChange={handleRatingChange}
//                         required
//                     />
//                 </div>
//                 <div>
//                     <label>방문일자</label>
//                     <DatePicker
//                         dateFormat="yyyy-MM-dd"
//                         shouldCloseOnSelect 
//                         maxDate={new Date()}
//                         selected={visitDate}
//                         onChange={handleVisitDateChange}
//                     />
//                 </div>
//                 <div></div>
//                 <button type="submit">다이어리 수정</button>
//             </form>
//         </div>
//     );
// }

// export default EditDiary;