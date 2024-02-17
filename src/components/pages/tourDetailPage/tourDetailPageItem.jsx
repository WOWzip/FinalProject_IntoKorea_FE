import styled from "styled-components";
import DetailIntro1 from "./detailIntro1";
import DetailImage1 from "./detailImage1";

const Container = styled.div`
    margin-top: 20px;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 5px;

    .titleContainer{
        border-bottom: 3px solid #ccc;
        margin: 1em;

        h2 {
            text-align: center;
            position: relative;
        }

    }

    .imageContainer{
        display: flex;
        align-items: center;
        
        img {
            max-width: 100%;
            height: auto;
            display: block;
            margin: 0 auto;
        }

    }


    .homepageContainer{
        font-style: italic;
        color: #666;
    }

    .infoContainer {
        h3 {
            color: silver;
            margin: 3em;
            border-bottom: 0.5em solid silver;
            text-align: center;

        }
        
        .content {
            padding: 0.5em 4em;
        }
    }
`



// contentid , 관광 타입등을 활용해 컴포넌트로 값을 뿌리고 각 컴포넌트에서 조건을 걸어 api를 호출할지 여부 결정
// 맞으면 api 호출 후 컴포넌트 리턴
// 틀리면 null 리턴
const TourDetailPageItem = ( {data} ) => {

    console.log("TourDetailPageItem")
    const [item] = data;

    const { contentid, contenttypeid , title , firstimage, firstimage2, homepage, 
        mapx, mapy, mlevel, addr1, addr2, zipcode, areacode, 
        sigungucode, tel, hmpg, cpyrhtDivCd, overview , cat1, cat2, cat3} = item;


    return (
        <Container>
            <div className="titleContainer">
                제목 : <h2>{title}</h2>
            </div>

            {/* 여기에 detailImage1 API 값을 따온 이미지가 들어간 컴포넌트 삽입 */}
            <div className="imageContainer">
                <DetailImage1 contentId={contentid} firstimage={firstimage} />
                <img src={firstimage} alt="대표이미지"/><br/>
                <img src={firstimage2} alt="대표이미지2"/><br/>
                저작권 - {cpyrhtDivCd}
            </div>
            <div className="homepageContainer">
                홈페이지 : {homepage}
            </div>
            <div className="infoContainer"> 
                <h3>
                    상세정보
                </h3>
                <p className="content">
                    {overview} 
                </p>
            </div>
            

            {/* 여기는 소개정보 detailIntro1 값을 따온 컴포넌트 삽입 , 대신 컴포넌트에 contentid 값 전달 */}
            <div className="inrInfo">
                <ul>
                    <li>
                        <strong>문의 및 안내</strong>
                        <span>{tel}</span>
                    </li>
                    <li>
                        <strong>주소</strong>
                        <span>{addr1} / {addr2} / ({zipcode})</span>
                    </li>

                    <DetailIntro1 contentId={contentid} contentTypeId={contenttypeid}/>
                </ul>
            </div>

            <div> 분류 : {areacode} / {sigungucode} / {cat1} / {cat2} / {cat3} </div>
            <div> 홈피 주소 : {hmpg} </div>
            <div> 좌표 - x : {mapx} - y : {mapy} - mlevel : {mlevel} </div>

            {/* 추가 안내를 위한 반복정보 detailInfo1 api 을 가져와만든 컴포넌트를 삽입 */}
        </Container>

    )

}


export default TourDetailPageItem;
