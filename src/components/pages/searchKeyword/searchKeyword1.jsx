

// searchKeyword1.jsx
// 키워드 검색 조회

const { default: CallAPI } = require("components/ui/callAPI");
const { useState, useEffect } = require("react");
const { default: TourItem } = require("../tours/touritem");


const SearchKeyword1 = (keyword) => {

    const [loading, setLoading] = useState(false);
    const [datas , setData] = useState([]);

    keyword = "강원"

    
    const link = "searchKeyword1";
    const param = `MobileOS=ETC&MobileApp=AppTest&_type=json&keyword=${keyword}&numOfRows=10&pageNo=1`
    

    useEffect(() => {
        const fetchData = async() => {
            const response = await CallAPI(link, param ,setLoading)
            setData(response.data.response.body.items.item);
            console.log(response)

        }

        fetchData();

    }, [])


    if (loading) {
        return <div>Loading...</div>;
    }

    if(!datas){
        return null;
    }

    return (
        <>
            {datas.map((data, index) => (
                            <TourItem key={data.firstimage || index } data={data} />
                    ))}
        </>
    )
    

}


export default SearchKeyword1;