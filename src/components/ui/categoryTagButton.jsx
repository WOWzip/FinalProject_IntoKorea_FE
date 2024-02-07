import styled from "styled-components";

const StyledButton = styled.button`
    padding: 5px 10px;
    height: auto;
    border-top-left-radius: 35px;
    border-top-right-radius: 35px;
    border-bottom-left-radius: 35px;
    border-bottom-right-radius: 35px
`;

const CategoryTagButton = ({data, onClick}) => {
    const {code, name } = data;

    const handleClick = () => {
        console.log("카테고리 아이템 코드 : " , code)
        console.log("카테고리 data : " , data)
        onClick(code);
    }


    return (
        <>
            <StyledButton onClick={handleClick} code={code}>
                {name}
            </StyledButton>
        </>
    )

}

export default CategoryTagButton;