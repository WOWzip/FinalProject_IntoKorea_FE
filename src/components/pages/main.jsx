import { Link } from "react-router-dom";

const Main = () => {

    return (
        <>
            <h2>메인페이지입니다</h2>
            <Link to="toursMain">여행지 보기 </Link> <br/>
            <Link to="JoinForm5">회원가입</Link> <br/>
            <Link to="LoginForm">로그인</Link>
            <Link to="toursMain">여행지 보기 </Link>
            <Link to="checkData">코드 확인</Link>
            <Link to="tourDetail">여행지 상세페이지</Link>
        </>
    )
}


export default Main;