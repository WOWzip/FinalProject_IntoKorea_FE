
import Main from "./main";
import React from "react";
import IndexNavbar from "./fragnents/Navbars/IndexNavbar";
import IndexHeader from "./fragnents/Headers/IndexHeader";
import DemoFooter from "./fragnents/Footers/DemoFooter";
import styled from "styled-components";

const AppContainer = styled.div`
  position: relative;
`

function App() {
  document.documentElement.classList.remove("nav-open");
  React.useEffect(() => {
    document.body.classList.add("index");
    return function cleanup() {
      document.body.classList.remove("index");
    };
  });
  



  return (

    <AppContainer>
    {/* <IndexHeader /> */}
    <Main/>
    </AppContainer>

  );
}

export default App;
