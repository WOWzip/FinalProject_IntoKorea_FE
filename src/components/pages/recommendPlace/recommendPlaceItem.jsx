import { Link } from "react-router-dom"


const RecommendPlaceItem = ({data, index}) => {

    const { title, addr1, zipcode, contentid } = data;


    return (
        <div className="content">
                    <Link to={`/tourDetailPage/${contentid}`}>
                        <h2>{index +1}.{title}</h2>
                        <p>{addr1}</p>
                    </Link>
                </div>
    )
}

export default RecommendPlaceItem