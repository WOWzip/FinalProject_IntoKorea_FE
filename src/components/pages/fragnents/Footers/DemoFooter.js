/*eslint-disable*/
import React from "react";
import styled from "styled-components";
// reactstrap components
import { Row, Container } from "reactstrap";

// Styled component for footer
const StyledFooter = styled.footer`
  background-color: #f6f6f6; 
`;
const StyledRow = styled(Row)`
  border-top: 1px solid #ccc;
  text-align: center; /* 가운데 정렬 */
`;

function DemoFooter() {
  return (
    <StyledFooter className="footer footer-black footer-white">
      <div style={{paddingLeft:"20%"}}>
        <p><img src="/image/footerlogo.png" alt="logo" style={{ maxWidth: '150px', marginTop: '10px' }}/></p>
        <p style={{ marginRight: "10px",fontWeight: "bold", color:"green",fontSize:"20px" }}>Into Korea</p>
        <p style={{ marginRight: "10px",fontSize:"15px"}}>주 소 :서울특별시 강남구 역삼동 736-7</p>
        <p style={{ marginRight: "10px",fontSize:"15px" }}>T E L : 02-538-0021</p>
        <p style={{ marginRight: "10px",fontSize:"15px" }}>사업자등록번호 : 000-00-00000</p>
        <br/>
        <span style={{ display: "flex", flexDirection: "row" }}>
        <p style={{ marginRight: "10px" }}><a href="/#" style={{ fontWeight: "bold", color:"black",fontSize:"20px"}}>개인정보처리방침</a></p>
        <p style={{ marginRight: "10px" }}><a href="/#" style={{ fontWeight: "bold", color:"black",fontSize:"20px" }}>이용약관</a></p>
        <p style={{ marginRight: "10px" }}><a href="/#" style={{ fontWeight: "bold", color:"black",fontSize:"20px" }}>저작권정책</a></p>
        <p style={{ marginRight: "10px" }}><a href="/#" style={{ fontWeight: "bold", color:"black",fontSize:"20px" }}>고객서비스헌장</a></p>
        <p style={{ marginRight: "10px" }}><a href="/#" style={{ fontWeight: "bold", color:"black",fontSize:"20px" }}>전자우편무단수집거부</a></p>
        <p style={{ marginRight: "10px" }}><a href="/#" style={{ fontWeight: "bold", color:"black",fontSize:"20px" }}> Q&A </a></p>
      </span>
      </div>
        <StyledRow>
          <nav className="footer-nav">
            <ul>
              <li>
              <span style={{ marginRight: "10px",fontSize:"15px"}}>
                © 2024, INTOKOREA. All Rights Reserved.
              </span>
              </li>
              <li>
                <a
                  href="https://api.visitkorea.or.kr/#/"
                  target="_blank"
                >
                  <img src="/image/tourapi.png" alt="Tour API" />
                </a>
              </li>
              <li>
                <a
                  href="https://knto.or.kr/index"
                  target="_blank"
                >
                  <img src="/image/knto.png" alt="knto" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.mcst.go.kr/kor/main.jsp"
                  target="_blank"
                >
                  <img src="/image/mcst.png" alt="mcst" />
                </a>
              </li>
            </ul>
          </nav>
          <div className="credits ml-auto">

          </div>
        </StyledRow>

    </StyledFooter>
  );
}

export default DemoFooter;
