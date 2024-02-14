import styled from "styled-components";
import { Link } from "react-router-dom";
import TourDetailPageApi from "../tourDetailPage/tourDetailPageApi";

const TourItemBlock = styled.div`
    display: flex;
    padding-bottom: 20px;
    margin: 1em 0;
    border-bottom: 1px solid #e6e6e6;

    .firstimage {
        margin-right: 1rem;
        img {
            display: block;
            width: 160px;
            height: 100px;
            object-fit: cover;
        }
    }

    .contents {
        h2{
            margin: 0;
            a{
                color: black;
            }
        }
        p {
            margin: 0;
            line-height: 1.5;
            margin-top: 1rem;
            white-space: normal;
        }
    }

    // &+& {
    //     margin-top: 3rem;
    // }
`;


const TourItem = ({data}) => {
    const { firstimage, title, addr1, zipcode, contentid } = data;


    return (
        <>
            <TourItemBlock>
                {firstimage ? (
                    <div className="firstimage">
                        <Link to={`/tourDetailPage/${contentid}`}>
                            <img src={firstimage} alt="대표이미지"/>
                        </Link>
                    </div>
                ) : (
                    <div className="firstimage" >
                        <Link to={`/tourDetailPage/${contentid}`}>
                            <img src="/image/한국관광공사-로고-300x162.png" alt="빈 이미지" />
                        </Link>
                    </div>
                )}
                <div className="contents">
                    <Link to={`/tourDetailPage/${contentid}`}>
                        <h2>{title}</h2>
                        <p>{addr1} / {zipcode}</p>
                    </Link>
                </div>
            </TourItemBlock>
        </>
        
    )
}


export default TourItem;

