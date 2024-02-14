// toursList.jsx

import IndexNavbar from "../fragnents/Navbars/IndexNavbar";
import ToursListApi from "./toursListApi";




const ToursList = () => {

    return (
        <>
        <IndexNavbar />
        <div className="toursListBox">
            <ToursListApi />
        </div>

        <style jsx>
            {
                `
                .toursListBox {
                    margin-top: 10em
                }

                `
            }
        </style>

        </>
    )

}


export default ToursList;