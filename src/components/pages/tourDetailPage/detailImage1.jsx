

// detailImage1.jsx

import CallAPI from "components/ui/callAPI";
import { useEffect, useState } from "react"
import DetailImage1item from "./detailImage1item";




const DetailImage1 = ( {contentId} ) => {

    const apiKey = process.env.TOUR_API_KEY;

    const [loading, setLoading] = useState(false);
    const [images , setImages] = useState([]);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    
    const link = "detailImage1";
    const param = `MobileOS=ETC&MobileApp=AppTest&_type=json&contentId=${contentId}&imageYN=Y&subImageYN=Y`

    useEffect(() => {
        const fetchData = async() => {
            console.log("detailImage1")
            console.log("contentId : " , contentId)
            const response = await CallAPI(link, param ,setLoading)
            if (response && response.data && response.data.response && response.data.response.body && response.data.response.body.items && response.data.response.body.items.item) {
                setImages(response.data.response.body.items.item);
              }
            console.log("response1 : " , response.data.response.body.items.item)
        }

        fetchData();

    }, [contentId])

    const nextImage = () => {
        setCurrentImageIndex((prevIndex) => Math.min(prevIndex + 1, images.length - 1));
      };
    
      const previousImage = () => {
        setCurrentImageIndex((prevIndex) => Math.max(prevIndex - 1, 0));
      };
    
      if (loading) {
        return <div>Loading...</div>;
      }



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