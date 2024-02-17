
// 코드 반환
// 지역 이름이 들어왔을때 지역 이름에 대한 코드를 반환하는 함수 

import styled from "styled-components";
import CategoryTagButton from "../../../ui/categoryTagButton"

// + 데이터 저장해서 categoryCode 처럼 변경 o
// + 서울 click 시 그 안의 시/군/구 나오도록 수정 
// item + code 로만 구성하게 변경 o
// 데이터 누르면 상세페이지 구성 
// 이건 api 받아와야함 클릭시 그 데이터 활용해서 상세페이지에 프롭스 전달
//  > 상세페이지에서는 그 정보를 바탕으로 api 호출

const AreaCodeBlock = styled.div`
    border: 1px solid gray;
    margin: 1em;
    background-color: #e2e2e2;
`;



const AreaCode = ( {onClick} ) => {

    const area = [
        {rnum: 0, code: '', name: '전체'},
        {rnum: 1, code: '1', name: '서울'},
        {rnum: 2, code: '2', name: '인천'},
        {rnum: 3, code: '3', name: '대전'},
        {rnum: 4, code: '4', name: '대구'},
        {rnum: 5, code: '5', name: '광주'},
        {rnum: 6, code: '6', name: '부산'},
        {rnum: 7, code: '7', name: '울산'},
        {rnum: 8, code: '8', name: '세종특별자치시'},
        {rnum: 9, code: '31', name: '경기도'},
        {rnum: 10, code: '32', name: '강원특별자치도'},
        {rnum: 11, code: '33', name: '충청북도'},
        {rnum: 12, code: '34', name: '충청남도'},
        {rnum: 13, code: '35', name: '경상북도'},
        {rnum: 14, code: '36', name: '경상남도'},
        {rnum: 15, code: '37', name: '전북특별자치도'},
        {rnum: 16, code: '38', name: '전라남도'},
        {rnum: 17, code: '39', name: '제주도'}
    ]

    const handleChangeCategory = (sendCategory) => {
        // toursListApi로 값을 전달하는 로직 작성
        console.log("흐음? " , sendCategory)
        onClick(sendCategory)
    }

    return (
        <AreaCodeBlock>
            {area.map((data, index) => (
                <CategoryTagButton key={index} data={data} onClick={handleChangeCategory}/>
                ))}
        </AreaCodeBlock>
    )


}


export default AreaCode;