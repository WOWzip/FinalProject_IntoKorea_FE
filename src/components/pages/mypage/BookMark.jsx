import axios from "axios";
import MyPageSidebar from "./ui/MyPageSidebar";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import TourItem from "../tours/touritem";

const Container = styled.div`
    display: flex;
`;

const PageContent = styled.div`
    flex-grow: 1;
`;

const Title = styled.h1`
    margin-bottom: 20px;
`;

const TextContainer = styled.div`
    display: flex;
    align-items: center;
`;

const ThumbnailImage = styled.img`
    width: 100px;
    height: auto;
    margin-right: 20px;
`;

const TextContent = styled.div`
    display: flex;
    flex-direction: column;
`;

const StrongTitle = styled.strong`
    font-weight: bold;
`;

const Address = styled.p`
    margin-top: 5px;
    color: #555;
`;

const BookMark = () => {

    
    
    
    
    const [loading, setLoading] = useState(false);
    const [datas , setData] = useState(null);
    
    
    
    useEffect(() => {
        const email = sessionStorage.getItem("email")
        console.log("즐찾 이메일 : " , email)
        
        const fetchData = async() => {
            try {
                setLoading(true);
                const response = await axios.post('/mypage/bookmarkList', {email})
                setData(response.data)
                console.log("response : " , response.data)
            
                setLoading(false)
            } catch (error) {
                console.log(error)
                setLoading(false)
            }
        }

        fetchData();

    }, [])

    // 대기 중일때
    if(loading){
        return <>대기중 ... </>;
    }

    // 아직 datas 값이 설정되지 않았을 때
    if(!datas){
        return null;
    }

    console.log(typeof(datas))

    return (
        <>
            <Container>
                <MyPageSidebar />
                <PageContent className="qna-page-content">
                    <Title>즐겨찾기</Title>
                    <div>
                        <div className="textarea">
                            <TextContainer>
                                {/* <ThumbnailImage src="이미지 URL" alt="명동성당" /> */}
                                <TextContent>
                                    <StrongTitle>명동성당</StrongTitle>
                                    <Address>서울특별시 중구 명동</Address>
                                </TextContent>
                            </TextContainer>
                        </div>
                    </div>
            {datas.map((data, index) => (
                <TextContainer key={index}>
                {data.firstimage ? (
                    <Link to={`/tourDetailPage/${data.contentid}`}>
                        <ThumbnailImage src={data.firstimage} alt={data.title} />
                    </Link>
                ) : (
                    <Link to={`/tourDetailPage/${data.contentid}`}>
                        <ThumbnailImage src="/image/한국관광공사-로고-300x162.png" alt="빈 이미지" />
                    </Link>
                )}
                <div className="contents">
                    <Link to={`/tourDetailPage/${data.contentid}`}>
                        <StrongTitle>{data.title}</StrongTitle>
                        <Address>{data.addr1} / {data.zipcode}</Address>
                    </Link>
                </div>
                </TextContainer>
            ))}
            {datas.map((data, index) => (
                <TourItem key={data.firstimage || index } data={data} />
        ))}
                </PageContent>
            </Container>
            </>
    )


}



export default BookMark;