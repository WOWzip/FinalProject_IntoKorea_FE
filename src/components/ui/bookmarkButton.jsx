

// bookmarkButton.jsx

import styled from "styled-components";


// background-image: url('your-image-url.jpg');
const StyledButton = styled.button`
    background-size: cover;
    width: 100px;
    height: 100px;
    border: none;
    cursor: pointer;
    background-color: ${props => props.isbookmarked ? "green" : "red"};

`

const BookmarkButton = ({onClick, isbookmarked}) => {

    // const buttonColor = isBookmarked ? "green" : "red" ;

    // if(isBookmarked === true) {
    //     const color = "green";
    // } else {
    //     const color = "red";
    // }




    return (
        <StyledButton onClick={onClick} isBookmarked={isbookmarked}>즐겨찾기</StyledButton>
    )


}



export default BookmarkButton;