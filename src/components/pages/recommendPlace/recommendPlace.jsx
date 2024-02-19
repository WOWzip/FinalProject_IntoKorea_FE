
import CallAPI from "components/ui/callAPI";
import { useEffect, useState } from "react"
import RecommendPlaceItem from "./recommendPlaceItem";

const RecommendPlace = () => {
    

    const [datas, setData] = useState(null)
    const [loading, setLoading] = useState(false);
    const min = 1;
    const max = 700;
    const page = Math.floor(Math.random() * (max - min + 1)) + min;

    useEffect(() => {
            const link = "areaBasedList1";
            const param = `numOfRows=5&pageNo=${page}&MobileOS=ETC&MobileApp=AppTest&_type=json&listYN=Y&arrange=Q&contentTypeId=12&areaCode=&sigunguCode=&cat1=&cat2=&cat3=`

            const fetchData = async() => {
                const response = await CallAPI(link, param ,setLoading)
                // if (response.data.response.body.items.item !== null) {
                //     setData(response.data.response.body.items.item);
                //     console.log(response)
                // }
                // if (response.data && response.data.response && response.data.response.body && response.data.response.body.items && response.data.response.body.items.item !== null) {
                if (response !== null) {
                    setData(response.data.response.body.items.item);
                    console.log(response);
                } else {
                    console.log("API response does not contain expected data");
                }
    
            }
            fetchData();
    
    },[])

    if(loading){
        return <>대기중 ... </>;
    }

    // 아직 datas 값이 설정되지 않았을 때
    if(!datas){
        return <div>값이 없습니다.</div>;
    }


    
    
    return (
        <>
        {datas.map((data, index) => (
            <>
            {/* <RecommendPlaceItem key={data.firstimage || index } data={data} index={index}/> */}
            <RecommendPlaceItem key={index} data={data} index={index}/>
            </>
            ))}
        </>
    )


}

export default RecommendPlace;

