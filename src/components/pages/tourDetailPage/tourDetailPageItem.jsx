import styled from "styled-components";
import DetailIntro1 from "./detailIntro1";
import DetailImage1 from "./detailImage1";

const Container = styled.div`
    margin: auto;
    display: inline-block;
    margin-top: 20px;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 5px;

    // width: auto;
    // margin: auto;
    // margin-top: 20px;
    // padding: 20px;
    // border: 1px solid #ccc;
    // border-radius: 5px;
    height: auto;
    // padding: auto;
    // display: inline-block;

    .titleContainer{
        border-bottom: 3px solid #ccc;
        margin: 1em;

        h2 {
            text-align: center;
            position: relative;
            font-size: 65px;
            font-weight: bold;
            color: black;
            padding-bottom: 0.5em;
        }

        p {
            pont-size: 12px;
            text-align: center;
            color: gray;
            padding-bottom: 10px;
        }

    }

    .imageContainer{
        align-items: center;
        display: flex; /* 내부 요소들을 가운데 정렬하기 위해 flex 사용 */
        justify-content: center; /* 수평 가운데 정렬 */
        align-items: center; /* 수직 가운데 정렬 */
        
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

        margin: 1em 8em;

        
        h2 {
            width: 100%;
            padding: 31px 0 9px;
            margin-top: 0;
            font-size: 24px;
            border-bottom: 2px solid #333;
            font-weight: 800;
            letter-spacing: -1px;
            color: #333;
        }
        
        .content {
            color: #333;
            font-size: 18px;
            line-height: 1.7;
            letter-spacing: -1px;
        }
    }

    .inrInfo {

        margin: 4em 7em;
        width: auto;
        height: auto;
        ul {
            border: 1px solid black;
        }
        
        li {
            float: left;
            width: 50%;
            padding: 15px 0 6px 0;
            display: table;
            font-size: 16px;
            font-weight: 400;
            background: none !important;
        }

        .introBox {
            margin: 1em
            padding: 1em
        }
        
        .introBox strong {
            float: none;
            margin-right: 0;
            position: relative;
            display: table-cell;
            width: 202px;
            padding: 0 0 0 12px;
            font-weight: 700;
            color: #333;
        }

        .introBox span {
            float: none;
            width: auto;
            display: table-cell;
            color: #666;
            padding-right: 20px;
            line-height: 1.4;
            
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
                <h2>{title}</h2>
                <p>{addr1}</p>
            </div>

            {/* 여기에 detailImage1 API 값을 따온 이미지가 들어간 컴포넌트 삽입 */}
            <div className="imageContainer">
                <DetailImage1 contentId={contentid} firstimage={firstimage} />
            </div>
            
            <div className="infoContainer"> 
                <h2>
                    상세정보
                </h2>
                <p className="content">
                    {overview} 
                </p>
            </div>
            

            {/* 여기는 소개정보 detailIntro1 값을 따온 컴포넌트 삽입 , 대신 컴포넌트에 contentid 값 전달 */}
            <div className="inrInfo">
                <ul>
                    <div className="introBox">
                        <li>
                            <strong>문의 및 안내</strong>
                            <span>{tel}</span>
                        </li>
                    </div>
                    <div className="introBox">
                        <li>
                            <strong>주소</strong>
                            <span>{addr1} / {addr2} / ({zipcode})</span>
                        </li>
                    </div>
                    <DetailIntro1 contentId={contentid} contentTypeId={contenttypeid}/>
                </ul>
            </div>

            {/* 추가 안내를 위한 반복정보 detailInfo1 api 을 가져와만든 컴포넌트를 삽입 */}
        </Container>

    )

}


export default TourDetailPageItem;
