import { useState } from "react";
import styled from "styled-components";

const StyledButton = styled.button`
    padding: 5px 10px;
    height: auto;
    border-top-left-radius: 35px;
    border-top-right-radius: 35px;
    border-bottom-left-radius: 35px;
    border-bottom-right-radius: 35px;
    background-color: ${({ active }) => (active ? "blue" : "white")}; // 활성화 상태에 따라 배경색 변경
`;

const CategoryTagButton = ({data, onClick}) => {
    const {code, name } = data;
    const [isActive, setIsActive] = useState(false); // 버튼의 활성화 상태를 관리하는 상태

    const handleClick = () => {
        console.log("카테고리 아이템 코드 : " , code)
        console.log("카테고리 data : " , data)
        setIsActive(!isActive); // 클릭할 때마다 활성화 상태를 토글
        onClick(data);
    }


    return (
        <>
            <StyledButton active={isActive} onClick={handleClick} data={data}>
                {name}
            </StyledButton>
        </>
    )

}

export default CategoryTagButton;