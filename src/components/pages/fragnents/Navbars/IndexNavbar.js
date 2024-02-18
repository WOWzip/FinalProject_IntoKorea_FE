/*!

=========================================================
* Paper Kit React - v1.3.2
=========================================================

* Product Page: https://www.creative-tim.com/product/paper-kit-react

* Copyright 2023 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/paper-kit-react/blob/main/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
// nodejs library that concatenates strings
import classnames from "classnames";
// reactstrap components
import {
  Button,
  Collapse,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
} from "reactstrap";

import '../../../../styles/IndexNavbar.css';
import { Link } from "react-router-dom";


function IndexNavbar() {
  const [navbarColor, setNavbarColor] = React.useState("navbar-transparent");
  const [navbarCollapse, setNavbarCollapse] = React.useState(false);

  const email = sessionStorage.getItem("email");

  React.useEffect(() => {
    const updateNavbarColor = () => {
      if (
        document.documentElement.scrollTop > 299 ||
        document.body.scrollTop > 299
      ) {
        setNavbarColor("");
      } else if (
        document.documentElement.scrollTop < 300 ||
        document.body.scrollTop < 300
      ) {
        setNavbarColor("navbar-transparent");
      }
    };

    window.addEventListener("scroll", updateNavbarColor);

    return function cleanup() {
      window.removeEventListener("scroll", updateNavbarColor);
    };
  });
  return (
    <Navbar className={classnames("fixed-top", navbarColor)} expand="lg">
      <Container>

        <Link to="/">
          <img className="logo" src="/image/logo1.png"/>
        </Link>

        <Collapse
          className="justify-content-end"
          navbar
          isOpen={navbarCollapse}
        >
          <Nav navbar>
            <NavItem>
              <NavLink
                data-placement="bottom"
                href="/toursMain"
                // target="_blank" >> 새로운 창에서 열림
                title="여행지"
              >
              <p style={{fontSize: "15px"}}>
              여행지
              </p>
              </NavLink>
            </NavItem>

            <NavItem>
              <NavLink
                data-placement="bottom"
                href="/festival"
                title="행사/축제"
              >
              <p style={{fontSize: "15px"}}>
              행사/축제
              </p>
              </NavLink>
            </NavItem>

            {
              (email) ?
              <>
                <NavItem>
                  <Button
                    className="btn-round"
                    color="success"
                    href="/Mypage"
                  >
                    <i className="nc-icon nc-single-02" />
                    Mypage
                  </Button>
                </NavItem>

                <NavItem>
                  <Button
                    className="btn-round"
                    color="danger"
                    href="/Logout"
                  >
                  <i className="nc-icon nc-spaceship"></i>
                    로그아웃
                  </Button>
                </NavItem>
              </>
              :

              <>
                <NavItem>
                  <Button
                    className="btn-round"
                    color="info"
                    href="/LoginForm"
                  >
                    <i className="nc-icon nc-spaceship"></i>
                    로그인
                  </Button>
                </NavItem>
                <NavItem>
                  <Button
                    className="btn-round"
                    color="danger"
                    href="/JoinForm"
                  >
                    <i className="nc-icon nc-spaceship"></i> 회원가입
                  </Button>
                </NavItem>
              </>

            }

          </Nav>
        </Collapse>
      </Container>
    </Navbar>
  );
}

export default IndexNavbar;
