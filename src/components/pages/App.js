import { Route, Routes } from "react-router-dom";
import Main from "./main";
import ToursListApi from "./tours/toursListApi";

function App() {
  return (
    <Routes>
      <Route index element={<Main />}/>
      <Route path="/toursMain" element={<ToursListApi />}></Route>
    </Routes>
  );
}

export default App;
