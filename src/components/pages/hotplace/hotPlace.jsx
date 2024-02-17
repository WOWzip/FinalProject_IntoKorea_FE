
// // npm install cheerio

// import axios from "axios"


// const HotPlace = () => {


    
//     const fetchData = async() => {
//         try {
//             const response = await axios.get(`/main/cr_main.do?type=place`)
//             const html = response.data;
            
//             const cheerio = require('cheerio');
//             const $ = cheerio.load(html); // Cheerio의 load 함수를 호출하여 $에 할당
            
            
//             const extractedData = [];
            
            
//             // const load = cheerio.load;
//             // const $ = load(html.data);

//             // const bodyList = $("div.list swiper-container hotlist")
//             // console.log($)
//             // const bodyList = $(".hot_travel")
//             // console.log(bodyList)
//             // bodyList.map((i, element) => {
//             //     ulList[i] = {
//             //         title: $(element).find("ul.swiper-container li.swiper-slide a strong").text().replace(/\s/g, ""),
//             //         area: $(element).find("ul.swiper-container li.swiper-slide a span.area").text().replace(/\s/g, "")
//             //         // title: $(element).find("ul.swiper-container li.swiper-slide a strong").text().replace(/\s/g, ""),
//             //         // area: $(element).find("ul.swiper-container li.swiper-slide a span.area").text().replace(/\s/g, "")
                    
                    
//             //     }
//             // })
//             // console.log("bodyList : " , ulList)

//             $('.hot_travel .swiper-slide').each((i, element) => {
//                 const title = $(element).find('strong').text().trim();
//                 const area = $(element).find('span.area').text().trim();
//                 extractedData.push({ title, area });
//             });

//             console.log("ulList:", extractedData);


//         } catch (error) {
//             console.log(error)
//         }
//     }

//     fetchData();

//     return null;

// }



// export default HotPlace

// npm install cheerio

import axios from "axios";

const HotPlace = () => {
    const fetchData = async () => {
        try {
            const response = await axios.get(`/main/cr_main.do?type=place`);
            console.log(response)
            const html = response.data;

            console.log(html)
            

            const cheerio = require('cheerio');
            const $ = cheerio.load(html); // Cheerio의 load 함수를 호출하여 $에 할당

            // 선택자 변경: .swiper-slide에서 .list.swiper-container.hotList로 변경
            const extractedData = [];

            $('.list.swiper-container.hotList .swiper-slide').each((i, element) => {
                console.log(element)
                const title = $(element).find('strong').text().trim();
                const area = $(element).find('span.area').text().trim();
                extractedData.push({ title, area });
            });

            console.log("Extracted data:", extractedData);
        } catch (error) {
            console.log(error);
        }
    };

    fetchData();

    return null;
};

export default HotPlace;