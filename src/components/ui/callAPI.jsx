import axios from "axios";




const CallAPI = async ( link , param ,  setLoading ) => {

    console.log("요청 url " , link)
    console.log("요청 url " , param)

    const APIKEY = process.env.REACT_APP_TOUR_API_KEY;
    const requestURL = `http://apis.data.go.kr/B551011/KorService1/${link}?&serviceKey=${APIKEY}&${param}`




    setLoading(true);

    try {
        const response = await axios.get(requestURL)
        console.log("CallAPI")
        console.log(response)
        return response
    } catch (error) {
        console.log(error)
        return null
    } finally {
        setLoading(false)
    }


    

}

export default CallAPI;