import axios from "axios";
import { useEffect, useState } from "react";



const CheckData = () => {


    const [datas, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const key = 'wGgAMNctzAVjo7O4ZlwZPcCNHPr9t8IPlm4lYhfG1RbY79FR2pL%2BnAhWAyP0%2FObPwgvONXIi1Ke1UTRujCO%2Fnw%3D%3D'
    const areacode = 39;
    
    useEffect(() => {
    const fetchData2 = async () => {
        setLoading(true);
        try {
            const response = await axios.get(`http://apis.data.go.kr/B551011/KorService1/areaCode1?serviceKey=${key}&areaCode=${areacode}&numOfRows=25&pageNo=1&MobileOS=ETC&MobileApp=AppTest&_type=json`);

            
            setData(response)
            console.log(response)
            console.log(response.data.response.body.items.item)
            setLoading(false)
        } catch (error) {
            console.log(error)
            setLoading(false)
        }
    }

    fetchData2();
    }, [] )

    // 대기 중일때
    if(loading){
        return <>대기중 ... </>;
    }

    // 아직 articles 값이 설정되지 않았을 때
    if(!datas){
        return null;
    }

    return (
        <>
        <h2>데이터 콘솔 확인 요망</h2>
        </>
    )
}







export default CheckData;