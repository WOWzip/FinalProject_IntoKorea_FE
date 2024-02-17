// import { useState } from "react";
// import styled from "styled-components";
// import TourHeader from "../tourHeader";
// import TourItem from "../touritem";
// import { Pagination } from "reactstrap";


// const PaginationBox = styled.div`
//     .pagination { 
//         display: flex; 
//         // justify-content: center; 
//         margin-top: 15px;
//     }
//     ul { list-style: none; padding: 0; }
//     ul.pagination li {
//         display: inline-block;
//         width: 30px;
//         height: 30px;
//         border: 1px solid #e2e2e2;
//         display: flex;
//         justify-content: center;
//         align-items: center;
//         font-size: 1rem; 
//     }
//     ul.pagination li:first-child{ border-radius: 5px 0 0 5px; }
//     ul.pagination li:last-child{ border-radius: 0 5px 5px 0; }
//     ul.pagination li a { text-decoration: none; color: #337ab7; font-size: 1rem; }
//     ul.pagination li.active a { color: white; }
//     ul.pagination li.active { background-color: #337ab7; }
//     ul.pagination li a:hover,
//     ul.pagination li a.active { color: blue; }
// `

// const SearchFestivalPage = ({datas, totalData, filter, page1, itemsCountPerPage}) => {

//     const [page, setPage] = useState(page1);
    
//     const data = datas;

//     console.log(data)


//     const handlePageChange = ( page ) =>{ setPage(page)}

// return (
//     <>
//     {/* 리스트 내용  */}
//     <TourHeader totalCount={totalData} a={filter} />
//                     {data.map((data, index) => (
//                             <TourItem key={data.firstimage || index } data={data} />
//                     ))}
    
//     {/* 페이징 */}
//     <PaginationBox>
//         <Pagination
//             // 현재 페이지
//             activePage={page}
//             // 페이지당 아이템 수
//             itemsCountPerPage={itemsCountPerPage}
//             // 
//             totalItemsCount={totalData}
//             // 표시할 페이지 수
//             pageRangeDisplayed={5}
//             // 함수
//             onChange={handlePageChange}>
//         </Pagination>
//     </PaginationBox>
//     </>
// )

// }

// export default SearchFestivalPage;