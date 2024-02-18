import axios from "axios";
import { useEffect, useState } from "react";
import TourDetailPageItem from "./tourDetailPageItem";


const TourDetailPageApi = ( {contentid} ) => {

    
    const [ datas, setData ] = useState(null);
    const [ loading, setLoading ] = useState(false);

    const contentId = contentid

    const startTime = new Date();
    

    const key = 'wGgAMNctzAVjo7O4ZlwZPcCNHPr9t8IPlm4lYhfG1RbY79FR2pL%2BnAhWAyP0%2FObPwgvONXIi1Ke1UTRujCO%2Fnw%3D%3D'

    useEffect(() => {

        const fetchData = async () => {
            setLoading(true);
            try {
                const response = await axios.get(
                    // `http://apis.data.go.kr/B551011/KorService1/detailIntro1?serviceKey=${key}&numOfRows=10&pageNo=1&MobileOS=ETC&MobileApp=AppTest&_type=json&contentId=2674675&contentTypeId=15`
                    `http://apis.data.go.kr/B551011/KorService1/detailCommon1?serviceKey=${key}&MobileOS=ETC&MobileApp=AppTest&_type=json&contentId=${contentId}&defaultYN=Y&firstImageYN=Y&areacodeYN=Y&catcodeYN=Y&addrinfoYN=Y&mapinfoYN=Y&overviewYN=Y`
                )
                const endTime = new Date();
                const loadingTime = endTime - startTime;
                console.log(`로딩 시간: ${loadingTime}ms`);
                setData(response.data.response.body.items.item);
                setLoading(false);
            } catch (error) {
                console.log(error)
                setLoading(false);
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


    return (
        <>
        <TourDetailPageItem data={datas} />
        </>
    )

}


export default TourDetailPageApi;