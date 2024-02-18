import { Link , useNavigate } from "react-router-dom";
import SearchBar from "./searchKeyword/searchBar";
import RecommendPlace from "./recommendPlace/recommendPlace";
import styled from "styled-components";
import { Container } from "reactstrap";


const MainContainer = styled.div`

    .content-center{
        margin-top: 0;
        margin-bottom: 30em;
    }

    .searchBar {
        margin-top: em;
        margin-left: 10em;
        position: absolute;
        z-index: 2;
    }

    .recommendBox {
        margin-top: 26em;
        margin-right: 30em;
        width: 40em;
        height: 50em;
        padding: 20px;
        border-radius: 10px;
        position: absolute;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        z-index: 2;
    }
    
    .recommendBox h2 {
        font-size: 30px;
        margin-bottom: 10px;
        color: white
      }
    
    .recommendBox .content {
        margin: 0;
    }

    .recommendBox h5, p{
        color: white;
    }
`



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
        <MainContainer>

        <div
            className="page-header section-dark"
            style={{
            backgroundImage:
                "url(" + require("assets/img/antoine-barres.jpg") + ")",
            }}
        >
            <div className="filter" />
            <div className="content-center">
            <Container>
                <div className="title-brand">
                <h1 className="presentation-title">Into Korea</h1>
                <div className="fog-low">
                    <img alt="..." src={require("assets/img/fog-low.png")} />
                </div>
                <div className="fog-low right">
                    <img alt="..." src={require("assets/img/fog-low.png")} />
                </div>
                </div>
                {/* <h2 className="presentation-subtitle text-center">
                메인페이지라네
                </h2> */}
            </Container>
            <br/>
            </div>
            <div
            className="moving-clouds"
            style={{
                backgroundImage: "url(" + require("assets/img/clouds.png") + ")",
            }}
            />
            <h6 className="category category-absolute">
            Designed and coded by{" "}
            <Link 
                to ="https://www.creative-tim.com?ref=pkr-index-page"
                target="_blank"
            >
                <img
                alt="..."
                className="creative-tim-logo"
                src={require("assets/img/creative-tim-white-slim2.png")}
                />
            </Link>
                </h6>
            <div className="searchBar">
        <SearchBar onSearch={handleSearch} /><br/>
            </div>
        <div className="recommendBox">
            <h5> 오늘의 추천 TOP5</h5>
            <RecommendPlace />
        </div>
        </div>

        </MainContainer>
    )
}


export default Main;