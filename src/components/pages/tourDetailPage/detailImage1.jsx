

// detailImage1.jsx

import CallAPI from "components/ui/callAPI";
import { useEffect, useState } from "react"
import DetailImage1item from "./detailImage1item";




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
                    <>
                    {/* 현재 이미지를 표시하는 DetailImage1item 컴포넌트 */}
                    <DetailImage1item data={images[currentImageIndex]} /><br/>
                    {/* 이전 이미지로 이동하는 버튼 */}
                    <button onClick={previousImage} disabled={currentImageIndex === 0}>Previous</button>
                    {/* 다음 이미지로 이동하는 버튼 */}
                    <button onClick={nextImage} disabled={currentImageIndex === images.length - 1}>Next</button>
                    </>
                ) : (
                    <div>No images available.</div>
                )}

        </>
    )

}

export default DetailImage1