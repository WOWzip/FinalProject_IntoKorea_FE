import { Link } from "react-router-dom";

function Header(props){
    return(
        <>
            <h1>헤더입니다.</h1>
            <Link to="/">메인페이지로</Link>
        </>
    )
}


export default Header;