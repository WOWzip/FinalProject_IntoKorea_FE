import styled from "styled-components";
import CategoryTagButton from "../../../ui/categoryTagButton";

const ContentsTypeIdItemBlock = styled.div`
    // border: 1px solid gray;
    margin: 1em;
    // background-color: #e2e2e2;
`;


const ContentsTypeId = ( {onClick} ) => {
    const category = [

        {code: '', name: '전체'},
        {code: '12', name: '관광지'},
        {code: '14', name: '문화시설'},
        {code: '15', name: '행사/공연/축제'},
        {code: '25', name: '여행코스'},
        // {code: '28', name: '레포츠'},
        {code: '32', name: '숙박'},
        // {code: '38', name: '쇼핑'},
        // {code: '39', name: '음식점'}
    ]

    const handleChangeCategory = (sendCategory) => {
        // toursListApi로 값을 전달하는 로직 작성
        onClick(sendCategory)
    }

    return (
        <ContentsTypeIdItemBlock>
            {category.map((data, index) => (
                <CategoryTagButton key={index} data={data} onClick={handleChangeCategory}/>
                ))}
        </ContentsTypeIdItemBlock>
    )
}

export default ContentsTypeId;