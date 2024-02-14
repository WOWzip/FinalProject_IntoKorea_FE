import { Link } from "react-router-dom";

const Main = () => {

    return (
        <>
            <h2>메인페이지입니다</h2>
            <Link to="toursMain">여행지 보기 </Link>
            <Link to="Mypage">마이페이지</Link>
            <Link to="checkData">코드 확인</Link>
            <Link to="tourDetail">여행지 상세페이지</Link>
            <Link to="toursMain">여행지 보기 </Link><br/>
            <Link to="checkData">코드 확인</Link><br/>
            <Link to="tourDetail">여행지 상세페이지</Link><br/>
            <Link to="check">api 체크</Link>
        </>
    )
}


export default Main;