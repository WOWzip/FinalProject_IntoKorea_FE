import MyPageSidebar from "../../MyPageSidebar";
import React from "react";
import styled from "styled-components";
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

const Keep = () => {
    return (
        <Container>
            <MyPageSidebar />
            <PageContent className="qna-page-content">
                <Title>즐겨찾기</Title>
                <div>
                    <div className="textarea">
                        <TextContainer>
                            <ThumbnailImage src="이미지 URL" alt="명동성당" />
                            <TextContent>
                                <StrongTitle>명동성당</StrongTitle>
                                <Address>서울특별시 중구 명동</Address>
                            </TextContent>
                        </TextContainer>
                    </div>
                </div>
            </PageContent>
        </Container>
    );
}

export default Keep;