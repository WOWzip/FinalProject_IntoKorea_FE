import styled from "styled-components";
import { Link } from "react-router-dom";
import axios from "axios";
import BookmarkButton from "components/ui/bookmarkButton";
import { useEffect, useState } from "react";

const TourItemBlock = styled.div`
    display: flex;
    padding-bottom: 20px;
    margin: 1em 0;
    border-bottom: 1px solid #e6e6e6;

    .firstimage {
        margin-right: 1rem;
        img {
            display: block;
            width: 160px;
            height: 100px;
            object-fit: cover;
        }
    }

    .contents {
        h2{
            margin: 0;
            a{
                color: black;
            }
        }
        p {
            margin: 0;
            line-height: 1.5;
            margin-top: 1rem;
            white-space: normal;
        }
    }

    // &+& {
    //     margin-top: 3rem;
    // }
`;


const TourItem = ({data}) => {
    const { firstimage, title, addr1, zipcode, contentid } = data;

    const email = sessionStorage.getItem("email")

    const emailcontentid = email + contentid;

    const [isBookmarked, setIsBookmarked] = useState(false); // 버튼 색상 상태

    useEffect(() => {
        // 컴포넌트가 마운트될 때 즐겨찾기 색상 처리
        const fetchBookmarkColor = async () => {
            try {
                const response = await axios.post('/mypage/bookmarkColor', { email, contentid });
                if (response.data === 1) {
                    setIsBookmarked(true);
                } else {
                    setIsBookmarked(false);
                }
            } catch (error) {
                console.error("Error fetching bookmark color:", error);
            }
        };

        fetchBookmarkColor(); // 즐겨찾기 색상 처리 함수 호출
    }, [email, contentid]); // email, contentid가 변경될 때마다 재호출

    // const bookmarkHandle = () => {
    //     const newData = { emailcontentid , firstimage, title, addr1, zipcode, contentid, email}
    //     console.log(newData)
    //     axios.post('/mypage/bookmark', newData)
    //     // 즐겨찾기 저장 완료 알람 and 즐찾 완료 별표 등 설정
    // }

    const bookmarkHandle = async () => {
        const newData = { emailcontentid, firstimage, title, addr1, zipcode, contentid, email };
        if(email == null){
            alert("로그인하세요")
            return null;
        }
        try {
            if(isBookmarked === false){
                const response = await axios.post('/mypage/bookmark', newData);
                setIsBookmarked(prevState => !prevState);
                if(response === 1){
                    alert("즐겨찾기가 완료되었습니다.")
                }
            } else{
                const response = await axios.post('/mypage/bookmarkDelete', newData);
                setIsBookmarked(prevState => !prevState);
                if(response === 0){
                    alert("즐겨찾기가 삭제되었습니다.")
                }
            }

            // 즐겨찾기 저장 완료 알람 and 즐찾 완료 별표 등 설정
            console.log("성공")
        } catch (error) {
            console.error("Error bookmarking tour:", error);
        }
        
    };




    return (
        <>
            <TourItemBlock>
                {firstimage ? (
                    <div className="firstimage">
                        <Link to={`/tourDetailPage/${contentid}`}>
                            <img src={firstimage} alt="대표이미지"/>
                        </Link>
                    </div>
                ) : (
                    <div className="firstimage" >
                        <Link to={`/tourDetailPage/${contentid}`}>
                            <img src="/image/한국관광공사-로고-300x162.png" alt="빈 이미지" />
                        </Link>
                    </div>
                )}
                <div className="contents">
                    <Link to={`/tourDetailPage/${contentid}`}>
                        <h2>{title}</h2>
                        <p>{addr1} / {zipcode}</p>
                    </Link>
                </div>
                <div className="keep">
                    <BookmarkButton onClick={bookmarkHandle} isbookmarked={isBookmarked} />
                </div>
            </TourItemBlock>
        </>
        
    )
}


export default TourItem;

