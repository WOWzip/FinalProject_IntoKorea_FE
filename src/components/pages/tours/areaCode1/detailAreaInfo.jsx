

const DetailAreaInfo = (code) => {

    const seoul = [
        {rnum: 0, code: '', name: '전체'},
        {rnum: 1, code: '1', name: '강남구'},
        {rnum: 2, code: '2', name: '강동구'},
        {rnum: 3, code: '3', name: '강북구'},
        {rnum: 4, code: '4', name: '강서구'},
        {rnum: 5, code: '5', name: '관악구'},
        {rnum: 6, code: '6', name: '광진구'},
        {rnum: 7, code: '7', name: '구로구'},
        {rnum: 8, code: '8', name: '금천구'},
        {rnum: 9, code: '9', name: '노원구'},
        {rnum: 10, code: '10', name: '도봉구'},
        {rnum: 11, code: '11', name: '동대문구'},
        {rnum: 12, code: '12', name: '동작구'},
        {rnum: 13, code: '13', name: '마포구'},
        {rnum: 14, code: '14', name: '서대문구'},
        {rnum: 15, code: '15', name: '서초구'},
        {rnum: 16, code: '16', name: '성동구'},
        {rnum: 17, code: '17', name: '성북구'},
        {rnum: 18, code: '18', name: '송파구'},
        {rnum: 19, code: '19', name: '양천구'},
        {rnum: 20, code: '20', name: '영등포구'},
        {rnum: 21, code: '21', name: '용산구'},
        {rnum: 22, code: '22', name: '은평구'},
        {rnum: 23, code: '23', name: '종로구'},
        {rnum: 24, code: '24', name: '중구'},
        {rnum: 25, code: '25', name: '중랑구'}
    ]

    const incheon = [
        {rnum: 0, code: '', name: '전체'},
        {rnum: 1, code: '1', name: '강화군'},
        {rnum: 2, code: '2', name: '계양구'},
        {rnum: 3, code: '3', name: '미추홀구'},
        {rnum: 4, code: '4', name: '남동구'},
        {rnum: 5, code: '5', name: '동구'},
        {rnum: 6, code: '6', name: '부평구'},
        {rnum: 7, code: '7', name: '서구'},
        {rnum: 8, code: '8', name: '연수구'},
        {rnum: 9, code: '9', name: '옹진군'},
        {rnum: 10, code: '10', name: '중구'}
    ]

    const daejeon = [
        {rnum: 0, code: '', name: '전체'},
        {rnum: 1, code: '1', name: '대덕구'},
        {rnum: 2, code: '2', name: '동구'},
        {rnum: 3, code: '3', name: '서구'},
        {rnum: 4, code: '4', name: '유성구'},
        {rnum: 5, code: '5', name: '중구'},
    ]

    const daegu = [
        {rnum: 0, code: '', name: '전체'},
        {rnum: 1, code: '1', name: '남구'},
        {rnum: 2, code: '2', name: '달서구'},
        {rnum: 3, code: '3', name: '달성군'},
        {rnum: 4, code: '4', name: '동구'},
        {rnum: 5, code: '5', name: '북구'},
        {rnum: 6, code: '6', name: '서구'},
        {rnum: 7, code: '7', name: '수성구'},
        {rnum: 8, code: '8', name: '중구'},
        {rnum: 9, code: '9', name: '군위군'}
    ]

    const gwangju = [
        {rnum: 0, code: '', name: '전체'},
        {rnum: 1, code: '1', name: '광산구'},
        {rnum: 2, code: '2', name: '남구'},
        {rnum: 3, code: '3', name: '동구'},
        {rnum: 4, code: '4', name: '북구'},
        {rnum: 5, code: '5', name: '서구'}
    ]

    const busan = [
        {rnum: 0, code: '', name: '전체'},
        {rnum: 1, code: '1', name: '강서구'},
        {rnum: 2, code: '2', name: '금정구'},
        {rnum: 3, code: '3', name: '기장군'},
        {rnum: 4, code: '4', name: '남구'},
        {rnum: 5, code: '5', name: '동구'},
        {rnum: 6, code: '6', name: '동래구'},
        {rnum: 7, code: '7', name: '부산진구'},
        {rnum: 8, code: '8', name: '북구'},
        {rnum: 9, code: '9', name: '사상구'},
        {rnum: 10, code: '10', name: '사하구'},
        {rnum: 11, code: '11', name: '서구'},
        {rnum: 12, code: '12', name: '수영구'},
        {rnum: 13, code: '13', name: '연제구'},
        {rnum: 14, code: '14', name: '영도구'},
        {rnum: 15, code: '15', name: '중구'},
        {rnum: 16, code: '16', name: '해운대구'}
    ]

    const ulsan = [
        {rnum: 0, code: '', name: '전체'},
        {rnum: 1, code: '1', name: '중구'},
        {rnum: 2, code: '2', name: '남구'},
        {rnum: 3, code: '3', name: '동구'},
        {rnum: 4, code: '4', name: '북구'},
        {rnum: 5, code: '5', name: '울주군'}
    ]

    const sejong = [
        {rnum: 0, code: '', name: '전체'},
        {rnum: 1, code: '1', name: '세종특별자치시'}
    ]

    const gyeonggi = [
        {rnum: 0, code: '', name: '전체'},
        {rnum: 1, code: '1', name: '가평군'},
        {rnum: 2, code: '2', name: '고양시'},
        {rnum: 3, code: '3', name: '과천시'},
        {rnum: 4, code: '4', name: '광명시'},
        {rnum: 5, code: '5', name: '광주시'},
        {rnum: 6, code: '6', name: '구리시'},
        {rnum: 7, code: '7', name: '군포시'},
        {rnum: 8, code: '8', name: '김포시'},
        {rnum: 9, code: '9', name: '남양주시'},
        {rnum: 10, code: '10', name: '동두천시'},
        {rnum: 11, code: '11', name: '부천시'},
        {rnum: 12, code: '12', name: '성남시'},
        {rnum: 13, code: '13', name: '수원시'},
        {rnum: 14, code: '14', name: '시흥시'},
        {rnum: 15, code: '15', name: '안산시'},
        {rnum: 16, code: '16', name: '안성시'},
        {rnum: 17, code: '17', name: '안양시'},
        {rnum: 18, code: '18', name: '양주시'},
        {rnum: 19, code: '19', name: '양평군'},
        {rnum: 20, code: '20', name: '여주시'},
        {rnum: 21, code: '21', name: '연천군'},
        {rnum: 22, code: '22', name: '오산시'},
        {rnum: 23, code: '23', name: '용인시'},
        {rnum: 24, code: '24', name: '의왕시'},
        {rnum: 25, code: '25', name: '의정부시'},
        {rnum: 26, code: '26', name: '이천시'},
        {rnum: 27, code: '27', name: '파주시'},
        {rnum: 28, code: '28', name: '평택시'},
        {rnum: 29, code: '29', name: '포천시'},
        {rnum: 30, code: '30', name: '하남시'},
        {rnum: 31, code: '31', name: '화성시'}
    ]

    const gangwon = [
        {rnum: 0, code: '', name: '전체'},
        {rnum: 1, code: '1', name: '강릉시'},
        {rnum: 2, code: '2', name: '고성군'},
        {rnum: 3, code: '3', name: '동해시'},
        {rnum: 4, code: '4', name: '삼척시'},
        {rnum: 5, code: '5', name: '속초시'},
        {rnum: 6, code: '6', name: '양구군'},
        {rnum: 7, code: '7', name: '양양군'},
        {rnum: 8, code: '8', name: '영월군'},
        {rnum: 9, code: '9', name: '원주시'},
        {rnum: 10, code: '10', name: '인제군'},
        {rnum: 11, code: '11', name: '정선군'},
        {rnum: 12, code: '12', name: '철원군'},
        {rnum: 13, code: '13', name: '춘천시'},
        {rnum: 14, code: '14', name: '태백시'},
        {rnum: 15, code: '15', name: '평창군'},
        {rnum: 16, code: '16', name: '홍천군'},
        {rnum: 17, code: '17', name: '화천군'},
        {rnum: 18, code: '18', name: '횡성군'}
    ]

    const chungcheongbuk = [
        {rnum: 0, code: '', name: '전체'},
        {rnum: 1, code: '1', name: '괴산군'},
        {rnum: 2, code: '2', name: '단양군'},
        {rnum: 3, code: '3', name: '보은군'},
        {rnum: 5, code: '5', name: '옥천군'},
        {rnum: 6, code: '6', name: '음성군'},
        {rnum: 7, code: '7', name: '제천시'},
        {rnum: 8, code: '8', name: '진천군'},
        {rnum: 9, code: '10', name: '청주시'},
        {rnum: 10, code: '11', name: '충주시'},
        {rnum: 11, code: '12', name: '증평군'}
    ]

    const chungcheongnam = [
        {rnum: 0, code: '', name: '전체'},
        {rnum: 1, code: '1', name: '공주시'},
        {rnum: 2, code: '2', name: '금산군'},
        {rnum: 3, code: '3', name: '논산시'},
        {rnum: 4, code: '4', name: '당진시'},
        {rnum: 5, code: '5', name: '보령시'},
        {rnum: 6, code: '6', name: '부여군'},
        {rnum: 7, code: '7', name: '서산시'},
        {rnum: 8, code: '8', name: '서천군'},
        {rnum: 9, code: '9', name: '아산시'},
        {rnum: 10, code: '11', name: '예산군'},
        {rnum: 11, code: '12', name: '천안시'},
        {rnum: 12, code: '13', name: '청양군'},
        {rnum: 13, code: '14', name: '태안군'},
        {rnum: 14, code: '15', name: '홍성군'},
        {rnum: 15, code: '16', name: '계룡시'}
    ]

    const gyeongsangbuk = [
        {rnum: 0, code: '', name: '전체'},
        {rnum: 1, code: '1', name: '경산시'},
        {rnum: 2, code: '2', name: '경주시'},
        {rnum: 3, code: '3', name: '고령군'},
        {rnum: 4, code: '4', name: '구미시'},
        {rnum: 5, code: '6', name: '김천시'},
        {rnum: 6, code: '7', name: '문경시'},
        {rnum: 7, code: '8', name: '봉화군'},
        {rnum: 8, code: '9', name: '상주시'},
        {rnum: 9, code: '10', name: '성주군'},
        {rnum: 10, code: '11', name: '안동시'},
        {rnum: 11, code: '12', name: '영덕군'},
        {rnum: 12, code: '13', name: '영양군'},
        {rnum: 13, code: '14', name: '영주시'},
        {rnum: 14, code: '15', name: '영천시'},
        {rnum: 15, code: '16', name: '예천군'},
        {rnum: 16, code: '17', name: '울릉군'},
        {rnum: 17, code: '18', name: '울진군'},
        {rnum: 18, code: '19', name: '의성군'},
        {rnum: 19, code: '20', name: '청도군'},
        {rnum: 20, code: '21', name: '청송군'},
        {rnum: 21, code: '22', name: '칠곡군'},
        {rnum: 22, code: '23', name: '포항시'}
    ]
    
    const gyeongsangnam = [
        {rnum: 0, code: '', name: '전체'},
        {rnum: 1, code: '1', name: '거제시'},
        {rnum: 2, code: '2', name: '거창군'},
        {rnum: 3, code: '3', name: '고성군'},
        {rnum: 4, code: '4', name: '김해시'},
        {rnum: 5, code: '5', name: '남해군'},
        {rnum: 6, code: '7', name: '밀양시'},
        {rnum: 7, code: '8', name: '사천시'},
        {rnum: 8, code: '9', name: '산청군'},
        {rnum: 9, code: '10', name: '양산시'},
        {rnum: 10, code: '12', name: '의령군'},
        {rnum: 11, code: '13', name: '진주시'},
        {rnum: 12, code: '15', name: '창녕군'},
        {rnum: 13, code: '16', name: '창원시'},
        {rnum: 14, code: '17', name: '통영시'},
        {rnum: 15, code: '18', name: '하동군'},
        {rnum: 16, code: '19', name: '함안군'},
        {rnum: 17, code: '20', name: '함양군'},
        {rnum: 18, code: '21', name: '합천군'}
    ]

    const jeollabuk = [
        {rnum: 0, code: '', name: '전체'},
        {rnum: 1, code: '1', name: '고창군'},
        {rnum: 2, code: '2', name: '군산시'},
        {rnum: 3, code: '3', name: '김제시'},
        {rnum: 4, code: '4', name: '남원시'},
        {rnum: 5, code: '5', name: '무주군'},
        {rnum: 6, code: '6', name: '부안군'},
        {rnum: 7, code: '7', name: '순창군'},
        {rnum: 8, code: '8', name: '완주군'},
        {rnum: 9, code: '9', name: '익산시'},
        {rnum: 10, code: '10', name: '임실군'},
        {rnum: 11, code: '11', name: '장수군'},
        {rnum: 12, code: '12', name: '전주시'},
        {rnum: 13, code: '13', name: '정읍시'},
        {rnum: 14, code: '14', name: '진안군'}
    ]

    const jeollanam = [
        {rnum: 0, code: '', name: '전체'},
        {rnum: 1, code: '1', name: '강진군'},
        {rnum: 2, code: '2', name: '고흥군'},
        {rnum: 3, code: '3', name: '곡성군'},
        {rnum: 4, code: '4', name: '광양시'},
        {rnum: 5, code: '5', name: '구례군'},
        {rnum: 6, code: '6', name: '나주시'},
        {rnum: 7, code: '7', name: '담양군'},
        {rnum: 8, code: '8', name: '목포시'},
        {rnum: 9, code: '9', name: '무안군'},
        {rnum: 10, code: '10', name: '보성군'},
        {rnum: 11, code: '11', name: '순천시'},
        {rnum: 12, code: '12', name: '신안군'},
        {rnum: 13, code: '13', name: '여수시'},
        {rnum: 14, code: '16', name: '영광군'},
        {rnum: 15, code: '17', name: '영암군'},
        {rnum: 16, code: '18', name: '완도군'},
        {rnum: 17, code: '19', name: '장성군'},
        {rnum: 18, code: '20', name: '장흥군'},
        {rnum: 19, code: '21', name: '진도군'},
        {rnum: 20, code: '22', name: '함평군'},
        {rnum: 21, code: '23', name: '해남군'},
        {rnum: 22, code: '24', name: '화순군'}
    ]

    const jeju = [
        {rnum: 0, code: '', name: '전체'},
        {rnum: 1, code: '3', name: '서귀포시'},
        {rnum: 2, code: '4', name: '제주시'}
    ]


    if(code === "1") return seoul
    if(code === "2") return incheon
    if(code === "3") return daejeon
    if(code === "4") return daegu
    if(code === "5") return gwangju
    if(code === "6") return busan
    if(code === "7") return ulsan
    if(code === "8") return sejong
    if(code === "31") return gyeonggi
    if(code === "32") return gangwon
    if(code === "33") return chungcheongbuk
    if(code === "34") return chungcheongnam
    if(code === "35") return gyeongsangbuk
    if(code === "36") return gyeongsangnam
    if(code === "37") return jeollabuk
    if(code === "38") return jeollanam
    if(code === "39") return jeju


}


export default DetailAreaInfo