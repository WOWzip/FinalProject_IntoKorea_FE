// import React, {useState, useEffect} from "react";
// import axios from "axios";
// import { Link, useNavigate } from "react-router-dom";

// function ManagerPage() {
//     const navigate = useNavigate();
//     const [question, setQuestions] = useState([]);
//     const[selectedSeq, setSelectedSeq] = useState(null);
//     const [totalItems, setTotalItems] = useState(0);
//     const email = sessionStorage.getItem("email"); // 현재 로그인된 사용자의 이메일

// useEffect(() => {
//     if (email === "manager@ma.com") {
//       axios.get("/mypage/getAllAsks")
//         .then((response) => {
//           console.log("Server Response:", response.data);
//           const sortedQuestions = response.data.sort((a, b) => a.seq - b.seq);
//           setQuestions(sortedQuestions);
//           setTotalItems(sortedQuestions.length);
//         })
//         .catch((error) => console.error("Error fetching data:", error));
//     } else {
//       axios.get("/mypage/getAllAsks")
//         .then((response) => {
//           console.log("Server Response:", response.data);
//           const sortedQuestions = response.data.sort((a, b) => a.seq - b.seq);
//           const filteredQuestions = sortedQuestions.filter(question => question.email === email);
//           setQuestions(filteredQuestions);
//           setTotalItems(filteredQuestions.length);
//         })
//         .catch((error) => console.error("Error fetching data:", error));
//     }
//   }, [email]);

//   const handleDelete = (seq) => {
//     axios.delete(`/mypage/deleteAsk/${seq}`)
//       .then(() => {
//         setQuestions((prevQuestions) => prevQuestions.filter((question) => question.seq !== seq));
//         setTotalItems(totalItems - 1);
//       })
//       .catch((error) => console.error("삭제 에러:", error));
//   };

//   return (
//     <>
    
//     </>
//   );

// }
// export default ManagerPage;