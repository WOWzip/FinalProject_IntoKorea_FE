

// bookmarkButton.jsx

import { useState } from "react";
import styled from "styled-components";
// import bookmarkOn from "./image/bookmark/bookmarkOn.png"; // 별표 이미지 경로 설정
// import bookmarkOff from "..//image/bookmark/bookmarkOff.png"; // 색이 없는 별표 이미지 경로 설정


// background-image: url('your-image-url.jpg');
const StyledButton = styled.button`
    background-size: cover;
    width: 50px;
    height: 50px;
    border: none;
    cursor: pointer;
    background-image: ${props => props.isBookmarked ? `url(image/bookmark/bookmarkOn.png)`: `url(image/bookmark/bookmarkOff.png)`};

`

const BookmarkButton = ({onClick, isBookmarked}) => {


    // const buttonColor = isBookmarked ? "green" : "red" ;

    // if(isBookmarked === true) {
    //     const color = "green";
    // } else {
    //     const color = "red";
    // }

    const [isFavorite, setIsbookmarked] = useState(isBookmarked);

    const handleClick = () => {
        setIsbookmarked(!isFavorite);
        onClick && onClick();
    };




    return (
        <StyledButton onClick={handleClick} isBookmarked={isBookmarked}></StyledButton>
    )


}



export default BookmarkButton;