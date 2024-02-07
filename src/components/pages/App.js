import { Route, Routes } from "react-router-dom";
import Main from "./main";
import ToursListApi from "./tours/toursListApi";
import CheckData from "./tours/zcheckAndTest/checkData";
import TourDetailPageApi from "./tourDetailPage/tourDetailPageApi";

function App() {
  return (
    <Routes>
      <Route index element={<Main />}/>
      <Route path="/toursMain" element={<ToursListApi />}></Route>
      <Route path="/checkData" element={<CheckData />}></Route>
      <Route path="/tourDetail" element={<TourDetailPageApi/>}></Route>
    </Routes>
  );
}

export default App;
