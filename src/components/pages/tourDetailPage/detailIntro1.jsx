import { useEffect, useState } from "react"
import CallAPI from "../../ui/callAPI";
import DetailIntro1Item from "./detailIntro1Item";


const DetailIntro1 = ( {contentId, contentTypeId} ) => {


    const apiKey = process.env.TOUR_API_KEY;

    const [loading, setLoading] = useState(false);
    const [datas , setData] = useState(null);

    
    const link = "detailIntro1";
    const param = `MobileOS=ETC&MobileApp=AppTest&_type=json&contentId=${contentId}&contentTypeId=${contentTypeId}`
    
    
    // const url = `http://apis.data.go.kr/B551011/KorService1/detailIntro1?&MobileOS=ETC&MobileApp=AppTest&_type=json&contentId=${contentId}&contentTypeId=${contentTypeId}`
    
    
    useEffect(() => {
        const fetchData = async() => {
            const response = await CallAPI(link, param ,setLoading)
            setData(response.data.response.body.items.item)
        }

        fetchData();

    }, [])



    return (
        <>
            <DetailIntro1Item data={datas} contenttypeid={contentTypeId} />
        </>
    )

}

export default DetailIntro1

