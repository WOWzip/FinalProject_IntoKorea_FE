

// tourCategory.jsx

import styled from "styled-components";
import AreaCode from "./areaCode1/areaCode";
import CategoryCode from "./categoryCode1/categoryCode";
import ContentsTypeId from "./contentsTypeId/contentsTypeId";
import DetailAreaCode from "./areaCode1/detailAreaCode";
import { useEffect, useState } from "react";

const CategoryContainer = styled.div`
    position: relative;
    width: 768px;
    padding-right: 30px;
    box-sizing: border-box;
`

const CategoryH2 = styled.h2`
    overflow: hidden;
    font-weight: 800;
    color: #333;
    font-size: 36px;
    letter-spacing: -1px;
    word-break: keep-all;
`

const TotalCheckBox = styled.div`
    position: relative;
    width: 768px;
    padding: 15px 0 13px;
    font-weight: 700;
    border-top: 1px solid #999;
    border-bottom: 1px solid #999;
`

const TotalCheckStrong = styled.strong`
    font-weight: 700;
    font-size: 18px;
    color: #000;
`


const TourHeader = ( {totalCount , a}) =>  {

    const ab = a;
    
    // const [t, setT] = useState([]);
    
    // useEffect(() => {
    //     if (a !== null){
            
    //         setT(prevT => prevT + (a.name + " "))
    //         // setT(prevT => [...prevT , a.name] )
    //     }
    // }, [a])
    
    
    // console.log("여기111111111111 ", t)

    return (
        <>
            <CategoryContainer>
                <CategoryH2>
                    {ab}
                </CategoryH2>
            </CategoryContainer>
            <TotalCheckBox>
                <TotalCheckStrong>
                    총 {totalCount}건
                </TotalCheckStrong>
            </TotalCheckBox>
        </>
    )
}

export default TourHeader;