
// detailAreaCode.jsx

import styled from "styled-components";
import CategoryTagButton from "../../../ui/categoryTagButton"
import DetailAreaInfo from "./detailAreaInfo";


const DetailAreaCodeBlock = styled.div`
    border: 1px solid gray;
    background-color: #e2e2e2;
`;

// 값 저장한 페이지 작성 및 
const DetailAreaCode = ( {onClick , code}) => {

    const detailArea = DetailAreaInfo(code)

    // detailArea가 배열인지 확인 후 처리
    if (!Array.isArray(detailArea)) {
        console.error("detailArea is not an array:", detailArea);
        return null; // 또는 에러 처리를 수행할 수 있습니다.
    }


    const handleChangeCategory = (sendCategory) => {
        // toursListApi로 값을 전달하는 로직 작성
        console.log(sendCategory)
        onClick(sendCategory)
    }

    return (
        <>
            <DetailAreaCodeBlock>
                {detailArea.map((data, index) => (
                     <CategoryTagButton key={index} data={data} onClick={handleChangeCategory}/>
                    ))}
            </DetailAreaCodeBlock>
        </>
    )

}

export default DetailAreaCode

