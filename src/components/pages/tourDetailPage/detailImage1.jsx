

// detailImage1.jsx

import CallAPI from "components/ui/callAPI";
import { useEffect, useState } from "react"
import DetailImage1item from "./detailImage1item";
import styled from "styled-components";

const ImageBox = styled.div`

    position: relative; /* 컨테이너에 상대적 위치 지정 */
    display: flex; /* 내부 요소들을 가운데 정렬하기 위해 flex 사용 */
    justify-content: center; /* 수평 가운데 정렬 */
    align-items: center; /* 수직 가운데 정렬 */


    .button-prev,
    .button-next {
        position: absolute; /* 버튼에 절대적 위치 지정 */
        top: 50%; /* 상위 컨테이너의 중앙으로 정렬 */
        transform: translateY(-50%); /* 수직 정렬 */
        width: 40px;
        height: 40px;
        font-size: 0;
        text-indent: -9999px;
        cursor: pointer;
        border: none;
        background-color: transparent;
        z-index: 1; /* 이미지 위로 버튼을 올립니다. */
    }

    .button-prev {
        left: 10px; /* 왼쪽에 배치 */
        background-image: url(../image/sub/btn_photo_prev.png);
        opacity: ${({ disabled }) => (disabled ? 0.5 : 1)}; /* 비활성화 시 투명도 조절 */
        cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")}; /* 비활성화 시 커서 변경 */
    }

    .button-next {
        right: 10px; /* 오른쪽에 배치 */
        background-image: url(../image/sub/btn_photo_next.png);
    }

    .image {
        display: block;
        width: 100%; /* 이미지를 부모 컨테이너에 맞게 크기 조정 */
        height: auto; /* 비율 유지를 위해 높이 자동 설정 */
    }
`;


const DetailImage1 = ( {contentId, firstimage} ) => {

    const apiKey = process.env.TOUR_API_KEY;

    const [loading, setLoading] = useState(false);
    const [images , setImages] = useState([]);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    
    const link = "detailImage1";
    const param = `MobileOS=ETC&MobileApp=AppTest&_type=json&contentId=${contentId}&imageYN=Y&subImageYN=Y`
    const firima = {originimgurl: firstimage ,serialnum: contentId }
    

    useEffect(() => {
        const fetchData = async() => {
            console.log("detailImage1")
            console.log("contentId : " , contentId)
            const response = await CallAPI(link, param ,setLoading)
            if (response && response.data && response.data.response && response.data.response.body && response.data.response.body.items && response.data.response.body.items.item) {
                const image = response.data.response.body.items.item;
                setImages(response.data.response.body.items.item);
                console.log("이미지,..! " , image)
                if (image.length > 0) {
                    setImages([firima, ...image]); // 첫 번째 요소로 firima를 추가하여 이미지 배열을 설정합니다.
                } else {
                    setImages([firima]); // 이미지가 없는 경우에도 firima를 단독으로 설정합니다.
                }
            }
        }

        fetchData();

    }, [])


    const nextImage = () => {
        setCurrentImageIndex((prevIndex) => Math.min(prevIndex + 1, images.length - 1));
    };
    
    const previousImage = () => {
    setCurrentImageIndex((prevIndex) => Math.max(prevIndex - 1, 0));
    };

    if (loading) {
    return <div>Loading...</div>;
    }

    console.log("hi : " , images)

    return (
        <>
            {/* {datas? (
                datas.map((data, index) => (
                    <DetailImage1item key={data.serialnum || index} data={data} />
                ))
            ) : (
                <div> Loading...</div>
            )} */}

            {images.length > 0 ? (
                    <ImageBox>
                    {/* 현재 이미지를 표시하는 DetailImage1item 컴포넌트 */}
                    <DetailImage1item data={images[currentImageIndex]} /><br/>
                    {/* 이전 이미지로 이동하는 버튼 */}
                    <button className="button-prev" onClick={previousImage} disabled={currentImageIndex === 0}>Previous
                    </button>
                    {/* 다음 이미지로 이동하는 버튼 */}
                    <button className="button-next" onClick={nextImage} disabled={currentImageIndex === images.length - 1}>Next</button>
                    </ImageBox>
                ) : (
                    <ImageBox>
                        <img src="/image/koreaTourismOrganijationLogo.png" alt="빈 이미지" />
                    </ImageBox>
                )}

        </>
    )

}

export default DetailImage1