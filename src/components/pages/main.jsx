import { Link , useNavigate } from "react-router-dom";
import SearchBar from "./searchKeyword/searchBar";
import { useState } from "react";
import RecommendPlace from "./recommendPlace/recommendPlace";


const Main = () => {

    const email = sessionStorage.getItem("email");
    const nickName = sessionStorage.getItem("nickName");
    const provider = sessionStorage.getItem("provider");
    console.log("provider::" , provider)
    const navigate = useNavigate();


    const handleSearch = (term) => {
        // 검색어와 함께 페이지 이동
        navigate("/toursMain", { state: {searchTerm: term}});
    };

    return (
        <>
            <h2>메인페이지입니다</h2>

            <Link to="check">api 체크</Link><br/>
            <Link to="Mypage">마이페이지</Link><br/>
            <Link to="checkData">코드 확인</Link><br/>
            <Link to="tourDetail">여행지 상세페이지</Link><br/>
            <Link to="toursMain">여행지 보기 </Link> <br/>
            <Link to="check">api 체크</Link><br/>
            <Link to="Map">여행 지도</Link><br/>
            <Link to="search">서치 확인</Link><br/>
            <SearchBar onSearch={handleSearch} /><br/>
            <Link to="festival">행사 축제..</Link><br/>
            <RecommendPlace />

            {							
                (email) ?
                    <>
                        {/* 회원 정보 */}
                        <li className="nav-item">
                            <span className="nav-link"> {nickName} 님 반갑습니다 <i className="fab fa-ello"></i> &nbsp; </span>
                        </li>

                        {/* 닉네임 변경 */}
                        <li className="nav-item">
                            <Link className="nav-link" to="/ModifyNickName"> 닉네임 변경 </Link>
                        </li>

                        {/* 비밀번호 변경 */}
                        <li className="nav-item">
                            <Link className="nav-link" to="/CheckPwd?value=modify"> 비밀번호 변경 </Link>
                        </li>

                        {/* 회원 탈퇴 */}
                        <li className="nav-item">
                            <Link className="nav-link" to={(provider !== "none")? "/CheckCode":"/CheckPwd?value=delete"}> 회원탈퇴 </Link>
                        </li>

                        {/* 로그아웃 */}
                        <li className="nav-item">
                            <Link className="nav-link" to="/Logout"><i className="fas fa-sign-out-alt"></i> 로그아웃</Link>
                        </li>

                    </>
                    :
                    <>
                        {/* 로그인 */}
                        <li className="nav-item">
                            <Link className="nav-link" to="/LoginForm">로그인</Link>
                        </li>

                        {/* 회원가입 */}
                        <li className="nav-item">
                            <Link className="nav-link" to="/JoinForm">회원가입</Link>
                        </li>


                        {/* 아이디찾기 */}
                        <li className="nav-item">
                            <Link className="nav-link" to="/FindId">아이디 찾기</Link>
                        </li>

                        {/* 비밀번호찾기 */}
                        <li className="nav-item">
                            <Link className="nav-link" to="/FindPwd">비밀번호 찾기</Link>
                        </li>

                        
                    </>
            }
            
        </>
    )
}


export default Main;