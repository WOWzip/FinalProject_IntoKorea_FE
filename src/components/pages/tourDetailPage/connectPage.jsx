import { useParams } from "react-router-dom";
import TourDetailPageApi from "./tourDetailPageApi"


const ConnectPage = () => {

    const { contentid } = useParams();

    return (
        <TourDetailPageApi contentid={contentid}/>
    )
}


export default ConnectPage;