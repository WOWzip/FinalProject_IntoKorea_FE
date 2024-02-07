// import axios from "axios";
// import { response } from "express";
// import React, { useState, useEffect} from "react";
// import { Link, useNavigate } from "react-router-dom";
// import MyPageSidebar from "../../MyPageSidebar";

// function History(){
//   const [diarys, setDiarys] = useState([]);
//   const navigate = useNavigate();
//   const [selectedSeq, setSelectedSeq] = useState(null);


//   // 다이어리 리스트
//   useEffect(() => {
//     axios.get("/mypage/getAllDiarys")
//     .then((response) => {
//       console.log("리스트 출력 : ", response.data);
//     })
//     .catch((error) => console.error("리스트 출력 에러 :",  error));
//   }, []);

//   return (
//     <div style={{ display: 'flex' }}>
//       <MyPageSidebar/>
//       <div>
//         <h1>다이어리</h1>
//         <ul>
//           <button>
//             <Link>
//               다이어리 작성
//             </Link>
//           </button>
//           {currentPosts.map(())}
//         </ul>
//       </div>
//     </div>
//   )

// }

// export default History;



