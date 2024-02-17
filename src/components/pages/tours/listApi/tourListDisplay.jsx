import styled from "styled-components";
import AreaCode from "../areaCode1/areaCode";
import DetailAreaCode from "../areaCode1/detailAreaCode";
import CategoryCode from "../categoryCode1/categoryCode";
import ContentsTypeId from "../contentsTypeId/contentsTypeId";
import TourHeader from "../tourHeader";
import { useEffect, useState } from "react";
import TourItem from "../touritem";
import Pagination from "react-js-pagination";



const TourListBlock = styled.div`
    box-sizing: border-box;
    padding-bottom: 3rem;
    width: 768px;
    margin: 0 auto;
    margin-top: 2rem;
    @media screen and (max-width: 768px){
        width: 100%;
        padding-left: 1rem;
        padding-right: 1rem;
    }
`;

const PaginationBox = styled.div`
    .pagination { 
        display: flex; 
        // justify-content: center; 
        margin-top: 15px;
    }
    ul { list-style: none; padding: 0; }
    ul.pagination li {
        display: inline-block;
        width: 30px;
        height: 30px;
        border: 1px solid #e2e2e2;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 1rem; 
    }
    ul.pagination li:first-child{ border-radius: 5px 0 0 5px; }
    ul.pagination li:last-child{ border-radius: 0 5px 5px 0; }
    ul.pagination li a { text-decoration: none; color: #337ab7; font-size: 1rem; }
    ul.pagination li.active a { color: white; }
    ul.pagination li.active { background-color: #337ab7; }
    ul.pagination li a:hover,
    ul.pagination li a.active { color: blue; }
`

const TourListDisplay = ({ datas, totalData, page, onPageChange }) => {

    const [areaCode , setAreaCode] = useState("") ;
    const [categoryCode, setCategoryCode] = useState("");
    const [contentsTypeId, setContentsTypeId] = useState("");
    // 시군구 코드
    const [ showDetailAreaCode, setShowDetailAreaCode ] = useState("");
    const [ detailAreaCode, setDetailAreaCode ] = useState("");

    const [filter , setFilter] = useState("")
    const [ areaName , setAreaName] = useState("");

    const itemsCountPerPage = 10;

    useEffect(() => {
        console.log("areaName: ", areaName);
    }, [areaName]);
    
    const handlePageChange = ( pageNumber ) =>{ onPageChange(pageNumber)}


    
    const handleFilterArea = (data) => {
        
        setAreaCode(data.code);
        setAreaName(data.name);

        setDetailAreaCode("");
        setFilter(data.name)
        console.log("체크: ",data)

        const renderDetailAreaCode = (areaCode, areaName) => {
            if (areaCode !== '') {
                return (
                    <DetailAreaCode
                        code={areaCode}
                        area={areaName}
                        onClick={handleFilterDetailArea}
                    />
                );
            } else {
                return null;
            }
        }

        setShowDetailAreaCode(renderDetailAreaCode(data.code, data.name));
    }

    
    const handleFilterDetailArea = (data) => {
        setDetailAreaCode(data.code)
        const fn = `${data.area} ${data.name}`
        console.log("fn : " ,fn)
        setFilter(fn)
    }

    const handleFilterCategory = (data) => {
        setCategoryCode(data.code)
        setFilter(data.name)
    }

    const handleFilterContentsTypeId = (data) => {
        setContentsTypeId(data.code)
        setFilter(data.name)
    }


    return (
        <>  
            <TourListBlock>
                <div>
                    값 확인
                    <h4>areaCode : {areaCode} , categoryCode : {categoryCode} , 
                    contentsTypeId : {contentsTypeId} , detailAreaCode : {detailAreaCode}</h4>
                </div>
                {/* 카테고리 - 버튼을 누르면 버튼의 값으로 api 요청 */}
                <AreaCode onClick={handleFilterArea}/>
                {showDetailAreaCode}
                <CategoryCode onClick={handleFilterCategory}/>
                <ContentsTypeId onClick={handleFilterContentsTypeId} />

                {/* 리스트 내용  */}
                <TourHeader totalCount={totalData} a={filter} />
                    {datas.map((data, index) => (
                            <TourItem key={data.firstimage || index } data={data} />
                    ))}

                {/* 페이징 */}
                <PaginationBox>
                    <Pagination
                        // 현재 페이지
                        activePage={page}
                        // 페이지당 아이템 수
                        itemsCountPerPage={itemsCountPerPage}
                        // 
                        totalItemsCount={totalData}
                        // 표시할 페이지 수
                        pageRangeDisplayed={5}
                        // 함수
                        onChange={handlePageChange}>
                    </Pagination>
                </PaginationBox>
            </TourListBlock>
        </>
    )


}


export default TourListDisplay;