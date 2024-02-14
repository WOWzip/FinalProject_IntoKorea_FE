

// detailIntro1Item.jsx

import styled from "styled-components";

const DetailIntro1ItemContainer = styled.div`

    li {
        text-align: left;
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
        width: 128px;
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

    
`



const DetailIntro1Item = ( {data , contenttypeid } ) => {

    console.log("DetailIntro1Item : " , data)



    if (data !== null){
        const [item] = data;    // 배열을 객체화
        console.log("여기 : ", item)    // 객체 확인
        // 먼저 item 을 나누기 전에 데이터 빈값 제거 하고 데이터를 나눈다.
        // 데이터를 나누고 key 값을 원하는 출력메세지가 있는 값으로 변경
        // 변경 후 key value 속성 지정 후 합침
        // 합친 데이터를 map을 이용해서 return

        // item 의 빈값 삭제
        Object.keys(item).forEach(key => {
            if(item[key] === ''){
                delete item[key]
            }
        })


        // 속성값 명칭 변경 ex) theme > 테마
        const keyMap = [
            // 관광지 정보
            { originalKey: 'infocenter', outputKey: '문의및안내' },
            { originalKey: 'expguide', outputKey: '체험안내' },
            { originalKey: 'parking', outputKey: '주차시설' },
            { originalKey: 'restdate', outputKey: '쉬는날' },
            { originalKey: 'usetime', outputKey: '이용시간' },
            { originalKey: 'useseason', outputKey: '이용시기' },
            
            // 문화 시설
            { originalKey: 'infocenterculture', outputKey: '문의및안내' },
            { originalKey: 'parkingculture', outputKey: '주차시설' },
            { originalKey: 'parkingfee', outputKey: '주차요금' },
            { originalKey: 'restdateculture', outputKey: '쉬는날' },
            { originalKey: 'usefee', outputKey: '이용요금' },
            { originalKey: 'playtime', outputKey: '공연시간' },
            { originalKey: 'eventplace', outputKey: '문의및안내' },

            // 전체결과
            { originalKey: "resultCode", outputKey: "응답결과코드" },
            { originalKey: "resultMsg", outputKey: "응답결과메시지" },
            { originalKey: "numOfRows", outputKey: "한페이지결과수" },
            { originalKey: "pageNo", outputKey: "현재페이지번호" },
            { originalKey: "totalCount", outputKey: "전체결과수" },
            { originalKey: "contentid", outputKey: "콘텐츠ID" },
            { originalKey: "contenttypeid", outputKey: "관광타입ID" },

            // 12 - 관광지
            { originalKey: "accomcount", outputKey: "수용인원" },
            { originalKey: "chkbabycarriage", outputKey: "유모차대여정보" },
            { originalKey: "chkcreditcard", outputKey: "신용카드가능정보" },
            { originalKey: "chkpet", outputKey: "애완동물동반가능정보" },
            { originalKey: "expagerange", outputKey: "체험가능연령" },
            { originalKey: "expguide", outputKey: "체험안내" },
            { originalKey: "heritage1", outputKey: "세계문화유산유무" },
            { originalKey: "heritage2", outputKey: "세계자연유산유무" },
            { originalKey: "heritage3", outputKey: "세계기록유산유무" },
            { originalKey: "infocenter", outputKey: "문의및안내" },
            { originalKey: "opendate", outputKey: "개장일" },
            { originalKey: "parking", outputKey: "주차시설" },
            { originalKey: "restdate", outputKey: "쉬는날" },
            { originalKey: "useseason", outputKey: "이용시기" },
            { originalKey: "usetime", outputKey: "이용시간" },

            // 14 - 문화시설
            { originalKey: "accomcountculture", outputKey: "수용인원" },
            { originalKey: "chkbabycarriageculture", outputKey: "유모차대여정보" },
            { originalKey: "chkcreditcardculture", outputKey: "신용카드가능정보" },
            { originalKey: "chkpetculture", outputKey: "애완동물동반가능정보" },
            { originalKey: "discountinfo", outputKey: "할인정보" },
            { originalKey: "infocenterculture", outputKey: "문의및안내" },
            { originalKey: "parkingculture", outputKey: "주차시설" },
            { originalKey: "parkingfee", outputKey: "주차요금" },
            { originalKey: "restdateculture", outputKey: "쉬는날" },
            { originalKey: "usefee", outputKey: "이용요금" },
            { originalKey: "usetimeculture", outputKey: "이용시간" },
            { originalKey: "scale", outputKey: "규모" },
            { originalKey: "spendtime", outputKey: "관람소요시간" },

            // 15 - 행사/공연/축제
            { originalKey: "agelimit", outputKey: "관람가능연령" },
            { originalKey: "bookingplace", outputKey: "예매처" },
            { originalKey: "discountinfofestival", outputKey: "할인정보" },
            { originalKey: "eventenddate", outputKey: "행사종료일" },
            { originalKey: "eventhomepage", outputKey: "행사홈페이지" },
            { originalKey: "eventplace", outputKey: "행사장소" },
            { originalKey: "eventstartdate", outputKey: "행사시작일" },
            { originalKey: "festivalgrade", outputKey: "축제등급" },
            { originalKey: "placeinfo", outputKey: "행사장위치안내" },
            { originalKey: "playtime", outputKey: "공연시간" },
            { originalKey: "program", outputKey: "행사프로그램" },
            { originalKey: "spendtimefestival", outputKey: "관람소요시간" },
            { originalKey: "sponsor1", outputKey: "주최자정보" },
            { originalKey: "sponsor1tel", outputKey: "주최자연락처" },
            { originalKey: "sponsor2", outputKey: "주관사정보" },
            { originalKey: "sponsor2tel", outputKey: "주관사연락처" },
            { originalKey: "subevent", outputKey: "부대행사" },
            { originalKey: "usetimefestival", outputKey: "이용요금" },

            // 25 - 여행 코스
            { originalKey: "distance", outputKey: "코스총거리" },
            { originalKey: "infocentertourcourse", outputKey: "문의및안내" },
            { originalKey: "schedule", outputKey: "코스일정" },
            { originalKey: "taketime", outputKey: "코스총소요시간" },
            { originalKey: "theme", outputKey: "코스테마" },

            // 28 - 레포츠
            { originalKey: "accomcountleports", outputKey: "수용인원" },
            { originalKey: "chkbabycarriageleports", outputKey: "유모차대여정보" },
            { originalKey: "chkcreditcardleports", outputKey: "신용카드가능정보" },
            { originalKey: "chkpetleports", outputKey: "애완동물동반가능정보" },
            { originalKey: "expagerangeleports", outputKey: "체험가능연령" },
            { originalKey: "infocenterleports", outputKey: "문의및안내" },
            { originalKey: "openperiod", outputKey: "개장기간" },
            { originalKey: "parkingfeeleports", outputKey: "주차요금" },
            { originalKey: "parkingleports", outputKey: "주차시설" },
            { originalKey: "reservation", outputKey: "예약안내" },
            { originalKey: "restdateleports", outputKey: "쉬는날" },
            { originalKey: "scaleleports", outputKey: "규모" },
            { originalKey: "usefeeleports", outputKey: "입장료" },
            { originalKey: "usetimeleports", outputKey: "이용시간" },

            // 32 - 숙박
            { originalKey: "accomcountlodging", outputKey: "수용가능인원" },
            { originalKey: "benikia", outputKey: "베니키아여부" },
            { originalKey: "checkintime", outputKey: "입실시간" },
            { originalKey: "checkouttime", outputKey: "퇴실시간" },
            { originalKey: "chkcooking", outputKey: "객실내취사여부" },
            { originalKey: "foodplace", outputKey: "식음료장" },
            { originalKey: "goodstay", outputKey: "굿스테이여부" },
            { originalKey: "hanok", outputKey: "한옥여부" },
            { originalKey: "infocenterlodging", outputKey: "문의및안내" },
            { originalKey: "parkinglodging", outputKey: "주차시설" },
            { originalKey: "pickup", outputKey: "픽업서비스" },
            { originalKey: "roomcount", outputKey: "객실수" },
            { originalKey: "reservationlodging", outputKey: "예약안내" },
            { originalKey: "reservationurl", outputKey: "예약안내홈페이지" },
            { originalKey: "roomtype", outputKey: "객실유형" },
            { originalKey: "scalelodging", outputKey: "규모" },
            { originalKey: "subfacility", outputKey: "부대시설 (기타)" },
            { originalKey: "barbecue", outputKey: "바비큐장여부" },
            { originalKey: "beauty", outputKey: "뷰티시설정보" },
            { originalKey: "beverage", outputKey: "식음료장여부" },
            { originalKey: "bicycle", outputKey: "자전거대여여부" },
            { originalKey: "campfire", outputKey: "캠프파이어여부" },
            { originalKey: "fitness", outputKey: "휘트니스센터여부" },
            { originalKey: "karaoke", outputKey: "노래방여부" },
            { originalKey: "publicbath", outputKey: "공용샤워실여부" },
            { originalKey: "publicpc", outputKey: "공용 PC실여부" },
            { originalKey: "sauna", outputKey: "사우나실여부" },
            { originalKey: "seminar", outputKey: "세미나실여부" },
            { originalKey: "sports", outputKey: "스포츠시설여부" },
            { originalKey: "refundregulation", outputKey: "환불규정" },

            // 38 - 쇼핑
            { originalKey: "chkbabycarriage shopping", outputKey: "유모차대여정보" },
            { originalKey: "chkcreditcard shopping", outputKey: "신용카드가능정보" },
            { originalKey: "chkpetshopping", outputKey: "애완동물동반가능정보" },
            { originalKey: "culturecenter", outputKey: "문화센터바로가기" },
            { originalKey: "fairday", outputKey: "장서는날" },
            { originalKey: "infocentershopping", outputKey: "문의및안내" },
            { originalKey: "opendateshopping", outputKey: "개장일" },
            { originalKey: "opentime", outputKey: "영업시간" },
            { originalKey: "parkingshopping", outputKey: "주차시설" },
            { originalKey: "restdateshopping", outputKey: "쉬는날" },
            { originalKey: "restroom", outputKey: "화장실설명" },
            { originalKey: "saleitem", outputKey: "판매품목" },
            { originalKey: "saleitemcost", outputKey: "판매품목별가격" },
            { originalKey: "scaleshopping", outputKey: "규모" },
            { originalKey: "shopguide", outputKey: "매장안내" },

            // 39 - 음식점
            { originalKey: "chkcreditcardfood", outputKey: "신용카드가능정보" },
            { originalKey: "discountinfofood", outputKey: "할인정보" },
            { originalKey: "firstmenu", outputKey: "대표메뉴" },
            { originalKey: "infocenterfood", outputKey: "문의및안내" },
            { originalKey: "kidsfacility", outputKey: "어린이놀이방여부" },
            { originalKey: "opendatefood", outputKey: "개업일" },
            { originalKey: "opentimefood", outputKey: "영업시간" },
            { originalKey: "packing", outputKey: "포장가능" },
            { originalKey: "parkingfood", outputKey: "주차시설" },
            { originalKey: "reservationfood", outputKey: "예약안내" },
            { originalKey: "restdatefood", outputKey: "쉬는날" },
            { originalKey: "scalefood", outputKey: "규모" },
            { originalKey: "seat", outputKey: "좌석수" },
            { originalKey: "smoking", outputKey: "금연/흡연여부" },
            { originalKey: "treatmenu", outputKey: "취급메뉴" },
            { originalKey: "lcnsno", outputKey: "인허가번호" }



            



            // 필요한 만큼 계속 추가 가능
        ];
          
        // 변경된 키만 변경하여 새로운 객체 생성
        // 변경되지 않은 키는 newData에 추가하지 않음
        // 필요한 값만 쓸수 있음
        // 굳이 키 벨류 나눠서 속성 추가할 필요가 없어짐
        const newData = {};
        keyMap.forEach(mapping => {
            const { originalKey, outputKey } = mapping;
            if (item.hasOwnProperty(originalKey)) {
                newData[outputKey] = item[originalKey];
            }
        });



        return (
            <DetailIntro1ItemContainer>
                {Object.entries(newData).map(([key, value]) => (
                <div className="introBox" key={key}>
                    <li>
                            <strong>{key}</strong>
                            <span>{value}</span>
                    </li>  
                </div>
                ))}
            </DetailIntro1ItemContainer>
        )
    }







}


export default DetailIntro1Item;