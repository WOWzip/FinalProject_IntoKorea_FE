

// tourCategory.jsx

import styled from "styled-components";

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



const TourCategory = () =>  {

    return (
        <>
            <CategoryContainer>
                <CategoryH2>
                    전체
                </CategoryH2>
            </CategoryContainer>
            <TotalCheckBox>
                <TotalCheckStrong>
                    총 100건
                </TotalCheckStrong>
            </TotalCheckBox>
        </>
    )
}

export default TourCategory;