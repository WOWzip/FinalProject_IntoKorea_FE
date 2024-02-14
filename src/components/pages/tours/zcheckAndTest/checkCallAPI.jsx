import { useEffect, useState } from "react"
import CallAPI from "../../../ui/callAPI";


const CheckCallAPI = () => {

    const apiKey = process.env.TOUR_API_KEY;

    const [loading, setLoading] = useState(false);
    const [datas , setData] = useState(null);

    const url = `http://apis.data.go.kr/B551011/KorService1/detailCommon1?serviceKey=${apiKey}&MobileOS=ETC&MobileApp=AppTest&_type=json&contentId=2674675&defaultYN=Y&firstImageYN=Y&areacodeYN=Y&catcodeYN=Y&addrinfoYN=Y&mapinfoYN=Y&overviewYN=Y`


    useEffect(() => {
        const fetchData = async() => {
            const response = await CallAPI(url ,setLoading)
            setData(response)
            console.log("datas : " , datas)
            console.log("response : " , response)
        }

        fetchData();

    }, [])


    return (
        <>
        테스트입니다.
        </>
    )

}

export default CheckCallAPI