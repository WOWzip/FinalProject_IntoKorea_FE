import styled from "styled-components";
import CategoryTagButton from "../../../ui/categoryTagButton";

const ContentsTypeIdItemBlock = styled.div`
    border: 1px solid gray;
    background-color: #e2e2e2;
`;


const ContentTypeId2 = ( {onClick} ) => {
    const category = [
        {code: '12', name: '관광지'},
        {code: '25', name: '여행코스'},
        {code: '32', name: '숙박'},
        {code: '39', name: '음식점'}
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

export default ContentTypeId2;