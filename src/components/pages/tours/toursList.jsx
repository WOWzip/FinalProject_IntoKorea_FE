// toursList.jsx

import { useEffect, useState } from "react";
import SearchBar from "../searchKeyword/searchBar";
import ToursListApi from "./toursListApi";
import { useLocation } from "react-router-dom";




const ToursList = () => {
    
    const location = useLocation(); // useLocation 사용
    
    const a = location.state?.searchTerm; // 수정: 옵셔널 체이닝 연산자 사용하여 state 읽기
    const [searchTerm, setSearchTerm] = useState(a);
    console.log("a : " ,a)

    // 검색어를 초기화
    // useEffect(() => {s
    //     if (a) {
    //         handleSearch(a)
    //     }
    // }, [a]);


    const handleSearch = (term) => {
        setSearchTerm(term);
    };

    return (
        <>
        <div className="toursListBox">
            <SearchBar onSearch={handleSearch} />
            <ToursListApi keyword={searchTerm}/>
        </div>

        </>
    )

}


export default ToursList;