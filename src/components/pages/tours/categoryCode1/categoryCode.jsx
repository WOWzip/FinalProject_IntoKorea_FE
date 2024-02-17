import styled from "styled-components";
import CategoryTagButton from "../../../ui/categoryTagButton";

const CategoryCodeBlock = styled.div`
    border: 1px solid gray;
    margin: 1em;
    background-color: #e2e2e2;
`;

const CategoryCode = ( {onClick} ) => {
    const category = [
        {code: '', name: '전체', rnum: 0},
        {code: 'A01', name: '자연', rnum: 1},
        {code: 'A02', name: '인문(문화/예술/역사)', rnum: 2},
        {code: 'A03', name: '레포츠', rnum: 3},
        {code: 'A04', name: '쇼핑', rnum: 4},
        {code: 'A05', name: '음식', rnum: 5},
        // {code: 'B02', name: '숙박', rnum: 6},
        {code: 'C01', name: '추천코스', rnum: 7}
    ]

    const handleChangeCategory = (sendCategory) => {
        // toursListApi로 값을 전달하는 로직 작성
        onClick(sendCategory)
    }

    return (
        <CategoryCodeBlock>
            {category.map((data, index) => (
                <CategoryTagButton key={index} data={data} onClick={handleChangeCategory}/>
                ))}
        </CategoryCodeBlock>
    )
}

export default CategoryCode;